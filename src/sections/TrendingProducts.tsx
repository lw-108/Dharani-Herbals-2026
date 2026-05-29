"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ShoppingCart, Heart, Eye, TrendingUp, Flame, ArrowRight, Sparkles } from "lucide-react";

const trendingProducts = [
  {
    id: 1,
    name: "THUVALAI POWDER",
    price: "₹40",
    image: "/products/thuvalai-powder.png",
    tag: "Hot",
    badge: "Trending",
  },
  {
    id: 2,
    name: "AVARAMPOO BABY SHAMPOO",
    price: "₹75",
    image: "/products/avarampoo-baby-shampoo.png",
    tag: "Popular",
    badge: "Best Seller",
  },
  {
    id: 3,
    name: "VETTIVER SHAMPOO",
    price: "₹70",
    image: "/products/vettiver-shampoo.png",
    tag: "New",
    badge: "Fresh",
  },
  {
    id: 4,
    name: "ONION SHAMPOO",
    price: "₹65 - ₹240",
    rating: 5.0,
    reviews: 12,
    image: "/products/onion-shampoo.png",
    tag: "Hot",
    badge: "Top Rated",
  },
  {
    id: 5,
    name: "KARUVELAM TOOTH POWDER",
    price: "₹40",
    image: "/products/karuvelam-tooth-powder.png",
    tag: "Popular",
    badge: "Value Pick",
  },
  {
    id: 6,
    name: "Thathu Viruthi powder",
    price: "₹100",
    image: "/products/thathu-viruthi-powder.png",
    tag: "Trending",
    badge: "Wellness",
  },
  {
    id: 7,
    name: "Herbal Tea Powder",
    price: "₹50",
    image: "/products/herbal-tea-powder.png",
    tag: "Popular",
    badge: "Essential",
  },
  {
    id: 8,
    name: "Banana Blossom Pickle",
    price: "₹55 - ₹105",
    image: "/products/banana-blossom-pickle.png",
    tag: "New",
    badge: "Gourmet",
  },
];

const TrendingProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [addedToCart, setAddedToCart] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All Trending" },
    { id: "hot", label: "🔥 Hot" },
    { id: "new", label: "✨ New" },
    { id: "popular", label: "⭐ Popular" },
  ];

  const filteredProducts = activeTab === "all" 
    ? trendingProducts 
    : trendingProducts.filter(p => p.tag.toLowerCase() === activeTab);

  const getTagColor = (tag: string) => {
    switch (tag) {
      case "Hot":
        return "from-orange-500 to-red-500 text-white shadow-orange-500/30";
      case "Popular":
        return "from-blue-500 to-cyan-500 text-white shadow-blue-500/30";
      case "New":
        return "from-green-500 to-emerald-500 text-white shadow-green-500/30";
      case "Trending":
        return "from-purple-500 to-violet-500 text-white shadow-purple-500/30";
      default:
        return "from-gray-500 to-gray-600 text-white shadow-gray-500/30";
    }
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Best Seller":
        return "bg-amber-500/20 text-amber-400 border-amber-500/30";
      case "Top Rated":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Value Pick":
        return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
      case "Fresh":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Gourmet":
        return "bg-rose-500/20 text-rose-400 border-rose-500/30";
      case "Essential":
        return "bg-sky-500/20 text-sky-400 border-sky-500/30";
      case "Wellness":
        return "bg-teal-500/20 text-teal-400 border-teal-500/30";
      case "Trending":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-3.5 h-3.5 ${
          index < Math.floor(rating)
            ? "text-yellow-400 fill-yellow-400"
            : "text-gray-600 fill-gray-600"
        }`}
      />
    ));
  };

  const handleAddToCart = (productId: number) => {
    setAddedToCart((prev) => [...prev, productId]);
    setTimeout(() => {
      setAddedToCart((prev) => prev.filter((id) => id !== productId));
    }, 2000);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "/Placeholder.png";
  };

  return (
    <section className="relative bg-[#12210f] py-20 md:py-28 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-b from-yellow-500/3 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-2 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20"
          >
            <Flame className="w-4 h-4" />
            Trending Now
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Trending{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                Products
              </span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full -rotate-1"
              />
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed">
            Discover what's popular right now — products that are making waves in the herbal wellness market
          </p>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-2 mt-8"
          >
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-white text-gray-900 shadow-lg"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                className="group relative"
              >
                <div className="relative h-full bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/5 hover:border-orange-500/20 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-orange-500/5">
                  {/* Product Image Container */}
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-gray-900/30 to-gray-800/30">
                    <img
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      src={product.image}
                      alt={product.name}
                      onError={handleImageError}
                      loading="lazy"
                    />

                    {/* Hover Overlay with Quick Actions */}
                    <AnimatePresence>
                      {hoveredProduct === product.id && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"
                        >
                          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                            <motion.button
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: 20, opacity: 0 }}
                              transition={{ delay: 0.1 }}
                              className="flex-1 flex items-center justify-center gap-2 bg-white text-gray-900 px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-orange-500 hover:text-white transition-colors duration-300"
                            >
                              <Eye className="w-4 h-4" />
                              Quick View
                            </motion.button>
                            <motion.button
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: 20, opacity: 0 }}
                              transition={{ delay: 0.15 }}
                              className="p-2.5 bg-white/10 backdrop-blur-sm text-white rounded-xl hover:bg-pink-500 transition-colors duration-300"
                            >
                              <Heart className="w-4 h-4" />
                            </motion.button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                      {/* Tag Badge */}
                      <span
                        className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${getTagColor(
                          product.tag
                        )} shadow-lg`}
                      >
                        {product.tag}
                      </span>
                      
                      {/* Category Badge */}
                      <span className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full border ${getBadgeColor(product.badge)}`}>
                        {product.badge}
                      </span>
                    </div>

                    {/* Trending Icon */}
                    <div className="absolute top-3 right-3">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-8 h-8 rounded-full bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 flex items-center justify-center"
                      >
                        <TrendingUp className="w-4 h-4 text-orange-400" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-5">
                    {/* Rating */}
                    {product.rating && (
                      <div className="flex items-center gap-2 mb-2">
                        {renderStars(product.rating)}
                        <span className="text-sm font-semibold text-white">
                          {product.rating}
                        </span>
                        {product.reviews && (
                          <span className="text-xs text-gray-500">
                            ({product.reviews})
                          </span>
                        )}
                      </div>
                    )}

                    {/* Product Name */}
                    <h3 className="text-base font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-3 line-clamp-2 min-h-[48px]">
                      {product.name}
                    </h3>

                    {/* Price and Actions */}
                    <div className="flex items-end justify-between">
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-500">Price</span>
                        <span className="text-xl font-bold text-white">
                          {product.price}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {/* Add to Cart */}
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleAddToCart(product.id)}
                          className={`p-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                            addedToCart.includes(product.id)
                              ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                              : "bg-white/5 text-gray-400 hover:bg-orange-500 hover:text-white border border-white/10 hover:border-orange-500"
                          }`}
                        >
                          <ShoppingCart className="w-5 h-5" />
                        </motion.button>

                        {/* Buy Now */}
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
                        >
                          Buy
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  {/* Shine Effect on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-orange-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Browse All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 hover:border-orange-500/50 transition-all duration-300 overflow-hidden"
          >
            <Sparkles className="relative z-10 w-5 h-5 text-orange-400" />
            <span className="relative z-10 text-orange-400 font-medium group-hover:text-white transition-colors">
              Browse Trending Items
            </span>
            <ArrowRight className="relative z-10 w-5 h-5 text-orange-400 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-orange-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export { TrendingProducts };