import rawPreguntas from '../data/preguntas.json';
import { DISCIPLINAS } from './disciplinas';

// Banco base preclasificado
export const BANCO_PREGUNTAS = rawPreguntas;

/**
 * Filtra y aleatoriza preguntas según configuración del simulador
 */
export function generarPreguntasSimulador({
  disciplina = 'todas',
  dificultad = 'todas',
  modo = 'random', // 'random', 'new', 'weakness'
  cantidad = 30,
  seenIds = new Set(),
  weakDisciplines = [],
  customBank = BANCO_PREGUNTAS
}) {
  let pool = [...customBank];

  // 1. Filtrar por Disciplina si no es 'todas'
  if (disciplina && disciplina !== 'todas') {
    if (Array.isArray(disciplina)) {
      pool = pool.filter(q => disciplina.includes(q.disciplina));
    } else {
      pool = pool.filter(q => q.disciplina === disciplina);
    }
  }

  // 2. Filtrar por Dificultad si no es 'todas'
  if (dificultad && dificultad !== 'todas') {
    pool = pool.filter(q => q.dificultad === dificultad);
  }

  // 3. Filtrar según el modo
  if (modo === 'new') {
    // Solo preguntas nunca contestadas
    pool = pool.filter(q => !seenIds.has(q.id));
  } else if (modo === 'weakness' && weakDisciplines.length > 0) {
    // Modo debilidades: Priorizar preguntas de las disciplinas débiles
    const weakPool = pool.filter(q => weakDisciplines.includes(q.disciplina));
    const otherPool = pool.filter(q => !weakDisciplines.includes(q.disciplina));

    // Si hay suficientes en weakPool, tomar 75% de débiles y 25% del resto para balance
    const targetWeakCount = Math.min(Math.ceil(cantidad * 0.75), weakPool.length);
    const targetOtherCount = cantidad - targetWeakCount;

    const shuffledWeak = [...weakPool].sort(() => 0.5 - Math.random()).slice(0, targetWeakCount);
    const shuffledOther = [...otherPool].sort(() => 0.5 - Math.random()).slice(0, targetOtherCount);

    const combined = [...shuffledWeak, ...shuffledOther].sort(() => 0.5 - Math.random());
    return combined.slice(0, cantidad);
  }

  // 4. Aleatorizar y cortar
  const shuffled = pool.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, cantidad);
}

/**
 * Analiza el historial completo de exámenes y genera métricas por subdisciplina y dificultad
 */
