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
          setStats({
            average: Math.round(totalScore / fetchedExams.length),
            total: fetchedExams.length
          });
        }
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar historial:", error);
        setLoading(false);
      }
    };
    fetchHistory();
  }, [user]);

  if (loading) return <div className="flex justify-center p-20"><div className="animate-spin h-10 w-10 border-b-2 border-uroblue-600 rounded-full"></div></div>;

  return (
    <div className="max-w-4xl mx-auto fade-in">
      <button onClick={() => setView('dashboard')} className="flex items-center text-slate-500 hover:text-uroblue-600 font-bold mb-6"><ArrowLeft className="w-4 h-4 mr-2"/> Volver</button>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
          <div className="w-12 h-12 bg-uroblue-100 text-uroblue-600 rounded-xl flex items-center justify-center"><Trophy className="w-6 h-6"/></div>
          <div><p className="text-sm text-slate-500 font-bold">Promedio Global</p><p className="text-3xl font-black">{stats.average > 0 ? `${stats.average}%` : '--'}</p></div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
          <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center"><Target className="w-6 h-6"/></div>
          <div><p className="text-sm text-slate-500 font-bold">Simuladores Realizados</p><p className="text-3xl font-black">{stats.total}</p></div>
        </div>
      </div>

      {exams.length === 0 ? (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center py-20">
          <h3 className="text-xl font-bold text-slate-800 mb-2">Aún no hay datos</h3>
          <p className="text-slate-500">Realiza tu primer simulador para ver tu historial.</p>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-xl font-bold mb-6 text-slate-800">Historial Reciente</h3>
          <div className="space-y-4">
            {exams.map((exam, i) => {
              const examDate = exam.date ? new Date(exam.date.toDate()).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute:'2-digit' }) : 'Simulador';
              return (
                <div key={i} className="flex justify-between items-center p-5 border border-slate-100 rounded-xl bg-slate-50">
                  <div>
                    <p className="font-bold text-slate-800 capitalize">{examDate}</p>
                    <p className="text-sm text-slate-500 font-medium mt-1">{exam.totalCorrect} correctas de {exam.totalQuestions}</p>
                  </div>
                  <div className={`font-black text-2xl ${exam.score >= 70 ? 'text-emerald-500' : 'text-amber-500'}`}>{exam.score}%</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}