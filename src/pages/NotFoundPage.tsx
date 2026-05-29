import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ShoppingBag, Leaf, Compass } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#fafaf7] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
      {/* Decorative leafy elements */}
      <div className="absolute top-10 left-10 text-emerald-800/10 rotate-12 pointer-events-none">
        <Leaf size={140} />
      </div>
      <div className="absolute bottom-10 right-10 text-emerald-800/10 -rotate-45 pointer-events-none">
        <Leaf size={180} />
      </div>
      <div className="absolute top-1/4 right-1/4 text-emerald-800/5 rotate-90 pointer-events-none">
        <Compass size={220} />
      </div>

      <div className="max-w-md w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-emerald-700 font-semibold tracking-wider uppercase text-sm bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
            Error 404
          </span>
          <h1 className="mt-4 text-8xl font-black text-emerald-950 tracking-tight font-serif">
            404
          </h1>
          <p className="mt-2 text-3xl font-bold text-emerald-900 tracking-tight">
            Path not found
          </p>
          <p className="mt-4 text-emerald-700/80 text-base leading-relaxed">
            The wellness remedy or page you are looking for has wandered off the natural path. Let's get you back to the roots of health.
          </p>
        </motion.div>

        <motion.div
          className="mt-8 space-y-3 sm:space-y-0 sm:flex sm:gap-4 sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            to="/"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 border border-emerald-800 text-emerald-800 hover:bg-emerald-50/50 font-medium rounded-full transition-all duration-300 shadow-sm"
          >
            <Home size={18} />
            <span>Go Home</span>
          </Link>
          <Link
            to="/EveryProducts"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-emerald-800 hover:bg-emerald-700 text-white font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <ShoppingBag size={18} />
            <span>Shop Remedies</span>
          </Link>
        </motion.div>

        <motion.div
          className="mt-12 text-xs text-emerald-900/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Dharani Herbbals — Purely Natural, Eternally Pure.
        </motion.div>
      </div>
    </div>
  );
}
