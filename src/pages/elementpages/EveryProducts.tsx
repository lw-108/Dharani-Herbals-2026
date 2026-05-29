"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Star,
    ShoppingCart,
    Heart,
    Eye,
    X,
    Grid3X3,
    List,
    Search,
    Sparkles
} from "lucide-react";
import { useCartWishlist } from "@/context/CartWishlistContext";
import { useLocation } from "react-router-dom";

// All products data
const allProducts = [
    // HAIR Products
    { id: 1, name: "Hibiscus Herbal Hair Oil", tag: "Hot", rating: null, reviews: null, price: "₹115 - ₹460", image: "/products/hibiscus-hair-oil.png", category: "HAIR", brand: "MAKIL", type: "hot" },
    { id: 2, name: "VETTIVER SHAMPOO", tag: "Trending", rating: null, reviews: null, price: "₹70", image: "/products/vettiver-shampoo.png", category: "HAIR", brand: "RAMCARE", type: "trending" },
    { id: 3, name: "ALOE VERA SHAMPOO", tag: "Deals", rating: null, reviews: null, price: "₹65 - ₹130", image: "/products/aloe-vera-shampoo.png", category: "HAIR", brand: "VANA ARASI", type: "deals" },
    { id: 4, name: "Hibiscus Shampoo", tag: "Best Selling", rating: 5.0, reviews: 4, price: "₹70 - ₹250", image: "/products/hibiscus-shampoo.png", category: "HAIR", brand: "VEDAN AMUTHU", type: "best-selling" },
    { id: 5, name: "ONION SHAMPOO", tag: "Trending", rating: 5.0, reviews: 1, price: "₹65 - ₹240", image: "/products/onion-shampoo.png", category: "HAIR", brand: "VEDAN", type: "trending" },
    { id: 6, name: "ARAPPU SHAMPOO", tag: "Popular", rating: null, reviews: null, price: "₹65 - ₹130", image: "/products/arappu-shampoo.png", category: "HAIR", brand: "ATHIYAMAN", type: "popular" },
    { id: 7, name: "RICE KANJI SHAMPOO", tag: "Best Selling", rating: 5.0, reviews: 2, price: "₹75 - ₹150", image: "/products/rice-kanji-shampoo.png", category: "HAIR", brand: "NIRAI HOMAM", type: "best-selling" },

    // SKIN Products
    { id: 8, name: "FACEPACK POWDER JAR 100G", tag: "Best Selling", rating: 5.0, reviews: 3, price: "₹58", image: "/products/facepack-powder-jar.png", category: "SKIN", brand: "MAKIL", type: "best-selling" },
    { id: 9, name: "MULTHANI METTI SOAP", tag: "Deals", rating: 5.0, reviews: 1, price: "₹50", image: "/products/multhani-metti-soap.png", category: "SKIN", brand: "DIVYAM", type: "deals" },
    { id: 10, name: "ROSE SOAP", tag: "Hot", rating: 5.0, reviews: 1, price: "₹55", image: "/products/rose-soap.png", category: "SKIN", brand: "VANA ARASI", type: "hot" },
    { id: 11, name: "ALOE VERA SOAP", tag: "Popular", rating: 5.0, reviews: 1, price: "₹50", image: "/products/aloe-vera-soap.png", category: "SKIN", brand: "VEDAN AMUTHU", type: "popular" },
    { id: 12, name: "NALANGU POWDER JAR", tag: "Best Selling", rating: 5.0, reviews: 1, price: "₹60 - ₹145", image: "/products/nalangu-powder-jar.png", category: "SKIN", brand: "VEDAN", type: "best-selling" },

    // BABY Products
    { id: 13, name: "AVARAMPOO BABY SHAMPOO", tag: "Trending", rating: null, reviews: null, price: "₹75", image: "/products/avarampoo-baby-shampoo.png", category: "BABY", brand: "MAKIL", type: "trending" },
    { id: 14, name: "AVARAMPOO BABY SOAP", tag: "Hot", rating: 5.0, reviews: 1, price: "₹60", image: "/products/avarampoo-baby-soap.png", category: "BABY", brand: "RAMCARE", type: "hot" },

    // BEVERAGES Products
    { id: 15, name: "Aavaram Flower Tea", tag: "Popular", rating: null, reviews: null, price: "₹70", image: "/products/aavaram-flower-tea.png", category: "BEVERAGES", brand: "MAKIL", type: "popular" },
    { id: 16, name: "BLACK TEA (G)", tag: "Popular", rating: null, reviews: null, price: "₹60", image: "/products/black-tea.png", category: "BEVERAGES", brand: "RAMCARE", type: "popular" },
    { id: 17, name: "Guava Leaf Tea", tag: "Popular", rating: null, reviews: null, price: "₹80", image: "/products/guava-leaf-tea.png", category: "BEVERAGES", brand: "DIVYAM", type: "popular" },
    { id: 18, name: "Herbal Tea Powder", tag: "Trending", rating: null, reviews: null, price: "₹50", image: "/products/herbal-tea-powder.png", category: "BEVERAGES", brand: "NIRAI HOMAM", type: "trending" },
    { id: 19, name: "Vilvam Sherbet", tag: "Popular", rating: null, reviews: null, price: "₹67", image: "/products/vilvam-sherbet.png", category: "BEVERAGES", brand: "VANA ARASI", type: "popular" },

    // BODY Products
    { id: 20, name: "COCONUT MILK SOAP", tag: "Deals", rating: null, reviews: null, price: "₹60", image: "/products/coconut-milk-soap.png", category: "BODY", brand: "DIVYAM", type: "deals" },
    { id: 21, name: "CLAY SOAP", tag: "Popular", rating: null, reviews: null, price: "₹60", image: "/products/clay-soap.png", category: "BODY", brand: "VANA ARASI", type: "popular" },
    { id: 22, name: "CHARCOAL SOAP", tag: "Popular", rating: null, reviews: null, price: "₹55", image: "/products/charcoal-soap.png", category: "BODY", brand: "VEDAN", type: "popular" },
    { id: 23, name: "GREEN GRAM SOAP", tag: "Popular", rating: null, reviews: null, price: "₹60", image: "/products/green-gram-soap.png", category: "BODY", brand: "MAKIL", type: "popular" },

    // FOOD Products
    { id: 24, name: "LEMON PICKLE (JAR)", tag: "Trending", rating: null, reviews: null, price: "₹45", image: "/products/lemon-pickle-jar.png", category: "FOOD", brand: "MAKIL", type: "trending" },
    { id: 25, name: "Banana Blossom Pickle", tag: "Trending", rating: null, reviews: null, price: "₹55 - ₹105", image: "/products/banana-blossom-pickle.png", category: "FOOD", brand: "VANA ARASI", type: "trending" },
    { id: 26, name: "WILD HONEY JAR(NR)", tag: "Popular", rating: null, reviews: null, price: "₹75", image: "/products/wild-honey-jar.png", category: "FOOD", brand: "DIVYAM", type: "popular" },
    { id: 27, name: "MAPPILLAI SAMBA RICE", tag: "Popular", rating: null, reviews: null, price: "₹65", image: "/products/mappillai-samba-rice.png", category: "FOOD", brand: "VEDAN AMUTHU", type: "popular" },

    // HEALTH & WELLNESS Products
    { id: 28, name: "SPROUTED MULTIGRAIN HEALTH MIX", tag: "Best Selling", rating: 5.0, reviews: 3, price: "₹180 - ₹360", image: "/products/sprouted-health-mix.png", category: "HEALTH & WELLNESS", brand: "VEDAN", type: "best-selling" },
    { id: 29, name: "BEETROOT MALT (JAR)", tag: "Hot", rating: null, reviews: null, price: "₹235", image: "/products/beetroot-malt.png", category: "HEALTH & WELLNESS", brand: "ATHIYAMAN", type: "hot" },
    { id: 30, name: "CARROT MALT (JAR)", tag: "Hot", rating: null, reviews: null, price: "₹113", image: "/products/carrot-malt.png", category: "HEALTH & WELLNESS", brand: "NIRAI HOMAM", type: "hot" },
    { id: 31, name: "Wild Turmeric", tag: "Popular", rating: null, reviews: null, price: "₹35 - ₹65", image: "/products/wild-turmeric.png", category: "HEALTH & WELLNESS", brand: "MAKIL", type: "popular" },

    // POOJAS Products
    { id: 32, name: "27 Types of Homa Offerings", tag: "Popular", rating: null, reviews: null, price: "₹80", image: "/products/homa-offerings-27.png", category: "POOJAS", brand: "MAKIL", type: "popular" },
    { id: 33, name: "DEEPA OIL", tag: "Popular", rating: null, reviews: null, price: "₹95 - ₹225", image: "/products/deepa-oil.png", category: "POOJAS", brand: "RAMCARE", type: "popular" },
    { id: 34, name: "54 VAGAI HOMA THIRAVIYANGAL", tag: "Trending", rating: null, reviews: null, price: "₹175", image: "/products/homa-thiraviyangal-54.png", category: "POOJAS", brand: "DIVYAM", type: "trending" },
    { id: 35, name: "Screw Pine Kumkum", tag: "Popular", rating: null, reviews: null, price: "₹35", image: "/products/screw-pine-kumkum.png", category: "POOJAS", brand: "VANA ARASI", type: "popular" },
];

