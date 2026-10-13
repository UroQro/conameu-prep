import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { ArrowLeft, Trophy, Target } from 'lucide-react';

export default function History({ setView, user }) {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ average: 0, total: 0 });

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const q = query(collection(db, "users", user.uid, "exams"), orderBy("date", "desc"));
        const querySnapshot = await getDocs(q);
        const fetchedExams = [];
        let totalScore = 0;

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          fetchedExams.push(data);
          totalScore += data.score;
        });

        setExams(fetchedExams);
        if (fetchedExams.length > 0) {
          setStats({ average: Math.round(totalScore / fetchedExams.length), total: fetchedExams.length });
        }
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };
    fetchHistory();
  }, [user]);

  if (loading) return <div className="flex justify-center p-20"><div className="animate-spin h-10 w-10 border-b-2 border-uroblue-500 rounded-full"></div></div>;

  return (
    <div className="max-w-4xl mx-auto fade-in pb-10">
      <button onClick={() => setView('dashboard')} className="flex items-center text-slate-400 hover:text-white font-bold mb-6 text-sm md:text-base"><ArrowLeft className="w-4 h-4 mr-1 md:mr-2"/> Volver</button>
      
      <div className="grid grid-cols-2 gap-3 md:gap-6 mb-6 md:mb-8">
        <div className="bg-slate-800 p-4 md:p-6 rounded-2xl shadow-sm border border-slate-700 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-3 md:gap-4">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-uroblue-900/50 text-uroblue-400 rounded-xl flex items-center justify-center shrink-0"><Trophy className="w-5 h-5 md:w-6 md:h-6"/></div>
          <div><p className="text-xs md:text-sm text-slate-400 font-bold">Promedio Global</p><p className="text-2xl md:text-3xl font-black text-white">{stats.average > 0 ? `${stats.average}%` : '--'}</p></div>
        </div>
        <div className="bg-slate-800 p-4 md:p-6 rounded-2xl shadow-sm border border-slate-700 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-3 md:gap-4">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-900/50 text-purple-400 rounded-xl flex items-center justify-center shrink-0"><Target className="w-5 h-5 md:w-6 md:h-6"/></div>
          <div><p className="text-xs md:text-sm text-slate-400 font-bold">Exámenes Hechos</p><p className="text-2xl md:text-3xl font-black text-white">{stats.total}</p></div>
        </div>
      </div>

      {exams.length === 0 ? (
        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 text-center py-20">
          <h3 className="text-lg md:text-xl font-bold text-white mb-2">Aún no hay datos</h3>
          <p className="text-slate-400 text-sm md:text-base">Realiza tu primer simulador para ver tu historial.</p>
        </div>
      ) : (
        <div className="bg-slate-800 p-5 md:p-8 rounded-2xl border border-slate-700">
          <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white">Historial Reciente</h3>
          <div className="space-y-3 md:space-y-4">
            {exams.map((exam, i) => {
              const examDate = exam.date ? new Date(exam.date.toDate()).toLocaleDateString('es-MX', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit' }) : 'Simulador';
              return (
                <div key={i} className="flex justify-between items-center p-4 md:p-5 border border-slate-700 rounded-xl bg-slate-900/50">
                  <div>
                    <p className="font-bold text-slate-200 capitalize text-sm md:text-base">{examDate}</p>
                    <p className="text-xs md:text-sm text-slate-500 font-medium mt-1">{exam.totalCorrect} de {exam.totalQuestions} aciertos</p>
                  </div>
                  <div className={`font-black text-xl md:text-2xl ${exam.score >= 70 ? 'text-emerald-400' : 'text-amber-400'}`}>{exam.score}%</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}