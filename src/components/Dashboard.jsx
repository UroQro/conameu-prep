import React, { useState, useEffect } from 'react';
import { 
  Waves, RotateCcw, FlaskConical, X, Sparkles, AlertTriangle, 
  CheckCircle2, Target, Brain, ArrowRight, BookOpen, Layers,
  ChevronRight, Award, Flame, Filter
} from 'lucide-react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { DISCIPLINAS, LISTA_DISCIPLINAS, DIFICULTADES } from '../utils/disciplinas';
import { BANCO_PREGUNTAS, analizarHistorial } from '../utils/bancoService';

export default function Dashboard({ setView, setSimConfig, setAnkiConfig, user }) {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedMode, setSelectedMode] = useState('random'); // 'random', 'new', 'weakness'
  const [selectedDisc, setSelectedDisc] = useState('todas');
  const [selectedDiff, setSelectedDiff] = useState('todas');
  const [selectedCount, setSelectedCount] = useState(30);
  const [stats, setStats] = useState(null);
  const [loadingStats, setLoadingStats] = useState(true);

  useEffect(() => {
    const fetchUserStats = async () => {
      try {
        if (!user) return;
        const examsSnap = await getDocs(collection(db, "users", user.uid, "exams"));
        const examsList = [];
        examsSnap.forEach(doc => examsList.push(doc.data()));
        const calculated = analizarHistorial(examsList, BANCO_PREGUNTAS);
        setStats(calculated);
      } catch (err) {
        console.error("Error loading user dashboard stats:", err);
      } finally {
        setLoadingStats(false);
      }
    };
    fetchUserStats();
  }, [user]);

  const startCustomSim = () => {
    setSimConfig({
      count: selectedCount,
      mode: selectedMode,
      disciplina: selectedDisc,
      dificultad: selectedDiff,
      weakDisciplines: stats?.weakDisciplines || []
    });
    setShowOptions(false);
    setView('sim');
  };

  const startQuickDisciplineSim = (discKey) => {
    setSimConfig({
      count: 25,
      mode: 'random',
      disciplina: discKey,
      dificultad: 'todas',
      weakDisciplines: []
    });
    setView('sim');
  };

  const startQuickAnki = (mode = 'errors', disciplina = 'todas') => {
    if (setAnkiConfig) {
      setAnkiConfig({ mode, disciplina, weakDisciplines: stats?.weakDisciplines || [] });
    }
    setView('errors');
  };

  const totalBanco = BANCO_PREGUNTAS.length;
  const contestadas = stats ? stats.preguntasContestadas : 0;
  const progresoPct = stats ? stats.bankProgress : 0;
  const pendientes = totalBanco - contestadas;
  const weakDiscs = stats?.weakDisciplines || [];

  return (
    <div className="fade-in space-y-4 sm:space-y-6 md:space-y-8">
      {/* Banner de Bienvenida y Cobertura del Banco de Preguntas */}
      <div className="bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900 p-4 sm:p-6 md:p-8 rounded-3xl border border-slate-700 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-uroblue-600/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-uroblue-900/40 text-uroblue-400 text-[11px] font-bold px-3 py-1 rounded-full border border-uroblue-700/50 mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Preparación para el Consejo
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
              Simulador Urológico de Alta Especialidad
            </h2>
            <p className="text-slate-400 mt-1 text-xs sm:text-sm md:text-base leading-relaxed">
              Banco estructurado por subdisciplinas y niveles de dificultad con motor de debilidades.
            </p>
          </div>
          
          {/* Contador de Banco */}
          <div className="flex items-center gap-3 bg-slate-900/80 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl border border-slate-700/80 shrink-0 self-stretch sm:self-auto justify-between sm:justify-start">
            <div>
              <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Banco de Estudio</p>
              <p className="text-lg sm:text-xl font-black text-white">
                {contestadas} <span className="text-slate-500 text-xs font-bold">/ {totalBanco}</span>
              </p>
            </div>
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-uroblue-600/20 border border-uroblue-500/30 flex items-center justify-center text-uroblue-400 font-black text-xs sm:text-sm">
              {progresoPct}%
            </div>
          </div>
        </div>

        {/* Barra de progreso global del banco */}
        <div className="space-y-1.5 sm:space-y-2">
          <div className="flex justify-between text-xs font-bold text-slate-300">
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-uroblue-400" /> Cobertura del Banco
            </span>
            <span className="text-uroblue-400 font-semibold text-[11px] sm:text-xs">
              {contestadas} contestadas ({progresoPct}%) • {pendientes} pendientes
            </span>
          </div>
          <div className="w-full bg-slate-900/90 rounded-full h-3 p-0.5 border border-slate-700/80">
            <div 
              className="bg-gradient-to-r from-uroblue-600 via-indigo-500 to-emerald-500 h-full rounded-full transition-all duration-1000 shadow-sm"
              style={{ width: `${Math.max(progresoPct, 2)}%` }}
            ></div>
          </div>
        </div>

        {/* Alerta inteligente de debilidad detectada */}
        {weakDiscs.length > 0 && (
          <div className="mt-4 sm:mt-6 p-3.5 sm:p-4 rounded-2xl bg-amber-950/30 border border-amber-600/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-start sm:items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-amber-300">
                  Área por Reforzar: <span className="text-white underline">{DISCIPLINAS[weakDiscs[0]]?.nombre || weakDiscs[0]}</span>
                </p>
                <p className="text-[11px] text-amber-400/80">
                  Tu porcentaje de aciertos en este tema requiere refuerzo antes del examen.
                </p>
              </div>
            </div>
            <button 
              onClick={() => {
                setSelectedMode('weakness');
                setSelectedDisc(weakDiscs[0]);
                setShowOptions(true);
              }}
              className="w-full sm:w-auto px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition-all shadow flex items-center justify-center gap-1.5 shrink-0 active:scale-95"
            >
              <Target className="w-3.5 h-3.5" /> Reforzar Debilidad
            </button>
          </div>
        )}
      </div>

      {/* Modal / Panel de Configuración de Simulador Personalizado */}
      {showOptions ? (
        <div className="bg-slate-800 p-4 sm:p-6 md:p-8 rounded-3xl border-2 border-uroblue-500/50 shadow-2xl fade-in-up space-y-5 max-h-[85vh] overflow-y-auto custom-scrollbar">
          <div className="flex justify-between items-center border-b border-slate-700 pb-3 sticky -top-4 bg-slate-800 pt-1 z-10">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-uroblue-600 text-white flex items-center justify-center shadow-md">
                <Filter className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight">Configurar Simulador</h3>
                <p className="text-[11px] sm:text-xs text-slate-400">Personaliza disciplina, dificultad y cantidad.</p>
              </div>
            </div>
            <button 
              onClick={() => setShowOptions(false)} 
              className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5"/>
            </button>
          </div>

          {/* 1. Selector de Modo */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
              1. Estrategia de Selección
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <button 
                type="button"
                onClick={() => setSelectedMode('random')}
                className={`p-3.5 rounded-2xl border-2 text-left transition-all active:scale-[0.98] ${selectedMode === 'random' ? 'border-uroblue-500 bg-uroblue-950/40 text-white shadow' : 'border-slate-700 bg-slate-900/40 text-slate-400 hover:border-slate-600'}`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-xs sm:text-sm text-white">🎲 100% Aleatorio</span>
                  {selectedMode === 'random' && <CheckCircle2 className="w-4 h-4 text-uroblue-400" />}
                </div>
                <p className="text-[11px] text-slate-400">Preguntas de todo el banco según filtros.</p>
              </button>

              <button 
                type="button"
                onClick={() => setSelectedMode('new')}
                className={`p-3.5 rounded-2xl border-2 text-left transition-all active:scale-[0.98] ${selectedMode === 'new' ? 'border-emerald-500 bg-emerald-950/40 text-white shadow' : 'border-slate-700 bg-slate-900/40 text-slate-400 hover:border-slate-600'}`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-xs sm:text-sm text-emerald-400">🆕 Solo No Contestadas</span>
                  {selectedMode === 'new' && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                </div>
                <p className="text-[11px] text-slate-400">Avanza en cubrir todo el banco.</p>
              </button>

              <button 
                type="button"
                onClick={() => setSelectedMode('weakness')}
                className={`p-3.5 rounded-2xl border-2 text-left transition-all active:scale-[0.98] ${selectedMode === 'weakness' ? 'border-amber-500 bg-amber-950/40 text-white shadow' : 'border-slate-700 bg-slate-900/40 text-slate-400 hover:border-slate-600'}`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-xs sm:text-sm text-amber-400">🎯 Por Debilidades</span>
                  {selectedMode === 'weakness' && <CheckCircle2 className="w-4 h-4 text-amber-400" />}
                </div>
                <p className="text-[11px] text-slate-400">Prioriza temas con menor puntaje.</p>
              </button>
            </div>
          </div>

          {/* 2. Selector de Subdisciplina */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
              2. Subdisciplina de Urología
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              <button
                type="button"
                onClick={() => setSelectedDisc('todas')}
                className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-left flex items-center justify-between active:scale-[0.98] ${selectedDisc === 'todas' ? 'border-uroblue-500 bg-uroblue-600 text-white shadow' : 'border-slate-700 bg-slate-900/60 text-slate-300 hover:bg-slate-750'}`}
              >
                <span className="truncate">🌐 Todas (Mixto)</span>
                <span className="text-[10px] opacity-75 shrink-0 ml-1">{totalBanco}</span>
              </button>

              {LISTA_DISCIPLINAS.map(d => {
                const isSelected = selectedDisc === d.id;
                const dCount = stats?.discStats[d.id]?.totalEnBanco || 0;
                return (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setSelectedDisc(d.id)}
                    className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-left flex items-center justify-between truncate active:scale-[0.98] ${isSelected ? 'border-uroblue-400 bg-uroblue-950/80 text-white ring-1 ring-uroblue-400 shadow' : 'border-slate-700 bg-slate-900/40 text-slate-300 hover:border-slate-600'}`}
                  >
                    <span className="truncate pr-1">{d.shortName}</span>
                    <span className="text-[10px] text-slate-400 shrink-0">{dCount}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Selector de Dificultad y Cantidad */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                3. Nivel de Dificultad
              </label>
              <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                {[
                  { id: 'todas', label: 'Cualquiera' },
                  { id: 'facil', label: 'Básica' },
                  { id: 'intermedia', label: 'Intermedia' },
                  { id: 'dificil', label: 'Avanzada' }
                ].map(diff => (
                  <button
                    key={diff.id}
                    type="button"
                    onClick={() => setSelectedDiff(diff.id)}
                    className={`py-2 px-1.5 rounded-xl border text-xs font-bold transition-all text-center active:scale-95 ${selectedDiff === diff.id ? 'border-uroblue-500 bg-uroblue-600 text-white shadow' : 'border-slate-700 bg-slate-900/40 text-slate-300 hover:bg-slate-700'}`}
                  >
                    {diff.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                4. Número de Preguntas
              </label>
              <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                {[10, 25, 50, 100].map(n => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setSelectedCount(n)}
                    className={`py-2 px-1.5 rounded-xl border text-xs font-bold transition-all text-center active:scale-95 ${selectedCount === n ? 'border-uroblue-500 bg-uroblue-600 text-white shadow' : 'border-slate-700 bg-slate-900/40 text-slate-300 hover:bg-slate-700'}`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Botón de Lanzamiento */}
          <div className="flex flex-col-reverse sm:flex-row justify-end gap-2.5 pt-3 border-t border-slate-700 sticky -bottom-4 bg-slate-800 pb-1 z-10">
            <button 
              type="button" 
              onClick={() => setShowOptions(false)}
              className="w-full sm:w-auto px-5 py-3 rounded-xl text-slate-400 hover:text-white font-bold text-xs sm:text-sm transition-colors text-center"
            >
              Cancelar
            </button>
            <button 
              type="button" 
              onClick={startCustomSim}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-uroblue-600 to-indigo-600 hover:from-uroblue-500 hover:to-indigo-500 text-white font-black rounded-xl shadow-lg transition-all active:scale-[0.98] text-sm"
            >
              Iniciar Simulación ({selectedCount} preguntas) <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* Tarjetas Principales de Módulos (3 columnas en desktop, 1 en móvil) */
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {/* 1. Módulo Simulador */}
          <div className="bg-slate-800 p-4 sm:p-5 md:p-6 rounded-3xl border border-slate-700 hover:border-uroblue-500 shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-uroblue-600 text-white flex items-center justify-center mb-3 sm:mb-4 shadow-md">
                <Waves className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-black text-lg sm:text-xl text-white mb-1.5">Simulador de Examen</h3>
              <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed mb-4">
                Configura exámenes por disciplina, dificultad o genera simuladores adaptativos según tus debilidades.
              </p>
            </div>
            
            <div className="space-y-2 pt-2 border-t border-slate-700/60">
              <button 
                onClick={() => { setSelectedMode('random'); setSelectedDisc('todas'); setShowOptions(true); }}
                className="w-full flex items-center justify-between p-3 bg-uroblue-600 hover:bg-uroblue-500 text-white font-bold rounded-xl text-xs sm:text-sm transition-all shadow active:scale-[0.98]"
              >
                <span>Configurar Simulador</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => { setSelectedMode('new'); setSelectedDisc('todas'); setShowOptions(true); }}
                className="w-full flex items-center justify-between p-2.5 bg-slate-750 hover:bg-slate-700 text-slate-300 font-bold rounded-xl text-xs transition-colors active:scale-[0.98]"
              >
                <span>Solo No Contestadas ({pendientes})</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </button>
            </div>
          </div>

          {/* 2. Módulo Flashcards Estilo Anki */}
          <div className="bg-slate-800 p-4 sm:p-5 md:p-6 rounded-3xl border border-slate-700 hover:border-amber-500 shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center mb-3 sm:mb-4 shadow-md">
                <Brain className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-black text-lg sm:text-xl text-white mb-1.5">Flashcards Estilo Anki</h3>
              <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed mb-4">
                Repetición espaciada inteligente con evaluación en 4 niveles (Otra vez, Difícil, Bien, Fácil) y filtrado por disciplina.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-700/60">
              <button 
                onClick={() => startQuickAnki('errors')}
                className="w-full flex items-center justify-between p-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs sm:text-sm transition-all shadow active:scale-[0.98]"
              >
                <span>Repasar Mis Errores</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => startQuickAnki('weakness')}
                className="w-full flex items-center justify-between p-2.5 bg-slate-750 hover:bg-slate-700 text-slate-300 font-bold rounded-xl text-xs transition-colors active:scale-[0.98]"
              >
                <span>Anki de Debilidades</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </button>
            </div>
          </div>

          {/* 3. Módulo Desempeño y Métricas */}
          <div className="bg-slate-800 p-4 sm:p-5 md:p-6 rounded-3xl border border-slate-700 hover:border-emerald-500 shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center mb-3 sm:mb-4 shadow-md">
                <FlaskConical className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-black text-lg sm:text-xl text-white mb-1.5">Desempeño por Disciplina</h3>
              <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed mb-4">
                Desglose analítico de aciertos, fallos y nivel de dominio en cada una de las 11 ramas urológicas.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-700/60">
              <button 
                onClick={() => setView('history')}
                className="w-full flex items-center justify-between p-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs sm:text-sm transition-all shadow active:scale-[0.98]"
              >
                <span>Ver Análisis Completo</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <div className="p-2.5 bg-slate-900/50 rounded-xl text-xs flex justify-between text-slate-400 font-semibold">
                <span>Promedio General:</span>
                <span className="font-black text-white">{stats?.promedioGlobal ? `${stats.promedioGlobal}%` : '--'}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Matriz Visual de Subdisciplinas de Urología */}
      <div className="bg-slate-800 p-4 sm:p-6 md:p-8 rounded-3xl border border-slate-700 shadow-md">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6">
          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-black text-white">Subdisciplinas de la Urología</h3>
            <p className="text-xs text-slate-400">Banco clasificado por áreas troncales. Entrena cualquier disciplina individualmente.</p>
          </div>
          <span className="text-[11px] font-bold text-slate-400 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-700 shrink-0">
            11 Subdisciplinas
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3 md:gap-4">
          {LISTA_DISCIPLINAS.map(d => {
            const dData = stats?.discStats[d.id];
            const count = dData?.totalEnBanco || 0;
            const seen = dData?.contestadas || 0;
            const pctAciertos = dData?.porcentajeAciertos || 0;
            const estado = dData?.estado || 'sin_datos';

            return (
              <div 
                key={d.id} 
                className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/60 border border-slate-700/80 hover:border-slate-600 transition-all flex flex-col justify-between gap-2.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-xs sm:text-sm text-white truncate pr-2">{d.nombre}</span>
                    {estado === 'fuerte' && (
                      <span className="text-[10px] font-black bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded border border-emerald-800 shrink-0">
                        {pctAciertos}% Dominio
                      </span>
                    )}
                    {estado === 'debilidad' && (
                      <span className="text-[10px] font-black bg-rose-950 text-rose-400 px-2 py-0.5 rounded border border-rose-800 shrink-0">
                        {pctAciertos}% Débil
                      </span>
                    )}
                    {estado === 'regular' && (
                      <span className="text-[10px] font-black bg-amber-950 text-amber-400 px-2 py-0.5 rounded border border-amber-800 shrink-0">
                        {pctAciertos}% Regular
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                    {d.descripcion}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-400">
                    {count} preguntas <span className="text-slate-600 font-normal">({seen} vistas)</span>
                  </span>
                  <div className="flex items-center gap-1.5">
                    <button 
                      onClick={() => startQuickAnki('discipline', d.id)}
                      title="Estudiar Flashcards Anki"
                      className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-amber-400 text-xs font-bold rounded-lg border border-slate-700 transition-colors active:scale-95"
                    >
                      Anki
                    </button>
                    <button 
                      onClick={() => startQuickDisciplineSim(d.id)}
                      title="Generar Simulador de esta subdisciplina"
                      className="px-3 py-1 bg-uroblue-600 hover:bg-uroblue-500 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1 shadow active:scale-95"
                    >
                      Simular
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}