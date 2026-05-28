import { BrowserRouter } from "react-router-dom";
// import { Button } from "@/components/ui/button";
import HeroSection from "./sections/HeroSection";
import Navbar from "@/components/Navbar";
import ProductCarousel from "@/components/ProductCarousel";



export function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <HeroSection />
        <ProductCarousel />
    </BrowserRouter>
  );
}

export default App;
