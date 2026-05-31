// src/pages/AdminLogin.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdminAuth } from "@/context/AdminAuthContext";
import { Button } from "@/components/ui/button";
import { Sparkles, Lock, User, Shield, AlertCircle } from "lucide-react";

const AdminLogin: React.FC = () => {
  const { login } = useAdminAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const success = await login(username, password);
    if (success) {
      navigate("/admin/dashboard");
    } else {
      setError("Invalid credentials");
    }
    setLoading(false);
  };

  return (
    <section className="min-h-[85vh] bg-white flex items-center justify-center p-4 sm:p-6 md:p-10">
      <div className="max-w-5xl w-full bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden shadow-2xl flex flex-col-reverse md:flex-row min-h-[600px]">
        
        {/* LEFT SIDE - Admin Login Form */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-center bg-white/[0.01]">
          <div className="max-w-md w-full mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-4 w-fit">
              <Shield className="w-3.5 h-3.5" />
              Admin Access
            </div>

            <h1 className="text-3xl font-extrabold text-[green] mb-2">
              Admin Login
            </h1>

            <p className="text-gray-400 text-sm mb-6">
              Secure access for authorized administrators only
            </p>

            {/* ERROR MESSAGE */}
            {error && (
              <div className="mb-6 flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">{error}</span>
              </div>
            )}

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* USERNAME */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Username
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                      if (error) setError(null);
                    }}
                    placeholder="Enter admin username"
                    className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-emerald-500 rounded-2xl pl-11 pr-4 py-3 text-white placeholder-gray-600 outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (error) setError(null);
                    }}
                    placeholder="••••••••"
                    className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-emerald-500 rounded-2xl pl-11 pr-4 py-3 text-white placeholder-gray-600 outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl py-3 font-semibold text-sm transition-colors shadow-lg shadow-emerald-500/10 disabled:opacity-60"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Authenticating...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4" />
                    Sign In to Admin
                  </div>
                )}
              </Button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-6">
              <span className="text-gray-500">Not an admin? </span>
              <a href="/signin" className="text-emerald-400 font-semibold hover:underline">
                User Login
              </a>
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - Image/Branding */}
        <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-full overflow-hidden bg-emerald-950">
          <img
            src="/TabView.png"
            alt="Admin Dashboard"
            className="w-full h-full object-cover opacity-80"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60";
            }}
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f09] via-transparent to-transparent flex flex-col justify-end p-8 text-white">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-4 w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              Administration Panel
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight mb-2">
              Admin Dashboard
            </h2>

            <p className="text-gray-300 text-sm max-w-sm">
              Manage products, orders, and users from a powerful administration panel designed for efficiency.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>Secure Access</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <Lock className="w-4 h-4 text-emerald-400" />
                <span>Encrypted Connection</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminLogin;