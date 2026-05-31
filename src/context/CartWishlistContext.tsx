// src/context/CartWishlistContext.tsx
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { apiFetch } from "@/lib/api";

export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  brand: string;
  type: string;
  tag?: string;
  rating?: number | null;
  reviews?: number | null;
}

export interface CartItem extends Product {
  quantity: number;
}

interface CartWishlistContextProps {
  cart: CartItem[];
  wishlist: Product[];
  addToCart: (product: Product) => void;
  updateCart: (productId: number, quantity: number) => void; // PUT
  removeFromCart: (productId: number) => void;
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: number) => boolean;
}

const CartWishlistContext = createContext<CartWishlistContextProps | undefined>(undefined);

export const CartWishlistProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);

  // Load persisted data
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedCart) setCart(JSON.parse(storedCart));
    if (storedWishlist) setWishlist(JSON.parse(storedWishlist));
  }, []);

  // Persist updates
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const decodeUserId = (): string | null => {
    const token = localStorage.getItem("token");
    const storedId = localStorage.getItem("user_id");
    if (storedId) return storedId;
    if (!token) return null;
    try {
      const payload = JSON.parse(atob(token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")));
      return payload.user_id ?? payload.id ?? payload.sub ?? null;
    } catch (e) {
      console.error("Failed to decode JWT", e);
      return null;
    }
  };

  const addToCart = async (product: Product) => {
    // Optimistic UI – add with quantity 1 if not present
    setCart(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) return prev;
      return [...prev, { ...product, quantity: 1 }];
    });

    const userId = decodeUserId();
    if (!userId) {
      console.error("Add to cart failed: user_id is required");
      setCart(prev => prev.filter(p => p.id !== product.id));
      return;
    }
    const payload = { user_id: Number(userId), product_id: product.id, quantity: 1 };
    try {
      const response = await apiFetch("/api/cart/", { method: "POST", body: JSON.stringify(payload) });
      if (!response.ok) {
        setCart(prev => prev.filter(p => p.id !== product.id));
        const err = await response.json().catch(() => ({}));
        console.error("Add to cart failed", err);
      }
    } catch (e) {
      setCart(prev => prev.filter(p => p.id !== product.id));
      console.error("Add to cart network error", e);
    }
  };

  const updateCart = async (productId: number, quantity: number) => {
    // Optimistic UI update
    setCart(prev => prev.map(item => (item.id === productId ? { ...item, quantity } : item)));
    const userId = decodeUserId();
    if (!userId) {
      console.error("Update cart failed: user_id is required");
      return;
    }
    const payload = { user_id: Number(userId), product_id: productId, quantity };
    try {
      const response = await apiFetch("/api/cart/", { method: "PUT", body: JSON.stringify(payload) });
      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        console.error("Update cart failed", err);
      }
    } catch (e) {
      console.error("Update cart network error", e);
    }
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => prev.filter(p => p.id !== productId));
    // DELETE could be added if backend supports it
  };

  const toggleWishlist = (product: Product) => {
    setWishlist(prev => {
      const exists = prev.find(p => p.id === product.id);
      return exists ? prev.filter(p => p.id !== product.id) : [...prev, product];
    });
  };

  const isInWishlist = (productId: number) => wishlist.some(p => p.id === productId);

  return (
    <CartWishlistContext.Provider
      value={{ cart, wishlist, addToCart, updateCart, removeFromCart, toggleWishlist, isInWishlist }}
    >
      {children}
    </CartWishlistContext.Provider>
  );
};

export const useCartWishlist = () => {
  const context = useContext(CartWishlistContext);
  if (!context) throw new Error("useCartWishlist must be used within CartWishlistProvider");
  return context;
};
