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
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-uroblue-500"></div>
    </div>
  );

  if (!user) return <Auth />;

  return (
    <div className="min-h-screen bg-slate-900 font-sans text-slate-200 selection:bg-uroblue-900 flex flex-col">
      <nav className="bg-slate-800 border-b border-slate-700 px-4 md:px-8 py-3.5 flex justify-between items-center shadow-md sticky top-0 z-20">
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => setCurrentView('dashboard')}
        >
          <div className="w-9 h-9 bg-gradient-to-tr from-uroblue-700 to-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-sm md:text-base shadow group-hover:scale-105 transition-transform">
            C
          </div>
          <div>
            <h1 className="text-base md:text-lg font-black text-white tracking-tight leading-none">CONAMEU Prep</h1>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Simulador & Anki Urología</span>
          </div>
        </div>

        {/* Enlaces de Navegación Rápida */}
        <div className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={() => setCurrentView('dashboard')} 
            className={`flex items-center gap-1.5 text-xs md:text-sm font-bold px-3 py-1.5 rounded-xl transition-all ${
              currentView === 'dashboard' 
                ? 'bg-uroblue-600/20 text-uroblue-400 border border-uroblue-500/30' 
                : 'text-slate-300 hover:text-white hover:bg-slate-750'
            }`}
          >
            <LayoutDashboard className="w-4 h-4 hidden sm:inline" /> Menú
          </button>

          <button 
            onClick={() => {
              setSimConfig({ count: 30, mode: 'random', disciplina: 'todas', dificultad: 'todas' });
              setCurrentView('sim');
            }} 
            className={`flex items-center gap-1.5 text-xs md:text-sm font-bold px-3 py-1.5 rounded-xl transition-all ${
              currentView === 'sim' 
                ? 'bg-uroblue-600/20 text-uroblue-400 border border-uroblue-500/30' 
                : 'text-slate-300 hover:text-white hover:bg-slate-750'
            }`}
          >
            <Waves className="w-4 h-4 hidden sm:inline" /> Simulador
          </button>

          <button 
            onClick={() => {
              setAnkiConfig({ mode: 'errors', disciplina: 'todas' });
              setCurrentView('errors');
            }} 
            className={`flex items-center gap-1.5 text-xs md:text-sm font-bold px-3 py-1.5 rounded-xl transition-all ${
              currentView === 'errors' 
                ? 'bg-amber-600/20 text-amber-400 border border-amber-500/30' 
                : 'text-slate-300 hover:text-white hover:bg-slate-750'
            }`}
          >
            <Brain className="w-4 h-4 hidden sm:inline" /> Anki
          </button>

          <button 
            onClick={() => setCurrentView('history')} 
            className={`flex items-center gap-1.5 text-xs md:text-sm font-bold px-3 py-1.5 rounded-xl transition-all ${
              currentView === 'history' 
                ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/30' 
                : 'text-slate-300 hover:text-white hover:bg-slate-750'
            }`}
          >
            <FlaskConical className="w-4 h-4 hidden sm:inline" /> Desempeño
          </button>

          <button 
            onClick={() => auth.signOut()} 
            title="Cerrar Sesión"
            className="text-xs md:text-sm font-bold text-red-400 hover:text-red-300 bg-red-950/40 border border-red-800/40 px-3 py-1.5 rounded-xl transition-colors ml-1"
          >
            <LogOut className="w-4 h-4 sm:hidden inline" />
            <span className="hidden sm:inline">Salir</span>
          </button>
        </div>
      </nav>
      
      <main className="flex-1 w-full max-w-5xl mx-auto p-4 md:p-6 mt-1 md:mt-3">
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
      
      <footer className="text-center text-slate-500 text-xs md:text-sm py-6 border-t border-slate-800 mt-auto">
        CONAMEU Prep • Banco Urológico por Subdisciplinas & Repetición Espaciada Anki • 2026
      </footer>
    </div>
  );
}