import React from 'react';
import { useCartWishlist } from '@/context/CartWishlistContext';
import { Button } from '@/components/ui/button';
import { X, Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const WishlistPage: React.FC = () => {
  const { wishlist, toggleWishlist, addToCart } = useCartWishlist();

  if (wishlist.length === 0) {
    return (
      <section className="min-h-screen bg-[#0a0f09] flex items-center justify-center text-white p-6">
        <div className="text-center">
          <Heart className="mx-auto mb-4 w-12 h-12 text-red-500 fill-red-500/20" />
          <h2 className="text-2xl font-semibold mb-2">Your Wishlist is Empty</h2>
          <p className="mb-6 text-gray-400">Add products to your wishlist to keep track of items you love!</p>
          <Link to="/" className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#0d5c3f] text-white font-medium hover:bg-[#0b4f36] transition-all">
            Browse Products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#0a0f09] min-h-screen p-6 text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Heart className="w-8 h-8 text-red-500 fill-red-500" />
          My Wishlist ({wishlist.length})
        </h1>
        
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/5 p-4 flex flex-col justify-between hover:border-red-500/20 transition-all duration-300 group"
            >
              <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-900 mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "/Placeholder.png";
                  }}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleWishlist(product)}
                  className="absolute top-2 right-2 bg-black/40 hover:bg-red-500 hover:text-white rounded-full text-white backdrop-blur-sm h-8 w-8 transition-colors"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <div>
                <h3 className="font-semibold text-sm line-clamp-2 text-white/90 group-hover:text-emerald-400 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-xs mt-1 mb-2">{product.brand}</p>
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-emerald-400 font-bold">{product.price}</span>
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() => {
                      addToCart(product);
                    }}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 py-2"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WishlistPage;
