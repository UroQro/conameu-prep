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
          if (examData.errores) allErrors = [...allErrors, ...examData.errores];
        });
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
    e.stopPropagation();
    setIsFlipped(false);
    setTimeout(() => {
      if (currentIdx < cards.length - 1) setCurrentIdx(i => i + 1);
      else setCurrentIdx(0);
    }, 150);
  };

  if (loading) return <div className="flex justify-center p-20"><div className="animate-spin h-10 w-10 border-b-2 border-uroblue-500 rounded-full"></div></div>;
  if (cards.length === 0) return <div className="text-center p-10 md:p-20 bg-slate-800 rounded-3xl border border-slate-700 mt-6"><h2 className="text-xl md:text-2xl font-bold text-emerald-400 mb-4">¡Felicidades!</h2><p className="text-slate-400 font-medium text-sm md:text-base">No tienes errores registrados. Sigue haciendo simuladores.</p><button onClick={() => setView('dashboard')} className="mt-8 text-uroblue-400 font-bold hover:underline">Volver al menú</button></div>;

  const currentCard = cards[currentIdx];

  return (
    <div className="max-w-2xl mx-auto fade-in">
      <div className="flex justify-between items-center mb-6">
        <button onClick={() => setView('dashboard')} className="flex items-center text-slate-400 hover:text-white font-bold text-sm md:text-base"><ArrowLeft className="w-4 h-4 mr-1 md:mr-2"/> Volver</button>
        <span className="text-slate-500 font-bold text-sm md:text-base">Tarjeta {currentIdx + 1} de {cards.length}</span>
      </div>

      <div className="relative w-full h-[500px] md:h-[450px] perspective-1000">
        <div className={`w-full h-full absolute transition-transform duration-500 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
          
          <div className="absolute w-full h-full bg-slate-800 rounded-3xl shadow-lg border border-slate-700 p-6 md:p-10 flex flex-col justify-center items-center text-center backface-hidden cursor-pointer hover:border-uroblue-500/50 transition-colors" onClick={() => setIsFlipped(true)}>
            <span className="bg-amber-900/30 text-amber-400 text-xs font-bold px-3 py-1.5 rounded-lg mb-6 absolute top-6 md:top-8 border border-amber-800/30">{currentCard.categoria}</span>
            <RotateCcw className="w-10 h-10 md:w-12 md:h-12 text-slate-600 mb-6" />
            <h2 className="text-lg md:text-2xl font-bold text-white leading-snug">{currentCard.pregunta}</h2>
            <p className="absolute bottom-6 md:bottom-8 text-slate-500 font-bold text-xs md:text-sm animate-pulse">Toca para revelar</p>
          </div>

          <div className="absolute w-full h-full bg-slate-700 rounded-3xl shadow-xl p-6 md:p-10 flex flex-col justify-between backface-hidden rotate-y-180 text-white cursor-pointer" onClick={() => setIsFlipped(false)}>
            <div className="overflow-y-auto pr-2 custom-scrollbar">
              <h3 className="text-emerald-400 font-black text-lg md:text-xl mb-4 text-left">R: {currentCard.opciones[currentCard.respuesta_correcta]}</h3>
              <div className="bg-slate-800 p-4 md:p-5 rounded-xl border border-slate-600 text-left">
                <p className="text-xs md:text-sm leading-relaxed text-slate-300"><span className="font-bold text-white block mb-1">Justificación:</span> {currentCard.justificacion}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3 md:gap-4 mt-4 shrink-0">
              <button onClick={nextCard} className="bg-red-500/20 text-red-300 hover:bg-red-500 hover:text-white py-3 md:py-4 rounded-xl font-bold text-sm md:text-base transition-colors">Aún dudo</button>
              <button onClick={nextCard} className="bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500 hover:text-white py-3 md:py-4 rounded-xl font-bold text-sm md:text-base transition-colors">La domino</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}