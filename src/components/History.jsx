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
      <div className="flex flex-col items-center justify-center p-14 space-y-3">
        <div className="animate-spin h-10 w-10 sm:h-12 sm:w-12 border-4 border-uroblue-500 border-t-transparent rounded-full"></div>
        <p className="text-slate-400 font-bold text-xs sm:text-sm text-center">Calculando análisis de desempeño urológico...</p>
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
    <div className="max-w-4xl mx-auto fade-in pb-16 md:pb-8 space-y-4 sm:space-y-6 md:space-y-8">
      {/* Botón Volver */}
      <button 
        onClick={() => setView('dashboard')} 
        className="flex items-center text-slate-400 hover:text-white font-bold text-xs sm:text-sm transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5 mr-1"/> Volver al Menú
      </button>

      {/* 1. Cobertura del Banco de Preguntas */}
      <div className="bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900 p-4 sm:p-6 md:p-8 rounded-3xl border border-slate-700 shadow-xl space-y-3 sm:space-y-4">
        <div className="flex justify-between items-center gap-2">
          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-black text-white flex items-center gap-1.5">
              <BookOpen className="w-5 h-5 text-uroblue-400" /> Cobertura del Banco
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
              Monitoreo del porcentaje total de preguntas que has resuelto.
            </p>
          </div>
          <div className="text-right shrink-0">
            <span className="text-xl sm:text-2xl md:text-3xl font-black text-white">{bankProgress}%</span>
            <span className="text-slate-400 text-[10px] block font-bold">Completado</span>
          </div>
        </div>

        {/* Barra de Progreso */}
        <div className="w-full bg-slate-900 rounded-full h-3 sm:h-3.5 p-0.5 border border-slate-700">
          <div 
            className="bg-gradient-to-r from-uroblue-600 via-indigo-500 to-emerald-500 h-full rounded-full transition-all duration-1000 shadow-sm"
            style={{ width: `${Math.max(bankProgress, 2)}%` }}
          ></div>
        </div>

        {/* 3 Cifras de Progreso */}
        <div className="grid grid-cols-3 gap-2 pt-1">
          <div className="p-2 sm:p-3 bg-slate-900/60 rounded-xl border border-slate-700/60 text-center">
            <p className="text-[10px] font-bold text-slate-400 uppercase">Contestadas</p>
            <p className="text-base sm:text-lg md:text-xl font-black text-white">{contestadas}</p>
          </div>
          <div className="p-2 sm:p-3 bg-slate-900/60 rounded-xl border border-slate-700/60 text-center">
            <p className="text-[10px] font-bold text-slate-400 uppercase">Pendientes</p>
            <p className="text-base sm:text-lg md:text-xl font-black text-amber-400">{pendientes}</p>
          </div>
          <div className="p-2 sm:p-3 bg-slate-900/60 rounded-xl border border-slate-700/60 text-center">
            <p className="text-[10px] font-bold text-slate-400 uppercase">Total Banco</p>
            <p className="text-base sm:text-lg md:text-xl font-black text-slate-300">{totalBanco}</p>
          </div>
        </div>
      </div>

      {/* 2. Tarjetas de Métricas Globales */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-4">
        <div className="bg-slate-800 p-3.5 sm:p-4 rounded-2xl border border-slate-700 flex items-center gap-2.5 sm:gap-3">
          <div className="w-9 h-9 sm:w-11 sm:h-11 bg-uroblue-900/50 text-uroblue-400 rounded-xl flex items-center justify-center shrink-0">
            <Droplets className="w-4 h-4 sm:w-5 sm:h-5"/>
          </div>
          <div>
            <p className="text-[11px] text-slate-400 font-bold">Promedio Global</p>
            <p className="text-lg sm:text-xl md:text-2xl font-black text-white">{promedio > 0 ? `${promedio}%` : '--'}</p>
          </div>
        </div>

        <div className="bg-slate-800 p-3.5 sm:p-4 rounded-2xl border border-slate-700 flex items-center gap-2.5 sm:gap-3">
          <div className="w-9 h-9 sm:w-11 sm:h-11 bg-purple-900/50 text-purple-400 rounded-xl flex items-center justify-center shrink-0">
            <FlaskConical className="w-4 h-4 sm:w-5 sm:h-5"/>
          </div>
          <div>
            <p className="text-[11px] text-slate-400 font-bold">Simuladores</p>
            <p className="text-lg sm:text-xl md:text-2xl font-black text-white">{exams.length}</p>
          </div>
        </div>

        <div className="col-span-2 sm:col-span-1 bg-slate-800 p-3.5 sm:p-4 rounded-2xl border border-slate-700 flex items-center gap-2.5 sm:gap-3">
          <div className="w-9 h-9 sm:w-11 sm:h-11 bg-amber-900/50 text-amber-400 rounded-xl flex items-center justify-center shrink-0">
            <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5"/>
          </div>
          <div>
            <p className="text-[11px] text-slate-400 font-bold">Debilidades</p>
            <p className="text-lg sm:text-xl md:text-2xl font-black text-amber-400">{weakList.length}</p>
          </div>
        </div>
      </div>

      {/* 3. Alerta y Acción de Debilidades */}
      {weakList.length > 0 && (
        <div className="bg-amber-950/40 p-4 sm:p-5 rounded-3xl border border-amber-600/40 space-y-2.5">
          <div className="flex items-start gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
              <Target className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-extrabold text-white text-sm sm:text-base">
                Diagnóstico de Debilidades
              </h4>
              <p className="text-xs text-amber-300/90 leading-relaxed">
                Tus subdisciplinas con menor efectividad son:{' '}
                <span className="font-bold text-white underline">
                  {weakList.map(k => DISCIPLINAS[k]?.nombre || k).join(', ')}
                </span>
                .
              </p>
            </div>
          </div>
          <button
            onClick={startWeaknessSim}
            className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl text-xs sm:text-sm transition-all shadow active:scale-95"
          >
            <Sparkles className="w-4 h-4" /> Generar Simulador de Mis Debilidades
          </button>
        </div>
      )}

      {/* 4. Desempeño por Subdisciplinas */}
      <div className="bg-slate-800 p-4 sm:p-6 md:p-8 rounded-3xl border border-slate-700 shadow-md space-y-3.5">
        <div className="flex justify-between items-center border-b border-slate-700 pb-3">
          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-black text-white flex items-center gap-1.5">
              <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-uroblue-400" /> Desempeño por Subdisciplina
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
              Aciertos, cobertura de banco y estado en cada área.
            </p>
          </div>
          <span className="text-[11px] font-bold text-slate-400 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-700">
            11 Áreas
          </span>
        </div>

        <div className="space-y-2.5">
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
                className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-700/80 hover:border-slate-600 transition-all space-y-2"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xs sm:text-sm text-white">{d.nombre}</span>
                    {estado === 'fuerte' && (
                      <span className="text-[9px] sm:text-[10px] font-black bg-emerald-950 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-800">
                        Fortaleza ({pct}%)
                      </span>
                    )}
                    {estado === 'regular' && (
                      <span className="text-[9px] sm:text-[10px] font-black bg-amber-950 text-amber-400 px-1.5 py-0.5 rounded border border-amber-800">
                        Regular ({pct}%)
                      </span>
                    )}
                    {estado === 'debilidad' && (
                      <span className="text-[9px] sm:text-[10px] font-black bg-rose-950 text-rose-400 px-1.5 py-0.5 rounded border border-rose-800">
                        Debilidad ({pct}%)
                      </span>
                    )}
                    {estado === 'sin_datos' && (
                      <span className="text-[9px] sm:text-[10px] font-bold bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded">
                        Sin datos
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 self-end sm:self-auto shrink-0">
                    <button
                      onClick={() => startDisciplineAnki(d.id)}
                      className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-amber-400 text-[11px] font-bold rounded-lg border border-slate-700 transition-all active:scale-95 flex items-center gap-1"
                    >
                      <Brain className="w-3 h-3" /> Anki
                    </button>
                    <button
                      onClick={() => startDisciplineSim(d.id)}
                      className="px-2.5 py-1 bg-uroblue-600 hover:bg-uroblue-500 text-white text-[11px] font-bold rounded-lg transition-all flex items-center gap-1 shadow active:scale-95"
                    >
                      Simular <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Barra de progreso */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] text-slate-400 font-semibold">
                    <span>
                      {totalEnsayos > 0 
                        ? `${data.aciertos}/${totalEnsayos} aciertos` 
                        : 'Sin responder aún'}
                    </span>
                    <span>
                      Banco: {data.contestadas}/{data.totalEnBanco} ({data.coberturaBanco}%)
                    </span>
                  </div>

                  <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
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
      <div className="bg-slate-800 p-4 sm:p-6 md:p-8 rounded-3xl border border-slate-700 shadow-md space-y-3">
        <h3 className="text-base sm:text-lg md:text-xl font-black text-white flex items-center gap-1.5">
          <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" /> Rendimiento por Dificultad
        </h3>
        
        <div className="grid grid-cols-3 gap-2">
          {Object.entries(analysis?.diffStats || {}).map(([diffKey, diffVal]) => {
            const meta = DIFICULTADES[diffKey] || { nombre: diffVal.nombre, color: 'text-slate-200' };
            return (
              <div key={diffKey} className="p-3 rounded-2xl bg-slate-900/60 border border-slate-700 text-center space-y-0.5">
                <p className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider ${meta.color}`}>{meta.nombre}</p>
                <p className="text-xl sm:text-2xl font-black text-white">{diffVal.porcentaje}%</p>
                <p className="text-[10px] text-slate-400">
                  {diffVal.aciertos}/{diffVal.contestadas}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 6. Historial Reciente */}
      <div className="bg-slate-800 p-4 sm:p-6 md:p-8 rounded-3xl border border-slate-700 shadow-md">
        <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-5 text-white">Historial de Exámenes</h3>
        
        {exams.length === 0 ? (
          <div className="text-center py-8 text-slate-400 text-xs sm:text-sm">
            <p>Aún no has completado simuladores.</p>
          </div>
        ) : (
          <div className="space-y-2.5">
            {exams.map((exam, i) => {
              const examDate = exam.date 
                ? new Date(exam.date.toDate()).toLocaleDateString('es-MX', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit' }) 
                : 'Simulador';
              
              const conf = exam.config || {};
              const discLabel = conf.disciplina && conf.disciplina !== 'todas' 
                ? DISCIPLINAS[conf.disciplina]?.shortName 
                : 'Todo el Banco';

              return (
                <div key={i} className="flex justify-between items-center p-3.5 border border-slate-700 rounded-2xl bg-slate-900/50">
                  <div>
                    <p className="font-bold text-slate-200 text-xs sm:text-sm capitalize">{examDate}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {exam.totalCorrect} de {exam.totalQuestions} aciertos • {discLabel}
                    </p>
                  </div>
                  <div className={`font-black text-lg sm:text-xl ${exam.score >= 70 ? 'text-emerald-400' : 'text-amber-400'}`}>
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