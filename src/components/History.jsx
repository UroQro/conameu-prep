import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { 
  ArrowLeft, Droplets, FlaskConical, Target, AlertTriangle, 
  CheckCircle2, Sparkles, BookOpen, Brain, ChevronRight, BarChart3,
  Award, TrendingUp, Layers
} from 'lucide-react';
import { DISCIPLINAS, LISTA_DISCIPLINAS, DIFICULTADES } from '../utils/disciplinas';
import { BANCO_PREGUNTAS, analizarHistorial } from '../utils/bancoService';

export default function History({ setView, user, setSimConfig, setAnkiConfig }) {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [analysis, setAnalysis] = useState(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const q = query(collection(db, "users", user.uid, "exams"), orderBy("date", "desc"));
        const querySnapshot = await getDocs(q);
        
        const fetchedExams = [];
        querySnapshot.forEach((doc) => {
          fetchedExams.push(doc.data());
        });

        setExams(fetchedExams);
        const result = analizarHistorial(fetchedExams, BANCO_PREGUNTAS);
        setAnalysis(result);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar historial y métricas:", error);
        setLoading(false);
      }
    };
    fetchHistory();
  }, [user]);

  const startWeaknessSim = () => {
    if (setSimConfig) {
      setSimConfig({
        count: 30,
        mode: 'weakness',
        disciplina: 'todas',
        dificultad: 'todas',
        weakDisciplines: analysis?.weakDisciplines || []
      });
    }
    setView('sim');
  };

  const startDisciplineSim = (discKey) => {
    if (setSimConfig) {
      setSimConfig({
        count: 25,
        mode: 'random',
        disciplina: discKey,
        dificultad: 'todas',
        weakDisciplines: []
      });
    }
    setView('sim');
  };

  const startDisciplineAnki = (discKey) => {
    if (setAnkiConfig) {
      setAnkiConfig({
        mode: 'discipline',
        disciplina: discKey
      });
    }
    setView('errors');
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-20 space-y-4">
        <div className="animate-spin h-12 w-12 border-4 border-uroblue-500 border-t-transparent rounded-full"></div>
        <p className="text-slate-400 font-bold text-sm">Calculando análisis de desempeño por subdisciplinas...</p>
      </div>
    );
  }

  const totalBanco = BANCO_PREGUNTAS.length;
  const contestadas = analysis?.preguntasContestadas || 0;
  const pendientes = analysis?.preguntasPendientes || totalBanco;
  const bankProgress = analysis?.bankProgress || 0;
  const promedio = analysis?.promedioGlobal || 0;
  const weakList = analysis?.weakDisciplines || [];

  return (
    <div className="max-w-4xl mx-auto fade-in pb-12 space-y-6 md:space-y-8">
      {/* Botón Volver */}
      <button 
        onClick={() => setView('dashboard')} 
        className="flex items-center text-slate-400 hover:text-white font-bold text-sm transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-1.5"/> Volver al Menú Principal
      </button>

      {/* 1. Retroalimentación del Banco de Preguntas CONAMEU */}
      <div className="bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900 p-6 md:p-8 rounded-3xl border border-slate-700 shadow-xl space-y-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <div>
            <h3 className="text-xl md:text-2xl font-black text-white flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-uroblue-400" /> Cobertura y Avance del Banco de Preguntas
            </h3>
            <p className="text-xs md:text-sm text-slate-400 mt-1">
              Monitoreo del porcentaje total de preguntas del banco CONAMEU que ya has resuelto.
            </p>
          </div>
          <div className="text-right">
            <span className="text-2xl md:text-3xl font-black text-white">{bankProgress}%</span>
            <span className="text-slate-400 text-xs block font-bold">Completado</span>
          </div>
        </div>

        {/* Barra de Progreso Global */}
        <div className="w-full bg-slate-900 rounded-full h-4 p-0.5 border border-slate-700">
          <div 
            className="bg-gradient-to-r from-uroblue-600 via-indigo-500 to-emerald-500 h-full rounded-full transition-all duration-1000 shadow-sm"
            style={{ width: `${Math.max(bankProgress, 2)}%` }}
          ></div>
        </div>

        {/* Cifras clave de preguntas contestadas */}
        <div className="grid grid-cols-3 gap-2 md:gap-4 pt-2">
          <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/60 text-center">
            <p className="text-[11px] font-bold text-slate-400 uppercase">Contestadas</p>
            <p className="text-lg md:text-xl font-black text-white">{contestadas}</p>
          </div>
          <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/60 text-center">
            <p className="text-[11px] font-bold text-slate-400 uppercase">Pendientes</p>
            <p className="text-lg md:text-xl font-black text-amber-400">{pendientes}</p>
          </div>
          <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/60 text-center">
            <p className="text-[11px] font-bold text-slate-400 uppercase">Total Banco</p>
            <p className="text-lg md:text-xl font-black text-slate-300">{totalBanco}</p>
          </div>
        </div>
      </div>

      {/* 2. Tarjetas de Métricas Globales */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
        <div className="bg-slate-800 p-4 md:p-5 rounded-2xl border border-slate-700 flex items-center gap-3">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-uroblue-900/50 text-uroblue-400 rounded-xl flex items-center justify-center shrink-0">
            <Droplets className="w-5 h-5 md:w-6 md:h-6"/>
          </div>
          <div>
            <p className="text-xs text-slate-400 font-bold">Promedio Global</p>
            <p className="text-xl md:text-2xl font-black text-white">{promedio > 0 ? `${promedio}%` : '--'}</p>
          </div>
        </div>

        <div className="bg-slate-800 p-4 md:p-5 rounded-2xl border border-slate-700 flex items-center gap-3">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-900/50 text-purple-400 rounded-xl flex items-center justify-center shrink-0">
            <FlaskConical className="w-5 h-5 md:w-6 md:h-6"/>
          </div>
          <div>
            <p className="text-xs text-slate-400 font-bold">Simuladores Hechos</p>
            <p className="text-xl md:text-2xl font-black text-white">{exams.length}</p>
          </div>
        </div>

        <div className="col-span-2 sm:col-span-1 bg-slate-800 p-4 md:p-5 rounded-2xl border border-slate-700 flex items-center gap-3">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-900/50 text-amber-400 rounded-xl flex items-center justify-center shrink-0">
            <AlertTriangle className="w-5 h-5 md:w-6 md:h-6"/>
          </div>
          <div>
            <p className="text-xs text-slate-400 font-bold">Debilidades Detectadas</p>
            <p className="text-xl md:text-2xl font-black text-amber-400">{weakList.length}</p>
          </div>
        </div>
      </div>

      {/* 3. Alerta y Acción Directa de Debilidades */}
      {weakList.length > 0 && (
        <div className="bg-amber-950/40 p-5 md:p-6 rounded-3xl border border-amber-600/40 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-white text-base md:text-lg">
                Diagnóstico de Debilidades CONAMEU
              </h4>
              <p className="text-xs md:text-sm text-amber-300/90 leading-relaxed">
                Tus subdisciplinas con menor efectividad (&lt; 60%) son:{' '}
                <span className="font-bold text-white underline">
                  {weakList.map(k => DISCIPLINAS[k]?.nombre || k).join(', ')}
                </span>
                . Reforzar estos temas elevará significativamente tu probabilidad de acreditar el consejo.
              </p>
            </div>
          </div>
          <div className="flex justify-end pt-2">
            <button
              onClick={startWeaknessSim}
              className="flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl text-xs md:text-sm transition-colors shadow"
            >
              <Sparkles className="w-4 h-4" /> Generar Simulador Enfocado en Mis Debilidades
            </button>
          </div>
        </div>
      )}

      {/* 4. Desempeño por Subdisciplinas de Urología (Análisis Detallado) */}
      <div className="bg-slate-800 p-6 md:p-8 rounded-3xl border border-slate-700 shadow-md space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-slate-700 pb-4">
          <div>
            <h3 className="text-lg md:text-xl font-black text-white flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-uroblue-400" /> Desempeño por Subdisciplina
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Porcentaje de aciertos, cobertura de banco y estado de dominio en cada área.
            </p>
          </div>
          <span className="text-xs font-bold text-slate-400 bg-slate-900 px-3 py-1 rounded-lg border border-slate-700">
            11 Subdisciplinas
          </span>
        </div>

        <div className="space-y-3">
          {LISTA_DISCIPLINAS.map(d => {
            const data = analysis?.discStats[d.id] || {
              totalEnBanco: 0, contestadas: 0, aciertos: 0, fallos: 0, porcentajeAciertos: 0, estado: 'sin_datos'
            };

            const totalEnsayos = data.aciertos + data.fallos;
            const pct = data.porcentajeAciertos;
            const estado = data.estado;

            return (
              <div 
                key={d.id} 
                className="p-4 rounded-2xl bg-slate-900/60 border border-slate-700/80 hover:border-slate-600 transition-all space-y-3"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="font-bold text-sm text-white">{d.nombre}</span>
                    {estado === 'fuerte' && (
                      <span className="text-[10px] font-black bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded border border-emerald-800">
                        Fortaleza ({pct}%)
                      </span>
                    )}
                    {estado === 'regular' && (
                      <span className="text-[10px] font-black bg-amber-950 text-amber-400 px-2 py-0.5 rounded border border-amber-800">
                        Regular ({pct}%)
                      </span>
                    )}
                    {estado === 'debilidad' && (
                      <span className="text-[10px] font-black bg-rose-950 text-rose-400 px-2 py-0.5 rounded border border-rose-800">
                        Debilidad ({pct}%)
                      </span>
                    )}
                    {estado === 'sin_datos' && (
                      <span className="text-[10px] font-bold bg-slate-800 text-slate-400 px-2 py-0.5 rounded">
                        Sin datos aún
                      </span>
                    )}
                  </div>

                  {/* Acciones directas por subdisciplina */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => startDisciplineAnki(d.id)}
                      className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-amber-400 text-xs font-bold rounded-lg border border-slate-700 transition-colors flex items-center gap-1"
                    >
                      <Brain className="w-3.5 h-3.5" /> Anki
                    </button>
                    <button
                      onClick={() => startDisciplineSim(d.id)}
                      className="px-3 py-1 bg-uroblue-600 hover:bg-uroblue-500 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1 shadow"
                    >
                      Simular <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Barra de progreso de precisión y cobertura */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-slate-400 font-semibold">
                    <span>
                      {totalEnsayos > 0 
                        ? `${data.aciertos} aciertos / ${data.fallos} fallos (${totalEnsayos} respondidas)` 
                        : 'No has respondido preguntas de esta área'}
                    </span>
                    <span>
                      Banco: {data.contestadas} de {data.totalEnBanco} ({data.coberturaBanco}%)
                    </span>
                  </div>

                  <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-700 ${
                        pct >= 80 ? 'bg-emerald-500' : pct >= 60 ? 'bg-amber-500' : 'bg-rose-500'
                      }`}
                      style={{ width: `${Math.max(pct, totalEnsayos > 0 ? 5 : 0)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. Rendimiento por Nivel de Dificultad */}
      <div className="bg-slate-800 p-6 md:p-8 rounded-3xl border border-slate-700 shadow-md space-y-4">
        <h3 className="text-lg md:text-xl font-black text-white flex items-center gap-2">
          <Layers className="w-5 h-5 text-indigo-400" /> Rendimiento por Dificultad
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {Object.entries(analysis?.diffStats || {}).map(([diffKey, diffVal]) => {
            const meta = DIFICULTADES[diffKey] || { nombre: diffVal.nombre, color: 'text-slate-200' };
            return (
              <div key={diffKey} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-700 text-center space-y-1">
                <p className={`text-xs font-bold uppercase tracking-wider ${meta.color}`}>{meta.nombre}</p>
                <p className="text-2xl font-black text-white">{diffVal.porcentaje}%</p>
                <p className="text-[11px] text-slate-400">
                  {diffVal.aciertos} aciertos / {diffVal.contestadas} intentos
                </p>
                <p className="text-[10px] text-slate-500 font-semibold">
                  Banco total: {diffVal.totalEnBanco} reactivos
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 6. Historial Reciente de Simuladores */}
      <div className="bg-slate-800 p-6 md:p-8 rounded-3xl border border-slate-700 shadow-md">
        <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white">Historial de Exámenes</h3>
        
        {exams.length === 0 ? (
          <div className="text-center py-12 text-slate-400">
            <p>Aún no has completado simuladores.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {exams.map((exam, i) => {
              const examDate = exam.date 
                ? new Date(exam.date.toDate()).toLocaleDateString('es-MX', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit' }) 
                : 'Simulador';
              
              const conf = exam.config || {};
              const discLabel = conf.disciplina && conf.disciplina !== 'todas' 
                ? DISCIPLINAS[conf.disciplina]?.shortName 
                : 'Todo el Banco';

              return (
                <div key={i} className="flex justify-between items-center p-4 border border-slate-700 rounded-2xl bg-slate-900/50">
                  <div>
                    <p className="font-bold text-slate-200 text-sm md:text-base capitalize">{examDate}</p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {exam.totalCorrect} de {exam.totalQuestions} aciertos • {discLabel}
                    </p>
                  </div>
                  <div className={`font-black text-xl md:text-2xl ${exam.score >= 70 ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {exam.score}%
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}