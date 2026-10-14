import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import Simulator from './components/Simulator';
import ErrorReview from './components/ErrorReview';
import History from './components/History';
import { Brain, Waves, FlaskConical, LayoutDashboard, LogOut } from 'lucide-react';

export default function App() {
  const [user, setUser] = useState(null);
  const [currentView, setCurrentView] = useState('dashboard');
  const [loading, setLoading] = useState(true);
  const [simConfig, setSimConfig] = useState({ count: 30, mode: 'random', disciplina: 'todas', dificultad: 'todas' });
  const [ankiConfig, setAnkiConfig] = useState({ mode: 'errors', disciplina: 'todas' });

  useEffect(() => {
    return onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  if (loading) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 gap-3">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-uroblue-500"></div>
      <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Cargando CONAMEU Prep...</p>
    </div>
  );

  if (!user) return <Auth />;

  return (
    <div className="min-h-screen bg-slate-900 font-sans text-slate-200 selection:bg-uroblue-900 flex flex-col">
      {/* Top Header - Optimizado para móvil y desktop */}
      <nav className="bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 md:px-8 py-3 flex justify-between items-center shadow-md sticky top-0 z-30 pt-safe">
        <div 
          className="flex items-center gap-2.5 cursor-pointer select-none active:opacity-80 transition-opacity" 
          onClick={() => setCurrentView('dashboard')}
        >
          <div className="w-8 h-8 md:w-9 md:h-9 bg-gradient-to-tr from-uroblue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-sm md:text-base shadow-md">
            C
          </div>
          <div>
            <h1 className="text-base md:text-lg font-black text-white tracking-tight leading-none">CONAMEU Prep</h1>
            <span className="text-[10px] text-slate-400 font-bold tracking-wider">Simulador Urológico</span>
          </div>
        </div>

        {/* Enlaces Desktop (ocultos en móvil) */}
        <div className="hidden md:flex items-center gap-2">
          <button 
            onClick={() => setCurrentView('dashboard')} 
            className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-xl transition-all ${
              currentView === 'dashboard' 
                ? 'bg-uroblue-600/20 text-uroblue-400 border border-uroblue-500/40' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" /> Menú
          </button>

          <button 
            onClick={() => {
              setSimConfig({ count: 30, mode: 'random', disciplina: 'todas', dificultad: 'todas' });
              setCurrentView('sim');
            }} 
            className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-xl transition-all ${
              currentView === 'sim' 
                ? 'bg-uroblue-600/20 text-uroblue-400 border border-uroblue-500/40' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Waves className="w-4 h-4" /> Simulador
          </button>

          <button 
            onClick={() => {
              setAnkiConfig({ mode: 'errors', disciplina: 'todas' });
              setCurrentView('errors');
            }} 
            className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-xl transition-all ${
              currentView === 'errors' 
                ? 'bg-amber-600/20 text-amber-400 border border-amber-500/40' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Brain className="w-4 h-4" /> Anki
          </button>

          <button 
            onClick={() => setCurrentView('history')} 
            className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-xl transition-all ${
              currentView === 'history' 
                ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/40' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <FlaskConical className="w-4 h-4" /> Desempeño
          </button>
        </div>

        {/* Botón Salir */}
        <button 
          onClick={() => auth.signOut()} 
          title="Cerrar Sesión"
          className="text-xs font-bold text-red-400 hover:text-red-300 bg-red-950/40 border border-red-800/40 px-3 py-1.5 rounded-xl transition-all active:scale-95 flex items-center gap-1.5"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Salir</span>
        </button>
      </nav>
      
      {/* Contenido Principal con padding inferior seguro para la barra móvil */}
      <main className="flex-1 w-full max-w-5xl mx-auto p-3 sm:p-5 md:p-6 pb-28 md:pb-12">
        {currentView === 'dashboard' && (
          <Dashboard 
            setView={setCurrentView} 
            setSimConfig={setSimConfig} 
            setAnkiConfig={setAnkiConfig} 
            user={user} 
          />
        )}
        {currentView === 'sim' && (
          <Simulator 
            setView={setCurrentView} 
            user={user} 
            config={simConfig} 
            setAnkiConfig={setAnkiConfig} 
          />
        )}
        {currentView === 'errors' && (
          <ErrorReview 
            setView={setCurrentView} 
            user={user} 
            ankiConfig={ankiConfig} 
          />
        )}
        {currentView === 'history' && (
          <History 
            setView={setCurrentView} 
            user={user} 
            setSimConfig={setSimConfig} 
            setAnkiConfig={setAnkiConfig} 
          />
        )}
      </main>

      {/* Barra de Navegación Inferior Nativa para Celular (Visible solo en pantallas móviles < 768px) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 px-2 py-1.5 pb-safe flex justify-around items-center shadow-2xl">
        <button
          onClick={() => setCurrentView('dashboard')}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
            currentView === 'dashboard'
              ? 'text-uroblue-400 font-bold scale-105'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <LayoutDashboard className="w-5 h-5 mb-0.5" />
          <span className="text-[10px]">Menú</span>
        </button>

        <button
          onClick={() => {
            setSimConfig({ count: 30, mode: 'random', disciplina: 'todas', dificultad: 'todas' });
            setCurrentView('sim');
          }}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
            currentView === 'sim'
              ? 'text-uroblue-400 font-bold scale-105'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Waves className="w-5 h-5 mb-0.5" />
          <span className="text-[10px]">Simulador</span>
        </button>

        <button
          onClick={() => {
            setAnkiConfig({ mode: 'errors', disciplina: 'todas' });
            setCurrentView('errors');
          }}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
            currentView === 'errors'
              ? 'text-amber-400 font-bold scale-105'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Brain className="w-5 h-5 mb-0.5" />
          <span className="text-[10px]">Anki</span>
        </button>

        <button
          onClick={() => setCurrentView('history')}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
            currentView === 'history'
              ? 'text-emerald-400 font-bold scale-105'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <FlaskConical className="w-5 h-5 mb-0.5" />
          <span className="text-[10px]">Desempeño</span>
        </button>
      </nav>

      {/* Footer solo para desktop */}
      <footer className="hidden md:block text-center text-slate-500 text-xs py-6 border-t border-slate-800 mt-auto">
        CONAMEU Prep • Banco Urológico por Subdisciplinas & Repetición Espaciada Anki • 2026
      </footer>
    </div>
  );
}