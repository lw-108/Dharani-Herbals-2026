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
  ];

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden py-20">
      <Carousel_001 
        className="" 
        products={products} 
        showPagination 
        loop 
        autoplay={true}
        spaceBetween={20}
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
  spaceBetween = 20,
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
    padding: 40px 0 60px !important;
    overflow: visible !important;
  }
  
  .Carousal_001 .swiper-wrapper {
    align-items: center;
  }
  
  .swiper-pagination-bullet {
    background: green !important;
    opacity: 0.5;
  }
  .swiper-pagination-bullet-active {
    background: green !important;
    opacity: 1;
  }
  
  .product-card {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 2rem;
  }
  
  /* Center slide - larger and prominent */
  .swiper-slide-active .product-card {
    transform: scale(1.25);
    z-index: 10;
    filter: brightness(1.15) drop-shadow(0 25px 25px rgba(0, 0, 0, 0.3));
  }
  
  .swiper-slide-active .product-card .product-image-wrapper {
    height: 400px !important;
  }
  
  /* Side slides - smaller and slightly dimmed */
  .swiper-slide:not(.swiper-slide-active) .product-card {
    transform: scale(0.8);
    filter: brightness(0.6) drop-shadow(0 10px 15px rgba(0, 0, 0, 0.2));
    opacity: 0.7;
  }
  
  .swiper-slide:not(.swiper-slide-active) .product-card .product-image-wrapper {
    height: 280px !important;
  }
  
  /* Text visibility */
  .swiper-slide-active .product-name {
    opacity: 1;
    transform: translateY(0);
  }
  
  .swiper-slide:not(.swiper-slide-active) .product-name {
    opacity: 0;
    transform: translateY(10px);
    pointer-events: none;
  }
  
  .product-name {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  /* Image fit - show full image without cropping */
  .product-image-wrapper img {
    object-fit: contain !important;
  }
  
  /* Hover effect for non-active slides */
  .swiper-slide:not(.swiper-slide-active):hover .product-card {
    filter: brightness(0.8) drop-shadow(0 15px 20px rgba(0, 0, 0, 0.25));
    transform: scale(0.85);
    opacity: 0.9;
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
      className={cn("w-full max-w-6xl relative px-4", className)}
    >
      <style>{css}</style>

      <Swiper
        spaceBetween={spaceBetween}
        autoplay={
          autoplay
            ? {
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
            : false
        }
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={loop}
        slidesPerView={2}
        speed={600}
        coverflowEffect={{
          rotate: 0,
          slideShadows: false,
          stretch: -30,
          depth: 250,
          modifier: 1.2,
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
          <SwiperSlide key={index} className="!h-auto !overflow-visible">
            <div className="product-card flex flex-col items-center gap-6">
              {/* Product Image - no background */}
              <div className="product-image-wrapper h-[340px] w-full rounded-[2rem] overflow-hidden transition-all duration-500">
                <img
                  className="h-full w-full object-contain"
                  src={product.src}
                  alt={product.alt}
                />
              </div>
              
              {/* Product Name and Description */}
              <div className="product-name text-center px-4 transform translate-y-2 transition-all duration-500">
                <h3 className="text-xl font-bold text-[#00ff3b] mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-[#00ff3b] font-medium">
                  {product.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {showNavigation && (
          <div>
            <div className="swiper-button-next after:hidden !text-white hover:scale-110 transition-transform !right-2">
              <ChevronRightIcon className="h-8 w-8 text-white" />
            </div>
            <div className="swiper-button-prev after:hidden !text-white hover:scale-110 transition-transform !left-2">
              <ChevronLeftIcon className="h-8 w-8 text-white" />
            </div>
          </div>
        )}
      </Swiper>
    </motion.div>
  );
};

export { Carousel_001 };