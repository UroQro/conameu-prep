import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { ArrowLeft, RotateCcw } from 'lucide-react';

export default function ErrorReview({ setView, user }) {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const fetchErrors = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users", user.uid, "exams"));
        let allErrors = [];
        querySnapshot.forEach((doc) => {
          const examData = doc.data();
          if (examData.errores) {
            allErrors = [...allErrors, ...examData.errores];
          }
        });
        
        // Quitar duplicados por ID de pregunta
        const uniqueErrors = Array.from(new Map(allErrors.map(item => [item.id, item])).values());
        
        setCards(uniqueErrors);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };
    fetchErrors();
  }, [user]);

  const nextCard = (e) => {
    e.stopPropagation(); // Evita que se voltee la tarjeta al darle clic al botón
    setIsFlipped(false);
    setTimeout(() => {
      if (currentIdx < cards.length - 1) setCurrentIdx(i => i + 1);
      else setCurrentIdx(0); // Reinicia si ya acabó
    }, 150);
  };

  if (loading) return <div className="flex justify-center p-20"><div className="animate-spin h-10 w-10 border-b-2 border-uroblue-600 rounded-full"></div></div>;
  if (cards.length === 0) return <div className="text-center p-20"><h2 className="text-2xl font-bold text-emerald-600 mb-4">¡Felicidades!</h2><p className="text-slate-500 font-medium">No tienes errores registrados en tu historial. Sigue haciendo simuladores.</p><button onClick={() => setView('dashboard')} className="mt-8 text-uroblue-600 font-bold underline">Volver al menú</button></div>;

  const currentCard = cards[currentIdx];

  return (
    <div className="max-w-2xl mx-auto fade-in">
      <div className="flex justify-between items-center mb-6">
        <button onClick={() => setView('dashboard')} className="flex items-center text-slate-500 hover:text-uroblue-600 font-bold"><ArrowLeft className="w-4 h-4 mr-2"/> Volver</button>
        <span className="text-slate-400 font-bold">Tarjeta {currentIdx + 1} de {cards.length}</span>
      </div>

      <div className="relative w-full aspect-[4/3] perspective-1000">
        <div className={`w-full h-full absolute transition-all duration-500 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
          
          {/* FRONT (PREGUNTA) */}
          <div className="absolute w-full h-full bg-white rounded-3xl shadow-sm border border-slate-200 p-10 flex flex-col justify-center items-center text-center backface-hidden cursor-pointer hover:border-uroblue-300 transition-colors" onClick={() => setIsFlipped(true)}>
            <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full mb-6 absolute top-8">{currentCard.categoria}</span>
            <RotateCcw className="w-12 h-12 text-slate-200 mb-6" />
            <h2 className="text-2xl font-bold text-slate-800 leading-relaxed">{currentCard.pregunta}</h2>
            <p className="absolute bottom-8 text-slate-400 font-bold text-sm animate-pulse">Haz clic para revelar la respuesta</p>
          </div>

          {/* BACK (RESPUESTA Y BOTONES) */}
          <div className="absolute w-full h-full bg-slate-800 rounded-3xl shadow-xl p-10 flex flex-col justify-between backface-hidden rotate-y-180 text-white cursor-pointer" onClick={() => setIsFlipped(false)}>
            <div>
              <h3 className="text-emerald-400 font-black text-xl mb-4">Respuesta: {currentCard.opciones[currentCard.respuesta_correcta]}</h3>
              <div className="bg-slate-700/50 p-5 rounded-xl border border-slate-600">
                <p className="text-sm leading-relaxed text-slate-300"><span className="font-bold text-white block mb-1">Justificación:</span> {currentCard.justificacion}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <button onClick={nextCard} className="bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white py-4 rounded-xl font-bold transition-colors">Volver a repasar</button>
              <button onClick={nextCard} className="bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-white py-4 rounded-xl font-bold transition-colors">Ya la domino</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}