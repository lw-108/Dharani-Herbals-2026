import React, { useState } from 'react';
import { useCartWishlist } from '@/context/CartWishlistContext';
import { Button } from '@/components/ui/button';
import { X, ShoppingCart, CheckCircle2, Loader2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export const CartPage: React.FC = () => {
  const { cart, removeFromCart } = useCartWishlist();
  const navigate = useNavigate();
  const [checkoutStatus, setCheckoutStatus] = useState<'idle' | 'processing' | 'success'>('idle');

  // Parse ranged and standard price string to float accurately (e.g. "₹115 - ₹460" -> 115)
  const parsePrice = (priceStr: string): number => {
    const basePriceStr = priceStr.split('-')[0].trim();
    const cleanStr = basePriceStr.replace(/[^0-9.]/g, '');
    return parseFloat(cleanStr) || 0;
  };

  const total = cart.reduce((sum, item) => {
    return sum + parsePrice(item.price);
  }, 0);

  const handleCheckout = () => {
    setCheckoutStatus('processing');
    
    // Simulate payment process
    setTimeout(() => {
      setCheckoutStatus('success');
      // Clear cart items here through context if needed (handled or mocked)
      setTimeout(() => {
        // Redirect to homepage
        navigate('/');
      }, 2500);
    }, 2000);
  };

  if (cart.length === 0 && checkoutStatus !== 'success') {
    return (
      <section className="min-h-[85vh] bg-white flex items-center justify-center text-white p-6">
        <div className="text-center max-w-md bg-white/[0.02] backdrop-blur-xl border border-white/5 p-8 rounded-3xl">
          <ShoppingCart className="mx-auto mb-6 w-16 h-16 text-emerald-500 opacity-80" />
          <h2 className="text-2xl font-bold mb-3">Your Cart is Empty</h2>
          <p className="mb-6 text-gray-400 text-sm">Browse our dynamic natural herbal range and select some wellness items for your routine.</p>
          <Link to="/EveryProducts" className="inline-flex items-center justify-center w-full px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-colors shadow-lg shadow-emerald-500/10">
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  if (checkoutStatus === 'processing') {
    return (
      <section className="min-h-[85vh] bg-white flex items-center justify-center text-white p-6">
        <div className="text-center bg-white/[0.02] backdrop-blur-xl border border-white/5 p-10 rounded-3xl max-w-sm w-full">
          <Loader2 className="mx-auto mb-6 w-12 h-12 text-emerald-500 animate-spin" />
          <h2 className="text-xl font-bold mb-2">Processing Payment</h2>
          <p className="text-gray-400 text-xs">Securing your order pathway, please do not close or refresh this tab...</p>
        </div>
      </section>
    );
  }

  if (checkoutStatus === 'success') {
    return (
      <section className="min-h-[85vh] bg-white flex items-center justify-center text-white p-6">
        <div className="text-center bg-white/[0.02] backdrop-blur-xl border border-emerald-500/20 p-10 rounded-3xl max-w-sm w-full shadow-2xl shadow-emerald-500/5">
          <CheckCircle2 className="mx-auto mb-6 w-16 h-16 text-emerald-400 animate-bounce" />
          <h2 className="text-2xl font-bold text-emerald-400 mb-2">Order Confirmed!</h2>
          <p className="text-gray-300 text-sm mb-4">Thank you for buying from Dharani Herbbals.</p>
          <p className="text-gray-500 text-xs">Redirecting to your wellness profile/homepage...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white min-h-screen p-6 text-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-8 flex items-center gap-3 tracking-tight">
          <ShoppingCart className="w-8 h-8 text-emerald-500" />
          Your Shopping Cart
          <span className="text-sm font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 px-3 py-1 rounded-full">
            {cart.length} {cart.length === 1 ? 'item' : 'items'}
          </span>
        </h1>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart list */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((product) => (
              <div
                key={product.id}
                className="bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/5 p-4 flex gap-4 items-center hover:border-emerald-500/10 transition-all duration-300 group"
              >
                <div className="w-20 h-20 bg-gray-900 rounded-xl overflow-hidden shrink-0 border border-white/5">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "/Placeholder.png";
                    }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm sm:text-base text-white/95 group-hover:text-emerald-400 transition-colors truncate">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-xs mt-0.5">{product.brand}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-emerald-400 font-bold text-sm sm:text-base whitespace-nowrap">
                    {product.price}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFromCart(product.id)}
                    className="text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl h-9 w-9 shrink-0 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart summary block */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 text-center">Order Summary</h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex justify-between"><span className="font-medium">Subtotal</span><span>₹{total}</span></div>
              <div className="flex justify-between"><span className="font-medium">Shipping</span><span className="text-sm text-gray-500">Calculated at checkout</span></div>
              <div className="flex justify-between"><span className="font-medium">Tax</span><span className="text-sm text-gray-500">Inclusive</span></div>
              <hr className="border-gray-200" />
              <div className="flex justify-between text-xl font-bold text-gray-800"><span>Total</span><span>₹{total}</span></div>
              <p className="text-xs text-gray-500 italic">*Final shipping calculated at checkout based on delivery location</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button onClick={handleCheckout} className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-6 rounded-lg transition-colors">Proceed to Checkout</Button>
              <Link to="/EveryProducts" className="w-full sm:w-auto text-center bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-6 rounded-lg transition-colors">Continue Shopping</Link>
            </div>
            <div className="mt-6 text-center text-gray-500 text-sm">
              <p className="font-medium text-gray-800 mb-1">Secured & Powered by</p>
              <div className="flex items-center justify-center gap-2 text-gray-700">
                <img src="/razorpay-logo.svg" alt="Razorpay" className="h-5" />
                <span className="font-semibold">Razorpay</span>
                <span className="text-gray-400">|</span>
                <span className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.657-1.343-3-3-3s-3 1.343-3 3c0 .276.224.5.5.5h5c.276 0 .5-.224.5-.5zM19 13v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6" />
                  </svg>
                  256-bit SSL • PCI DSS Compliant
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