export function analizarHistorial(examenes = [], customBank = BANCO_PREGUNTAS) {
  const totalBanco = customBank.length;
  const seenIds = new Set();
  const correctIds = new Set();
  const mistakeIds = new Set();
  const mistakeFreq = {}; // id -> count
  let sumaScores = 0;

  // Mapa rápido de ID a pregunta para enriquecer exámenes antiguos
  const bancoMap = new Map();
  customBank.forEach(q => bancoMap.set(q.id, q));

  // Inicializar acumuladores por disciplina
  const discStats = {};
  Object.keys(DISCIPLINAS).forEach(discKey => {
    discStats[discKey] = {
      id: discKey,
      nombre: DISCIPLINAS[discKey].nombre,
      shortName: DISCIPLINAS[discKey].shortName,
      color: DISCIPLINAS[discKey].color,
      badgeClass: DISCIPLINAS[discKey].badgeClass,
      totalEnBanco: 0,
      contestadas: 0,
      aciertos: 0,
      fallos: 0,
      porcentajeAciertos: 0,
      coberturaBanco: 0,
      estado: 'sin_datos' // 'fuerte', 'regular', 'debilidad', 'sin_datos'
    };
  });

  // Contar preguntas totales en banco por disciplina
  customBank.forEach(q => {
    if (discStats[q.disciplina]) {
      discStats[q.disciplina].totalEnBanco += 1;
    }
  });

  // Inicializar acumuladores por dificultad
  const diffStats = {
    facil: { nombre: 'Básica', totalEnBanco: 0, contestadas: 0, aciertos: 0, fallos: 0, porcentaje: 0 },
    intermedia: { nombre: 'Intermedia', totalEnBanco: 0, contestadas: 0, aciertos: 0, fallos: 0, porcentaje: 0 },
    dificil: { nombre: 'Avanzada', totalEnBanco: 0, contestadas: 0, aciertos: 0, fallos: 0, porcentaje: 0 }
  };

  customBank.forEach(q => {
    if (diffStats[q.dificultad]) diffStats[q.dificultad].totalEnBanco += 1;
  });

  const discSeenMap = {};
  Object.keys(DISCIPLINAS).forEach(k => { discSeenMap[k] = new Set(); });

  // Procesar exámenes realizados
  examenes.forEach(exam => {
    sumaScores += (exam.score || 0);

    // Answered IDs
    if (Array.isArray(exam.answeredIds)) {
      exam.answeredIds.forEach(id => {
        seenIds.add(id);
        const q = bancoMap.get(id);
        if (q && discSeenMap[q.disciplina]) {
          discSeenMap[q.disciplina].add(id);
        }
      });
    }

    // Errores
    const errList = exam.errores || [];
    const errIdSet = new Set();

    errList.forEach(errItem => {
      const errId = errItem.id;
      if (errId) {
        errIdSet.add(errId);
        mistakeIds.add(errId);
        mistakeFreq[errId] = (mistakeFreq[errId] || 0) + 1;
      }

      // Enriquecer con disciplina y dificultad
      const q = bancoMap.get(errId) || errItem;
      const dKey = q.disciplina || 'uro_oncologia';
      const diffKey = q.dificultad || 'intermedia';

      if (discStats[dKey]) discStats[dKey].fallos += 1;
      if (diffStats[diffKey]) diffStats[diffKey].fallos += 1;
    });

    // Aciertos en este examen
    if (Array.isArray(exam.answeredIds)) {
      exam.answeredIds.forEach(id => {
        if (!errIdSet.has(id)) {
          correctIds.add(id);
          const q = bancoMap.get(id);
          if (q) {
            const dKey = q.disciplina || 'uro_oncologia';
            const diffKey = q.dificultad || 'intermedia';
            if (discStats[dKey]) discStats[dKey].aciertos += 1;
            if (diffStats[diffKey]) diffStats[diffKey].aciertos += 1;
          }
        }
      });
    }
  });

  // Calcular porcentajes y clasificar debilidades/fortalezas
  const weakDisciplines = [];
  const strongDisciplines = [];

  Object.keys(discStats).forEach(dKey => {
    const item = discStats[dKey];
    item.contestadas = discSeenMap[dKey] ? discSeenMap[dKey].size : 0;
    item.coberturaBanco = item.totalEnBanco > 0 ? Math.round((item.contestadas / item.totalEnBanco) * 100) : 0;

    const totalIntentos = item.aciertos + item.fallos;
    if (totalIntentos > 0) {
      item.porcentajeAciertos = Math.round((item.aciertos / totalIntentos) * 100);
      if (item.porcentajeAciertos >= 80) {
        item.estado = 'fuerte';
        strongDisciplines.push(dKey);
      } else if (item.porcentajeAciertos >= 60) {
        item.estado = 'regular';
      } else {
        item.estado = 'debilidad';
        weakDisciplines.push(dKey);
      }
    } else {
      item.estado = 'sin_datos';
    }
  });

  // Calcular porcentajes por dificultad
  Object.keys(diffStats).forEach(diffKey => {
    const item = diffStats[diffKey];
    const total = item.aciertos + item.fallos;
    item.porcentaje = total > 0 ? Math.round((item.aciertos / total) * 100) : 0;
    item.contestadas = total;
  });

  const promedioGlobal = examenes.length > 0 ? Math.round(sumaScores / examenes.length) : 0;
  const bankProgress = totalBanco > 0 ? Math.round((seenIds.size / totalBanco) * 100) : 0;

  // Ordenar debilidades por menor porcentaje de aciertos
  const sortedWeakDisciplines = [...weakDisciplines].sort((a, b) => {
    return discStats[a].porcentajeAciertos - discStats[b].porcentajeAciertos;
  });

  return {
    totalBanco,
    preguntasContestadas: seenIds.size,
    preguntasPendientes: Math.max(0, totalBanco - seenIds.size),
    bankProgress,
    promedioGlobal,
    totalSimuladores: examenes.length,
    discStats,
    diffStats,
    seenIds,
    mistakeIds,
    mistakeFreq,
    weakDisciplines: sortedWeakDisciplines,
    strongDisciplines
  };
}
