// src/components/CartContextDebug.tsx
import { useEffect } from "react";
import { useCartWishlist } from "@/context/CartWishlistContext";

/**
 * Debug helper component.
 * Renders nothing but attaches the cart context to `window.cartCtx`
 * so you can call `window.cartCtx?.updateCart(productId, qty)` from the
 * browser console.
 * This component is only rendered in development (Vite sets `import.meta.env.DEV`).
 */
const CartContextDebug = () => {
  const ctx = useCartWishlist();

  // Attach once on mount
  useEffect(() => {
    // Expose on the global window object for manual testing.
    // @ts-ignore – intentional for debugging only.
    window.cartCtx = ctx;
    console.info("[CartContextDebug] window.cartCtx is now available");
    return () => {
      // Clean up when component unmounts (e.g., hot reload).
      // @ts-ignore
      delete window.cartCtx;
    };
  }, [ctx]);

  return null;
};

export default CartContextDebug;
