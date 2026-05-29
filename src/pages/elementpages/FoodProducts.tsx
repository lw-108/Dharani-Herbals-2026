"use client";

import { useState } from "react";
import { useCartWishlist } from "@/context/CartWishlistContext";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ShoppingCart, Heart, Eye, SlidersHorizontal, X, ChevronDown, ChevronUp, Grid3X3, List, Filter } from "lucide-react";

const products = [
  { id: 1, name: "LEMON PICKLE (JAR)", tag: "Trending", rating: null, reviews: null, price: "₹45", image: "/products/lemon-pickle-jar.png", category: "FOOD", brand: "MAKIL", type: "trending" },
  { id: 2, name: "Jathikkai Pickle", tag: "Popular", rating: null, reviews: null, price: "₹55", image: "/products/jathikkai-pickle.png", category: "FOOD", brand: "RAMCARE", type: "popular" },
  { id: 3, name: "Drumstick Leaf Rice Powder Jar", tag: "Trending", rating: null, reviews: null, price: "₹50", image: "/products/drumstick-leaf-rice-powder.png", category: "FOOD", brand: "DIVYAM", type: "trending" },
  { id: 4, name: "Banana Blossom Pickle", tag: "Trending", rating: null, reviews: null, price: "₹55 - ₹105", image: "/products/banana-blossom-pickle.png", category: "FOOD", brand: "VANA ARASI", type: "trending" },
  { id: 5, name: "PIRANDAI IDLY POWDER JAR", tag: "Popular", rating: null, reviews: null, price: "₹55", image: "/products/pirandai-idly-powder.png", category: "FOOD", brand: "VEDAN AMUTHU", type: "popular" },
  { id: 6, name: "Banana Stem Pickle Jar", tag: "Popular", rating: null, reviews: null, price: "₹50", image: "/products/banana-stem-pickle.png", category: "FOOD", brand: "VEDAN", type: "popular" },
  { id: 7, name: "PIRANDAI PICKLE", tag: "Best Selling", rating: 5.0, reviews: 1, price: "₹55 - ₹105", image: "/products/pirandai-pickle.png", category: "FOOD", brand: "ATHIYAMAN", type: "best-selling" },
  { id: 8, name: "PULITHOKKU", tag: "Popular", rating: null, reviews: null, price: "₹55", image: "/products/pulithokku.png", category: "FOOD", brand: "NIRAI HOMAM", type: "popular" },
  { id: 9, name: "Sundakkai Thokku", tag: "Popular", rating: null, reviews: null, price: "₹55", image: "/products/sundakkai-thokku.png", category: "FOOD", brand: "MAKIL", type: "popular" },
  { id: 10, name: "CURRYLEAF Gravy JAR (NR)", tag: "Popular", rating: null, reviews: null, price: "₹55", image: "/products/curryleaf-gravy.png", category: "FOOD", brand: "RAMCARE", type: "popular" },
  { id: 11, name: "VALLARAI IDLY POWDER JAR", tag: "Popular", rating: null, reviews: null, price: "₹55", image: "/products/vallarai-idly-powder.png", category: "FOOD", brand: "DIVYAM", type: "popular" },
  { id: 12, name: "MUTTAKATRAN SADA POWDER JAR", tag: "Popular", rating: null, reviews: null, price: "₹50", image: "/products/muttakatran-sada-powder.png", category: "FOOD", brand: "VANA ARASI", type: "popular" },
  { id: 13, name: "MAPPILLAI SAMBA RICE", tag: "Popular", rating: null, reviews: null, price: "₹65", image: "/products/mappillai-samba-rice.png", category: "FOOD", brand: "VEDAN AMUTHU", type: "popular" },
  { id: 14, name: "Millet Nutritional Mix (PO)", tag: "Hot", rating: null, reviews: null, price: "₹105 - ₹200", image: "/products/millet-nutritional-mix.png", category: "FOOD", brand: "VEDAN", type: "hot" },
  { id: 15, name: "KARUPPU KAVUNI RICE", tag: "Popular", rating: 5.0, reviews: 1, price: "₹155", image: "/products/karuppu-kavuni-rice.png", category: "FOOD", brand: "ATHIYAMAN", type: "popular" },
  { id: 16, name: "PIRANDAI SADA POWDER JAR", tag: "Trending", rating: null, reviews: null, price: "₹50", image: "/products/pirandai-sada-powder.png", category: "FOOD", brand: "NIRAI HOMAM", type: "trending" },
  { id: 17, name: "Horse Gram Rice Powder (JAR)", tag: "Hot", rating: null, reviews: null, price: "₹50", image: "/products/horse-gram-rice-powder.png", category: "FOOD", brand: "MAKIL", type: "hot" },
  { id: 18, name: "VARAGU RICE", tag: "Popular", rating: null, reviews: null, price: "₹70", image: "/products/varagu-rice.png", category: "FOOD", brand: "RAMCARE", type: "popular" },
  { id: 19, name: "WILD HONEY JAR(NR)", tag: "Popular", rating: null, reviews: null, price: "₹75", image: "/products/wild-honey-jar.png", category: "FOOD", brand: "DIVYAM", type: "popular" },
  { id: 20, name: "AMUTHAM NATTU CHARKKARAI", tag: "Deals", rating: null, reviews: null, price: "₹95", image: "/products/amutham-nattu-charkkarai.png", category: "FOOD", brand: "VANA ARASI", type: "deals" },
  { id: 21, name: "WILD HONEYJAR(NR)", tag: "Popular", rating: null, reviews: null, price: "₹150", image: "/products/wild-honey-jar-150.png", category: "FOOD", brand: "VEDAN AMUTHU", type: "popular" },
  { id: 22, name: "WILD HONEYJAR(NR)", tag: "Deals", rating: null, reviews: null, price: "₹295", image: "/products/wild-honey-jar-295.png", category: "FOOD", brand: "VEDAN", type: "deals" },
  { id: 23, name: "Foxtail Millet (thinai rice)", tag: "Popular", rating: null, reviews: null, price: "₹63", image: "/products/foxtail-millet.png", category: "FOOD", brand: "ATHIYAMAN", type: "popular" },
  { id: 24, name: "SAMAI RICE", tag: "Popular", rating: null, reviews: null, price: "₹80", image: "/products/samai-rice.png", category: "FOOD", brand: "NIRAI HOMAM", type: "popular" },
  { id: 25, name: "LITTLE MILLET - VALLARAI PONGAL MIX 250G", tag: "Best Selling", rating: null, reviews: null, price: "₹90", image: "/products/little-millet-pongal.png", category: "FOOD", brand: "MAKIL", type: "best-selling" },
  { id: 26, name: "BEETROOT MALT(JAR)", tag: "Trending", rating: null, reviews: null, price: "₹235", image: "/products/beetroot-malt.png", category: "FOOD", brand: "RAMCARE", type: "trending" },
  { id: 27, name: "BEETROOT MALT(JAR)", tag: "Deals", rating: null, reviews: null, price: "₹94", image: "/products/beetroot-malt-94.png", category: "FOOD", brand: "DIVYAM", type: "deals" },
  { id: 28, name: "GINGER GARLIC PICKLE JAR", tag: "Popular", rating: null, reviews: null, price: "₹55", image: "/products/ginger-garlic-pickle.png", category: "FOOD", brand: "VANA ARASI", type: "popular" },
  { id: 29, name: "KODO - MORINGA MILLET PONGAL MIX 250G", tag: "Best Selling", rating: null, reviews: null, price: "₹85", image: "/products/kodo-moringa-pongal.png", category: "FOOD", brand: "VEDAN AMUTHU", type: "best-selling" },
  { id: 30, name: "GINGER GARLIC PICKLE JAR", tag: "Trending", rating: null, reviews: null, price: "₹105", image: "/products/ginger-garlic-pickle-105.png", category: "FOOD", brand: "VEDAN", type: "trending" },
  { id: 31, name: "KAMBU DOSA MIX(PO)", tag: "Trending", rating: null, reviews: null, price: "₹65", image: "/products/kambu-dosa-mix.png", category: "FOOD", brand: "ATHIYAMAN", type: "trending" },
  { id: 32, name: "Athiyaman Country Sugar (PO)", tag: "Trending", rating: null, reviews: null, price: "₹50", image: "/products/country-sugar.png", category: "FOOD", brand: "NIRAI HOMAM", type: "trending" },
  { id: 33, name: "KAMBU PUTTU MAAVU(PO)", tag: "Trending", rating: null, reviews: null, price: "₹65", image: "/products/kambu-puttu-maavu.png", category: "FOOD", brand: "MAKIL", type: "trending" },
  { id: 34, name: "KAMBU MAAVU(PO)", tag: "Trending", rating: null, reviews: null, price: "₹45", image: "/products/kambu-maavu.png", category: "FOOD", brand: "RAMCARE", type: "trending" },
  { id: 35, name: "CARROT MALT(JAR)", tag: "Hot", rating: null, reviews: null, price: "₹113", image: "/products/carrot-malt.png", category: "FOOD", brand: "DIVYAM", type: "hot" },
  { id: 36, name: "NARTHANKAI PICKLE (CITRON PICKLE) (JAR)", tag: "Popular", rating: null, reviews: null, price: "₹50", image: "/products/narthankai-pickle.png", category: "FOOD", brand: "VANA ARASI", type: "popular" },
  { id: 37, name: "AMUTHAM NATTU CHAKKARAI (Sukku+Elakai)", tag: "Deals", rating: null, reviews: null, price: "₹58", image: "/products/amutham-nattu-chakkarai-sukku.png", category: "FOOD", brand: "VEDAN AMUTHU", type: "deals" },
  { id: 38, name: "CHILLI POWDER", tag: "Popular", rating: null, reviews: null, price: "₹28", image: "/products/chilli-powder.png", category: "FOOD", brand: "VEDAN", type: "popular" },
  { id: 39, name: "KULAMBU MILAGAI THOOL(PO)", tag: "Popular", rating: null, reviews: null, price: "₹25", image: "/products/kulambu-milagai-thool.png", category: "FOOD", brand: "ATHIYAMAN", type: "popular" },
  { id: 40, name: "MUTAKKATRAN IDLY POWDER JAR", tag: "Deals", rating: null, reviews: null, price: "₹55", image: "/products/muttakatran-idly-powder.png", category: "FOOD", brand: "NIRAI HOMAM", type: "deals" },
  { id: 41, name: "MURUNGAIKEERAI SOUP (PO)", tag: "Popular", rating: null, reviews: null, price: "₹30", image: "/products/murungaikeerai-soup.png", category: "FOOD", brand: "MAKIL", type: "popular" },
  { id: 42, name: "KULAMBU MANJAL POWDER", tag: "Popular", rating: null, reviews: null, price: "₹21", image: "/products/kulambu-manjal-powder.png", category: "FOOD", brand: "RAMCARE", type: "popular" },
  { id: 43, name: "Drumstick Leaf Idli Powder JAR", tag: "Trending", rating: null, reviews: null, price: "₹55", image: "/products/drumstick-leaf-idli-powder.png", category: "FOOD", brand: "DIVYAM", type: "trending" },
  { id: 44, name: "Neem Flower Rasam Powder", tag: "Popular", rating: null, reviews: null, price: "₹25", image: "/products/neem-flower-rasam-powder.png", category: "FOOD", brand: "VANA ARASI", type: "popular" },
  { id: 45, name: "Adhiyaman Country Jaggery", tag: "Trending", rating: null, reviews: null, price: "₹50", image: "/products/country-jaggery.png", category: "FOOD", brand: "VEDAN AMUTHU", type: "trending" },
  { id: 46, name: "MALLI POWDER (PO)", tag: "Popular", rating: null, reviews: null, price: "₹20", image: "/products/malli-powder.png", category: "FOOD", brand: "VEDAN", type: "popular" },
  { id: 47, name: "SUNDAIKKAI THOKKU", tag: "Popular", rating: null, reviews: null, price: "₹55", image: "/products/sundaikkai-thokku.png", category: "FOOD", brand: "ATHIYAMAN", type: "popular" },
  { id: 48, name: "KADUKKAI CHICKEN BRIYANI POWDER JAR(NR)", tag: "Trending", rating: null, reviews: null, price: "₹55", image: "/products/kadukkai-chicken-briyani.png", category: "FOOD", brand: "NIRAI HOMAM", type: "trending" },
  { id: 49, name: "KADUKKAI BAJI BONDA MIX(PO)", tag: "Popular", rating: null, reviews: null, price: "₹100", image: "/products/kadukkai-baji-bonda-mix.png", category: "FOOD", brand: "MAKIL", type: "popular" },
  { id: 50, name: "SIVAPPU KAVUNI RICE", tag: "Popular", rating: null, reviews: null, price: "₹53", image: "/products/sivappu-kavuni-rice.png", category: "FOOD", brand: "RAMCARE", type: "popular" },
  { id: 51, name: "KUTHIRAIVAALI RICE(PO)", tag: "Popular", rating: null, reviews: null, price: "₹80", image: "/products/kuthiraivaali-rice.png", category: "FOOD", brand: "DIVYAM", type: "popular" },
  { id: 52, name: "PONNI (BROWN RICE)", tag: "Deals", rating: null, reviews: null, price: "₹53", image: "/products/ponni-brown-rice.png", category: "FOOD", brand: "VANA ARASI", type: "deals" },
  { id: 53, name: "KAMBU RICE", tag: "Popular", rating: null, reviews: null, price: "₹40", image: "/products/kambu-rice.png", category: "FOOD", brand: "VEDAN AMUTHU", type: "popular" },
  { id: 54, name: "RAGI DOSAI MIX", tag: "Popular", rating: null, reviews: null, price: "₹70", image: "/products/ragi-dosai-mix.png", category: "FOOD", brand: "VEDAN", type: "popular" },
  { id: 55, name: "RAGI POWDER(PO)", tag: "Popular", rating: null, reviews: null, price: "₹40", image: "/products/ragi-powder.png", category: "FOOD", brand: "ATHIYAMAN", type: "popular" },
  { id: 56, name: "NATTU SAMBA BROWN RICE", tag: "Popular", rating: null, reviews: null, price: "₹60", image: "/products/nattu-samba-brown-rice.png", category: "FOOD", brand: "NIRAI HOMAM", type: "popular" },
  { id: 57, name: "WILD HONEY JAR(NR)", tag: "Deals", rating: null, reviews: null, price: "₹75 - ₹295", image: "/products/wild-honey-jar-combo.png", category: "FOOD", brand: "MAKIL", type: "deals" },
  { id: 58, name: "PARUPPU DOSAI MIX(G)", tag: "Trending", rating: null, reviews: null, price: "₹120", image: "/products/paruppu-dosai-mix.png", category: "FOOD", brand: "RAMCARE", type: "trending" },
  { id: 59, name: "WHEAT MAAVU POWDER(PO)", tag: "Trending", rating: null, reviews: null, price: "₹48", image: "/products/wheat-maavu-powder.png", category: "FOOD", brand: "DIVYAM", type: "trending" },
];

