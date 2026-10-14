import React, { useState } from 'react';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  sendPasswordResetEmail 
} from 'firebase/auth';
import { auth } from '../firebase';
import { Activity, Mail, Lock, KeyRound, ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Auth() {
  // 'login', 'register', 'forgot'
  const [mode, setMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');
    setSubmitting(true);

    try {
      if (mode === 'login') {
        await signInWithEmailAndPassword(auth, email.trim(), password);
      } else if (mode === 'register') {
        await createUserWithEmailAndPassword(auth, email.trim(), password);
      } else if (mode === 'forgot') {
        await sendPasswordResetEmail(auth, email.trim());
        setSuccessMsg(
          '¡Correo de recuperación enviado! Revisa tu bandeja de entrada o carpeta de spam y sigue el enlace para restablecer tu contraseña.'
        );
      }
    } catch (err) {
      console.error("Auth error:", err);
      const code = err.code || '';
      if (code === 'auth/user-not-found') {
        setError('No existe una cuenta registrada con este correo electrónico.');
      } else if (code === 'auth/wrong-password' || code === 'auth/invalid-credential') {
        setError('Contraseña o correo incorrectos. Verifica tus datos.');
      } else if (code === 'auth/email-already-in-use') {
        setError('Ya existe una cuenta con este correo. Inicia sesión en su lugar.');
      } else if (code === 'auth/weak-password') {
        setError('La contraseña debe tener al menos 6 caracteres.');
      } else if (code === 'auth/invalid-email') {
        setError('Por favor ingresa un correo electrónico válido.');
      } else if (code === 'auth/too-many-requests') {
        setError('Demasiados intentos fallidos. Por favor espera unos minutos o restablece tu contraseña.');
      } else {
        setError('Ocurrió un error al procesar tu solicitud. Intenta nuevamente.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 p-4">
      <div className="max-w-md w-full bg-slate-800 rounded-3xl shadow-2xl border border-slate-700 overflow-hidden fade-in">
        {/* Cabecera */}
        <div className="bg-gradient-to-b from-slate-850 to-slate-900 p-6 sm:p-8 text-center relative border-b border-slate-700">
          <div className="w-14 h-14 bg-gradient-to-tr from-uroblue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-3 shadow-lg">
            <Activity className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">CONAMEU Prep</h2>
          <p className="text-slate-400 mt-1 text-xs sm:text-sm font-medium">
            {mode === 'forgot' 
              ? 'Recuperación de Contraseña' 
              : mode === 'register' 
                ? 'Crear Cuenta de Residente' 
                : 'Simulador Urológico de Examen de Consejo'}
          </p>
        </div>

        {/* Formulario */}
        <div className="p-6 sm:p-8">
          {/* Mensaje de Error */}
          {error && (
            <div className="bg-red-950/40 text-red-300 p-3.5 rounded-2xl mb-5 text-xs sm:text-sm border border-red-800/60 font-medium flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {/* Mensaje de Éxito */}
          {successMsg && (
            <div className="bg-emerald-950/40 text-emerald-300 p-3.5 rounded-2xl mb-5 text-xs sm:text-sm border border-emerald-800/60 font-medium flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{successMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-uroblue-400" /> Correo Electrónico
              </label>
              <input 
                type="email" 
                required 
                placeholder="ejemplo@hospital.com"
                className="block w-full px-4 py-3 bg-slate-900 border border-slate-700 text-white rounded-xl focus:ring-2 focus:ring-uroblue-500 focus:border-uroblue-500 outline-none transition-all text-sm placeholder:text-slate-600" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
              />
            </div>

            {mode !== 'forgot' && (
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-uroblue-400" /> Contraseña
                  </label>
                  {mode === 'login' && (
                    <button
                      type="button"
                      onClick={() => {
                        setError('');
                        setSuccessMsg('');
                        setMode('forgot');
                      }}
                      className="text-[11px] font-bold text-uroblue-400 hover:text-uroblue-300 hover:underline transition-colors"
                    >
                      ¿Olvidaste tu contraseña?
                    </button>
                  )}
                </div>
                <input 
                  type="password" 
                  required 
                  placeholder="••••••••"
                  className="block w-full px-4 py-3 bg-slate-900 border border-slate-700 text-white rounded-xl focus:ring-2 focus:ring-uroblue-500 focus:border-uroblue-500 outline-none transition-all text-sm placeholder:text-slate-600" 
                  value={password} 
                  onChange={e => setPassword(e.target.value)} 
                />
              </div>
            )}

            <button 
              type="submit" 
              disabled={submitting}
              className="w-full bg-gradient-to-r from-uroblue-600 to-indigo-600 hover:from-uroblue-500 hover:to-indigo-500 text-white font-black py-3.5 px-4 rounded-xl shadow-lg transition-all active:scale-[0.98] mt-2 text-sm flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {submitting ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : mode === 'login' ? (
                'Iniciar Sesión'
              ) : mode === 'register' ? (
                'Crear Cuenta'
              ) : (
                'Enviar Enlace de Recuperación'
              )}
            </button>
          </form>

          {/* Enlaces de Cambio de Modo */}
          <div className="mt-6 text-center border-t border-slate-700/80 pt-5 space-y-2">
            {mode === 'forgot' ? (
              <button 
                type="button"
                onClick={() => {
                  setError('');
                  setSuccessMsg('');
                  setMode('login');
                }} 
                className="text-slate-400 hover:text-white font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-1.5 mx-auto"
              >
                <ArrowLeft className="w-4 h-4" /> Volver a Iniciar Sesión
              </button>
            ) : mode === 'login' ? (
              <button 
                type="button"
                onClick={() => {
                  setError('');
                  setSuccessMsg('');
                  setMode('register');
                }} 
                className="text-slate-400 hover:text-white font-semibold text-xs sm:text-sm transition-colors"
              >
                ¿Nuevo residente? <span className="text-uroblue-400 font-bold underline">Crea tu cuenta aquí</span>
              </button>
            ) : (
              <button 
                type="button"
                onClick={() => {
                  setError('');
                  setSuccessMsg('');
                  setMode('login');
                }} 
                className="text-slate-400 hover:text-white font-semibold text-xs sm:text-sm transition-colors"
              >
                ¿Ya tienes una cuenta? <span className="text-uroblue-400 font-bold underline">Inicia sesión</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}