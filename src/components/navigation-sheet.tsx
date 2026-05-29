import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu, Heart, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { useCartWishlist } from "@/context/CartWishlistContext";

const navLinks: { label: string; path: string }[] = [
  { label: "Home", path: "/" },
  { label: "Hair", path: "/EveryProducts?category=HAIR" },
  { label: "Skin", path: "/EveryProducts?category=SKIN" },
  { label: "Baby", path: "/EveryProducts?category=BABY" },
  { label: "Health & Wellness", path: "/EveryProducts?category=HEALTH%20%26%20WELLNESS" },
  { label: "Shop All", path: "/EveryProducts" },
  { label: "About Us", path: "/" },
  { label: "Contact", path: "/" },
];

export const NavigationSheet = () => {
  const isLoggedIn = false;
  const { cart, wishlist } = useCartWishlist();

  return (
    <Sheet>
      <VisuallyHidden>
        <SheetTitle>Navigation Menu</SheetTitle>
      </VisuallyHidden>

      {/* MENU BUTTON */}
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          className="rounded-full border-zinc-200 hover:bg-zinc-50"
        >
          <Menu className="h-5 w-5 text-zinc-700" />
        </Button>
      </SheetTrigger>

      {/* MOBILE DRAWER */}
      <SheetContent
        side="right"
        className="w-[320px] border-l border-zinc-200 bg-[#fafaf7] px-0 py-0 flex flex-col"
      >
        {/* TOP LOGO */}
        <div className="flex items-center justify-between border-b border-zinc-200 px-6 py-5 bg-white">
          <img
            src="/logo.png"
            alt="Dharani Herbbals"
            className="h-11 w-auto object-contain"
          />
        </div>

        {/* AUTH */}
        <div className="px-6 py-4 border-b border-zinc-200 bg-white">
          {isLoggedIn ? (
            <div className="text-sm text-zinc-700 font-medium">
              Account
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <SheetClose asChild>
                <Link to="/signin" className="w-full">
                  <Button
                    variant="outline"
                    className="rounded-full w-full border-zinc-200 hover:bg-zinc-50 text-zinc-700 font-semibold"
                  >
                    Sign In
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link to="/signup" className="w-full">
                  <Button
                    className="
                      rounded-full w-full
                      bg-[#0d5c3f] hover:bg-[#0b4f36] text-white font-semibold shadow-sm
                    "
                  >
                    Sign Up
                  </Button>
                </Link>
              </SheetClose>
            </div>
          )}
        </div>

        {/* CART & WISHLIST QUICK ACCESS */}
        <div className="grid grid-cols-2 gap-2 px-6 py-3 border-b border-zinc-200 bg-white">
          <SheetClose asChild>
            <Link
              to="/wishlist"
              className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl border border-zinc-200 hover:bg-zinc-50 text-zinc-700 font-medium transition-all"
            >
              <Heart className="h-4 w-4 text-emerald-800" />
              <span className="text-sm">Wishlist</span>
              {wishlist.length > 0 && (
                <span className="bg-[#0d5c3f] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {wishlist.length}
                </span>
              )}
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              to="/cart"
              className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl border border-zinc-200 hover:bg-zinc-50 text-zinc-700 font-medium transition-all"
            >
              <ShoppingCart className="h-4 w-4 text-[#0d5c3f]" />
              <span className="text-sm">Cart</span>
              {cart.length > 0 && (
                <span className="bg-[#0d5c3f] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {cart.length}
                </span>
              )}
            </Link>
          </SheetClose>
        </div>

        {/* NAVIGATION */}
        <div className="flex flex-col flex-1 overflow-y-auto bg-white/50">
          {navLinks.map((item) => (
            <SheetClose asChild key={item.label}>
              <Link
                to={item.path}
                className="
                  border-b border-zinc-100
                  px-6 py-4
                  text-[16px] font-medium text-zinc-800
                  hover:bg-emerald-50 hover:pl-8 hover:text-[#0d5c3f]
                  transition-all duration-300 flex items-center justify-between
                "
              >
                <span>{item.label}</span>
              </Link>
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};