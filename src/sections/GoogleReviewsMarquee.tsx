"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, ThumbsUp, ExternalLink } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Priya S",
    initial: "P",
    date: "2 weeks ago",
    rating: 5,
    text: "Excellent herbal products! Very effective and natural. Highly recommended.",
    color: "from-green-600 to-green-500",
  },
  {
    id: 2,
    name: "Rajesh K",
    initial: "R",
    date: "1 month ago",
    rating: 5,
    text: "Great quality products. Fast delivery and good customer service.",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 3,
    name: "Meera R",
    initial: "M",
    date: "3 weeks ago",
    rating: 4,
    text: "Good herbal medicines. Helped with my health issues. Will order again.",
    color: "from-emerald-600 to-green-500",
  },
  {
    id: 4,
    name: "Suresh M",
    initial: "S",
    date: "2 months ago",
    rating: 5,
    text: "Authentic Ayurvedic products. Very satisfied with the results.",
    color: "from-green-700 to-green-600",
  },
  {
    id: 5,
    name: "Lakshmi V",
    initial: "L",
    date: "1 week ago",
    rating: 5,
    text: "Pure and natural products. Excellent for wellness. Thank you!",
    color: "from-green-500 to-green-400",
  },
  {
    id: 6,
    name: "Anitha K",
    initial: "A",
    date: "1 month ago",
    rating: 5,
    text: "Amazing results with their herbal supplements. Will definitely buy again.",
    color: "from-green-600 to-emerald-500",
  },
  {
    id: 7,
    name: "Venkat R",
    initial: "V",
    date: "3 weeks ago",
    rating: 4,
    text: "Good quality herbal products. Packaging was excellent and delivery was quick.",
    color: "from-emerald-500 to-green-500",
  },
  {
    id: 8,
    name: "Divya M",
    initial: "D",
    date: "2 weeks ago",
    rating: 5,
    text: "Traditional Ayurvedic medicines that actually work. Highly satisfied!",
    color: "from-green-700 to-green-500",
  },
  {
    id: 9,
    name: "Kumar S",
    initial: "K",
    date: "1 week ago",
    rating: 5,
    text: "Best herbal store online. Genuine products and reasonable prices.",
    color: "from-green-500 to-green-600",
  },
  {
    id: 10,
    name: "Sangeetha P",
    initial: "S",
    date: "4 weeks ago",
    rating: 4,
    text: "Natural and effective products. Customer service is also very helpful.",
    color: "from-green-600 to-green-700",
  },
];

const GoogleIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

const GoogleReviewsMarquee = () => {
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const scrollPositionRef = useRef(0);
  const lastTimeRef = useRef(0);
  const speedRef = useRef(0.8);

  // Duplicate reviews for seamless infinite scroll
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  useEffect(() => {
    const scroll = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      if (!isHovered && scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const maxScroll = container.scrollWidth / 3; // Scroll through one set

        scrollPositionRef.current += speedRef.current * (delta / 16.67);

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
  }, [isHovered]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating
            ? "text-green-600 fill-green-600"
            : "text-green-200 fill-green-200"
        }`}
      />
    ));
  };

  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-green-50 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-green-100/50 rounded-full blur-3xl" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-green-50 to-transparent rounded-full blur-3xl" />
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
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="inline-block text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-2 rounded-full bg-green-100 text-green-700 border border-green-200"
          >
            Testimonials
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-900 mb-6">
            Customer Favorites{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              & Experiences
            </span>
          </h2>

          {/* Google Rating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-green-50 border border-green-200"
          >
            <GoogleIcon className="w-8 h-8" />
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {renderStars(5)}
              </div>
              <span className="text-2xl font-bold text-green-900">4.8</span>
            </div>
            <div className="w-px h-8 bg-green-200" />
            <span className="text-sm text-green-700">
              Based on <span className="text-green-900 font-semibold">150+</span> Google reviews
            </span>
          </motion.div>

          {/* Write a Review Button */}
          <motion.a
            href="https://g.page/review/your-business-id"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-full bg-green-600 text-white hover:bg-green-700 font-medium transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <GoogleIcon className="w-5 h-5" />
            Write a Review
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Reviews Marquee */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 py-4 overflow-hidden"
            style={{ scrollBehavior: "auto" }}
          >
            {duplicatedReviews.map((review, index) => (
              <motion.div
                key={`${review.id}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(index * 0.05, 1), duration: 0.5 }}
                className="flex-shrink-0 w-[380px]"
              >
                <div className="h-full p-6 rounded-2xl bg-white border-2 border-green-100 hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-50 group">
                  {/* Review Header */}
                  <div className="flex items-start gap-3 mb-4">
                    {/* Avatar */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-white font-bold text-base shadow-md`}>
                      {review.initial}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-green-900 font-semibold text-sm truncate">
                        {review.name}
                      </h4>
                      <p className="text-xs text-green-600">{review.date}</p>
                    </div>

                    <GoogleIcon className="w-5 h-5 flex-shrink-0" />
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-0.5 mb-3">
                    {renderStars(review.rating)}
                  </div>

                  {/* Review Text */}
                  <p className="text-green-800 text-sm leading-relaxed line-clamp-3">
                    "{review.text}"
                  </p>

                  {/* Like Button */}
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-green-100">
                    <button className="flex items-center gap-1.5 text-xs text-green-600 hover:text-green-700 transition-colors">
                      <ThumbsUp className="w-3.5 h-3.5" />
                      Helpful
                    </button>
                    <span className="text-xs text-green-300">•</span>
                    <span className="text-xs text-green-500">Google Review</span>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-green-100/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Reviews Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://g.page/your-business-id"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-green-600 text-white hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden"
          >
            <span className="relative z-10 font-medium">
              View All Reviews
            </span>
            <ExternalLink className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-400/20 to-green-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export { GoogleReviewsMarquee };