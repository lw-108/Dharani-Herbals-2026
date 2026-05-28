import { BrowserRouter } from "react-router-dom";
import Banner from "./sections/BannerSection";
import HeroSection from "./sections/HeroSection";
import Navbar from "@/components/Navbar";
import ProductCarousel from "@/components/ProductCarousel";
import MostLovedPicks from "./sections/MostLovedPicks";



export function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Banner />
      <Navbar />
      <HeroSection />
      <ProductCarousel />
      <MostLovedPicks />
    </BrowserRouter>
  );
}

export default App;
