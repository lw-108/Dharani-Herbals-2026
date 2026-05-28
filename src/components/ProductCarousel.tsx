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
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }
  }, []);

  return (
    <section className="bg-[#12210f] py-12" id="products">
      <div className="w-full">
        <img
          ref={bannerRef}
          src="/LeafBanner.png"
          alt="Leaf Banner"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Our Products
        </h2>
        <Skiper47 />
      </div>
    </section>
  );
};

export default ProductCarousel;
