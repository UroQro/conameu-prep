import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { Activity } from 'lucide-react';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      if (isLogin) await signInWithEmailAndPassword(auth, email, password);
      else await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError('Credenciales incorrectas o el usuario ya existe.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 p-4">
      <div className="max-w-md w-full bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden">
        <div className="bg-slate-900 p-8 text-center relative border-b border-slate-700">
          <Activity className="w-12 h-12 text-uroblue-500 mx-auto mb-4 opacity-90" />
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">CONAMEU Prep</h2>
          <p className="text-slate-400 mt-2 text-sm font-medium">Plataforma de Entrenamiento</p>
        </div>
        <div className="p-6 md:p-8">
          {error && <div className="bg-red-900/30 text-red-400 p-3 rounded-lg mb-6 text-sm border border-red-800 font-medium">{error}</div>}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-slate-300 mb-1">Correo Electrónico</label>
              <input type="email" required className="block w-full px-4 py-3 bg-slate-900 border border-slate-600 text-white rounded-xl focus:ring-2 focus:ring-uroblue-500 outline-none transition-all" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-300 mb-1">Contraseña</label>
              <input type="password" required className="block w-full px-4 py-3 bg-slate-900 border border-slate-600 text-white rounded-xl focus:ring-2 focus:ring-uroblue-500 outline-none transition-all" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="w-full bg-uroblue-600 text-white font-bold py-3.5 px-4 rounded-xl hover:bg-uroblue-500 transition-all shadow-md mt-4">
              {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
            </button>
          </form>
          <div className="mt-8 text-center border-t border-slate-700 pt-6">
            <button onClick={() => setIsLogin(!isLogin)} className="text-slate-400 hover:text-white font-semibold text-sm transition-colors">
              {isLogin ? '¿Nuevo residente? Crea tu cuenta' : '¿Ya tienes cuenta? Inicia sesión'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}