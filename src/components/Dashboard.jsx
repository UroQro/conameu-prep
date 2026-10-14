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
    <div className="fade-in space-y-6 md:space-y-8">
      {/* Banner de Bienvenida y Cobertura del Banco de Preguntas */}
      <div className="bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900 p-6 md:p-8 rounded-3xl border border-slate-700 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-uroblue-600/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-uroblue-900/40 text-uroblue-400 text-xs font-bold px-3 py-1 rounded-full border border-uroblue-700/50 mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Preparación Oficial CONAMEU
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">Simulador Urológico de Alta Especialidad</h2>
            <p className="text-slate-400 mt-1 text-sm md:text-base">
              Banco estructurado por subdisciplinas y niveles de dificultad con motor adaptativo de debilidades.
            </p>
          </div>
          
          <div className="flex items-center gap-3 bg-slate-900/80 px-4 py-3 rounded-2xl border border-slate-700/80">
            <div className="text-right">
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Banco CONAMEU</p>
              <p className="text-xl md:text-2xl font-black text-white">{contestadas} <span className="text-slate-500 text-sm font-bold">/ {totalBanco}</span></p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-uroblue-600/20 border border-uroblue-500/30 flex items-center justify-center text-uroblue-400 font-black text-sm">
              {progresoPct}%
            </div>
          </div>
        </div>

        {/* Barra de progreso global del banco */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs md:text-sm font-bold">
            <span className="text-slate-300 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-uroblue-400" /> Cobertura Total del Banco de Preguntas
            </span>
            <span className="text-uroblue-400">{contestadas} contestadas ({progresoPct}%) • {pendientes} pendientes</span>
          </div>
          <div className="w-full bg-slate-900/90 rounded-full h-3.5 p-0.5 border border-slate-700/80">
            <div 
              className="bg-gradient-to-r from-uroblue-600 via-indigo-500 to-emerald-500 h-full rounded-full transition-all duration-1000 shadow-sm"
              style={{ width: `${Math.max(progresoPct, 2)}%` }}
            ></div>
          </div>
        </div>

        {/* Alerta inteligente de debilidad detectada */}
        {weakDiscs.length > 0 && (
          <div className="mt-6 p-4 rounded-2xl bg-amber-950/30 border border-amber-600/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-amber-300">
                  Área de Oportunidad Detectada: <span className="text-white underline">{DISCIPLINAS[weakDiscs[0]]?.nombre || weakDiscs[0]}</span>
                </p>
                <p className="text-xs text-amber-400/80">
                  Tu porcentaje de aciertos en esta subdisciplina requiere refuerzo antes del examen.
                </p>
              </div>
            </div>
            <button 
              onClick={() => {
                setSelectedMode('weakness');
                setSelectedDisc(weakDiscs[0]);
                setShowOptions(true);
              }}
              className="w-full sm:w-auto px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition-colors shadow flex items-center justify-center gap-1.5 shrink-0"
            >
              <Target className="w-4 h-4" /> Reforzar Debilidad
            </button>
          </div>
        )}
      </div>

      {/* Modal / Panel de Configuración de Simulador Personalizado */}
      {showOptions ? (
        <div className="bg-slate-800 p-6 md:p-8 rounded-3xl border-2 border-uroblue-500/50 shadow-2xl fade-in-up space-y-6">
          <div className="flex justify-between items-center border-b border-slate-700 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-uroblue-600 text-white flex items-center justify-center shadow-md">
                <Filter className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white">Configurar Simulador Personalizado</h3>
                <p className="text-xs md:text-sm text-slate-400">Selecciona modo, subdisciplina, dificultad y tamaño de tu examen.</p>
              </div>
            </div>
            <button onClick={() => setShowOptions(false)} className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-700 transition-colors">
              <X className="w-6 h-6"/>
            </button>
          </div>

          {/* 1. Selector de Modo */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
              1. Estrategia de Selección de Preguntas
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button 
                type="button"
                onClick={() => setSelectedMode('random')}
                className={`p-4 rounded-2xl border-2 text-left transition-all ${selectedMode === 'random' ? 'border-uroblue-500 bg-uroblue-950/40 text-white shadow-md' : 'border-slate-700 bg-slate-900/40 text-slate-400 hover:border-slate-600'}`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-sm text-white">🎲 100% Aleatorio</span>
                  {selectedMode === 'random' && <CheckCircle2 className="w-4 h-4 text-uroblue-400" />}
                </div>
                <p className="text-xs text-slate-400">Preguntas de todo el banco según los filtros.</p>
              </button>

              <button 
                type="button"
                onClick={() => setSelectedMode('new')}
                className={`p-4 rounded-2xl border-2 text-left transition-all ${selectedMode === 'new' ? 'border-emerald-500 bg-emerald-950/40 text-white shadow-md' : 'border-slate-700 bg-slate-900/40 text-slate-400 hover:border-slate-600'}`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-sm text-emerald-400">🆕 Solo No Contestadas</span>
                  {selectedMode === 'new' && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                </div>
                <p className="text-xs text-slate-400">Avanza en tu meta de cubrir todo el banco.</p>
              </button>

              <button 
                type="button"
                onClick={() => setSelectedMode('weakness')}
                className={`p-4 rounded-2xl border-2 text-left transition-all ${selectedMode === 'weakness' ? 'border-amber-500 bg-amber-950/40 text-white shadow-md' : 'border-slate-700 bg-slate-900/40 text-slate-400 hover:border-slate-600'}`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-sm text-amber-400">🎯 Por Debilidades</span>
                  {selectedMode === 'weakness' && <CheckCircle2 className="w-4 h-4 text-amber-400" />}
                </div>
                <p className="text-xs text-slate-400">Prioriza temas con menor puntaje histórico.</p>
              </button>
            </div>
          </div>

          {/* 2. Selector de Subdisciplina */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
              2. Subdisciplina de Urología
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              <button
                type="button"
                onClick={() => setSelectedDisc('todas')}
                className={`p-3 rounded-xl border text-xs font-bold transition-all text-left flex items-center justify-between ${selectedDisc === 'todas' ? 'border-uroblue-500 bg-uroblue-600 text-white' : 'border-slate-700 bg-slate-900/60 text-slate-300 hover:bg-slate-750'}`}
              >
                <span>🌐 Todas (Mixto)</span>
                <span className="text-[10px] opacity-75">{totalBanco}</span>
              </button>

              {LISTA_DISCIPLINAS.map(d => {
                const isSelected = selectedDisc === d.id;
                const dCount = stats?.discStats[d.id]?.totalEnBanco || 0;
                return (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setSelectedDisc(d.id)}
                    className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-left flex items-center justify-between truncate ${isSelected ? 'border-uroblue-400 bg-uroblue-950/70 text-white ring-1 ring-uroblue-400' : 'border-slate-700 bg-slate-900/40 text-slate-300 hover:border-slate-600'}`}
                  >
                    <span className="truncate pr-1">{d.shortName}</span>
                    <span className="text-[10px] text-slate-400 shrink-0">{dCount}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Selector de Dificultad y Cantidad */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                3. Nivel de Dificultad
              </label>
              <div className="grid grid-cols-4 gap-2">
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
                    className={`py-2.5 px-2 rounded-xl border text-xs font-bold transition-all text-center ${selectedDiff === diff.id ? 'border-uroblue-500 bg-uroblue-600 text-white shadow' : 'border-slate-700 bg-slate-900/40 text-slate-300 hover:bg-slate-700'}`}
                  >
                    {diff.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                4. Número de Preguntas
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[10, 25, 50, 100].map(n => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setSelectedCount(n)}
                    className={`py-2.5 px-2 rounded-xl border text-xs font-bold transition-all text-center ${selectedCount === n ? 'border-uroblue-500 bg-uroblue-600 text-white shadow' : 'border-slate-700 bg-slate-900/40 text-slate-300 hover:bg-slate-700'}`}
                  >
                    {n} Preguntas
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Botón de Lanzamiento */}
          <div className="flex justify-end gap-3 pt-4 border-t border-slate-700">
            <button 
              type="button" 
              onClick={() => setShowOptions(false)}
              className="px-6 py-3 rounded-xl text-slate-400 hover:text-white font-bold text-sm transition-colors"
            >
              Cancelar
            </button>
            <button 
              type="button" 
              onClick={startCustomSim}
              className="flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-uroblue-600 to-indigo-600 hover:from-uroblue-500 hover:to-indigo-500 text-white font-black rounded-xl shadow-lg transition-all"
            >
              Iniciar Simulación ({selectedCount} preguntas) <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      ) : (
        /* Tarjetas Principales de Módulos */
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* 1. Módulo Simulador */}
          <div className="group bg-slate-800 p-6 rounded-3xl border border-slate-700 hover:border-uroblue-500 shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-uroblue-600 text-white flex items-center justify-center mb-5 shadow-md group-hover:scale-105 transition-transform">
                <Waves className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-xl text-white mb-2">Simulador de Examen</h3>
              <p className="text-xs md:text-sm text-slate-400 font-medium leading-relaxed mb-4">
                Configura exámenes por disciplina, dificultad o genera simuladores adaptativos según tus debilidades.
              </p>
            </div>
            
            <div className="space-y-2 pt-2 border-t border-slate-700/60">
              <button 
                onClick={() => { setSelectedMode('random'); setSelectedDisc('todas'); setShowOptions(true); }}
                className="w-full flex items-center justify-between p-3 bg-uroblue-600 hover:bg-uroblue-500 text-white font-bold rounded-xl text-xs md:text-sm transition-colors shadow"
              >
                <span>Configurar Simulador</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => { setSelectedMode('new'); setSelectedDisc('todas'); setShowOptions(true); }}
                className="w-full flex items-center justify-between p-2.5 bg-slate-700/60 hover:bg-slate-700 text-slate-300 font-bold rounded-xl text-xs transition-colors"
              >
                <span>Solo No Contestadas ({pendientes})</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </button>
            </div>
          </div>

          {/* 2. Módulo Flashcards Estilo Anki */}
          <div className="group bg-slate-800 p-6 rounded-3xl border border-slate-700 hover:border-amber-500 shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center mb-5 shadow-md group-hover:scale-105 transition-transform">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-xl text-white mb-2">Flashcards Estilo Anki</h3>
              <p className="text-xs md:text-sm text-slate-400 font-medium leading-relaxed mb-4">
                Repetición espaciada inteligente con evaluación en 4 niveles (Otra vez, Difícil, Bien, Fácil) y filtrado por disciplina.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-700/60">
              <button 
                onClick={() => startQuickAnki('errors')}
                className="w-full flex items-center justify-between p-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs md:text-sm transition-colors shadow"
              >
                <span>Repasar Mis Errores</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => startQuickAnki('weakness')}
                className="w-full flex items-center justify-between p-2.5 bg-slate-700/60 hover:bg-slate-700 text-slate-300 font-bold rounded-xl text-xs transition-colors"
              >
                <span>Anki de Debilidades</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </button>
            </div>
          </div>

          {/* 3. Módulo Desempeño y Métricas */}
          <div className="group bg-slate-800 p-6 rounded-3xl border border-slate-700 hover:border-emerald-500 shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center mb-5 shadow-md group-hover:scale-105 transition-transform">
                <FlaskConical className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-xl text-white mb-2">Desempeño por Disciplina</h3>
              <p className="text-xs md:text-sm text-slate-400 font-medium leading-relaxed mb-4">
                Desglose analítico de aciertos, fallos y nivel de dominio en cada una de las 11 ramas de la urología.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-700/60">
              <button 
                onClick={() => setView('history')}
                className="w-full flex items-center justify-between p-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs md:text-sm transition-colors shadow"
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
      <div className="bg-slate-800 p-6 md:p-8 rounded-3xl border border-slate-700 shadow-md">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-6">
          <div>
            <h3 className="text-lg md:text-xl font-extrabold text-white">Subdisciplinas de la Urología</h3>
            <p className="text-xs md:text-sm text-slate-400">Banco clasificado por áreas troncales CONAMEU. Entrena cualquier disciplina individualmente.</p>
          </div>
          <span className="text-xs font-bold text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-700">
            11 Subdisciplinas Disponibles
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {LISTA_DISCIPLINAS.map(d => {
            const dData = stats?.discStats[d.id];
            const count = dData?.totalEnBanco || 0;
            const seen = dData?.contestadas || 0;
            const pctAciertos = dData?.porcentajeAciertos || 0;
            const estado = dData?.estado || 'sin_datos';

            return (
              <div 
                key={d.id} 
                className="p-4 rounded-2xl bg-slate-900/60 border border-slate-700/80 hover:border-slate-600 transition-all flex flex-col justify-between"
              >
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-sm text-white truncate pr-2">{d.nombre}</span>
                    {estado === 'fuerte' && (
                      <span className="text-[10px] font-black bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded border border-emerald-800">
                        {pctAciertos}% Dominio
                      </span>
                    )}
                    {estado === 'debilidad' && (
                      <span className="text-[10px] font-black bg-rose-950 text-rose-400 px-2 py-0.5 rounded border border-rose-800">
                        {pctAciertos}% Débil
                      </span>
                    )}
                    {estado === 'regular' && (
                      <span className="text-[10px] font-black bg-amber-950 text-amber-400 px-2 py-0.5 rounded border border-amber-800">
                        {pctAciertos}% Regular
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                    {d.descripcion}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-400">
                    {count} preguntas <span className="text-slate-600 font-normal">({seen} vistas)</span>
                  </span>
                  <div className="flex items-center gap-1.5">
                    <button 
                      onClick={() => startQuickAnki('discipline', d.id)}
                      title="Estudiar Flashcards Anki"
                      className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-amber-400 text-xs font-bold rounded-lg border border-slate-700 transition-colors"
                    >
                      Anki
                    </button>
                    <button 
                      onClick={() => startQuickDisciplineSim(d.id)}
                      title="Generar Simulador de esta subdisciplina"
                      className="px-2.5 py-1 bg-uroblue-600 hover:bg-uroblue-500 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1"
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