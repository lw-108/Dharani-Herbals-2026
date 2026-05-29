"use client";

import { motion } from "framer-motion";
import { 
  Leaf, 
  ShieldCheck, 
  BookOpen, 
  Truck, 
  Lock, 
  Star,
  ArrowRight,
  Users,
  Package,
  Heart
} from "lucide-react";

const stats = [
  { 
    icon: <Heart className="w-6 h-6" />,
    value: "15+", 
    label: "Legacy of Trust",
    suffix: "Years",
    gradient: "from-rose-500 to-pink-500",
  },
  { 
    icon: <Users className="w-6 h-6" />,
    value: "6L+", 
    label: "Customers Served",
    suffix: "Happy Souls",
    gradient: "from-blue-500 to-cyan-500",
  },
  { 
    icon: <Package className="w-6 h-6" />,
    value: "350+", 
    label: "Products Crafted",
    suffix: "& Growing",
    gradient: "from-emerald-500 to-green-500",
  },
  { 
    icon: <Leaf className="w-6 h-6" />,
    value: "100%", 
    label: "Chemical-Free",
    suffix: "Pure Natural",
    gradient: "from-green-500 to-emerald-500",
  },
];

const values = [
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "100% Natural Ingredients",
    description: "We source only the finest natural herbs and ingredients, ensuring purity and potency in every product.",
    gradient: "from-green-500/20 to-emerald-500/20",
    iconBg: "bg-green-500/10",
    iconColor: "text-green-400",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Quality Assurance",
    description: "Every product undergoes rigorous testing and quality checks to meet the highest safety standards.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Traditional Wisdom",
    description: "Our formulations are based on ancient Ayurvedic principles, refined through generations of knowledge.",
    gradient: "from-amber-500/20 to-orange-500/20",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
  },
];

const features = [
  {
    icon: <Leaf className="w-5 h-5" />,
    title: "100% Natural",
    description: "Pure herbal products",
  },
  {
    icon: <Truck className="w-5 h-5" />,
    title: "Free Delivery",
    description: "On orders above ₹750 (TN) / ₹1000 (Other States)",
  },
  {
    icon: <Lock className="w-5 h-5" />,
    title: "Secure Payment",
    description: "Safe & encrypted",
  },
  {
    icon: <Star className="w-5 h-5" />,
    title: "Quality Assured",
    description: "Lab tested products",
  },
];

const OurJourney = () => {
  return (
    <section className="relative bg-[#0a0f09] py-20 md:py-28 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-500/3 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-emerald-500/2 to-transparent rounded-full blur-3xl" />
        
        {/* Subtle pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, rgba(255,255,255,0.2) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Story Section - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24 md:mb-32">
          {/* Left - Story Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-block text-sm font-semibold tracking-widest uppercase mb-6 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
            >
              Our Journey
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight"
            >
              It didn't start with a product.{" "}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
                  It started with a question.
                </span>
                <div className="absolute bottom-1 left-0 right-0 h-2 bg-emerald-500/10 rounded-full" />
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl text-emerald-400 font-medium mb-6 italic"
            >
              What if healing could be simple again?
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="space-y-5 text-gray-300 leading-relaxed"
            >
              <p>
                Our journey began in <span className="text-white font-semibold">2004</span> with dedicated research into 
                <span className="text-emerald-400 font-medium"> Siddha and Ayurveda</span>, exploring the depth of natural healing and time-tested traditions.
              </p>
              <p>
                In a world overwhelmed by artificial solutions and quick fixes, we chose a different path — one that returns to purity, to tradition, and to the quiet power of nature.
              </p>
              <p>
                Every product we create reflects this commitment, blending ancient wisdom with modern care to deliver safe, effective, and truly natural healing.
              </p>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-emerald-500/5 to-green-500/5 border border-emerald-500/10"
            >
              <p className="text-lg font-semibold text-white">
                <span className="text-emerald-400">Back to roots.</span>{" "}
                <span className="text-gray-300">Forward to better living.</span>
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-all duration-300 shadow-lg shadow-emerald-500/25"
              >
                Explore Our Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:border-emerald-500/30 text-white font-semibold transition-all duration-300"
              >
                Get In Touch
                <ArrowRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right - Group Photo (Desktop) / Bottom (Mobile) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative lg:order-last"
          >
            {/* Decorative frame */}
            <div className="relative">
              {/* Background glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/10 to-green-500/5 rounded-3xl blur-xl" />
              
              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-emerald-500/10 group">
                <img
                  src="/GroupPhoto.png"
                  alt="Dharani Herbals Team"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = "/Placeholder.png";
                  }}
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Brand badge on image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/60 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                    <h3 className="text-xl font-bold text-white">
                      Dharani{" "}
                      <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
                        Herbals
                      </span>
                    </h3>
                    <p className="text-xs text-emerald-400/80 mt-0.5 tracking-wider uppercase">About Us</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-500/10 rounded-full blur-xl" />
            </div>

            {/* Stats Grid - Below Image */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -3 }}
                  className="group relative p-4 rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-white/5 hover:border-emerald-500/20 transition-all duration-300 overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-0.5">
                      {stat.value}
                    </div>
                    <p className="text-xs font-medium text-gray-400 group-hover:text-gray-300 transition-colors">
                      {stat.label}
                    </p>
                    <p className="text-[10px] text-emerald-500/60 mt-0.5">
                      {stat.suffix}
                    </p>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/3 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group relative p-8 rounded-3xl bg-white/[0.02] backdrop-blur-sm border border-white/5 hover:border-emerald-500/20 transition-all duration-500 overflow-hidden"
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl ${value.iconBg} flex items-center justify-center ${value.iconColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/3 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
              whileHover={{ y: -3 }}
              className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-emerald-500/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-3 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300">
                {feature.icon}
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">{feature.title}</h4>
              <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export { OurJourney };