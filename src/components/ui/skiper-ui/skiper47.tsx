"use client";

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-cards";

import { cn } from "@/lib/utils";

const Skiper47 = () => {
  const products = [
    { 
      src: "/products/aloeverashampoo.png", 
      alt: "Aloe Vera Shampoo",
      name: "Aloe Vera Shampoo",
      description: "Natural Hair Care"
    },
    { 
      src: "/products/arappushampoo.png", 
      alt: "Arappu Shampoo",
      name: "Arappu Shampoo",
      description: "Traditional Herbal Cleanse"
    },
    { 
      src: "/products/hibiscusshampoo.png", 
      alt: "Hibiscus Shampoo",
      name: "Hibiscus Shampoo",
      description: "Floral Hair Nourishment"
    },
    { 
      src: "/products/karsilankannishampoo.png", 
      alt: "Karsilan Kanni Shampoo",
      name: "Karsilan Kanni Shampoo",
      description: "Ancient Hair Secret"
    },
    { 
      src: "/products/onionshampoo.png", 
      alt: "Onion Shampoo",
      name: "Onion Shampoo",
      description: "Growth Boosting Formula"
    },
    { 
      src: "/products/ricekanji.png", 
      alt: "Rice Kanji",
      name: "Rice Kanji",
      description: "Protein Rich Treatment"
    },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden">
      <Carousel_001 
        className="" 
        products={products} 
        showPagination 
        loop 
        autoplay={true}
        spaceBetween={40}
      />
    </div>
  );
};

export { Skiper47 };

const Carousel_001 = ({
  products,
  className,
  showPagination = false,
  showNavigation = false,
  loop = true,
  autoplay = false,
  spaceBetween = 40,
}: {
  products: { src: string; alt: string; name: string; description: string }[];
  className?: string;
  showPagination?: boolean;
  showNavigation?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  spaceBetween?: number;
}) => {
  const css = `
  .Carousal_001 {
    padding-bottom: 50px !important;
  }
  .swiper-pagination-bullet {
    background: white !important;
    opacity: 0.5;
  }
  .swiper-pagination-bullet-active {
    background: white !important;
    opacity: 1;
  }
  .product-card {
    transition: all 0.3s ease;
  }
  .swiper-slide-active .product-card {
    transform: scale(1.05);
  }
  .swiper-slide-active .product-name {
    opacity: 1;
    transform: translateY(0);
  }
  `;
  
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className={cn("w-3xl relative", className)}
    >
      <style>{css}</style>

      <Swiper
        spaceBetween={spaceBetween}
        autoplay={
          autoplay
            ? {
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
            : false
        }
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={loop}
        slidesPerView={2.43}
        speed={800}
        coverflowEffect={{
          rotate: 0,
          slideShadows: false,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={
          showPagination
            ? {
                clickable: true,
                dynamicBullets: true,
              }
            : false
        }
        navigation={
          showNavigation
            ? {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }
            : false
        }
        className="Carousal_001"
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index} className="!h-auto py-4">
            <div className="product-card flex flex-col items-center gap-3">
              {/* Product Image */}
              <div className="!h-[280px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  className="h-full w-full object-cover"
                  src={product.src}
                  alt={product.alt}
                />
              </div>
              
              {/* Product Name and Description */}
              <div className="product-name text-center px-4 opacity-80 transform translate-y-2 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-green-300/80 font-medium">
                  {product.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {showNavigation && (
          <div>
            <div className="swiper-button-next after:hidden !text-white hover:scale-110 transition-transform">
              <ChevronRightIcon className="h-6 w-6 text-white" />
            </div>
            <div className="swiper-button-prev after:hidden !text-white hover:scale-110 transition-transform">
              <ChevronLeftIcon className="h-6 w-6 text-white" />
            </div>
          </div>
        )}
      </Swiper>
    </motion.div>
  );
};

export { Carousel_001 };

/**
 * Skiper 47 Carousel_001 — React + Swiper
 * Built with Swiper.js - Read docs to learn more https://swiperjs.com/
 * Illustrations by AarzooAly - https://x.com/AarzooAly
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.in
 * Twitter: https://x.com/Gur__vi
 */