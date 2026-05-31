import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Skiper47 } from "@/components/ui/skiper-ui/skiper47";

export const ProductCarousel = () => {
  const bannerRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (bannerRef.current) {
      gsap.from(bannerRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }
  }, []);

  return (
    <section className="relative bg-white py-12 min-h-screen overflow-hidden" id="products">
      {/* Background Banner - Full width, absolute positioned, behind everything */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          ref={bannerRef}
          src="/LeafBanner.png"
          alt="Leaf Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Optional: Arch overlay at the top */}
      <div className="absolute top-0 left-0 w-full z-[1]">
        <img
          src="/LeafBanner.png"
          alt="Leaf Banner Arch"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Content Container - Above banner with z-index */}
      {/* <div className="relative z-10 container mx-auto px-4 mt-16">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Our Products
        </h2>
      </div> */}
      <Skiper47 />

    </section>
  );
};

export default ProductCarousel;