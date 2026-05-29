"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ShoppingCart, Heart, Eye } from "lucide-react";

export const MostLovedPicks = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [addedToCart, setAddedToCart] = useState<number[]>([]);

  const rawProducts = [
    {
      id: 1,
      name: "FACEPACK POWDER JAR 100G",
      tag: "Best Selling",
      rating: 5.0,
      reviews: 3,
      price: 58,
      image: "/products/facepack-powder-jar.png",
    },
    {
      id: 2,
      name: "Guava Leaf Tea",
      tag: "Popular",
      rating: null,
      reviews: null,
      price: 80,
      image: "/products/guava-leaf-tea.png",
    },
    {
      id: 3,
      name: "COCONUT MILK SOAP",
      tag: "Deals",
      rating: null,
      reviews: null,
      price: 60,
      image: "/products/coconut-milk-soap.png",
    },
    {
      id: 4,
      name: "BLACK TEA (G)",
      tag: "Popular",
      rating: null,
      reviews: null,
      price: 60,
      image: "/products/black-tea.png",
    },
    {
      id: 5,
      name: "AVARAMPOO BABY SHAMPOO",
      tag: "Trending",
      rating: null,
      reviews: null,
      price: 75,
      image: "/products/avarampoo-baby-shampoo.png",
    },
    {
      id: 6,
      name: "ALOE VERA FACEPACK POWDER JAR (For Men)",
      tag: "Hot",
      rating: 5.0,
      reviews: 1,
      price: 54,
      image: "/products/aloe-vera-facepack-men.png",
    },
    {
      id: 7,
      name: "MULTHANI METTI SOAP",
      tag: "Deals",
      rating: 5.0,
      reviews: 1,
      price: 50,
      image: "/products/multhani-metti-soap.png",
    },
    {
      id: 8,
      name: "THUVALAI POWDER",
      tag: "Trending",
      rating: null,
      reviews: null,
      price: 40,
      image: "/products/thuvalai-powder.png",
    },
    {
      id: 9,
      name: "MULTHANI METTI JAR",
      tag: "Best Selling",
      rating: 5.0,
      reviews: 2,
      price: 35,
      image: "/products/multhani-metti-jar.png",
    },
    {
      id: 10,
      name: "Aavaram Flower Tea",
      tag: "Popular",
      rating: null,
      reviews: null,
      price: 70,
      image: "/products/aavaram-flower-tea.png",
    },
    {
      id: 11,
      name: "AVARAMPOO PUSU MANJAL JAR",
      tag: "Hot",
      rating: 4.0,
      reviews: 1,
      price: 60,
      image: "/products/avarampoo-pusu-manjal-jar.png",
    },
    {
      id: 12,
      name: "NALANGU POWDER JAR",
      tag: "Best Selling",
      rating: 5.0,
      reviews: 1,
      price: "60 - 145",
      image: "/products/nalangu-powder-jar.png",
    },
    {
      id: 13,
      name: "KUPPAIMENI SOAP",
      tag: "Popular",
      rating: null,
      reviews: null,
      price: 55,
      image: "/products/kuppaimeni-soap.png",
    },
    {
      id: 14,
      name: "AVARAMPOO TURMERIC SOAP",
      tag: "Popular",
      rating: null,
      reviews: null,
      price: 60,
      image: "/products/avarampoo-turmeric-soap.png",
    },
    {
      id: 15,
      name: "CLAY SOAP",
      tag: "Popular",
      rating: null,
      reviews: null,
      price: 60,
      image: "/products/clay-soap.png",
    },
    {
      id: 16,
      name: "AVARAMPOO BABY SOAP",
      tag: "Hot",
      rating: 5.0,
      reviews: 1,
      price: 60,
      image: "/products/avarampoo-baby-soap.png",
    },
    {
      id: 17,
      name: "CHARCOAL SOAP",
      tag: "Popular",
      rating: null,
      reviews: null,
      price: 55,
      image: "/products/charcoal-soap.png",
    },
    {
      id: 18,
      name: "ROSE SOAP",
      tag: "Hot",
      rating: 5.0,
      reviews: 1,
      price: 55,
      image: "/products/rose-soap.png",
    },
    {
      id: 19,
      name: "RED SANDAL SOAP",
      tag: "Popular",
      rating: null,
      reviews: null,
      price: 55,
      image: "/products/red-sandal-soap.png",
    },
    {
      id: 20,
      name: "ALOE VERA SOAP",
      tag: "Popular",
      rating: 5.0,
      reviews: 1,
      price: 50,
      image: "/products/aloe-vera-soap.png",
    },
  ];

  // Generate a random rating (1-5) for products that lack one
  const products = rawProducts.map((p) => ({
    ...p,
    rating: p.rating ?? Math.floor(Math.random() * 5) + 1,
  }));

  const getTagColor = (tag: string) => {
    switch (tag) {
      case "Best Selling":
        return "from-amber-500 to-yellow-500 text-white shadow-amber-500/30";
      case "Popular":
        return "from-blue-500 to-cyan-500 text-white shadow-blue-500/30";
      case "Deals":
        return "from-red-500 to-pink-500 text-white shadow-red-500/30";
      case "Trending":
        return "from-purple-500 to-violet-500 text-white shadow-purple-500/30";
      case "Hot":
        return "from-orange-500 to-red-500 text-white shadow-orange-500/30";
      default:
        return "from-gray-500 to-gray-600 text-white shadow-gray-500/30";
    }
  };

  const renderStars = (rating: number | null) => {
    if (!rating) return null;
    return (
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }, (_, index) => (
          <Star
            key={index}
            className={`w-3.5 h-3.5 ${
              index < Math.floor(rating)
                ? "text-yellow-400 fill-yellow-400"
                : index < rating
                ? "text-yellow-400 fill-yellow-400 opacity-50"
                : "text-gray-300 fill-gray-300"
            }`}
          />
        ))}
      </div>
    );
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
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="inline-block text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
          >
            Most Loved Picks
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Most{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
              Loved Picks
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed">
            Discover our community's favorite natural products, handpicked for their exceptional quality and effectiveness.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              className="group relative"
            >
              <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/10">
                {/* Product Image Container */}
                <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-gray-900/50 to-gray-800/50">
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
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                      >
                        <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                          <motion.button
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            transition={{ delay: 0.1 }}
                            className="flex-1 flex items-center justify-center gap-2 bg-white text-gray-900 px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-emerald-500 hover:text-white transition-colors duration-300"
                          >
                            <Eye className="w-4 h-4" />
                            Quick View
                          </motion.button>
                          <motion.button
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            transition={{ delay: 0.15 }}
                            className="p-2.5 bg-white/10 backdrop-blur-sm text-white rounded-xl hover:bg-red-500 transition-colors duration-300"
                          >
                            <Heart className="w-4 h-4" />
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Tag Badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full bg-gradient-to-r ${getTagColor(
                        product.tag
                      )} shadow-lg`}
                    >
                      {product.tag}
                    </span>
                  </div>

                  {/* Discount Badge (Example) */}
                  {product.tag === "Deals" && (
                    <div className="absolute top-3 right-3">
                      <span className="inline-block text-xs font-bold px-2 py-1 rounded-full bg-red-500 text-white shadow-lg shadow-red-500/30">
                        -20%
                      </span>
                    </div>
                  )}
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
                        <span className="text-xs text-gray-400">
                          ({product.reviews} {product.reviews === 1 ? "review" : "reviews"})
                        </span>
                      )}
                    </div>
                  )}

                  {/* Product Name */}
                  <h3 className="text-base font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300 mb-3 line-clamp-2 min-h-[48px]">
                    {product.name}
                  </h3>

                  {/* Price and Cart Button */}
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-2xl font-bold text-white">
                        ₹{product.price}
                      </span>
                      {typeof product.price === "number" && product.price < 50 && (
                        <span className="text-xs text-emerald-400 ml-1">*Best Value</span>
                      )}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleAddToCart(product.id)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                        addedToCart.includes(product.id)
                          ? "bg-emerald-500 text-white"
                          : "bg-white/10 text-white hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/30"
                      }`}
                    >
                      <ShoppingCart className="w-4 h-4" />
                      {addedToCart.includes(product.id) ? "Added!" : "Add"}
                    </motion.button>
                  </div>
                </div>

                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 hover:border-emerald-500/50 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 text-emerald-400 font-medium group-hover:text-white transition-colors">
              View All Products
            </span>
            <span className="relative z-10 text-emerald-400 group-hover:translate-x-1 transition-transform">→</span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-emerald-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default MostLovedPicks;