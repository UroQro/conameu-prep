import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { 
  ArrowLeft, RotateCcw, Brain, Sparkles, Filter, CheckCircle2, 
  HelpCircle, ChevronRight, Check, AlertCircle, RefreshCw
} from 'lucide-react';
import { DISCIPLINAS, LISTA_DISCIPLINAS, DIFICULTADES } from '../utils/disciplinas';
import { BANCO_PREGUNTAS, analizarHistorial } from '../utils/bancoService';
import { getLocalAnkiState, saveLocalAnkiState, rateCard } from '../utils/ankiEngine';

export default function ErrorReview({ setView, user, ankiConfig }) {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  
  // Modos de Mazo Anki: 'errors', 'weakness', 'discipline', 'all'
  const [deckMode, setDeckMode] = useState(ankiConfig?.mode || 'errors');
  const [selectedDiscipline, setSelectedDiscipline] = useState(ankiConfig?.disciplina || 'todas');
  
  // Estado Anki local
  const [ankiState, setAnkiState] = useState({});
  const [sessionStats, setSessionStats] = useState({ again: 0, hard: 0, good: 0, easy: 0 });
  const [weakDisciplines, setWeakDisciplines] = useState([]);

  useEffect(() => {
    const loadDeck = async () => {
      setLoading(true);
      try {
        const localState = getLocalAnkiState(user?.uid || 'guest');
        setAnkiState(localState);

        const querySnapshot = await getDocs(collection(db, "users", user.uid, "exams"));
        let allExams = [];
        querySnapshot.forEach(doc => allExams.push(doc.data()));

        const analysis = analizarHistorial(allExams, BANCO_PREGUNTAS);
        setWeakDisciplines(analysis.weakDisciplines);

        // Si se pasaron tarjetas personalizadas directas
        if (ankiConfig?.customCards && ankiConfig.customCards.length > 0) {
          setCards(ankiConfig.customCards);
          setLoading(false);
          return;
        }

        let deck = [];
        const bancoMap = new Map();
        BANCO_PREGUNTAS.forEach(q => bancoMap.set(q.id, q));

        if (deckMode === 'errors') {
          let rawErrors = [];
          allExams.forEach(exam => {
            if (exam.errores) rawErrors = [...rawErrors, ...exam.errores];
          });
          const uniqueMap = new Map();
          rawErrors.forEach(err => {
            const enriched = bancoMap.get(err.id) || err;
            if (enriched.id && !uniqueMap.has(enriched.id)) {
              uniqueMap.set(enriched.id, enriched);
            }
          });
          deck = Array.from(uniqueMap.values());
        } else if (deckMode === 'weakness') {
          const targetDiscs = analysis.weakDisciplines.length > 0 
            ? analysis.weakDisciplines 
            : ['uropedia', 'urogine', 'uro_funcional'];
          deck = BANCO_PREGUNTAS.filter(q => targetDiscs.includes(q.disciplina));
        } else if (deckMode === 'discipline') {
          if (selectedDiscipline !== 'todas') {
            deck = BANCO_PREGUNTAS.filter(q => q.disciplina === selectedDiscipline);
          } else {
            deck = BANCO_PREGUNTAS;
          }
        } else {
          deck = BANCO_PREGUNTAS;
        }

        const shuffledDeck = deck.sort(() => 0.5 - Math.random());
        setCards(shuffledDeck);
        setCurrentIdx(0);
        setIsFlipped(false);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar mazo Anki:", error);
        setCards(BANCO_PREGUNTAS.slice(0, 30));
        setLoading(false);
      }
    };

    loadDeck();
  }, [user, deckMode, selectedDiscipline, ankiConfig]);

  const handleRate = (rating) => {
    const currentCard = cards[currentIdx];
    if (!currentCard) return;

    const updated = rateCard(currentCard.id, rating, ankiState);
    const newState = { ...ankiState, [currentCard.id]: updated };
    setAnkiState(newState);
    saveLocalAnkiState(newState, user?.uid || 'guest');

    setSessionStats(prev => ({ ...prev, [rating]: prev[rating] + 1 }));

    if (rating === 'again') {
      setCards(prev => [...prev, currentCard]);
    }

    setIsFlipped(false);
    setTimeout(() => {
      if (currentIdx + 1 < cards.length) {
        setCurrentIdx(i => i + 1);
      } else {
        setCurrentIdx(cards.length);
      }
    }, 150);
  };

  const restartDeck = () => {
    const shuffled = [...cards].sort(() => 0.5 - Math.random());
    setCards(shuffled);
    setCurrentIdx(0);
    setIsFlipped(false);
    setSessionStats({ again: 0, hard: 0, good: 0, easy: 0 });
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-14 space-y-3">
        <div className="animate-spin h-10 w-10 sm:h-12 sm:w-12 border-4 border-amber-500 border-t-transparent rounded-full"></div>
        <p className="text-slate-400 font-bold text-xs sm:text-sm text-center">Generando baraja Anki urológica...</p>
      </div>
    );
  }

  // Baraja vacía
  if (cards.length === 0) {
    return (
      <div className="max-w-xl mx-auto text-center p-6 sm:p-10 md:p-14 bg-slate-800 rounded-3xl border border-slate-700 shadow-xl mt-4 fade-in">
        <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h2 className="text-xl font-black text-white mb-2">¡Baraja al día!</h2>
        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
          {deckMode === 'errors' 
            ? 'No tienes errores pendientes por repasar en este momento. ¡Excelente trabajo!' 
            : 'No hay tarjetas disponibles con los filtros seleccionados.'}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-2.5">
          <button 
            onClick={() => { setDeckMode('discipline'); setSelectedDiscipline('todas'); }}
            className="w-full sm:w-auto px-5 py-2.5 bg-amber-500 text-slate-950 font-bold rounded-xl text-xs sm:text-sm hover:bg-amber-400 transition-all active:scale-95"
          >
            Estudiar Todo el Banco en Anki
          </button>
          <button 
            onClick={() => setView('dashboard')} 
            className="w-full sm:w-auto px-5 py-2.5 bg-slate-700 text-white font-bold rounded-xl text-xs sm:text-sm hover:bg-slate-600 transition-all active:scale-95"
          >
            Volver al Menú
          </button>
        </div>
      </div>
    );
  }

  // Fin de la sesión de Anki
  if (currentIdx >= cards.length) {
    return (
      <div className="max-w-xl mx-auto bg-slate-800 p-6 sm:p-10 rounded-3xl border border-slate-700 shadow-2xl text-center mt-4 fade-in">
        <div className="w-14 h-14 rounded-2xl bg-uroblue-600/20 text-uroblue-400 flex items-center justify-center mx-auto mb-3 border border-uroblue-500/30">
          <Sparkles className="w-7 h-7" />
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-white mb-1.5">Sesión Anki Completada</h2>
        <p className="text-slate-400 text-xs sm:text-sm mb-5">Has revisado todas las tarjetas programadas en esta baraja.</p>

        {/* Resumen de la sesión */}
        <div className="grid grid-cols-4 gap-2 mb-6">
          <div className="p-2 sm:p-3 rounded-xl bg-red-950/40 border border-red-800/40">
            <p className="text-[10px] sm:text-xs text-red-400 font-bold">Otra vez</p>
            <p className="text-lg sm:text-xl font-black text-white">{sessionStats.again}</p>
          </div>
          <div className="p-2 sm:p-3 rounded-xl bg-amber-950/40 border border-amber-800/40">
            <p className="text-[10px] sm:text-xs text-amber-400 font-bold">Difícil</p>
            <p className="text-lg sm:text-xl font-black text-white">{sessionStats.hard}</p>
          </div>
          <div className="p-2 sm:p-3 rounded-xl bg-blue-950/40 border border-blue-800/40">
            <p className="text-[10px] sm:text-xs text-blue-400 font-bold">Bien</p>
            <p className="text-lg sm:text-xl font-black text-white">{sessionStats.good}</p>
          </div>
          <div className="p-2 sm:p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/40">
            <p className="text-[10px] sm:text-xs text-emerald-400 font-bold">Fácil</p>
            <p className="text-lg sm:text-xl font-black text-white">{sessionStats.easy}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-2.5">
          <button 
            onClick={restartDeck}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-xl text-xs sm:text-sm transition-all active:scale-95"
          >
            <RotateCcw className="w-4 h-4" /> Repetir Baraja
          </button>
          <button 
            onClick={() => setView('dashboard')}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 bg-uroblue-600 hover:bg-uroblue-500 text-white font-bold rounded-xl text-xs sm:text-sm transition-all shadow active:scale-95"
          >
            Ir al Menú
          </button>
        </div>
      </div>
    );
  }

  const currentCard = cards[currentIdx];
  const discMeta = DISCIPLINAS[currentCard.disciplina] || {
    nombre: currentCard.disciplinaNombre || "Urología",
    badgeClass: "bg-amber-900/40 text-amber-300 border-amber-800/40"
  };
  const diffMeta = DIFICULTADES[currentCard.dificultad] || {
    nombre: currentCard.dificultadNombre || "Intermedia",
    badgeClass: "bg-slate-700 text-slate-300 border-slate-600"
  };

  const progressPct = Math.round(((currentIdx + 1) / cards.length) * 100);

  return (
    <div className="max-w-2xl mx-auto fade-in pb-12 space-y-3 sm:space-y-4">
      {/* Selector de Mazos y Filtros */}
      <div className="bg-slate-800 p-3 sm:p-4 rounded-2xl border border-slate-700 flex flex-wrap items-center justify-between gap-2.5">
        <button 
          onClick={() => setView('dashboard')} 
          className="flex items-center text-slate-400 hover:text-white font-bold text-xs"
        >
          <ArrowLeft className="w-3.5 h-3.5 mr-1"/> Volver
        </button>

        {/* Selector de Mazos Anki */}
        <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-700 text-[11px] font-bold">
          <button
            onClick={() => setDeckMode('errors')}
            className={`px-2.5 py-1 rounded-lg transition-colors active:scale-95 ${deckMode === 'errors' ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'}`}
          >
            Errores
          </button>
          <button
            onClick={() => setDeckMode('weakness')}
            className={`px-2.5 py-1 rounded-lg transition-colors active:scale-95 ${deckMode === 'weakness' ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'}`}
          >
            Debilidades
          </button>
          <button
            onClick={() => setDeckMode('discipline')}
            className={`px-2.5 py-1 rounded-lg transition-colors active:scale-95 ${deckMode === 'discipline' ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'}`}
          >
            Disciplinas
          </button>
        </div>

        <span className="text-slate-400 text-[11px] font-bold shrink-0">
          {currentIdx + 1} / {cards.length}
        </span>
      </div>

      {/* Selector de disciplina si el modo es 'discipline' */}
      {deckMode === 'discipline' && (
        <div className="bg-slate-800/80 p-2.5 rounded-2xl border border-slate-700/80 flex items-center gap-1.5 overflow-x-auto custom-scrollbar">
          <button
            onClick={() => setSelectedDiscipline('todas')}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-bold shrink-0 transition-colors active:scale-95 ${selectedDiscipline === 'todas' ? 'bg-uroblue-600 text-white shadow' : 'bg-slate-900 text-slate-300'}`}
          >
            Todas
          </button>
          {LISTA_DISCIPLINAS.map(d => (
            <button
              key={d.id}
              onClick={() => setSelectedDiscipline(d.id)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-bold shrink-0 transition-colors active:scale-95 ${selectedDiscipline === d.id ? 'bg-uroblue-600 text-white shadow' : 'bg-slate-900 text-slate-300'}`}
            >
              {d.shortName}
            </button>
          ))}
        </div>
      )}

      {/* Barra de progreso de la baraja */}
      <div className="w-full bg-slate-900 rounded-full h-1.5 border border-slate-700/80">
        <div 
          className="bg-amber-500 h-full rounded-full transition-all duration-300"
          style={{ width: `${progressPct}%` }}
        ></div>
      </div>

      {/* Contenedor 3D Flip de la Flashcard (Altura responsiva para celular) */}
      <div className="relative w-full h-[65vh] min-h-[430px] max-h-[520px] md:h-[460px] perspective-1000">
        <div className={`w-full h-full absolute transition-transform duration-500 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
          
          {/* FRENTE DE LA TARJETA */}
          <div 
            className="absolute w-full h-full bg-slate-800 rounded-3xl shadow-xl border-2 border-slate-700 p-5 sm:p-7 flex flex-col justify-between items-center text-center backface-hidden cursor-pointer hover:border-amber-500/50 active:scale-[0.99] transition-all select-none"
            onClick={() => setIsFlipped(true)}
          >
            <div className="w-full flex justify-between items-center">
              <span className={`text-[11px] sm:text-xs font-bold px-2.5 py-0.5 rounded-lg border ${discMeta.badgeClass}`}>
                {discMeta.nombre}
              </span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${diffMeta.badgeClass}`}>
                {diffMeta.nombre}
              </span>
            </div>

            <div className="my-auto px-1 sm:px-3 overflow-y-auto max-h-[260px] custom-scrollbar">
              <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest block mb-1.5">{currentCard.id}</span>
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-white leading-relaxed">
                {currentCard.pregunta}
              </h2>
            </div>

            <div className="w-full pt-3 border-t border-slate-700/60 flex items-center justify-center gap-1.5 text-slate-400 font-bold text-[11px] animate-pulse">
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>Toca en cualquier parte para voltear y ver respuesta</span>
            </div>
          </div>

          {/* REVERSO DE LA TARJETA */}
          <div 
            className="absolute w-full h-full bg-slate-850 rounded-3xl shadow-2xl border-2 border-amber-500/40 p-5 sm:p-7 flex flex-col justify-between backface-hidden rotate-y-180 text-white select-none"
          >
            <div className="w-full flex justify-between items-center mb-1">
              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Respuesta Correcta
              </span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${discMeta.badgeClass}`}>
                {discMeta.shortName}
              </span>
            </div>

            {/* Contenido scrolleable para evitar que se desborde */}
            <div className="overflow-y-auto pr-1 custom-scrollbar my-auto space-y-2.5 max-h-[220px] sm:max-h-[250px]">
              <div className="p-3 bg-emerald-950/40 border border-emerald-800/60 rounded-2xl text-left">
                <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 mb-0.5">
                  Opción {currentCard.respuesta_correcta}:
                </p>
                <p className="text-sm sm:text-base font-black text-white leading-snug">
                  {currentCard.opciones ? currentCard.opciones[currentCard.respuesta_correcta] : 'Opción Correcta'}
                </p>
              </div>

              <div className="bg-slate-900/80 p-3 sm:p-3.5 rounded-2xl border border-slate-700 text-left">
                <h4 className="text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-400" /> Justificación Clínica:
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                  {currentCard.justificacion}
                </p>
              </div>
            </div>

            {/* 4 Botones de Repetición Espaciada Anki (Optimizados para pulgares) */}
            <div className="pt-2.5 border-t border-slate-700/80 shrink-0">
              <p className="text-[10px] font-bold text-center text-slate-400 mb-1.5">
                ¿Qué tan bien dominas este reactivo?
              </p>
              <div className="grid grid-cols-4 gap-1.5">
                <button
                  type="button"
                  onClick={() => handleRate('again')}
                  className="flex flex-col items-center justify-center py-2 px-1 bg-red-950/50 hover:bg-red-900 border border-red-800/60 text-red-300 rounded-xl transition-all active:scale-95"
                >
                  <span className="font-black text-xs">Otra vez</span>
                  <span className="text-[9px] text-red-400/80">&lt; 1 min</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleRate('hard')}
                  className="flex flex-col items-center justify-center py-2 px-1 bg-amber-950/50 hover:bg-amber-900 border border-amber-800/60 text-amber-300 rounded-xl transition-all active:scale-95"
                >
                  <span className="font-black text-xs">Difícil</span>
                  <span className="text-[9px] text-amber-400/80">1 día</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleRate('good')}
                  className="flex flex-col items-center justify-center py-2 px-1 bg-blue-950/50 hover:bg-blue-900 border border-blue-800/60 text-blue-300 rounded-xl transition-all active:scale-95"
                >
                  <span className="font-black text-xs">Bien</span>
                  <span className="text-[9px] text-blue-400/80">3 días</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleRate('easy')}
                  className="flex flex-col items-center justify-center py-2 px-1 bg-emerald-950/50 hover:bg-emerald-900 border border-emerald-800/60 text-emerald-300 rounded-xl transition-all active:scale-95"
                >
                  <span className="font-black text-xs">Fácil</span>
                  <span className="text-[9px] text-emerald-400/80">7 días</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}