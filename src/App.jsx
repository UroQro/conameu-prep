import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import Simulator from './components/Simulator';
import ErrorReview from './components/ErrorReview';
import History from './components/History';

export default function App() {
  const [user, setUser] = useState(null);
  const [currentView, setCurrentView] = useState('dashboard');
  const [loading, setLoading] = useState(true);
  const [simConfig, setSimConfig] = useState({ count: 30, mode: 'random' });

  useEffect(() => {
    return onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-slate-900"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-uroblue-500"></div></div>;
  if (!user) return <Auth />;

  return (
    <div className="min-h-screen bg-slate-900 font-sans text-slate-200 selection:bg-uroblue-900 flex flex-col">
      <nav className="bg-slate-800 border-b border-slate-700 px-4 md:px-8 py-4 flex justify-between items-center shadow-md sticky top-0 z-10">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentView('dashboard')}>
          <div className="w-8 h-8 bg-uroblue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm md:text-base">C</div>
          <h1 className="text-lg md:text-xl font-bold text-white tracking-tight">CONAMEU Prep</h1>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <button onClick={() => setCurrentView('dashboard')} className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">Menú</button>
          <button onClick={() => auth.signOut()} className="text-sm font-semibold text-red-400 hover:text-red-300 bg-red-900/30 px-3 py-1.5 md:px-4 md:py-2 rounded-lg transition-colors">Salir</button>
        </div>
      </nav>
      
      <main className="flex-1 w-full max-w-5xl mx-auto p-4 md:p-6 mt-2 md:mt-4">
        {currentView === 'dashboard' && <Dashboard setView={setCurrentView} setSimConfig={setSimConfig} />}
        {currentView === 'sim' && <Simulator setView={setCurrentView} user={user} config={simConfig} />}
        {currentView === 'errors' && <ErrorReview setView={setCurrentView} user={user} />}
        {currentView === 'history' && <History setView={setCurrentView} user={user} />}
      </main>
      
      <footer className="text-center text-slate-500 text-xs md:text-sm py-6 border-t border-slate-800 mt-auto">
        © 2026 RSZ | Versión 1.2.0
      </footer>
    </div>
  );
}