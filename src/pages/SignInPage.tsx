import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Mail, Lock, Eye, EyeOff, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';

export const SignInPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setStatus('error');
      setMessage('Please enter both email and password.');
      return;
    }

    if (!email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    // Mock successful login
    setStatus('success');
    setMessage('Welcome back! Successfully logged in.');
    
    // Redirect to Shop All after 1.5 seconds
    setTimeout(() => {
      navigate('/EveryProducts');
    }, 1500);
  };

  return (
    <section className="min-h-[85vh] bg-[#0a0f09] flex items-center justify-center p-4 sm:p-6 md:p-10">
      <div className="max-w-5xl w-full bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[600px]">
        
        {/* LEFT HALF - IMAGE (Hidden on mobile) */}
        <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-full overflow-hidden bg-emerald-950">
          <img
            src="/TabView.png"
            alt="Dharani Herbbals Nature"
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            onError={(e) => {
              // Fallback if image doesn't exist
              e.currentTarget.src = "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=60";
            }}
          />
          {/* Glassmorphism content overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f09] via-transparent to-transparent flex flex-col justify-end p-8 text-white">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-4 w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              100% Organic & Chemical-Free
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight mb-2">Dharani Herbbals</h2>
            <p className="text-gray-300 text-sm max-w-sm">
              Reconnect with nature's pure essence and explore our wide collection of holistic wellness products.
            </p>
          </div>
        </div>

        {/* RIGHT HALF - FORM */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-center bg-white/[0.01]">
          <div className="max-w-md w-full mx-auto">
            <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Sign In</h1>
            <p className="text-gray-400 text-sm mb-6">Enter your details to access your account</p>

            {/* Notification Messages */}
            {status === 'success' && (
              <div className="mb-6 flex items-start gap-3 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-emerald-400">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">{message}</span>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">{message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email field */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === 'error') setStatus('idle');
                    }}
                    placeholder="name@example.com"
                    className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-emerald-500 rounded-2xl pl-11 pr-4 py-3 text-white placeholder-gray-600 outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Password field */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">Password</label>
                  <a href="#" className="text-xs font-medium text-emerald-400 hover:underline">Forgot password?</a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (status === 'error') setStatus('idle');
                    }}
                    placeholder="••••••••"
                    className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-emerald-500 rounded-2xl pl-11 pr-12 py-3 text-white placeholder-gray-600 outline-none transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl py-3 font-semibold text-sm transition-colors shadow-lg shadow-emerald-500/10">
                Sign In
              </Button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-6">
              Don't have an account?{' '}
              <Link to="/signup" className="text-emerald-400 font-semibold hover:underline">
                Create one
              </Link>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SignInPage;