const categories = [
    { id: "all", label: "All Products", icon: "🛍️" },
    { id: "HAIR", label: "Hair", icon: "💇" },
    { id: "SKIN", label: "Skin", icon: "✨" },
    { id: "BABY", label: "Baby", icon: "👶" },
    { id: "BEVERAGES", label: "Beverages", icon: "🍵" },
    { id: "BODY", label: "Body", icon: "🧴" },
    { id: "FOOD", label: "Food", icon: "🍲" },
    { id: "HEALTH & WELLNESS", label: "Health & Wellness", icon: "💚" },
    { id: "POOJAS", label: "Poojas", icon: "🕉️" },
];

const brands = ["All Brands", "MAKIL", "RAMCARE", "DIVYAM", "VANA ARASI", "VEDAN AMUTHU", "VEDAN", "ATHIYAMAN", "NIRAI HOMAM"];

const productTypes = [
    { value: "all", label: "All Types", icon: null },
    { value: "new-launch", label: "New Launch", icon: "✨" },
    { value: "best-selling", label: "Best Selling", icon: "🔥" },
    { value: "deals", label: "Deals", icon: "🏷️" },
    { value: "trending", label: "Trending", icon: "📈" },
    { value: "hot", label: "Hot", icon: "🔥" },
    { value: "popular", label: "Popular", icon: "⭐" },
];

