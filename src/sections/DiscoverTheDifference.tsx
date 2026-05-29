"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ShoppingCart, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Vilvam Sherbet",
    price: "₹67",
    image: "/products/vilvam-sherbet.png",
    youtubeId: "dQw4w9WgXcQ",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Hibiscus Shampoo",
    price: "₹70 - ₹250",
    image: "/products/hibiscus-shampoo.png",
    youtubeId: "dQw4w9WgXcQ",
    tag: "Popular",
  },
  {
    id: 3,
    name: "ARAPPU SHAMPOO",
    price: "₹65 - ₹130",
    image: "/products/arappu-shampoo.png",
    youtubeId: "dQw4w9WgXcQ",
    tag: "Trending",
  },
  {
    id: 4,
    name: "Aavaram Flower Tea",
    price: "₹70",
    image: "/products/aavaram-flower-tea.png",
    youtubeId: "dQw4w9WgXcQ",
    tag: "New",
  },
  {
    id: 5,
    name: "RICE KANJI SHAMPOO",
    price: "₹75 - ₹150",
    image: "/products/rice-kanji-shampoo.png",
    youtubeId: "dQw4w9WgXcQ",
    tag: "Popular",
  },
  {
    id: 6,
    name: "Hibiscus Herbal Hair Oil",
    price: "₹115 - ₹460",
    image: "/products/hibiscus-hair-oil.png",
    youtubeId: "dQw4w9WgXcQ",
    tag: "Featured",
  },
  {
    id: 7,
    name: "SPROUTED MULTIGRAIN HEALTH MIX",
    price: "₹180 - ₹360",
    image: "/products/sprouted-health-mix.png",
    youtubeId: "dQw4w9WgXcQ",
    tag: "Health",
  },
  {
    id: 8,
    name: "BEETROOT MALT (JAR)",
    price: "₹235",
    image: "/products/beetroot-malt.png",
    youtubeId: "dQw4w9WgXcQ",
    tag: "Premium",
  },
  {
    id: 9,
    name: "CARROT MALT (JAR)",
    price: "₹113",
    image: "/products/carrot-malt.png",
    youtubeId: "dQw4w9WgXcQ",
    tag: "Premium",
  },
  {
    id: 10,
    name: "Wild Turmeric",
    price: "₹35 - ₹65",
    image: "/products/wild-turmeric.png",
    youtubeId: "dQw4w9WgXcQ",
    tag: "Natural",
  },
];

const DiscoverTheDifference = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const scrollPositionRef = useRef(0);
  const lastTimeRef = useRef(0);
  const speedRef = useRef(0.5); // pixels per frame at 60fps

  // Auto-scroll animation
  useEffect(() => {
    const scroll = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      if (!isPaused && scrollContainerRef.current && !isHovered) {
        const container = scrollContainerRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        scrollPositionRef.current += speedRef.current * (delta / 16.67); // Normalize to 60fps
        
        if (scrollPositionRef.current >= maxScroll) {
          scrollPositionRef.current = 0;
        }
        
        container.scrollLeft = scrollPositionRef.current;
      }
      
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, isHovered]);

  // Pause on hover
  useEffect(() => {
    if (isHovered) {
      setIsPaused(true);
    } else {
      setIsPaused(false);
      lastTimeRef.current = 0;
    }
  }, [isHovered]);

  const handleVideoClick = (youtubeId: string) => {
    setActiveVideo(youtubeId);
    setIsPaused(true);
  };

  const handleCloseVideo = () => {
    setActiveVideo(null);
    setIsPaused(false);
    lastTimeRef.current = 0;
  };

  const getTagColor = (tag: string) => {
    const colors: Record<string, string> = {
      "Best Seller": "bg-amber-500",
      "Popular": "bg-blue-500",
      "Trending": "bg-purple-500",
      "New": "bg-green-500",
      "Featured": "bg-rose-500",
      "Health": "bg-emerald-500",
      "Premium": "bg-yellow-500",
      "Natural": "bg-teal-500",
    };
    return colors[tag] || "bg-gray-500";
  };

  return (
    <section className="relative bg-[#12210f] py-16 md:py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 px-4"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Discover the{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
              Difference
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Watch our featured products in action
          </p>
        </motion.div>

        {/* Marquee Carousel */}
        <div
          ref={scrollContainerRef}
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Gradient Fades on edges */}
          {/* <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" /> */}

          {/* Products Track */}
          <div className="flex gap-4 px-8 py-4" style={{ width: "max-content" }}>
            {[...products, ...products].map((product, index) => (
              <motion.div
                key={`${product.id}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-[280px]"
                style={{ width: "280px" }}
              >
                <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/10">
                  {/* Video Thumbnail */}
                  <div className="relative aspect-[9/16] bg-gradient-to-b from-gray-800 to-gray-900 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = "/Placeholder.png";
                      }}
                    />

                    {/* Play Button Overlay */}
                    <div
                      onClick={() => handleVideoClick(product.youtubeId)}
                      className="absolute inset-0 flex items-center justify-center cursor-pointer group/play"
                    >
                      <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center group-hover/play:scale-110 group-hover/play:bg-emerald-500 transition-all duration-300 border border-white/20">
                        <Play className="w-7 h-7 text-white fill-white ml-1" />
                      </div>
                    </div>

                    {/* Tag Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${getTagColor(product.tag)} text-white shadow-lg`}>
                        {product.tag}
                      </span>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-3 right-3">
                      <span className="text-xs font-medium px-2 py-1 rounded bg-black/60 backdrop-blur-sm text-white">
                        Short
                      </span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-white mb-1 line-clamp-1 group-hover:text-emerald-400 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-0.5 mt-1 mb-2">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star key={i} className={`w-3 h-3 ${i < (Math.floor(Math.random() * 5) + 1) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 fill-gray-300'}`} />
                        ))}
                      </div>
                      <span className="text-lg font-bold text-white">{product.price}</span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold transition-colors duration-300"
                      >
                        <ShoppingCart className="w-3.5 h-3.5" />
                        Buy Now
                      </motion.button>
                    </div>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Video Popup Modal */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={handleCloseVideo}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-[400px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* YouTube Shorts Player */}
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1&loop=1`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleCloseVideo}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-red-500 transition-colors duration-300"
                >
                  <X className="w-5 h-5" />
                </motion.button>

                {/* Video Controls Hint */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center">
                  <span className="text-xs text-white/70 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    Tap to interact with video
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export { DiscoverTheDifference };