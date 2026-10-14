import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { 
  Check, X, ArrowRight, RotateCcw, AlertTriangle, 
  Brain, Award, ShieldAlert, Sparkles, ChevronLeft
} from 'lucide-react';
import { DISCIPLINAS, DIFICULTADES } from '../utils/disciplinas';
import { BANCO_PREGUNTAS, generarPreguntasSimulador, analizarHistorial } from '../utils/bancoService';

export default function Simulator({ setView, user, config, setAnkiConfig }) {
  const [preguntas, setPreguntas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAns, setSelectedAns] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [errores, setErrores] = useState([]);
  const [answeredIds, setAnsweredIds] = useState([]);
  const [saved, setSaved] = useState(false);
  const [exhausted, setExhausted] = useState(false);

  // Estadísticas por disciplina en esta sesión de examen
  const [sessionDiscStats, setSessionDiscStats] = useState({});

  useEffect(() => {
    const fetchAndPrepareQuestions = async () => {
      try {
        let seenIds = new Set();
        let weakDisciplines = config.weakDisciplines || [];

        // Si el modo es 'new' o 'weakness', obtener los exámenes previos del usuario
        if (config.mode === 'new' || config.mode === 'weakness' || weakDisciplines.length === 0) {
          const userExamsSnap = await getDocs(collection(db, "users", user.uid, "exams"));
          const examsList = [];
          userExamsSnap.forEach(doc => {
            const data = doc.data();
            examsList.push(data);
            if (data.answeredIds) data.answeredIds.forEach(id => seenIds.add(id));
          });

          if (config.mode === 'weakness' && weakDisciplines.length === 0) {
            const analysis = analizarHistorial(examsList, BANCO_PREGUNTAS);
            weakDisciplines = analysis.weakDisciplines;
          }
        }

        // Generar las preguntas con el motor de aleatorización y filtros
        const seleccion = generarPreguntasSimulador({
          disciplina: config.disciplina || 'todas',
          dificultad: config.dificultad || 'todas',
          modo: config.mode || 'random',
          cantidad: config.count || 30,
          seenIds: seenIds,
          weakDisciplines: weakDisciplines,
          customBank: BANCO_PREGUNTAS
        });

        if (seleccion.length === 0) {
          setExhausted(true);
          setLoading(false);
          return;
        }

        setPreguntas(seleccion);
        setLoading(false);
      } catch (error) {
        console.error("Error al preparar preguntas del simulador:", error);
        // Fallback local garantizado
        const fallback = generarPreguntasSimulador({
          disciplina: config.disciplina || 'todas',
          dificultad: config.dificultad || 'todas',
          modo: 'random',
          cantidad: config.count || 30,
          customBank: BANCO_PREGUNTAS
        });
        setPreguntas(fallback);
        setLoading(false);
      }
    };

    fetchAndPrepareQuestions();
  }, [config, user]);

  const handleAnswer = (key) => {
    if (isAnswered) return;
    setSelectedAns(key);
    setIsAnswered(true);
    
    const p = preguntas[currentIdx];
    setAnsweredIds(prev => [...prev, p.id]);
    
    const isCorrect = key === p.respuesta_correcta;
    const discKey = p.disciplina || 'uro_oncologia';

    // Actualizar conteo de aciertos por disciplina en este simulador
    setSessionDiscStats(prev => {
      const current = prev[discKey] || { total: 0, correct: 0, nombre: p.disciplinaNombre || DISCIPLINAS[discKey]?.nombre };
      return {
        ...prev,
        [discKey]: {
          ...current,
          total: current.total + 1,
          correct: current.correct + (isCorrect ? 1 : 0)
        }
      };
    });

    if (isCorrect) {
      setScore(s => s + 1);
    } else {
      setErrores(prev => [...prev, p]);
    }
  };

  const nextQuestion = async () => {
    if (currentIdx + 1 >= preguntas.length) {
      // Fin del simulador
      setCurrentIdx(i => i + 1);
      const calif = Math.round((score / preguntas.length) * 100);
      try {
        await addDoc(collection(db, "users", user.uid, "exams"), {
          score: calif,
          totalCorrect: score,
          totalQuestions: preguntas.length,
          errores: errores,
          answeredIds: answeredIds,
          config: {
            disciplina: config.disciplina || 'todas',
            dificultad: config.dificultad || 'todas',
            mode: config.mode || 'random'
          },
          disciplinaStats: sessionDiscStats,
          date: serverTimestamp()
        });
        setSaved(true);
      } catch (error) {
        console.error("Error guardando examen en Firestore:", error);
      }
    } else {
      setCurrentIdx(i => i + 1);
      setSelectedAns(null);
      setIsAnswered(false);
    }
  };

  const openAnkiFromErrors = () => {
    if (setAnkiConfig) {
      setAnkiConfig({
        mode: 'errors',
        customCards: errores
      });
    }
    setView('errors');
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-20 space-y-4">
        <div className="animate-spin h-12 w-12 border-4 border-uroblue-500 border-t-transparent rounded-full"></div>
        <p className="text-slate-400 font-bold text-sm">Aleatorizando banco urológico y cargando simulador...</p>
      </div>
    );
  }

  if (exhausted) {
    return (
      <div className="max-w-xl mx-auto text-center p-10 md:p-14 bg-slate-800 rounded-3xl border border-slate-700 shadow-xl mt-8">
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
          <Award className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-black text-white mb-3">¡Excelente progreso!</h2>
        <p className="text-slate-400 mb-6 text-sm leading-relaxed">
          Has contestado todas las preguntas disponibles con el filtro seleccionado ({config.disciplina !== 'todas' ? DISCIPLINAS[config.disciplina]?.nombre : 'todo el banco'}).
        </p>
        <div className="flex justify-center gap-3">
          <button 
            onClick={() => setView('dashboard')} 
            className="px-6 py-3 bg-uroblue-600 hover:bg-uroblue-500 text-white font-bold rounded-xl transition-colors text-sm shadow"
          >
            Volver al Menú
          </button>
        </div>
      </div>
    );
  }

  if (preguntas.length === 0) {
    return (
      <div className="text-center p-20 font-bold text-slate-400">
        No se encontraron preguntas con los filtros seleccionados.
        <button onClick={() => setView('dashboard')} className="block mx-auto mt-4 text-uroblue-400 underline">Volver</button>
      </div>
    );
  }

  // Pantalla de Resultados al terminar el simulador
  if (currentIdx >= preguntas.length) {
    const calif = Math.round((score / preguntas.length) * 100);
    const aprobado = calif >= 70;

    return (
      <div className="max-w-2xl mx-auto bg-slate-800 p-6 md:p-10 rounded-3xl shadow-2xl border border-slate-700 text-center mt-4 fade-in">
        <div className="inline-flex items-center gap-2 bg-slate-900 px-4 py-1.5 rounded-full text-xs font-bold text-slate-400 border border-slate-700 mb-4">
          <span>Modo: {config.mode === 'weakness' ? '🎯 Refuerzo de Debilidades' : config.mode === 'new' ? '🆕 No Contestadas' : '🎲 Aleatorio'}</span>
          {config.disciplina !== 'todas' && <span>• {DISCIPLINAS[config.disciplina]?.shortName}</span>}
        </div>

        <h2 className="text-2xl md:text-3xl font-black text-white mb-2">Simulación Finalizada</h2>
        
        {!saved && <p className="text-amber-400 font-bold mb-4 text-xs md:text-sm animate-pulse">Guardando resultados y actualizando tus métricas...</p>}
        {saved && <p className="text-emerald-400 font-bold mb-4 text-xs md:text-sm flex items-center justify-center gap-1.5"><Check className="w-4 h-4" /> Resultados guardados y métricas actualizadas</p>}
        
        {/* Gráfico circular de porcentaje */}
        <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-4 mt-2">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            <path className="text-slate-700" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            <path 
              className={aprobado ? 'text-emerald-500' : 'text-amber-500'} 
              strokeDasharray={`${calif}, 100`} 
              strokeWidth="3.2" 
              strokeLinecap="round" 
              stroke="currentColor" 
              fill="none" 
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="text-3xl md:text-4xl font-black text-white">{calif}%</div>
            <p className={`text-[11px] font-bold uppercase tracking-wider ${aprobado ? 'text-emerald-400' : 'text-amber-400'}`}>
              {aprobado ? 'Aprobado' : 'Por Mejorar'}
            </p>
          </div>
        </div>

        <p className="text-base md:text-lg font-bold text-slate-300 mb-6">
          Acertaste <span className="text-white font-black">{score}</span> de <span className="text-white font-black">{preguntas.length}</span> reactivos
        </p>

        {/* Desglose por subdisciplina en este simulador */}
        {Object.keys(sessionDiscStats).length > 0 && (
          <div className="bg-slate-900/70 p-4 md:p-5 rounded-2xl border border-slate-700/80 mb-6 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Rendimiento por Subdisciplina en este Examen:
            </h4>
            <div className="space-y-2">
              {Object.entries(sessionDiscStats).map(([dKey, dVal]) => {
                const discMeta = DISCIPLINAS[dKey] || { nombre: dVal.nombre, color: 'blue' };
                const pct = Math.round((dVal.correct / dVal.total) * 100);
                return (
                  <div key={dKey} className="flex items-center justify-between text-xs font-medium bg-slate-800/80 p-2 rounded-xl border border-slate-700/50">
                    <span className="text-slate-200 font-bold truncate pr-2">{discMeta.nombre || dVal.nombre}</span>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-slate-400">{dVal.correct}/{dVal.total} aciertos</span>
                      <span className={`font-black px-2 py-0.5 rounded text-[11px] ${pct >= 70 ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-amber-950 text-amber-400 border border-amber-800'}`}>
                        {pct}%
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Botones de Acción */}
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          {errores.length > 0 && (
            <button 
              onClick={openAnkiFromErrors}
              className="flex items-center justify-center gap-2 px-5 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl transition-colors shadow"
            >
              <Brain className="w-4 h-4" /> Estudiar {errores.length} errores en Anki
            </button>
          )}

          <button 
            onClick={() => window.location.reload()} 
            className="flex items-center justify-center gap-2 px-5 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-xl transition-colors"
          >
            <RotateCcw className="w-4 h-4" /> Repetir
          </button>

          <button 
            onClick={() => setView('dashboard')} 
            className="flex items-center justify-center gap-2 px-6 py-3 bg-uroblue-600 text-white font-bold rounded-xl shadow-md hover:bg-uroblue-500 transition-colors"
          >
            Ir al Menú <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  const p = preguntas[currentIdx];
  const isCorrect = selectedAns === p.respuesta_correcta;
  const discMeta = DISCIPLINAS[p.disciplina] || {
    nombre: p.disciplinaNombre || "Urología",
    badgeClass: "bg-uroblue-900/50 text-uroblue-300 border-uroblue-800/50"
  };
  const diffMeta = DIFICULTADES[p.dificultad] || {
    nombre: p.dificultadNombre || "Intermedia",
    badgeClass: "bg-amber-900/40 text-amber-300 border-amber-800/50"
  };

  return (
    <div className="max-w-3xl mx-auto fade-in pb-10">
      {/* Barra superior con Disciplina, Dificultad y Contador */}
      <div className="flex justify-between items-center mb-4 md:mb-6 bg-slate-800 px-4 md:px-6 py-3 md:py-4 rounded-2xl shadow-sm border border-slate-700">
        <div className="flex flex-wrap items-center gap-2">
          {/* Badge de Disciplina */}
          <span className={`text-xs md:text-sm font-bold px-3 py-1 rounded-lg border shadow-sm ${discMeta.badgeClass}`}>
            {discMeta.nombre}
          </span>
          {/* Badge de Dificultad */}
          <span className={`text-[11px] md:text-xs font-bold px-2.5 py-1 rounded-lg border ${diffMeta.badgeClass}`}>
            Nivel: {diffMeta.nombre}
          </span>
        </div>

        <div className="font-bold text-slate-400 text-xs md:text-sm shrink-0 pl-2">
          Reactivo <span className="text-white font-black">{currentIdx + 1}</span> de <span className="text-slate-300">{preguntas.length}</span>
        </div>
      </div>

      {/* Tarjeta de la Pregunta y Opciones */}
      <div className="bg-slate-800 p-5 md:p-8 rounded-3xl shadow-sm border border-slate-700 mb-4 md:mb-6">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
          {p.id}
        </div>
        <h2 className="text-lg md:text-xl font-bold text-white mb-6 leading-relaxed">
          {p.pregunta}
        </h2>

        <div className="space-y-3">
          {Object.entries(p.opciones).map(([key, val]) => {
            let btnClass = "w-full text-left p-3.5 md:p-4 rounded-2xl border-2 transition-all flex items-center gap-3 md:gap-4 group ";
            let icon = null;

            if (!isAnswered) {
              btnClass += "border-slate-700 bg-slate-750 hover:border-uroblue-500 hover:bg-slate-700 cursor-pointer text-slate-200 active:scale-[0.99]";
            } else {
              btnClass += "cursor-default ";
              if (key === p.respuesta_correcta) {
                btnClass += "border-emerald-500 bg-emerald-950/40 text-emerald-100 shadow-md";
                icon = <Check className="w-5 h-5 text-emerald-400 ml-auto shrink-0" />;
              } else if (key === selectedAns) {
                btnClass += "border-red-500 bg-red-950/40 text-red-100 shadow-md";
                icon = <X className="w-5 h-5 text-red-400 ml-auto shrink-0" />;
              } else {
                btnClass += "border-slate-700 bg-slate-800 opacity-40 text-slate-400";
              }
            }

            return (
              <button 
                key={key} 
                onClick={() => handleAnswer(key)} 
                disabled={isAnswered} 
                className={btnClass}
              >
                <span className={`w-7 h-7 md:w-8 md:h-8 rounded-xl flex items-center justify-center font-black shrink-0 text-xs md:text-sm ${
                  !isAnswered 
                    ? 'bg-slate-800 border border-slate-600 group-hover:border-uroblue-400 group-hover:text-uroblue-400 text-slate-300' 
                    : key === p.respuesta_correcta 
                      ? 'bg-emerald-600 text-white border-transparent' 
                      : key === selectedAns 
                        ? 'bg-red-600 text-white border-transparent' 
                        : 'bg-slate-700 border-slate-600 text-slate-400'
                }`}>
                  {key}
                </span>
                <span className="font-medium text-sm md:text-base leading-snug">
                  {val}
                </span>
                {icon}
              </button>
            );
          })}
        </div>
      </div>

      {/* Retroalimentación y Perla Médica */}
      {isAnswered && (
        <div className={`p-5 md:p-6 rounded-3xl mb-6 shadow-md border flex gap-3 md:gap-4 fade-in-up ${
          isCorrect 
            ? 'bg-emerald-950/30 border-emerald-800/60' 
            : 'bg-red-950/30 border-red-800/60'
        }`}>
          <div className="shrink-0 mt-0.5">
            {isCorrect ? (
              <div className="w-9 h-9 md:w-10 md:h-10 bg-emerald-500/20 border border-emerald-500/40 rounded-xl flex items-center justify-center">
                <Check className="text-emerald-400 w-5 h-5 md:w-6 md:h-6" />
              </div>
            ) : (
              <div className="w-9 h-9 md:w-10 md:h-10 bg-red-500/20 border border-red-500/40 rounded-xl flex items-center justify-center">
                <X className="text-red-400 w-5 h-5 md:w-6 md:h-6" />
              </div>
            )}
          </div>
          <div>
            <h4 className={`font-black text-base md:text-lg mb-1.5 ${isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
              {isCorrect ? '¡Respuesta Correcta!' : `Incorrecto. Opción correcta: ${p.respuesta_correcta}`}
            </h4>
            <p className="font-normal text-sm md:text-base text-slate-200 leading-relaxed">
              <span className="font-bold text-slate-300 block mb-1">Justificación CONAMEU:</span>
              {p.justificacion}
            </p>
          </div>
        </div>
      )}

      {/* Botones de Navegación del Simulador */}
      <div className="flex justify-between items-center fade-in pb-10 md:pb-0">
        <button
          onClick={() => {
            if (window.confirm("¿Seguro que deseas salir del simulador? Se guardará el progreso hasta esta pregunta.")) {
              setView('dashboard');
            }
          }}
          className="text-xs md:text-sm text-slate-400 hover:text-slate-200 font-bold px-3 py-2"
        >
          Abandonar Examen
        </button>

        {isAnswered && (
          <button 
            onClick={nextQuestion} 
            className="w-full md:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-uroblue-600 to-indigo-600 hover:from-uroblue-500 hover:to-indigo-500 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg transition-all"
          >
            {currentIdx + 1 === preguntas.length ? 'Finalizar Examen' : 'Siguiente Reactivo'} <ArrowRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}