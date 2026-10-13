import React, { useState } from 'react';
import { Play, RotateCcw, BarChart2, X } from 'lucide-react';

export default function Dashboard({ setView, setSimCount }) {
  const [showOptions, setShowOptions] = useState(false);

  const startSim = (count) => {
    setSimCount(count);
    setView('sim');
  };

  return (
    <div className="fade-in">
      <div className="mb-6 md:mb-8 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">Bienvenido al Simulador</h2>
        <p className="text-slate-400 mt-2 font-medium text-sm md:text-base">Selecciona un módulo para comenzar tu sesión de estudio.</p>
      </div>

      {showOptions ? (
        <div className="bg-slate-800 p-6 md:p-10 rounded-2xl border border-slate-700 shadow-lg text-center fade-in-up">
          <div className="flex justify-end"><button onClick={() => setShowOptions(false)} className="text-slate-400 hover:text-white"><X className="w-6 h-6"/></button></div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6">¿Cuántas preguntas deseas?</h3>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-4">
            {[10, 30, 50, 100].map(n => (
              <button key={n} onClick={() => startSim(n)} className="w-full sm:w-auto px-6 py-4 bg-slate-700 hover:bg-uroblue-600 text-white font-bold rounded-xl transition-colors border border-slate-600 hover:border-uroblue-500">
                {n} Preguntas
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <button onClick={() => setShowOptions(true)} className="group bg-slate-800 p-5 md:p-6 rounded-2xl border border-slate-700 hover:border-uroblue-500 shadow-sm transition-all text-left flex flex-col items-start">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-uroblue-600 text-white flex items-center justify-center mb-4 md:mb-6 shadow-sm group-hover:scale-110 transition-transform">
              <Play className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="font-bold text-lg md:text-xl text-white mb-2">Generar Simulador</h3>
            <p className="text-xs md:text-sm text-slate-400 font-medium leading-relaxed">Examen aleatorio con retroalimentación en tiempo real.</p>
          </button>
          
          <button onClick={() => setView('errors')} className="group bg-slate-800 p-5 md:p-6 rounded-2xl border border-slate-700 hover:border-amber-500 shadow-sm transition-all text-left flex flex-col items-start">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center mb-4 md:mb-6 shadow-sm group-hover:scale-110 transition-transform">
              <RotateCcw className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="font-bold text-lg md:text-xl text-white mb-2">Repaso de Errores</h3>
            <p className="text-xs md:text-sm text-slate-400 font-medium leading-relaxed">Flashcards dinámicas de tus preguntas falladas.</p>
          </button>

          <button onClick={() => setView('history')} className="group bg-slate-800 p-5 md:p-6 rounded-2xl border border-slate-700 hover:border-emerald-500 shadow-sm transition-all text-left flex flex-col items-start">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center mb-4 md:mb-6 shadow-sm group-hover:scale-110 transition-transform">
              <BarChart2 className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="font-bold text-lg md:text-xl text-white mb-2">Desempeño Global</h3>
            <p className="text-xs md:text-sm text-slate-400 font-medium leading-relaxed">Métricas de rendimiento y tu historial de calificaciones.</p>
          </button>
        </div>
      )}
    </div>
  );
}