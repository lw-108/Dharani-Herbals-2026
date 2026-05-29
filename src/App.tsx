import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const AdminLoginPage = lazy(() => import("./pages/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
import Banner from "./sections/BannerSection";
import HeroSection from "./sections/HeroSection";
import Navbar from "@/components/Navbar";
import ProductCarousel from "@/components/ProductCarousel";
import MostLovedPicks from "./sections/MostLovedPicks";
import ShopByCategory from "./sections/ShopByCategory";
import { DiscoverTheDifference } from "./sections/DiscoverTheDifference";
import { GoogleReviewsMarquee } from "./sections/GoogleReviewsMarquee";
import { TrendingProducts } from "./sections/TrendingProducts";
import { OurJourney } from "./sections/OurJourney";
import { WhatsAppCTA } from "./sections/CTA";
import { Footer } from "./sections/Footer";
import {HairProducts} from "./pages/elementpages/HairProducts";
import {SkinProducts} from "./pages/elementpages/SkinProducts";
import {BabyProducts} from "./pages/elementpages/BabyProducts";
import {BeveragesProducts} from "./pages/elementpages/BeveragesProducts";
import {BodyProducts} from "./pages/elementpages/BodyProducts";
import {FoodProducts} from "./pages/elementpages/FoodProducts";
import {HealthWellnessProducts} from "./pages/elementpages/HealthWellnessProducts";
import {PoojaProducts} from "./pages/elementpages/PoojaProducts";
import { AllProductsPage }  from "./pages/elementpages/EveryProducts";


const CartPage = lazy(() => import("./pages/CartPage"));
const WishlistPage = lazy(() => import("./pages/WishlistPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
import { CartWishlistProvider } from "@/context/CartWishlistContext";
import LoadingOverlay from "@/components/LoadingOverlay";
import ScrollToTop from "@/components/ScrollToTop";
import NotFoundPage from "./pages/NotFoundPage";

export function App() {
  return (
    <CartWishlistProvider>
      <BrowserRouter>
        <ScrollToTop />
        <LoadingOverlay />
        <Banner />
        <Navbar />
        <Suspense fallback={<LoadingOverlay />}>
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <ProductCarousel />
                <MostLovedPicks />
                <ShopByCategory />
                <DiscoverTheDifference />
                <GoogleReviewsMarquee />
                <TrendingProducts />
                <OurJourney />
                <WhatsAppCTA />
                <Footer/>
              </>
            } />
            <Route path="/HairProducts" element={<HairProducts />} />
            <Route path="/SkinProducts" element={<SkinProducts />} />
            <Route path="/BabyProducts" element={<BabyProducts />} />
            <Route path="/BeveragesProducts" element={<BeveragesProducts />} />
            <Route path="/BodyProducts" element={<BodyProducts />} />
            <Route path="/FoodProducts" element={<FoodProducts />} />
            <Route path="/HealthWellnessProducts" element={<HealthWellnessProducts />} />
            <Route path="/PoojaProducts" element={<PoojaProducts />} />
            <Route path="/EveryProducts" element={<AllProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/admin" element={<AdminLoginPage />} />
            <Route path="/admin/dashboard/*" element={<AdminDashboard />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </CartWishlistProvider>
  );
}

export default App;
