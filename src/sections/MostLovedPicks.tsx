import { Star, ShoppingCart } from "lucide-react";

export const MostLovedPicks = () => {
  const products = [
    {
      id: 1,
      name: "FACEPACK POWDER JAR 100G",
      tag: "Best Selling",
      rating: 5.0,
      reviews: 3,
      price: 58,
      image: "/products/facepack-powder-jar.png",
    },
    {
      id: 2,
      name: "Guava Leaf Tea",
      tag: "Popular",
      rating: null,
      reviews: null,
      price: 80,
      image: "/products/guava-leaf-tea.png",
    },
    {
      id: 3,
      name: "COCONUT MILK SOAP",
      tag: "Deals",
      rating: null,
      reviews: null,
      price: 60,
      image: "/products/coconut-milk-soap.png",
    },
    {
      id: 4,
      name: "BLACK TEA (G)",
      tag: "Popular",
      rating: null,
      reviews: null,
      price: 60,
      image: "/products/black-tea.png",
    },
    {
      id: 5,
      name: "AVARAMPOO BABY SHAMPOO",
      tag: "Trending",
      rating: null,
      reviews: null,
      price: 75,
      image: "/products/avarampoo-baby-shampoo.png",
    },
    {
      id: 6,
      name: "ALOE VERA FACEPACK POWDER JAR (For Men)",
      tag: "Hot",
      rating: 5.0,
      reviews: 1,
      price: 54,
      image: "/products/aloe-vera-facepack-men.png",
    },
    {
      id: 7,
      name: "MULTHANI METTI SOAP",
      tag: "Deals",
      rating: 5.0,
      reviews: 1,
      price: 50,
      image: "/products/multhani-metti-soap.png",
    },
    {
      id: 8,
      name: "THUVALAI POWDER",
      tag: "Trending",
      rating: null,
      reviews: null,
      price: 40,
      image: "/products/thuvalai-powder.png",
    },
    {
      id: 9,
      name: "MULTHANI METTI JAR",
      tag: "Best Selling",
      rating: 5.0,
      reviews: 2,
      price: 35,
      image: "/products/multhani-metti-jar.png",
    },
    {
      id: 10,
      name: "Aavaram Flower Tea",
      tag: "Popular",
      rating: null,
      reviews: null,
      price: 70,
      image: "/products/aavaram-flower-tea.png",
    },
    {
      id: 11,
      name: "AVARAMPOO PUSU MANJAL JAR",
      tag: "Hot",
      rating: 4.0,
      reviews: 1,
      price: 60,
      image: "/products/avarampoo-pusu-manjal-jar.png",
    },
    {
      id: 12,
      name: "NALANGU POWDER JAR",
      tag: "Best Selling",
      rating: 5.0,
      reviews: 1,
      price: "60 - 145",
      image: "/products/nalangu-powder-jar.png",
    },
    {
      id: 13,
      name: "KUPPAIMENI SOAP",
      tag: "Popular",
      rating: null,
      reviews: null,
      price: 55,
      image: "/products/kuppaimeni-soap.png",
    },
    {
      id: 14,
      name: "AVARAMPOO TURMERIC SOAP",
      tag: "Popular",
      rating: null,
      reviews: null,
      price: 60,
      image: "/products/avarampoo-turmeric-soap.png",
    },
    {
      id: 15,
      name: "CLAY SOAP",
      tag: "Popular",
      rating: null,
      reviews: null,
      price: 60,
      image: "/products/clay-soap.png",
    },
    {
      id: 16,
      name: "AVARAMPOO BABY SOAP",
      tag: "Hot",
      rating: 5.0,
      reviews: 1,
      price: 60,
      image: "/products/avarampoo-baby-soap.png",
    },
    {
      id: 17,
      name: "CHARCOAL SOAP",
      tag: "Popular",
      rating: null,
      reviews: null,
      price: 55,
      image: "/products/charcoal-soap.png",
    },
    {
      id: 18,
      name: "ROSE SOAP",
      tag: "Hot",
      rating: 5.0,
      reviews: 1,
      price: 55,
      image: "/products/rose-soap.png",
    },
    {
      id: 19,
      name: "RED SANDAL SOAP",
      tag: "Popular",
      rating: null,
      reviews: null,
      price: 55,
      image: "/products/red-sandal-soap.png",
    },
    {
      id: 20,
      name: "ALOE VERA SOAP",
      tag: "Popular",
      rating: 5.0,
      reviews: 1,
      price: 50,
      image: "/products/aloe-vera-soap.png",
    },
  ];

  const getTagColor = (tag: string) => {
    switch (tag) {
      case "Best Selling":
        return "bg-amber-500 text-white";
      case "Popular":
        return "bg-blue-500 text-white";
      case "Deals":
        return "bg-red-500 text-white";
      case "Trending":
        return "bg-purple-500 text-white";
      case "Hot":
        return "bg-orange-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating)
            ? "text-yellow-400 fill-yellow-400"
            : "text-gray-300 fill-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="bg-[#12210f] py-16 px-4 sm:px-6 lg:px-8" id="most-loved">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Most Loved Picks
          </h2>
          <p className="text-lg text-green-300 max-w-2xl mx-auto">
            Discover our community's favorite natural products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Product Image */}
              <div className="relative aspect-square bg-gray-50">
                <img
                  className="w-full h-full object-cover"
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                />
                {/* Tag Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getTagColor(product.tag)}`}>
                    {product.tag}
                  </span>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-5">
                {/* Rating */}
                {product.rating && (
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-0.5">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-sm font-medium text-gray-600">
                      {product.rating}
                    </span>
                    {product.reviews && (
                      <span className="text-sm text-gray-400">
                        ({product.reviews})
                      </span>
                    )}
                  </div>
                )}

                {/* Product Name */}
                <h3 className="text-base font-semibold text-gray-900 mb-4 line-clamp-2 min-h-[48px]">
                  {product.name}
                </h3>

                {/* Price and Cart Button */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">
                    ₹{product.price}
                  </span>
                  <button className="flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                    <ShoppingCart className="w-4 h-4" />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MostLovedPicks;