"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRightIcon, SparklesIcon } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Hair",
    description: "Natural hair care solutions for healthy, lustrous hair",
    image: "/categories/hair.jpg",
    productCount: "12 Products",
    gradient: "from-amber-500/80 to-orange-600/80",
    bgGradient: "from-amber-500/20 to-transparent",
    tagColor: "bg-amber-500",
  },
  {
    name: "Skin",
    description: "Radiant, glowing skin with natural ingredients",
    image: "/categories/skin.jpg",
    productCount: "18 Products",
    gradient: "from-rose-500/80 to-pink-600/80",
    bgGradient: "from-rose-500/20 to-transparent",
    tagColor: "bg-rose-500",
  },
  {
    name: "Baby",
    description: "Gentle, safe care for your little ones",
    image: "/categories/baby.jpg",
    productCount: "8 Products",
    gradient: "from-sky-500/80 to-blue-600/80",
    bgGradient: "from-sky-500/20 to-transparent",
    tagColor: "bg-sky-500",
  },
  {
    name: "Beverages",
    description: "Healthy, refreshing drinks & herbal infusions",
    image: "/categories/beverages.jpg",
    productCount: "10 Products",
    gradient: "from-emerald-500/80 to-teal-600/80",
    bgGradient: "from-emerald-500/20 to-transparent",
    tagColor: "bg-emerald-500",
  },
  {
    name: "Body",
    description: "Complete body care for total wellness",
    image: "/categories/body.jpg",
    productCount: "15 Products",
    gradient: "from-violet-500/80 to-purple-600/80",
    bgGradient: "from-violet-500/20 to-transparent",
    tagColor: "bg-violet-500",
  },
  {
    name: "Food",
    description: "Nutritious, wholesome natural food products",
    image: "/categories/food.jpg",
    productCount: "20 Products",
    gradient: "from-red-500/80 to-rose-600/80",
    bgGradient: "from-red-500/20 to-transparent",
    tagColor: "bg-red-500",
  },
  {
    name: "Health & Wellness",
    description: "Your complete journey to natural wellness",
    image: "/categories/health.jpg",
    productCount: "25 Products",
    gradient: "from-green-500/80 to-emerald-600/80",
    bgGradient: "from-green-500/20 to-transparent",
    tagColor: "bg-green-500",
  },
  {
    name: "Poojas",
    description: "Sacred essentials for spiritual rituals",
    image: "/categories/poojas.jpg",
    productCount: "14 Products",
    gradient: "from-yellow-500/80 to-amber-600/80",
    bgGradient: "from-yellow-500/20 to-transparent",
    tagColor: "bg-yellow-500",
  },
];

const ShopByCategory = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const featuredCategories = categories.slice(0, 2);
  const regularCategories = categories.slice(2);

  return (
    <section className="relative bg-[#12210f] py-20 md:py-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-[0.03]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-b from-emerald-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
          >
            <SparklesIcon className="w-4 h-4" />
            Shop by Category
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Discover Our{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
                Collections
              </span>
              <div className="absolute bottom-2 left-0 right-0 h-3 bg-emerald-500/20 -rotate-1" />
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed">
            Explore our thoughtfully curated range of natural herbal products, crafted to support your journey to wellness.
          </p>
        </motion.div>

        {/* Featured Categories - Large Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6 mb-6"
        >
          {featuredCategories.map((category) => (
            <motion.div
              key={category.name}
              whileHover={{ y: -5 }}
              className="group relative cursor-pointer rounded-3xl overflow-hidden h-[400px] md:h-[500px]"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = "/Placeholder.png";
                  }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.bgGradient} via-black/60 to-black/40`} />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8 md:p-10">
                <div className="transform group-hover:translate-y-0 translate-y-2 transition-transform duration-500">
                  <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${category.tagColor} text-white mb-4 shadow-lg`}>
                    {category.productCount}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    {category.name}
                  </h3>
                  <p className="text-gray-300 mb-6 max-w-md">
                    {category.description}
                  </p>
                  {
                    /* Wrap Explore Collection button in Link to dynamic route based on category name */
                    <Link to={`/${category.name.replace(/[\s&]+/g, '')}Products`}>
                      <motion.button whileHover={{ x: 5 }} className="inline-flex items-center gap-2 text-white font-semibold group/btn">
                        <span className="relative">Explore Collection<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover/btn:w-full transition-all duration-300" /></span>
                        <ArrowRightIcon className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </motion.button>
                    </Link>
                  }
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} mix-blend-overlay`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Regular Categories - Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {regularCategories.map((category) => {
            const path = category.name === "Poojas" ? "/PoojaProducts" : `/${category.name.replace(/[\s&]+/g, '')}Products`;
            return (
              <Link
                key={category.name}
                to={path}
                className="block"
              >
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group relative cursor-pointer rounded-2xl overflow-hidden h-[300px]"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.src = "/Placeholder.png";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-6">
                    <div className="transform group-hover:translate-y-0 translate-y-1 transition-transform duration-500">
                      <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${category.tagColor} text-white mb-3 shadow-lg`}>
                        {category.productCount}
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {category.name}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {category.description}
                      </p>
                      <motion.button
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center gap-2 text-emerald-400 font-semibold text-sm group/btn"
                      >
                        Explore
                        <ArrowRightIcon className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Hover Gradient Overlay */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t ${category.bgGradient}`} />
                </motion.div>
              </Link>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="text-left">
              <p className="text-white font-semibold text-lg">Can't find what you're looking for?</p>
              <p className="text-gray-400 text-sm">Browse our complete catalog of natural products</p>
            </div>
            <Link to="/EveryProducts">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-3 px-8 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-all duration-300 shadow-lg shadow-emerald-500/25"
              >
                View All Products
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { ShopByCategory };