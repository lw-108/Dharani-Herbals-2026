"use client";

import { useState } from "react";
import { useCartWishlist } from "@/context/CartWishlistContext";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, 
  ShoppingCart, 
  Heart, 
  Eye, 
  SlidersHorizontal,
  X,
  ChevronDown,
  ChevronUp,
  Grid3X3,
  List,
  Filter
} from "lucide-react";

const products = [

// Export product list for aggregation

  {
    id: 1,
    name: "Hibiscus Herbal Hair Oil",
    tag: "Hot",
    rating: null,
    reviews: null,
    price: "₹115 - ₹460",
    image: "/products/hibiscus-hair-oil.png",
    category: "HAIR",
    brand: "MAKIL",
    type: "hot",
  },
  {
    id: 2,
    name: "VETTIVER SHAMPOO",
    tag: "Trending",
    rating: null,
    reviews: null,
    price: "₹70",
    image: "/products/vettiver-shampoo.png",
    category: "HAIR",
    brand: "RAMCARE",
    type: "trending",
  },
  {
    id: 3,
    name: "AVARMPOO HAIR WASH POWDER (NR)",
    tag: "Deals",
    rating: null,
    reviews: null,
    price: "₹70",
    image: "/products/avarmpoo-hair-wash-powder.png",
    category: "HAIR",
    brand: "DIVYAM",
    type: "deals",
  },
  {
    id: 4,
    name: "ALOE VERA SHAMPOO",
    tag: "Deals",
    rating: null,
    reviews: null,
    price: "₹65 - ₹130",
    image: "/products/aloe-vera-shampoo.png",
    category: "HAIR",
    brand: "VANA ARASI",
    type: "deals",
  },
  {
    id: 5,
    name: "Hibiscus Shampoo",
    tag: "Best Selling",
    rating: 5.0,
    reviews: 4,
    price: "₹70 - ₹250",
    image: "/products/hibiscus-shampoo.png",
    category: "HAIR",
    brand: "VEDAN AMUTHU",
    type: "best-selling",
  },
  {
    id: 6,
    name: "ONION SHAMPOO",
    tag: "Trending",
    rating: 5.0,
    reviews: 1,
    price: "₹65 - ₹240",
    image: "/products/onion-shampoo.png",
    category: "HAIR",
    brand: "VEDAN",
    type: "trending",
  },
  {
    id: 7,
    name: "ARAPPU SHAMPOO",
    tag: "Popular",
    rating: null,
    reviews: null,
    price: "₹65 - ₹130",
    image: "/products/arappu-shampoo.png",
    category: "HAIR",
    brand: "ATHIYAMAN",
    type: "popular",
  },
  {
    id: 8,
    name: "Karisalankanni Shampoo",
    tag: "Popular",
    rating: null,
    reviews: null,
    price: "₹70 - ₹140",
    image: "/products/karisalankanni-shampoo.png",
    category: "HAIR",
    brand: "NIRAI HOMAM",
    type: "popular",
  },
  {
    id: 9,
    name: "AVARAMPOO BABY SHAMPOO",
    tag: "Trending",
    rating: null,
    reviews: null,
    price: "₹75",
    image: "/products/avarampoo-baby-shampoo.png",
    category: "HAIR",
    brand: "MAKIL",
    type: "trending",
  },
  {
    id: 10,
    name: "HIBISCUS HAIRWASH POWDER",
    tag: "Popular",
    rating: null,
    reviews: null,
    price: "₹61 - ₹230",
    image: "/products/hibiscus-hairwash-powder.png",
    category: "HAIR",
    brand: "RAMCARE",
    type: "popular",
  },
  {
    id: 11,
    name: "KARISALANKANNI HAIR OIL",
    tag: "Popular",
    rating: null,
    reviews: null,
    price: "₹115 - ₹280",
    image: "/products/karisalankanni-hair-oil.png",
    category: "HAIR",
    brand: "DIVYAM",
    type: "popular",
  },
  {
    id: 12,
    name: "Dr. AMLA SHAMPOO",
    tag: "Popular",
    rating: null,
    reviews: null,
    price: "₹65 - ₹130",
    image: "/products/dr-amla-shampoo.png",
    category: "HAIR",
    brand: "VANA ARASI",
    type: "popular",
  },
  {
    id: 13,
    name: "NEELY AVURI POWDER (PO) NR",
    tag: "Popular",
    rating: null,
    reviews: null,
    price: "₹50",
    image: "/products/neely-avuri-powder.png",
    category: "HAIR",
    brand: "VEDAN AMUTHU",
    type: "popular",
  },
  {
    id: 14,
    name: "GREEN ARAPPU POWDER JAR",
    tag: "Hot",
    rating: null,
    reviews: null,
    price: "₹85",
    image: "/products/green-arappu-powder-jar.png",
    category: "HAIR",
    brand: "VEDAN",
    type: "hot",
  },
  {
    id: 15,
    name: "VANA ARASI SHIKAKKAI POWDER (PO)",
    tag: "Trending",
    rating: null,
    reviews: null,
    price: "₹35",
    image: "/products/vana-arasi-shikakkai-powder.png",
    category: "HAIR",
    brand: "ATHIYAMAN",
    type: "trending",
  },
  {
    id: 16,
    name: "RICE KANJI SHAMPOO",
    tag: "Best Selling",
    rating: 5.0,
    reviews: 2,
    price: "₹75 - ₹150",
    image: "/products/rice-kanji-shampoo.png",
    category: "HAIR",
    brand: "NIRAI HOMAM",
    type: "best-selling",
  },
  {
    id: 17,
    name: "GREEN ARAPPU POWDER 250G",
    tag: "Popular",
    rating: null,
    reviews: null,
    price: "₹40",
    image: "/products/green-arappu-powder-250g.png",
    category: "HAIR",
    brand: "MAKIL",
    type: "popular",
  },
  {
    id: 18,
    name: "AMLA HAIR OIL",
    tag: "Trending",
    rating: null,
    reviews: null,
    price: "₹115",
    image: "/products/amla-hair-oil.png",
    category: "HAIR",
    brand: "RAMCARE",
    type: "trending",
  },
  {
    id: 19,
    name: "SHIKAKAI SHAMPOO",
    tag: "Popular",
    rating: null,
    reviews: null,
    price: "₹70",
    image: "/products/shikakai-shampoo.png",
    category: "HAIR",
    brand: "DIVYAM",
    type: "popular",
  },
  {
    id: 20,
    name: "HERBAL SHIKAKAI POWDER",
    tag: "Deals",
    rating: null,
    reviews: null,
    price: "₹50",
    image: "/products/herbal-shikakai-powder.png",
    category: "HAIR",
    brand: "VANA ARASI",
    type: "deals",
  },
  {
    id: 21,
    name: "VANAARASI SHIKAKKAI POWDER (PO)",
    tag: "Popular",
    rating: null,
    reviews: null,
    price: "₹85",
    image: "/products/vanaarasi-shikakkai-powder.png",
    category: "HAIR",
    brand: "VEDAN AMUTHU",
    type: "popular",
  },
  {
    id: 22,
    name: "HERBAL HAIR COLOUR",
    tag: "Trending",
    rating: null,
    reviews: null,
    price: "₹52",
    image: "/products/herbal-hair-colour.png",
    category: "HAIR",
    brand: "VEDAN",
    type: "trending",
  },
];
export const hairProducts = products;

