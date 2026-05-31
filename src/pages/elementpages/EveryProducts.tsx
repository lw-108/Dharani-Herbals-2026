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
    Sparkles,
    SlidersHorizontal,
    Package,
    ChevronLeft,
    ChevronRight
} from "lucide-react";
import { useCartWishlist } from "@/context/CartWishlistContext";
import { useLocation } from "react-router-dom";

// All products data (same as before)
const allProducts = [
    { id: 1, name: "Hibiscus Herbal Hair Oil", tag: "Hot", rating: null, reviews: null, price: "₹115 - ₹460", image: "/products/hibiscus-hair-oil.png", category: "HAIR", brand: "MAKIL", type: "hot" },
    { id: 2, name: "VETTIVER SHAMPOO", tag: "Trending", rating: null, reviews: null, price: "₹70", image: "/products/vettiver-shampoo.png", category: "HAIR", brand: "RAMCARE", type: "trending" },
    { id: 3, name: "ALOE VERA SHAMPOO", tag: "Deals", rating: null, reviews: null, price: "₹65 - ₹130", image: "/products/aloe-vera-shampoo.png", category: "HAIR", brand: "VANA ARASI", type: "deals" },
    { id: 4, name: "Hibiscus Shampoo", tag: "Best Selling", rating: 5.0, reviews: 4, price: "₹70 - ₹250", image: "/products/hibiscus-shampoo.png", category: "HAIR", brand: "VEDAN AMUTHU", type: "best-selling" },
    { id: 5, name: "ONION SHAMPOO", tag: "Trending", rating: 5.0, reviews: 1, price: "₹65 - ₹240", image: "/products/onion-shampoo.png", category: "HAIR", brand: "VEDAN", type: "trending" },
    { id: 6, name: "ARAPPU SHAMPOO", tag: "Popular", rating: null, reviews: null, price: "₹65 - ₹130", image: "/products/arappu-shampoo.png", category: "HAIR", brand: "ATHIYAMAN", type: "popular" },
    { id: 7, name: "RICE KANJI SHAMPOO", tag: "Best Selling", rating: 5.0, reviews: 2, price: "₹75 - ₹150", image: "/products/rice-kanji-shampoo.png", category: "HAIR", brand: "NIRAI HOMAM", type: "best-selling" },
    { id: 8, name: "FACEPACK POWDER JAR 100G", tag: "Best Selling", rating: 5.0, reviews: 3, price: "₹58", image: "/products/facepack-powder-jar.png", category: "SKIN", brand: "MAKIL", type: "best-selling" },
    { id: 9, name: "MULTHANI METTI SOAP", tag: "Deals", rating: 5.0, reviews: 1, price: "₹50", image: "/products/multhani-metti-soap.png", category: "SKIN", brand: "DIVYAM", type: "deals" },
    { id: 10, name: "ROSE SOAP", tag: "Hot", rating: 5.0, reviews: 1, price: "₹55", image: "/products/rose-soap.png", category: "SKIN", brand: "VANA ARASI", type: "hot" },
    { id: 11, name: "ALOE VERA SOAP", tag: "Popular", rating: 5.0, reviews: 1, price: "₹50", image: "/products/aloe-vera-soap.png", category: "SKIN", brand: "VEDAN AMUTHU", type: "popular" },
    { id: 12, name: "NALANGU POWDER JAR", tag: "Best Selling", rating: 5.0, reviews: 1, price: "₹60 - ₹145", image: "/products/nalangu-powder-jar.png", category: "SKIN", brand: "VEDAN", type: "best-selling" },
    { id: 13, name: "AVARAMPOO BABY SHAMPOO", tag: "Trending", rating: null, reviews: null, price: "₹75", image: "/products/avarampoo-baby-shampoo.png", category: "BABY", brand: "MAKIL", type: "trending" },
    { id: 14, name: "AVARAMPOO BABY SOAP", tag: "Hot", rating: 5.0, reviews: 1, price: "₹60", image: "/products/avarampoo-baby-soap.png", category: "BABY", brand: "RAMCARE", type: "hot" },
    { id: 15, name: "Aavaram Flower Tea", tag: "Popular", rating: null, reviews: null, price: "₹70", image: "/products/aavaram-flower-tea.png", category: "BEVERAGES", brand: "MAKIL", type: "popular" },
    { id: 16, name: "BLACK TEA (G)", tag: "Popular", rating: null, reviews: null, price: "₹60", image: "/products/black-tea.png", category: "BEVERAGES", brand: "RAMCARE", type: "popular" },
    { id: 17, name: "Guava Leaf Tea", tag: "Popular", rating: null, reviews: null, price: "₹80", image: "/products/guava-leaf-tea.png", category: "BEVERAGES", brand: "DIVYAM", type: "popular" },
    { id: 18, name: "Herbal Tea Powder", tag: "Trending", rating: null, reviews: null, price: "₹50", image: "/products/herbal-tea-powder.png", category: "BEVERAGES", brand: "NIRAI HOMAM", type: "trending" },
    { id: 19, name: "Vilvam Sherbet", tag: "Popular", rating: null, reviews: null, price: "₹67", image: "/products/vilvam-sherbet.png", category: "BEVERAGES", brand: "VANA ARASI", type: "popular" },
    { id: 20, name: "COCONUT MILK SOAP", tag: "Deals", rating: null, reviews: null, price: "₹60", image: "/products/coconut-milk-soap.png", category: "BODY", brand: "DIVYAM", type: "deals" },
    { id: 21, name: "CLAY SOAP", tag: "Popular", rating: null, reviews: null, price: "₹60", image: "/products/clay-soap.png", category: "BODY", brand: "VANA ARASI", type: "popular" },
    { id: 22, name: "CHARCOAL SOAP", tag: "Popular", rating: null, reviews: null, price: "₹55", image: "/products/charcoal-soap.png", category: "BODY", brand: "VEDAN", type: "popular" },
    { id: 23, name: "GREEN GRAM SOAP", tag: "Popular", rating: null, reviews: null, price: "₹60", image: "/products/green-gram-soap.png", category: "BODY", brand: "MAKIL", type: "popular" },
    { id: 24, name: "LEMON PICKLE (JAR)", tag: "Trending", rating: null, reviews: null, price: "₹45", image: "/products/lemon-pickle-jar.png", category: "FOOD", brand: "MAKIL", type: "trending" },
    { id: 25, name: "Banana Blossom Pickle", tag: "Trending", rating: null, reviews: null, price: "₹55 - ₹105", image: "/products/banana-blossom-pickle.png", category: "FOOD", brand: "VANA ARASI", type: "trending" },
    { id: 26, name: "WILD HONEY JAR(NR)", tag: "Popular", rating: null, reviews: null, price: "₹75", image: "/products/wild-honey-jar.png", category: "FOOD", brand: "DIVYAM", type: "popular" },
    { id: 27, name: "MAPPILLAI SAMBA RICE", tag: "Popular", rating: null, reviews: null, price: "₹65", image: "/products/mappillai-samba-rice.png", category: "FOOD", brand: "VEDAN AMUTHU", type: "popular" },
    { id: 28, name: "SPROUTED MULTIGRAIN HEALTH MIX", tag: "Best Selling", rating: 5.0, reviews: 3, price: "₹180 - ₹360", image: "/products/sprouted-health-mix.png", category: "HEALTH & WELLNESS", brand: "VEDAN", type: "best-selling" },
    { id: 29, name: "BEETROOT MALT (JAR)", tag: "Hot", rating: null, reviews: null, price: "₹235", image: "/products/beetroot-malt.png", category: "HEALTH & WELLNESS", brand: "ATHIYAMAN", type: "hot" },
    { id: 30, name: "CARROT MALT (JAR)", tag: "Hot", rating: null, reviews: null, price: "₹113", image: "/products/carrot-malt.png", category: "HEALTH & WELLNESS", brand: "NIRAI HOMAM", type: "hot" },
    { id: 31, name: "Wild Turmeric", tag: "Popular", rating: null, reviews: null, price: "₹35 - ₹65", image: "/products/wild-turmeric.png", category: "HEALTH & WELLNESS", brand: "MAKIL", type: "popular" },
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
    { value: "best-selling", label: "Best Selling", icon: "🔥" },
    { value: "deals", label: "Deals", icon: "🏷️" },
    { value: "trending", label: "Trending", icon: "📈" },
    { value: "hot", label: "Hot", icon: "🔥" },
    { value: "popular", label: "Popular", icon: "⭐" },
];