const categories = ["All Categories", "HAIR", "SKIN", "BABY", "BEVERAGES", "BODY", "FOOD", "HEALTH & WELLNESS", "POOJAS"];
const brands = ["All Brands", "MAKIL", "RAMCARE", "DIVYAM", "VANA ARASI", "VEDAN AMUTHU", "VEDAN", "ATHIYAMAN", "NIRAI HOMAM"];
const productTypes = [
  { value: "all", label: "All Types" },
  { value: "new-launch", label: "✨ New Launch" },
  { value: "best-selling", label: "🔥 Best Selling" },
  { value: "deals", label: "🏷️ Deals" },
  { value: "trending", label: "📈 Trending" },
  { value: "hot", label: "🔥 Hot" },
  { value: "popular", label: "⭐ Popular" },
];
const sortOptions = ["Random", "Price: Low to High", "Price: High to Low", "Newest", "Best Rating", "Popularity"];

const FoodProducts = () => {
  const { addToCart, toggleWishlist, isInWishlist } = useCartWishlist();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("FOOD");
  const [selectedBrand, setSelectedBrand] = useState("All Brands");
  const [selectedType, setSelectedType] = useState("all");
  const [sortBy, setSortBy] = useState("Random");
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [addedToCart, setAddedToCart] = useState<number[]>([]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({ categories: true, brands: true, types: true });
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Toast notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<"cart" | "wishlist">("cart");

  const showToast = (message: string, type: "cart" | "wishlist") => {
    setToastMessage(message);
    setToastType(type);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === "All Categories" || product.category === selectedCategory;
    const brandMatch = selectedBrand === "All Brands" || product.brand === selectedBrand;
    const typeMatch = selectedType === "all" || product.type === selectedType;
    return categoryMatch && brandMatch && typeMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "Price: Low to High": return parseFloat(a.price.replace("₹", "").split(" - ")[0]) - parseFloat(b.price.replace("₹", "").split(" - ")[0]);
      case "Price: High to Low": return parseFloat(b.price.replace("₹", "").split(" - ")[0]) - parseFloat(a.price.replace("₹", "").split(" - ")[0]);
      case "Best Rating": return (b.rating || 0) - (a.rating || 0);
      default: return 0;
    }
  });

  const getTagColor = (tag: string) => {
    const colors: Record<string, string> = {
      "Best Selling": "from-amber-500 to-yellow-500 text-white",
      "Popular": "from-blue-500 to-cyan-500 text-white",
      "Deals": "from-red-500 to-pink-500 text-white",
      "Trending": "from-purple-500 to-violet-500 text-white",
      "Hot": "from-orange-500 to-red-500 text-white",
    };
    return colors[tag] || "from-gray-500 to-gray-600 text-white";
  };

  const renderStars = (rating: number | null) => {
    if (!rating) return null;
    return (
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-600 fill-gray-600"}`} />
        ))}
      </div>
    );
  };

  const handleAddToCart = (productId: number) => {
    const prod = products.find((p) => p.id === productId);
    if (prod) {
      addToCart(prod);
      showToast(`Added ${prod.name} to Cart!`, "cart");
    }
    setAddedToCart((prev) => [...prev, productId]);
    setTimeout(() => setAddedToCart((prev) => prev.filter((id) => id !== productId)), 2000);
  };

  const handleBuyNow = (product: any) => {
    addToCart(product);
    navigate("/cart");
  };

  const handleToggleWishlist = (product: any) => {
    toggleWishlist(product);
    const isWish = isInWishlist(product.id);
    if (isWish) {
      showToast(`Removed ${product.name} from Wishlist`, "wishlist");
    } else {
      showToast(`Added ${product.name} to Wishlist!`, "wishlist");
    }
  };
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => { e.currentTarget.src = "/Placeholder.png"; };
  const clearAllFilters = () => { setSelectedCategory("FOOD"); setSelectedBrand("All Brands"); setSelectedType("all"); setSortBy("Random"); };
  const toggleSection = (section: keyof typeof expandedSections) => { setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] })); };
  const hasActiveFilters = selectedCategory !== "FOOD" || selectedBrand !== "All Brands" || selectedType !== "all";

  return (
    <section className="relative bg-[#0a0f09] min-h-screen py-8 md:py-12">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/3 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">🍲</span>
                <h1 className="text-3xl md:text-4xl font-bold text-white">Food Products</h1>
              </div>
              <p className="text-gray-400 mt-1">Showing {filteredProducts.length} of {products.length} products</p>
            </div>
            <div className="flex items-center gap-3">
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-500/50 cursor-pointer">
                {sortOptions.map((option) => <option key={option} value={option} className="bg-gray-900">{option}</option>)}
              </select>
              <div className="hidden sm:flex items-center bg-white/5 rounded-xl border border-white/10 p-1">
                <button onClick={() => setViewMode("grid")} className={`p-2 rounded-lg transition-colors ${viewMode === "grid" ? "bg-red-500/20 text-red-400" : "text-gray-400 hover:text-white"}`}><Grid3X3 className="w-4 h-4" /></button>
                <button onClick={() => setViewMode("list")} className={`p-2 rounded-lg transition-colors ${viewMode === "list" ? "bg-red-500/20 text-red-400" : "text-gray-400 hover:text-white"}`}><List className="w-4 h-4" /></button>
              </div>
              <button onClick={() => setIsMobileFilterOpen(true)} className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm font-medium hover:bg-red-500/20 transition-colors">
                <Filter className="w-4 h-4" /> Filters {hasActiveFilters && <span className="w-2 h-2 rounded-full bg-red-400" />}
              </button>
            </div>
          </motion.div>
        </div>

        <div className="flex gap-8">
          <motion.aside initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="hidden lg:block w-72 flex-shrink-0">
            <div className="sticky top-8 space-y-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2"><SlidersHorizontal className="w-5 h-5 text-red-400" /> Filters</h3>
                <button onClick={clearAllFilters} className="text-sm text-gray-400 hover:text-red-400 transition-colors">Clear All</button>
              </div>
              {["categories", "brands", "types"].map((section) => (
                <div key={section} className="bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/5 overflow-hidden">
                  <button onClick={() => toggleSection(section as keyof typeof expandedSections)} className="w-full flex items-center justify-between p-4 text-white font-medium hover:bg-white/[0.02] transition-colors">
                    {section === "categories" ? "Categories" : section === "brands" ? "Brands" : "Product Types"}
                    {expandedSections[section as keyof typeof expandedSections] ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                  </button>
                  <AnimatePresence>
                    {expandedSections[section as keyof typeof expandedSections] && (
                      <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                        <div className="px-4 pb-4 space-y-1">
                          {(section === "categories" ? categories : section === "brands" ? brands : productTypes).map((item: any) => (
                            <button
                              key={typeof item === "string" ? item : item.value}
                              onClick={() => {
                                if (section === "categories") setSelectedCategory(item);
                                else if (section === "brands") setSelectedBrand(item);
                                else setSelectedType(item.value);
                              }}
                              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                                (section === "categories" && selectedCategory === item) ||
                                (section === "brands" && selectedBrand === item) ||
                                (section === "types" && selectedType === item.value)
                                  ? "bg-red-500/10 text-red-400 font-medium" : "text-gray-400 hover:text-white hover:bg-white/5"
                              }`}
                            >
                              {typeof item === "string" ? item : item.label}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.aside>

          <AnimatePresence>
            {isMobileFilterOpen && (
              <>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden" onClick={() => setIsMobileFilterOpen(false)} />
                <motion.div initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} transition={{ type: "spring", damping: 25, stiffness: 300 }} className="fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-[#0a0f09] border-r border-white/10 z-50 lg:hidden overflow-y-auto">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold text-white flex items-center gap-2"><SlidersHorizontal className="w-5 h-5 text-red-400" /> Filters</h3>
                      <button onClick={() => setIsMobileFilterOpen(false)} className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-colors"><X className="w-5 h-5" /></button>
                    </div>
                    <button onClick={clearAllFilters} className="text-sm text-red-400 hover:text-red-300 mb-6">Clear All Filters</button>
                    {["categories", "brands", "types"].map((section) => (
                      <div key={section} className="mb-6">
                        <h4 className="text-sm font-semibold text-white mb-3">{section === "categories" ? "Categories" : section === "brands" ? "Brands" : "Product Types"}</h4>
                        <div className="space-y-1">
                          {(section === "categories" ? categories : section === "brands" ? brands : productTypes).map((item: any) => (
                            <button
                              key={typeof item === "string" ? item : item.value}
                              onClick={() => {
                                if (section === "categories") setSelectedCategory(item);
                                else if (section === "brands") setSelectedBrand(item);
                                else setSelectedType(item.value);
                              }}
                              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                                (section === "categories" && selectedCategory === item) ||
                                (section === "brands" && selectedBrand === item) ||
                                (section === "types" && selectedType === item.value)
                                  ? "bg-red-500/10 text-red-400 font-medium" : "text-gray-400 hover:text-white hover:bg-white/5"
                              }`}
                            >
                              {typeof item === "string" ? item : item.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                    <button onClick={() => setIsMobileFilterOpen(false)} className="w-full py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold transition-colors">Show Results ({filteredProducts.length})</button>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          <motion.div layout className="flex-1">
            {hasActiveFilters && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-sm text-gray-400">Active Filters:</span>
                {selectedCategory !== "FOOD" && <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs border border-red-500/20">{selectedCategory} <button onClick={() => setSelectedCategory("FOOD")}><X className="w-3 h-3" /></button></span>}
                {selectedBrand !== "All Brands" && <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs border border-red-500/20">{selectedBrand} <button onClick={() => setSelectedBrand("All Brands")}><X className="w-3 h-3" /></button></span>}
                {selectedType !== "all" && <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs border border-red-500/20">{productTypes.find(t => t.value === selectedType)?.label} <button onClick={() => setSelectedType("all")}><X className="w-3 h-3" /></button></span>}
              </motion.div>
            )}
            <motion.div layout className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"}`}>
              <AnimatePresence mode="popLayout">
                {sortedProducts.map((product, index) => (
                  <motion.div key={product.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ delay: index * 0.03, duration: 0.3 }} onMouseEnter={() => setHoveredProduct(product.id)} onMouseLeave={() => setHoveredProduct(null)} className="group relative">
                    <div className="relative h-full bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/5 hover:border-red-500/20 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-red-500/5">
                      <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-gray-900/30 to-gray-800/30">
                        <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={product.image} alt={product.name} onError={handleImageError} loading="lazy" />
                        <AnimatePresence>
                          {hoveredProduct === product.id && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                              <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                                <motion.button initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} className="flex-1 flex items-center justify-center gap-2 bg-white text-gray-900 px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-red-500 hover:text-white transition-colors"><Eye className="w-4 h-4" /> Quick View</motion.button>
                                <motion.button
                                  initial={{ y: 20, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  exit={{ y: 20, opacity: 0 }}
                                  onClick={() => handleToggleWishlist(product)}
                                  className={`p-2.5 backdrop-blur-sm rounded-xl transition-colors ${
                                    isInWishlist(product.id)
                                      ? "bg-rose-500 text-white"
                                      : "bg-white/10 text-white hover:bg-rose-500"
                                  }`}
                                >
                                  <Heart className={`w-4 h-4 ${isInWishlist(product.id) ? "fill-current" : ""}`} />
                                </motion.button>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                        <div className="absolute top-3 left-3"><span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${getTagColor(product.tag)} shadow-lg`}>{product.tag}</span></div>
                        {product.tag === "Deals" && <div className="absolute top-3 right-3"><span className="inline-block text-xs font-bold px-2 py-1 rounded-full bg-red-500 text-white shadow-lg shadow-red-500/30">-15%</span></div>}
                      </div>
                      <div className="p-5">
                        {product.rating && <div className="flex items-center gap-2 mb-2">{renderStars(product.rating)}<span className="text-sm font-semibold text-white">{product.rating}</span>{product.reviews && <span className="text-xs text-gray-500">({product.reviews})</span>}</div>}
                        <h3 className="text-sm font-semibold text-white group-hover:text-red-400 transition-colors mb-1 line-clamp-2">{product.name}</h3>
                        <p className="text-xs text-gray-500 mb-3">{product.brand}</p>
                        <span className="text-lg font-bold text-white block mb-3">{product.price}</span>
                        <div className="flex items-center gap-2">
                          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => handleAddToCart(product.id)} className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${addedToCart.includes(product.id) ? "bg-red-500 text-white" : "bg-white/5 text-gray-400 hover:bg-red-500 hover:text-white border border-white/10"}`}><ShoppingCart className="w-3.5 h-3.5" />{addedToCart.includes(product.id) ? "Added!" : "Add to Cart"}</motion.button>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleBuyNow(product)}
                            className="px-4 py-2 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-semibold hover:shadow-lg hover:shadow-red-500/25 transition-all"
                          >
                            Buy Now
                          </motion.button>
                        </div>
                      </div>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl overflow-hidden"><div className="absolute inset-0 bg-gradient-to-tr from-transparent via-red-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" /></div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
            {filteredProducts.length === 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
                <span className="text-6xl block mb-4">🍲</span>
                <p className="text-gray-400 text-lg">No food products found matching your filters.</p>
                <button onClick={clearAllFilters} className="mt-4 text-red-400 hover:text-red-300 font-medium">Clear all filters</button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 bg-emerald-950 text-white rounded-2xl shadow-2xl border border-emerald-800/30"
          >
            <div className={`p-1.5 rounded-full ${toastType === 'cart' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`}>
              {toastType === 'cart' ? <ShoppingCart className="w-5 h-5" /> : <Heart className="w-5 h-5 fill-current" />}
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight">{toastMessage}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export { FoodProducts };