const categories = [
  "All Categories",
  "HAIR",
  "SKIN",
  "BABY",
  "BEVERAGES",
  "BODY",
  "FOOD",
  "HEALTH & WELLNESS",
  "POOJAS",
];

const brands = [
  "All Brands",
  "MAKIL",
  "RAMCARE",
  "DIVYAM",
  "VANA ARASI",
  "VEDAN AMUTHU",
  "VEDAN",
  "ATHIYAMAN",
  "NIRAI HOMAM",
];

const productTypes = [
  { value: "all", label: "All Types" },
  { value: "new-launch", label: "✨ New Launch", icon: "✨" },
  { value: "best-selling", label: "🔥 Best Selling", icon: "🔥" },
  { value: "deals", label: "Deals", icon: "🏷️" },
  { value: "trending", label: "Trending", icon: "📈" },
  { value: "hot", label: "Hot", icon: "🔥" },
  { value: "popular", label: "Popular", icon: "⭐" },
];

const sortOptions = [
  "Random",
  "Price: Low to High",
  "Price: High to Low",
  "Newest",
  "Best Rating",
  "Popularity",
];

const HairProducts = () => {
  const { addToCart, toggleWishlist, isInWishlist } = useCartWishlist();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedBrand, setSelectedBrand] = useState("All Brands");
  const [selectedType, setSelectedType] = useState("all");
  const [sortBy, setSortBy] = useState("Random");
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [addedToCart, setAddedToCart] = useState<number[]>([]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    brands: true,
    types: true,
  });
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Toast notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<"cart" | "wishlist">("cart");

  const showToast = (message: string, type: "cart" | "wishlist") => {
    setToastMessage(message);
    setToastType(type);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Filter products
  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === "All Categories" || product.category === selectedCategory;
    const brandMatch = selectedBrand === "All Brands" || product.brand === selectedBrand;
    const typeMatch = selectedType === "all" || product.type === selectedType;
    return categoryMatch && brandMatch && typeMatch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "Price: Low to High":
        return parseFloat(a.price.replace("₹", "").split(" - ")[0]) - parseFloat(b.price.replace("₹", "").split(" - ")[0]);
      case "Price: High to Low":
        return parseFloat(b.price.replace("₹", "").split(" - ")[0]) - parseFloat(a.price.replace("₹", "").split(" - ")[0]);
      case "Best Rating":
        return (b.rating || 0) - (a.rating || 0);
      default:
        return 0;
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
          <Star
            key={i}
            className={`w-3.5 h-3.5 ${
              i < Math.floor(rating)
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-600 fill-gray-600"
            }`}
          />
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
    setTimeout(() => {
      setAddedToCart((prev) => prev.filter((id) => id !== productId));
    }, 2000);
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

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "/Placeholder.png";
  };

  const clearAllFilters = () => {
    setSelectedCategory("All Categories");
    setSelectedBrand("All Brands");
    setSelectedType("all");
    setSortBy("Random");
  };

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <section className="relative bg-[#0a0f09] min-h-screen py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Hair Products
              </h1>
              <p className="text-gray-400 mt-1">
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>

            {/* Sort & View Controls */}
            <div className="flex items-center gap-3">
              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500/50 cursor-pointer"
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option} className="bg-gray-900">
                    {option}
                  </option>
                ))}
              </select>

              {/* View Toggle */}
              <div className="hidden sm:flex items-center bg-white/5 rounded-xl border border-white/10 p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "grid" ? "bg-emerald-500/20 text-emerald-400" : "text-gray-400 hover:text-white"
                  }`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "list" ? "bg-emerald-500/20 text-emerald-400" : "text-gray-400 hover:text-white"
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              {/* Mobile Filter Button */}
              <button
                onClick={() => setIsMobileFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-sm font-medium hover:bg-emerald-500/20 transition-colors"
              >
                <Filter className="w-4 h-4" />
                Filters
                {(selectedCategory !== "All Categories" || selectedBrand !== "All Brands" || selectedType !== "all") && (
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                )}
              </button>
            </div>
          </motion.div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters - Desktop */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:block w-72 flex-shrink-0"
          >
            <div className="sticky top-8 space-y-4">
              {/* Filters Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5 text-emerald-400" />
                  Filters
                </h3>
                <button
                  onClick={clearAllFilters}
                  className="text-sm text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Clear All
                </button>
              </div>

              {/* Categories Section */}
              <div className="bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/5 overflow-hidden">
                <button
                  onClick={() => toggleSection("categories")}
                  className="w-full flex items-center justify-between p-4 text-white font-medium hover:bg-white/[0.02] transition-colors"
                >
                  Categories
                  {expandedSections.categories ? (
                    <ChevronUp className="w-4 h-4 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  )}
                </button>
                <AnimatePresence>
                  {expandedSections.categories && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 space-y-1">
                        {categories.map((category) => (
                          <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                              selectedCategory === category
                                ? "bg-emerald-500/10 text-emerald-400 font-medium"
                                : "text-gray-400 hover:text-white hover:bg-white/5"
                            }`}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Brands Section */}
              <div className="bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/5 overflow-hidden">
                <button
                  onClick={() => toggleSection("brands")}
                  className="w-full flex items-center justify-between p-4 text-white font-medium hover:bg-white/[0.02] transition-colors"
                >
                  Brands
                  {expandedSections.brands ? (
                    <ChevronUp className="w-4 h-4 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  )}
                </button>
                <AnimatePresence>
                  {expandedSections.brands && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 space-y-1">
                        {brands.map((brand) => (
                          <button
                            key={brand}
                            onClick={() => setSelectedBrand(brand)}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                              selectedBrand === brand
                                ? "bg-emerald-500/10 text-emerald-400 font-medium"
                                : "text-gray-400 hover:text-white hover:bg-white/5"
                            }`}
                          >
                            {brand}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Product Types Section */}
              <div className="bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/5 overflow-hidden">
                <button
                  onClick={() => toggleSection("types")}
                  className="w-full flex items-center justify-between p-4 text-white font-medium hover:bg-white/[0.02] transition-colors"
                >
                  Product Types
                  {expandedSections.types ? (
                    <ChevronUp className="w-4 h-4 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  )}
                </button>
                <AnimatePresence>
                  {expandedSections.types && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 space-y-1">
                        {productTypes.map((type) => (
                          <button
                            key={type.value}
                            onClick={() => setSelectedType(type.value)}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                              selectedType === type.value
                                ? "bg-emerald-500/10 text-emerald-400 font-medium"
                                : "text-gray-400 hover:text-white hover:bg-white/5"
                            }`}
                          >
                            {type.label}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.aside>

          {/* Mobile Filter Drawer */}
          <AnimatePresence>
            {isMobileFilterOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                  onClick={() => setIsMobileFilterOpen(false)}
                />
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-[#0a0f09] border-r border-white/10 z-50 lg:hidden overflow-y-auto"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                        <SlidersHorizontal className="w-5 h-5 text-emerald-400" />
                        Filters
                      </h3>
                      <button
                        onClick={() => setIsMobileFilterOpen(false)}
                        className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Clear All */}
                    <button
                      onClick={clearAllFilters}
                      className="text-sm text-emerald-400 hover:text-emerald-300 mb-6"
                    >
                      Clear All Filters
                    </button>

                    {/* Categories */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3">Categories</h4>
                      <div className="space-y-1">
                        {categories.map((category) => (
                          <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                              selectedCategory === category
                                ? "bg-emerald-500/10 text-emerald-400 font-medium"
                                : "text-gray-400 hover:text-white hover:bg-white/5"
                            }`}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Brands */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3">Brands</h4>
                      <div className="space-y-1">
                        {brands.map((brand) => (
                          <button
                            key={brand}
                            onClick={() => setSelectedBrand(brand)}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                              selectedBrand === brand
                                ? "bg-emerald-500/10 text-emerald-400 font-medium"
                                : "text-gray-400 hover:text-white hover:bg-white/5"
                            }`}
                          >
                            {brand}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Product Types */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3">Product Types</h4>
                      <div className="space-y-1">
                        {productTypes.map((type) => (
                          <button
                            key={type.value}
                            onClick={() => setSelectedType(type.value)}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                              selectedType === type.value
                                ? "bg-emerald-500/10 text-emerald-400 font-medium"
                                : "text-gray-400 hover:text-white hover:bg-white/5"
                            }`}
                          >
                            {type.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Apply Button */}
                    <button
                      onClick={() => setIsMobileFilterOpen(false)}
                      className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-colors"
                    >
                      Show Results ({filteredProducts.length})
                    </button>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Products Grid */}
          <motion.div
            layout
            className="flex-1"
          >
            {/* Active Filters */}
            {(selectedCategory !== "All Categories" || selectedBrand !== "All Brands" || selectedType !== "all") && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-wrap items-center gap-2 mb-6"
              >
                <span className="text-sm text-gray-400">Active Filters:</span>
                {selectedCategory !== "All Categories" && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs border border-emerald-500/20">
                    {selectedCategory}
                    <button onClick={() => setSelectedCategory("All Categories")}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {selectedBrand !== "All Brands" && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs border border-emerald-500/20">
                    {selectedBrand}
                    <button onClick={() => setSelectedBrand("All Brands")}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {selectedType !== "all" && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs border border-emerald-500/20">
                    {productTypes.find(t => t.value === selectedType)?.label}
                    <button onClick={() => setSelectedType("all")}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
              </motion.div>
            )}

            {/* Products */}
            <motion.div
              layout
              className={`grid gap-6 ${
                viewMode === "grid"
                  ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                  : "grid-cols-1"
              }`}
            >
              <AnimatePresence mode="popLayout">
                {sortedProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.03, duration: 0.3 }}
                    onMouseEnter={() => setHoveredProduct(product.id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                    className={`group relative ${
                      viewMode === "list" ? "flex gap-6" : ""
                    }`}
                  >
                    <div className={`relative bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/5 hover:border-emerald-500/20 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/5 ${
                      viewMode === "list" ? "flex gap-6 w-full" : "h-full"
                    }`}>
                      {/* Product Image */}
                      <div className={`relative overflow-hidden bg-gradient-to-b from-gray-900/30 to-gray-800/30 ${
                        viewMode === "list" ? "w-48 flex-shrink-0" : "aspect-square"
                      }`}>
                        <img
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          src={product.image}
                          alt={product.name}
                          onError={handleImageError}
                          loading="lazy"
                        />

                        {/* Hover Overlay */}
                        <AnimatePresence>
                          {hoveredProduct === product.id && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                            >
                              <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                                <motion.button
                                  initial={{ y: 20, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  exit={{ y: 20, opacity: 0 }}
                                  className="flex-1 flex items-center justify-center gap-2 bg-white text-gray-900 px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-emerald-500 hover:text-white transition-colors"
                                >
                                  <Eye className="w-4 h-4" />
                                  Quick View
                                </motion.button>
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

                        {/* Tag Badge */}
                        <div className="absolute top-3 left-3">
                          <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${getTagColor(product.tag)} shadow-lg`}>
                            {product.tag}
                          </span>
                        </div>
                      </div>

                      {/* Product Details */}
                      <div className={`p-5 ${viewMode === "list" ? "flex-1 flex flex-col justify-between" : ""}`}>
                        <div>
                          {/* Rating */}
                          {product.rating && (
                            <div className="flex items-center gap-2 mb-2">
                              {renderStars(product.rating)}
                              <span className="text-sm font-semibold text-white">{product.rating}</span>
                              {product.reviews && (
                                <span className="text-xs text-gray-500">({product.reviews})</span>
                              )}
                            </div>
                          )}

                          {/* Product Name */}
                          <h3 className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors mb-1 line-clamp-2">
                            {product.name}
                          </h3>

                          {/* Brand */}
                          <p className="text-xs text-gray-500 mb-3">{product.brand}</p>
                        </div>

                        {/* Price and Actions */}
                        <div>
                          <span className="text-lg font-bold text-white block mb-3">
                            {product.price}
                          </span>
                          
                          <div className="flex items-center gap-2">
                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => handleAddToCart(product.id)}
                              className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                                addedToCart.includes(product.id)
                                  ? "bg-emerald-500 text-white"
                                  : "bg-white/5 text-gray-400 hover:bg-emerald-500 hover:text-white border border-white/10"
                              }`}
                            >
                              <ShoppingCart className="w-3.5 h-3.5" />
                              {addedToCart.includes(product.id) ? "Added!" : "Add to Cart"}
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => handleBuyNow(product)}
                              className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all"
                            >
                              Buy Now
                            </motion.button>
                          </div>
                        </div>
                      </div>

                      {/* Shine Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/3 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p className="text-gray-400 text-lg">No products found matching your filters.</p>
                <button
                  onClick={clearAllFilters}
                  className="mt-4 text-emerald-400 hover:text-emerald-300 font-medium"
                >
                  Clear all filters
                </button>
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

export { HairProducts };