const sortOptions = ["Default", "Price: Low to High", "Price: High to Low", "Best Rating"];

const AllProductsPage = () => {
    const { addToCart, toggleWishlist, isInWishlist } = useCartWishlist();
    const location = useLocation();

    const getInitialCategory = () => {
        const params = new URLSearchParams(location.search);
        return params.get("category") || "all";
    };

    const [selectedCategory, setSelectedCategory] = useState(getInitialCategory());
    const [selectedBrand, setSelectedBrand] = useState("All Brands");
    const [selectedType, setSelectedType] = useState("all");
    const [sortBy, setSortBy] = useState("Default");
    const [searchQuery, setSearchQuery] = useState("");
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    // Category scroll state
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const categoryScrollRef = useRef<HTMLDivElement>(null);

    // Get navbar height for sticky positioning
    const [navbarHeight, setNavbarHeight] = useState(0);

    // Toast notification
    const [toastMessage, setToastMessage] = useState<string | null>(null);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const cat = params.get("category");
        if (cat) setSelectedCategory(cat);
    }, [location.search]);

    useEffect(() => {
        if (toastMessage) {
            const timer = setTimeout(() => setToastMessage(null), 2000);
            return () => clearTimeout(timer);
        }
    }, [toastMessage]);

    // Calculate navbar height on mount and resize
    useEffect(() => {
        const calculateNavbarHeight = () => {
            const navbar = document.querySelector('nav');
            if (navbar) {
                setNavbarHeight(navbar.offsetHeight);
            } else {
                // Fallback height if navbar not found
                setNavbarHeight(64); // Default navbar height (adjust as needed)
            }
        };

        calculateNavbarHeight();
        window.addEventListener('resize', calculateNavbarHeight);
        return () => window.removeEventListener('resize', calculateNavbarHeight);
    }, []);

    // Check scroll position for arrows
    const checkScroll = () => {
        if (categoryScrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = categoryScrollRef.current;
            setShowLeftArrow(scrollLeft > 0);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    const scrollCategories = (direction: 'left' | 'right') => {
        if (categoryScrollRef.current) {
            const scrollAmount = 300;
            const newScrollLeft = direction === 'left' 
                ? categoryScrollRef.current.scrollLeft - scrollAmount
                : categoryScrollRef.current.scrollLeft + scrollAmount;
            
            categoryScrollRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });

            setTimeout(checkScroll, 300);
        }
    };

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

    const clearAllFilters = () => {
        setSelectedCategory("all");
        setSelectedBrand("All Brands");
        setSelectedType("all");
        setSortBy("Default");
        setSearchQuery("");
    };

    const hasActiveFilters = selectedCategory !== "all" || selectedBrand !== "All Brands" || selectedType !== "all" || searchQuery !== "";

    const renderStars = (rating: number | null) => {
        if (!rating) return null;
        return (
            <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }, (_, i) => (
                    <Star
                        key={i}
                        className={`w-3 h-3 ${i < Math.floor(rating) ? "text-green-600 fill-green-600" : "text-green-200 fill-green-200"}`}
                    />
                ))}
            </div>
        );
    };

    const handleAddToCart = (product: any) => {
        addToCart(product);
        setToastMessage(`${product.name} added to cart!`);
    };

    const handleToggleWishlist = (product: any) => {
        toggleWishlist(product);
        setToastMessage(isInWishlist(product.id) ? "Removed from wishlist" : "Added to wishlist!");
    };

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
        e.currentTarget.src = "/Placeholder.png";
    };

    const handleQuickView = (product: any) => {
        // Implement quick view modal here
        console.log("Quick view:", product.name);
    };

    return (
        <section className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-800 to-green-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                            <Sparkles className="w-4 h-4" />
                            Natural & Chemical-Free Products
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                            Our Premium{" "}
                            <span className="relative">
                                Collection
                                <span className="absolute bottom-1 left-0 right-0 h-3 bg-green-400/30 -z-10"></span>
                            </span>
                        </h1>
                        <p className="text-green-100 text-lg max-w-2xl mx-auto">
                            Discover pure, natural products crafted with traditional wisdom for your complete wellness
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Sticky Search & Filters - Positioned below navbar */}
            <div 
                className="sticky z-40 bg-white/95 backdrop-blur-md border-b border-green-100 shadow-sm"
                style={{ top: `${navbarHeight}px` }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    {/* Search Bar */}
                    <div className="flex flex-col md:flex-row gap-4 mb-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-400" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-green-50/50 border-2 border-green-100 rounded-2xl text-green-900 placeholder-green-400 focus:outline-none focus:border-green-500 transition-all"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-green-400 hover:text-green-600"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            )}
                        </div>

                        <div className="flex gap-2">
                            {/* Mobile Filter Button */}
                            <button
                                onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                                className="md:hidden flex items-center gap-2 px-4 py-3 bg-green-50 border-2 border-green-100 rounded-2xl text-green-700 font-medium"
                            >
                                <SlidersHorizontal className="w-5 h-5" />
                                Filters
                            </button>

                            {/* Brand Filter */}
                            <select
                                value={selectedBrand}
                                onChange={(e) => setSelectedBrand(e.target.value)}
                                className="hidden md:block px-4 py-3 bg-green-50/50 border-2 border-green-100 rounded-2xl text-green-700 font-medium focus:outline-none focus:border-green-500 cursor-pointer"
                            >
                                {brands.map((brand) => (
                                    <option key={brand} value={brand}>{brand}</option>
                                ))}
                            </select>

                            {/* Type Filter */}
                            <select
                                value={selectedType}
                                onChange={(e) => setSelectedType(e.target.value)}
                                className="hidden md:block px-4 py-3 bg-green-50/50 border-2 border-green-100 rounded-2xl text-green-700 font-medium focus:outline-none focus:border-green-500 cursor-pointer"
                            >
                                {productTypes.map((type) => (
                                    <option key={type.value} value={type.value}>
                                        {type.icon ? `${type.icon} ` : ""}{type.label}
                                    </option>
                                ))}
                            </select>

                            {/* Sort */}
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-4 py-3 bg-green-50/50 border-2 border-green-100 rounded-2xl text-green-700 font-medium focus:outline-none focus:border-green-500 cursor-pointer"
                            >
                                {sortOptions.map((option) => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </select>

                            {/* View Toggle */}
                            <div className="hidden sm:flex bg-green-50/50 border-2 border-green-100 rounded-2xl p-1">
                                <button
                                    onClick={() => setViewMode("grid")}
                                    className={`p-2 rounded-xl transition-all ${viewMode === "grid" ? "bg-green-600 text-white shadow-md" : "text-green-600 hover:bg-green-100"}`}
                                >
                                    <Grid3X3 className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => setViewMode("list")}
                                    className={`p-2 rounded-xl transition-all ${viewMode === "list" ? "bg-green-600 text-white shadow-md" : "text-green-600 hover:bg-green-100"}`}
                                >
                                    <List className="w-4 h-4" />
                                </button>
                            </div>

                            {hasActiveFilters && (
                                <button
                                    onClick={clearAllFilters}
                                    className="flex items-center gap-1 px-4 py-3 bg-red-50 border-2 border-red-200 rounded-2xl text-red-600 font-medium hover:bg-red-100 transition-all"
                                >
                                    <X className="w-4 h-4" />
                                    <span className="hidden sm:inline">Clear</span>
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Category Pills with Chevron Navigation */}
                    <div className="relative">
                        {/* Left Arrow */}
                        {showLeftArrow && (
                            <button
                                onClick={() => scrollCategories('left')}
                                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow-lg rounded-full text-green-600 hover:bg-green-50 transition-all hidden md:flex items-center justify-center"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                        )}

                        {/* Scrollable Categories */}
                        <div
                            ref={categoryScrollRef}
                            onScroll={checkScroll}
                            className="flex items-center gap-2 overflow-x-auto scrollbar-hide px-0 md:px-10"
                        >
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                                        selectedCategory === cat.id
                                            ? "bg-green-600 text-white shadow-lg shadow-green-200"
                                            : "bg-green-50 text-green-700 hover:bg-green-100 border border-green-200"
                                    }`}
                                >
                                    <span>{cat.icon}</span>
                                    <span className="hidden sm:inline">{cat.label}</span>
                                    {cat.id !== "all" && (
                                        <span className="text-xs opacity-75">
                                            ({allProducts.filter(p => p.category === cat.id).length})
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Right Arrow */}
                        {showRightArrow && (
                            <button
                                onClick={() => scrollCategories('right')}
                                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow-lg rounded-full text-green-600 hover:bg-green-50 transition-all hidden md:flex items-center justify-center"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Product Count & Active Filters */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <p className="text-green-700 font-medium">
                        Showing <span className="text-green-900 font-bold">{filteredProducts.length}</span> products
                    </p>
                    
                    {hasActiveFilters && (
                        <div className="flex flex-wrap gap-2">
                            {selectedCategory !== "all" && (
                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                                    {categories.find(c => c.id === selectedCategory)?.icon} {categories.find(c => c.id === selectedCategory)?.label}
                                    <button onClick={() => setSelectedCategory("all")}>
                                        <X className="w-3 h-3" />
                                    </button>
                                </span>
                            )}
                            {selectedBrand !== "All Brands" && (
                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                                    {selectedBrand}
                                    <button onClick={() => setSelectedBrand("All Brands")}>
                                        <X className="w-3 h-3" />
                                    </button>
                                </span>
                            )}
                            {selectedType !== "all" && (
                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                                    {productTypes.find(t => t.value === selectedType)?.icon} {productTypes.find(t => t.value === selectedType)?.label}
                                    <button onClick={() => setSelectedType("all")}>
                                        <X className="w-3 h-3" />
                                    </button>
                                </span>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Products Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className={`grid gap-6 ${
                    viewMode === "grid"
                        ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                        : "grid-cols-1"
                }`}>
                    {sortedProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05, duration: 0.3 }}
                            className="group"
                        >
                            <div className={`bg-white rounded-2xl border-2 border-green-100 overflow-hidden hover:border-green-400 hover:shadow-xl hover:shadow-green-100 transition-all duration-300 ${viewMode === "list" ? "flex" : ""}`}>
                                {/* Product Image */}
                                <div className={`relative overflow-hidden bg-gradient-to-br from-green-50 to-white ${viewMode === "list" ? "w-48 flex-shrink-0" : "aspect-square"}`}>
                                    <img
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        src={product.image}
                                        alt={product.name}
                                        onError={handleImageError}
                                        loading="lazy"
                                    />
                                    
                                    {/* Tags */}
                                    <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                                        <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full shadow-lg ${
                                            product.tag === "Best Selling" ? "bg-green-600 text-white" :
                                            product.tag === "Popular" ? "bg-green-500 text-white" :
                                            product.tag === "Trending" ? "bg-green-400 text-white" :
                                            product.tag === "Deals" ? "bg-red-500 text-white" :
                                            "bg-green-700 text-white"
                                        }`}>
                                            {product.tag}
                                        </span>
                                        <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/90 text-green-700 border border-green-200">
                                            {product.category}
                                        </span>
                                    </div>

                                    {/* Hover Actions */}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                                        <button
                                            onClick={() => handleQuickView(product)}
                                            className="p-2 bg-white rounded-full text-green-700 hover:bg-green-600 hover:text-white transition-all"
                                        >
                                            <Eye className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={() => handleToggleWishlist(product)}
                                            className={`p-2 rounded-full transition-all ${
                                                isInWishlist(product.id)
                                                    ? "bg-red-500 text-white"
                                                    : "bg-white text-green-700 hover:bg-red-500 hover:text-white"
                                            }`}
                                        >
                                            <Heart className={`w-5 h-5 ${isInWishlist(product.id) ? "fill-current" : ""}`} />
                                        </button>
                                    </div>
                                </div>

                                {/* Product Info */}
                                <div className={`p-5 ${viewMode === "list" ? "flex-1 flex flex-col justify-between" : ""}`}>
                                    <div>
                                        {product.rating && (
                                            <div className="flex items-center gap-2 mb-2">
                                                {renderStars(product.rating)}
                                                <span className="text-sm font-semibold text-green-700">{product.rating}</span>
                                                {product.reviews && (
                                                    <span className="text-xs text-green-500">({product.reviews})</span>
                                                )}
                                            </div>
                                        )}
                                        <h3 className="text-sm font-semibold text-green-900 group-hover:text-green-600 transition-colors mb-1 line-clamp-2">
                                            {product.name}
                                        </h3>
                                        <p className="text-xs text-green-600 mb-3">{product.brand}</p>
                                    </div>

                                    <div>
                                        <span className="text-lg font-bold text-green-900 block mb-3">{product.price}</span>
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => handleAddToCart(product)}
                                                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-green-600 text-white rounded-xl text-sm font-semibold hover:bg-green-700 transition-all shadow-md hover:shadow-lg"
                                            >
                                                <ShoppingCart className="w-4 h-4" />
                                                Add to Cart
                                            </button>
                                            <button className="px-4 py-2.5 bg-white border-2 border-green-600 text-green-600 rounded-xl text-sm font-semibold hover:bg-green-50 transition-all">
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredProducts.length === 0 && (
                    <div className="text-center py-20">
                        <Package className="w-20 h-20 text-green-300 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-green-800 mb-2">No Products Found</h3>
                        <p className="text-green-600 mb-4">Try adjusting your filters or search query</p>
                        <button
                            onClick={clearAllFilters}
                            className="px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all"
                        >
                            Clear All Filters
                        </button>
                    </div>
                )}
            </div>

            {/* Toast Notification */}
            <AnimatePresence>
                {toastMessage && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        className="fixed bottom-6 right-6 z-50 bg-green-800 text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-2"
                    >
                        <ShoppingCart className="w-5 h-5" />
                        <span className="font-medium">{toastMessage}</span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Styles for scrollbar hide */}
            <style>{`
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