const sortOptions = ["Random", "Price: Low to High", "Price: High to Low", "Newest", "Best Rating", "Popularity"];

const AllProductsPage = () => {
    const { addToCart, toggleWishlist, isInWishlist } = useCartWishlist();
    const location = useLocation();

    const getInitialCategory = () => {
        const params = new URLSearchParams(location.search);
        return params.get("category") || "all";
    };

    const [selectedCategory, setSelectedCategory] = useState(getInitialCategory());

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const cat = params.get("category");
        if (cat) {
            setSelectedCategory(cat);
        } else {
            setSelectedCategory("all");
        }
    }, [location.search]);

    const [selectedBrand, setSelectedBrand] = useState("All Brands");
    const [selectedType, setSelectedType] = useState("all");
    const [sortBy, setSortBy] = useState("Random");
    const [searchQuery, setSearchQuery] = useState("");
    const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
    const [addedToCart, setAddedToCart] = useState<number[]>([]);
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

    // Toast notification state
    const [toastMessage, setToastMessage] = useState<string | null>(null);
    const [toastType, setToastType] = useState<"cart" | "wishlist">("cart");

    const showToast = (message: string, type: "cart" | "wishlist") => {
        setToastMessage(message);
        setToastType(type);
    };

    // Auto-clear toast
    useEffect(() => {
        if (toastMessage) {
            const timer = setTimeout(() => setToastMessage(null), 2500);
            return () => clearTimeout(timer);
        }
    }, [toastMessage]);
    const [isFilterSticky, setIsFilterSticky] = useState(false);
    const filterRef = useRef<HTMLDivElement>(null);
    const filterSentinelRef = useRef<HTMLDivElement>(null);

    // Sticky filter observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsFilterSticky(!entry.isIntersecting);
            },
            { threshold: 0, rootMargin: "-80px 0px 0px 0px" }
        );

        if (filterSentinelRef.current) {
            observer.observe(filterSentinelRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Filter and sort products
    const filteredProducts = allProducts.filter((product) => {
        const categoryMatch = selectedCategory === "all" || product.category === selectedCategory;
        const brandMatch = selectedBrand === "All Brands" || product.brand === selectedBrand;
        const typeMatch = selectedType === "all" || product.type === selectedType;
        const searchMatch = searchQuery === "" ||
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.brand.toLowerCase().includes(searchQuery.toLowerCase());
        return categoryMatch && brandMatch && typeMatch && searchMatch;
    });

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

    const getCategoryColor = (category: string) => {
        const colors: Record<string, string> = {
            "HAIR": "bg-amber-500/10 text-amber-400 border-amber-500/20",
            "SKIN": "bg-rose-500/10 text-rose-400 border-rose-500/20",
            "BABY": "bg-sky-500/10 text-sky-400 border-sky-500/20",
            "BEVERAGES": "bg-amber-500/10 text-amber-400 border-amber-500/20",
            "BODY": "bg-violet-500/10 text-violet-400 border-violet-500/20",
            "FOOD": "bg-red-500/10 text-red-400 border-red-500/20",
            "HEALTH & WELLNESS": "bg-green-500/10 text-green-400 border-green-500/20",
            "POOJAS": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
        };
        return colors[category] || "bg-gray-500/10 text-gray-400 border-gray-500/20";
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
        const prod = allProducts.find(p => p.id === productId);
        if (prod) {
            addToCart(prod);
            showToast(`Added ${prod.name} to Cart!`, "cart");
        }
        setAddedToCart((prev) => [...prev, productId]);
    };

    const handleToggleWishlist = (product: any) => {
        toggleWishlist(product);
        const inWishlist = isInWishlist(product.id);
        if (inWishlist) {
            showToast(`Removed ${product.name} from Wishlist`, "wishlist");
        } else {
            showToast(`Added ${product.name} to Wishlist!`, "wishlist");
        }
    };

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
        e.currentTarget.src = "/Placeholder.png";
    };

    const clearAllFilters = () => {
        setSelectedCategory("all");
        setSelectedBrand("All Brands");
        setSelectedType("all");
        setSortBy("Random");
        setSearchQuery("");
    };

    const hasActiveFilters = selectedCategory !== "all" || selectedBrand !== "All Brands" || selectedType !== "all" || searchQuery !== "";

    const FilterBar = ({ isSticky = false }: { isSticky?: boolean }) => (
        <div className={`${isSticky ? 'fixed top-0 left-0 right-0 z-40 bg-[#0a0f09]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50 animate-slideDown' : ''}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-4 py-4">
                    {/* Search Bar */}
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
                        />
                        {searchQuery && (
                            <button onClick={() => setSearchQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
                                <X className="w-4 h-4" />
                            </button>
                        )}
                    </div>

                    {/* Category Pills - Horizontally Scrollable */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4">
                        {categories.map((cat) => (
                            <motion.button
                                key={cat.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${selectedCategory === cat.id
                                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
                                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
                                    }`}
                            >
                                <span>{cat.icon}</span>
                                <span className="hidden sm:inline">{cat.label}</span>
                                {cat.id !== "all" && (
                                    <span className="text-xs opacity-60">
                                        ({allProducts.filter(p => p.category === cat.id).length})
                                    </span>
                                )}
                            </motion.button>
                        ))}
                    </div>

                    {/* Sort & Filter Row */}
                    <div className="flex items-center gap-3 flex-wrap">
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-400">
                                {filteredProducts.length} products
                            </span>
                        </div>

                        <div className="flex-1" />

                        {/* Brand Filter */}
                        <select
                            value={selectedBrand}
                            onChange={(e) => setSelectedBrand(e.target.value)}
                            className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500/50 cursor-pointer"
                        >
                            {brands.map((brand) => (
                                <option key={brand} value={brand} className="bg-gray-900">{brand}</option>
                            ))}
                        </select>

                        {/* Type Filter */}
                        <select
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value)}
                            className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500/50 cursor-pointer"
                        >
                            {productTypes.map((type) => (
                                <option key={type.value} value={type.value} className="bg-gray-900">
                                    {type.icon ? `${type.icon} ` : ""}{type.label}
                                </option>
                            ))}
                        </select>

                        {/* Sort */}
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500/50 cursor-pointer"
                        >
                            {sortOptions.map((option) => (
                                <option key={option} value={option} className="bg-gray-900">{option}</option>
                            ))}
                        </select>

                        {/* View Toggle */}
                        <div className="hidden sm:flex items-center bg-white/5 rounded-xl border border-white/10 p-1">
                            <button
                                onClick={() => setViewMode("grid")}
                                className={`p-2 rounded-lg transition-colors ${viewMode === "grid" ? "bg-emerald-500/20 text-emerald-400" : "text-gray-400 hover:text-white"}`}
                            >
                                <Grid3X3 className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => setViewMode("list")}
                                className={`p-2 rounded-lg transition-colors ${viewMode === "list" ? "bg-emerald-500/20 text-emerald-400" : "text-gray-400 hover:text-white"}`}
                            >
                                <List className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Clear Filters */}
                        {hasActiveFilters && (
                            <motion.button
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                onClick={clearAllFilters}
                                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium hover:bg-red-500/20 transition-colors"
                            >
                                <X className="w-3.5 h-3.5" />
                                Clear
                            </motion.button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section className="relative bg-[#0a0f09] min-h-screen">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/3 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-500/3 rounded-full blur-3xl" />
            </div>

            <div className="relative">
                {/* Page Header */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-4"
                    >
                        <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            <Sparkles className="w-4 h-4" />
                            Our Products
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                            Explore Our{" "}
                            <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
                                Collection
                            </span>
                        </h1>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Discover our complete range of natural, chemical-free products for your wellness journey
                        </p>
                    </motion.div>
                </div>

                {/* Sentinel for sticky detection */}
                <div ref={filterSentinelRef} className="h-1" />

                {/* Sticky Filter Bar */}
                <div ref={filterRef}>
                    <AnimatePresence>
                        {isFilterSticky && (
                            <motion.div
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -100, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <FilterBar isSticky={true} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Regular Filter Bar (when not sticky) */}
                {!isFilterSticky && <FilterBar />}

                {/* Active Filters Tags */}
                {hasActiveFilters && (
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex flex-wrap items-center gap-2"
                        >
                            <span className="text-xs text-gray-500">Active Filters:</span>
                            {selectedCategory !== "all" && (
                                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs border border-emerald-500/20">
                                    {categories.find(c => c.id === selectedCategory)?.icon} {categories.find(c => c.id === selectedCategory)?.label}
                                    <button onClick={() => setSelectedCategory("all")}><X className="w-3 h-3" /></button>
                                </span>
                            )}
                            {selectedBrand !== "All Brands" && (
                                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs border border-emerald-500/20">
                                    {selectedBrand}
                                    <button onClick={() => setSelectedBrand("All Brands")}><X className="w-3 h-3" /></button>
                                </span>
                            )}
                            {selectedType !== "all" && (
                                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs border border-emerald-500/20">
                                    {productTypes.find(t => t.value === selectedType)?.icon} {productTypes.find(t => t.value === selectedType)?.label}
                                    <button onClick={() => setSelectedType("all")}><X className="w-3 h-3" /></button>
                                </span>
                            )}
                        </motion.div>
                    </div>
                )}

                {/* Products Grid */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <motion.div
                        layout
                        className={`grid gap-6 ${viewMode === "grid"
                            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
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
                                    className="group relative"
                                >
                                    <div className="relative h-full bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/5 hover:border-emerald-500/20 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/5">
                                        <div className={`relative ${viewMode === "list" ? "w-48 flex-shrink-0" : "aspect-square"} overflow-hidden bg-gradient-to-b from-gray-900/30 to-gray-800/30`}>
                                            <img
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                src={product.image}
                                                alt={product.name}
                                                onError={handleImageError}
                                                loading="lazy"
                                            />
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
                                                                        ? "bg-red-500 text-white"
                                                                        : "bg-white/10 text-white hover:bg-red-500"
                                                                }`}
                                                            >
                                                                <Heart className={`w-4 h-4 ${isInWishlist(product.id) ? "fill-white" : ""}`} />
                                                            </motion.button>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>

                                            <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                                                <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${getTagColor(product.tag)} shadow-lg`}>
                                                    {product.tag}
                                                </span>
                                                <span className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full border ${getCategoryColor(product.category)}`}>
                                                    {product.category}
                                                </span>
                                            </div>

                                            {product.tag === "Deals" && (
                                                <div className="absolute top-3 right-3">
                                                    <span className="inline-block text-xs font-bold px-2 py-1 rounded-full bg-red-500 text-white shadow-lg shadow-red-500/30">
                                                        -15%
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        <div className={`p-5 ${viewMode === "list" ? "flex-1 flex flex-col justify-between" : ""}`}>
                                            <div>
                                                {product.rating && (
                                                    <div className="flex items-center gap-2 mb-2">
                                                        {renderStars(product.rating)}
                                                        <span className="text-sm font-semibold text-white">{product.rating}</span>
                                                        {product.reviews && (
                                                            <span className="text-xs text-gray-500">({product.reviews})</span>
                                                        )}
                                                    </div>
                                                )}
                                                <h3 className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors mb-1 line-clamp-2">
                                                    {product.name}
                                                </h3>
                                                <p className="text-xs text-gray-500 mb-3">{product.brand}</p>
                                            </div>

                                            <div>
                                                <span className="text-lg font-bold text-white block mb-3">{product.price}</span>
                                                <div className="flex items-center gap-2">
                                                    <motion.button
                                                        whileHover={{ scale: 1.02 }}
                                                        whileTap={{ scale: 0.98 }}
                                                        onClick={() => handleAddToCart(product.id)}
                                                        className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${addedToCart.includes(product.id)
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
                                                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all"
                                                    >
                                                        Buy Now
                                                    </motion.button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-emerald-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
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
                            <span className="text-6xl block mb-4">🔍</span>
                            <p className="text-gray-400 text-lg">No products found matching your filters.</p>
                            <button
                                onClick={clearAllFilters}
                                className="mt-4 text-emerald-400 hover:text-emerald-300 font-medium"
                            >
                                Clear all filters
                            </button>
                        </motion.div>
                    )}
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

            {/* Animation keyframes */}
            <style>{`
        @keyframes slideDown {
          from { transform: translateY(-100%); }
          to { transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </section>
    );
};

export { AllProductsPage };