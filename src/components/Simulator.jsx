import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { Check, X, ArrowRight, RotateCcw } from 'lucide-react';

export default function Simulator({ setView, user, config }) {
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

  useEffect(() => {
    const fetchPreguntas = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "preguntas"));
        let allQuestions = querySnapshot.docs.map(doc => doc.data());

        if (config.mode === 'new') {
          const userExamsSnap = await getDocs(collection(db, "users", user.uid, "exams"));
          let seenIds = new Set();
          userExamsSnap.forEach(doc => {
            const data = doc.data();
            if (data.answeredIds) data.answeredIds.forEach(id => seenIds.add(id));
          });
          allQuestions = allQuestions.filter(q => !seenIds.has(q.id));
        }

        if (allQuestions.length === 0) {
          setExhausted(true);
          setLoading(false);
          return;
        }

        const shuffled = allQuestions.sort(() => 0.5 - Math.random()).slice(0, config.count);
        setPreguntas(shuffled);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar preguntas:", error);
      }
    };
    fetchPreguntas();
  }, [config, user]);

  const handleAnswer = (key) => {
    if (isAnswered) return;
    setSelectedAns(key);
    setIsAnswered(true);
    
    const p = preguntas[currentIdx];
    setAnsweredIds(prev => [...prev, p.id]);
    
    if (key === p.respuesta_correcta) {
      setScore(s => s + 1);
    } else {
      setErrores(prev => [...prev, p]);
    }
  };

  const nextQuestion = async () => {
    if (currentIdx + 1 >= preguntas.length) {
      setCurrentIdx(i => i + 1);
      const calif = Math.round((score / preguntas.length) * 100);
      try {
        await addDoc(collection(db, "users", user.uid, "exams"), {
          score: calif,
          totalCorrect: score,
          totalQuestions: preguntas.length,
          errores: errores,
          answeredIds: answeredIds,
          date: serverTimestamp()
        });
        setSaved(true);
      } catch (error) {
        console.error("Error guardando examen:", error);
      }
    } else {
      setCurrentIdx(i => i + 1);
      setSelectedAns(null);
      setIsAnswered(false);
    }
  };

  if (loading) return <div className="flex justify-center p-20"><div className="animate-spin h-10 w-10 border-b-2 border-uroblue-500 rounded-full"></div></div>;
  if (exhausted) return <div className="text-center p-20"><h2 className="text-2xl font-bold text-emerald-400 mb-4">¡Felicidades!</h2><p className="text-slate-400 mb-6">Has respondido todo el banco de preguntas. Genera un simulador aleatorio para repasar.</p><button onClick={() => setView('dashboard')} className="text-uroblue-400 font-bold hover:underline">Volver</button></div>;
  if (preguntas.length === 0) return <div className="text-center p-20 font-bold text-slate-400">Aún no hay preguntas.</div>;

  if (currentIdx >= preguntas.length) {
    const calif = Math.round((score / preguntas.length) * 100);
    return (
      <div className="max-w-2xl mx-auto bg-slate-800 p-6 md:p-10 rounded-3xl shadow-lg border border-slate-700 text-center mt-6 fade-in">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">Simulación Completada</h2>
        {!saved && <p className="text-amber-400 font-bold mb-4 text-sm md:text-base">Guardando resultados...</p>}
        {saved && <p className="text-emerald-400 font-bold mb-4 text-sm md:text-base">¡Resultados guardados en tu historial!</p>}
        
        <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 mt-4">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            <path className="text-slate-700" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            <path className={`${calif >= 70 ? 'text-emerald-500' : 'text-amber-500'}`} strokeDasharray={`${calif}, 100`} strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl font-black text-white">{calif}%</div>
        </div>
        <p className="text-base md:text-lg font-bold text-slate-300 mb-8">Acertaste {score} de {preguntas.length}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <button onClick={() => window.location.reload()} className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-xl transition-colors"><RotateCcw className="w-5 h-5" /> Repetir</button>
          <button onClick={() => setView('dashboard')} className="flex items-center justify-center gap-2 px-6 py-3 bg-uroblue-600 text-white font-bold rounded-xl shadow-md hover:bg-uroblue-500 transition-colors">Ir al Menú <ArrowRight className="w-5 h-5" /></button>
        </div>
      </div>
    );
  }

  const p = preguntas[currentIdx];
  const isCorrect = selectedAns === p.respuesta_correcta;

  return (
    <div className="max-w-3xl mx-auto fade-in pb-10">
      <div className="flex justify-between items-center mb-4 md:mb-6 bg-slate-800 px-4 md:px-6 py-3 md:py-4 rounded-2xl shadow-sm border border-slate-700">
        <span className="bg-uroblue-900/50 text-uroblue-300 text-xs md:text-sm font-bold px-3 py-1 md:px-4 md:py-1.5 rounded-lg border border-uroblue-800/50">{p.categoria}</span>
        <div className="font-bold text-slate-400 text-xs md:text-sm">Pregunta {currentIdx + 1} de {preguntas.length}</div>
      </div>
      <div className="bg-slate-800 p-5 md:p-8 rounded-2xl shadow-sm border border-slate-700 mb-4 md:mb-6">
        <h2 className="text-lg md:text-xl font-bold text-white mb-6 leading-snug">{p.pregunta}</h2>
        <div className="space-y-3">
          {Object.entries(p.opciones).map(([key, val]) => {
            let btnClass = "w-full text-left p-3 md:p-4 rounded-xl border-2 transition-all flex items-center gap-3 md:gap-4 group ";
            let icon = null;
            if (!isAnswered) {
              btnClass += "border-slate-700 bg-slate-700/50 hover:border-uroblue-500 hover:bg-slate-700 cursor-pointer text-slate-200";
            } else {
              btnClass += "cursor-default ";
              if (key === p.respuesta_correcta) {
                btnClass += "border-emerald-500 bg-emerald-900/30 text-emerald-100";
                icon = <Check className="w-5 h-5 text-emerald-400 ml-auto shrink-0" />;
              } else if (key === selectedAns) {
                btnClass += "border-red-500 bg-red-900/30 text-red-100";
                icon = <X className="w-5 h-5 text-red-400 ml-auto shrink-0" />;
              } else {
                btnClass += "border-slate-700 bg-slate-800 opacity-40 text-slate-400";
              }
            }
            return (
              <button key={key} onClick={() => handleAnswer(key)} disabled={isAnswered} className={btnClass}>
                <span className={`w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center font-bold shrink-0 text-sm md:text-base ${!isAnswered ? 'bg-slate-800 border border-slate-600 group-hover:text-uroblue-400' : key === p.respuesta_correcta ? 'bg-emerald-600 text-white border-transparent' : key === selectedAns ? 'bg-red-600 text-white border-transparent' : 'bg-slate-700 border-slate-600'}`}>{key}</span>
                <span className="font-medium text-sm md:text-base leading-snug">{val}</span>
                {icon}
              </button>
            );
          })}
        </div>
      </div>
      {isAnswered && (
        <div className={`p-4 md:p-6 rounded-2xl mb-6 shadow-sm border flex gap-3 md:gap-4 fade-in-up ${isCorrect ? 'bg-emerald-900/20 border-emerald-800/50' : 'bg-red-900/20 border-red-800/50'}`}>
          <div className="shrink-0 mt-0.5 md:mt-1">{isCorrect ? <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald-900/50 rounded-full flex items-center justify-center"><Check className="text-emerald-400 w-5 h-5 md:w-6 md:h-6" /></div> : <div className="w-8 h-8 md:w-10 md:h-10 bg-red-900/50 rounded-full flex items-center justify-center"><X className="text-red-400 w-5 h-5 md:w-6 md:h-6" /></div>}</div>
          <div>
            <h4 className={`font-black text-base md:text-lg mb-1 md:mb-2 ${isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>{isCorrect ? '¡Correcto!' : `Incorrecto. La respuesta es la ${p.respuesta_correcta}`}</h4>
            <p className="font-medium text-sm md:text-base opacity-90 text-slate-300 leading-relaxed">{p.justificacion}</p>
          </div>
        </div>
      )}
      {isAnswered && (
        <div className="flex justify-end fade-in pb-10 md:pb-0">
          <button onClick={nextQuestion} className="w-full md:w-auto flex items-center justify-center gap-2 bg-uroblue-600 text-white font-bold py-3.5 px-8 rounded-xl hover:bg-uroblue-500 shadow-md transition-colors">
            {currentIdx + 1 === preguntas.length ? 'Finalizar' : 'Siguiente'} <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}