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
    gradient: "from-green-600 to-green-500",
  },
  { 
    icon: <Users className="w-6 h-6" />,
    value: "6L+", 
    label: "Customers Served",
    suffix: "Happy Souls",
    gradient: "from-green-500 to-emerald-500",
  },
  { 
    icon: <Package className="w-6 h-6" />,
    value: "350+", 
    label: "Products Crafted",
    suffix: "& Growing",
    gradient: "from-emerald-600 to-green-500",
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
    gradient: "from-green-50 to-emerald-50",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    borderHover: "hover:border-green-300",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Quality Assurance",
    description: "Every product undergoes rigorous testing and quality checks to meet the highest safety standards.",
    gradient: "from-green-50 to-green-100",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    borderHover: "hover:border-green-300",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Traditional Wisdom",
    description: "Our formulations are based on ancient Ayurvedic principles, refined through generations of knowledge.",
    gradient: "from-green-50 to-emerald-50",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    borderHover: "hover:border-green-300",
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
    <section className="relative bg-white py-20 md:py-28 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-100/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-green-50 to-transparent rounded-full blur-3xl" />
        
        {/* Subtle pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, rgba(34,197,94,0.1) 1px, transparent 1px)`,
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
              className="inline-block text-sm font-semibold tracking-widest uppercase mb-6 px-4 py-2 rounded-full bg-green-100 text-green-700 border border-green-200"
            >
              Our Journey
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-900 mb-8 leading-tight"
            >
              It didn't start with a product.{" "}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                  It started with a question.
                </span>
                <div className="absolute bottom-1 left-0 right-0 h-2 bg-green-200 rounded-full" />
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl text-green-600 font-medium mb-6 italic"
            >
              What if healing could be simple again?
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="space-y-5 text-green-800 leading-relaxed"
            >
              <p>
                Our journey began in <span className="text-green-900 font-semibold">2004</span> with dedicated research into 
                <span className="text-green-600 font-medium"> Siddha and Ayurveda</span>, exploring the depth of natural healing and time-tested traditions.
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
              className="mt-8 p-5 rounded-2xl bg-green-50 border border-green-200"
            >
              <p className="text-lg font-semibold text-green-900">
                <span className="text-green-600">Back to roots.</span>{" "}
                <span className="text-green-700">Forward to better living.</span>
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
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold transition-all duration-300 shadow-lg shadow-green-200"
              >
                Explore Our Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white border-2 border-green-200 hover:border-green-400 text-green-700 font-semibold transition-all duration-300"
              >
                Get In Touch
                <ArrowRight className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform" />
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
              <div className="absolute -inset-4 bg-gradient-to-br from-green-100 to-green-50 rounded-3xl blur-xl" />
              
              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-green-200 shadow-2xl shadow-green-100 group">
                <img
                  src="/GroupPhoto.png"
                  alt="Dharani Herbals Team"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = "/Placeholder.png";
                  }}
                />
              </div>
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
                  className="group relative p-4 rounded-2xl bg-white border-2 border-green-100 hover:border-green-300 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md"
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-green-900 mb-0.5">
                      {stat.value}
                    </div>
                    <p className="text-xs font-medium text-green-700 group-hover:text-green-800 transition-colors">
                      {stat.label}
                    </p>
                    <p className="text-[10px] text-green-500 mt-0.5">
                      {stat.suffix}
                    </p>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-green-100/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
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
                className={`group relative p-8 rounded-3xl bg-white border-2 border-green-100 ${value.borderHover} transition-all duration-500 overflow-hidden shadow-sm hover:shadow-lg`}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl ${value.iconBg} flex items-center justify-center ${value.iconColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-green-900 mb-3 group-hover:text-green-800 transition-colors">
                    {value.title}
                  </h3>
                  
                  <p className="text-green-700 group-hover:text-green-800 transition-colors leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-green-100/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
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
              className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white border-2 border-green-100 hover:border-green-300 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600 mb-3 group-hover:scale-110 group-hover:bg-green-200 transition-all duration-300">
                {feature.icon}
              </div>
              <h4 className="text-sm font-semibold text-green-900 mb-1">{feature.title}</h4>
              <p className="text-xs text-green-600 group-hover:text-green-700 transition-colors">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export { OurJourney };