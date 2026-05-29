
import React from "react";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import {
  Menu,
  Heart,
  ShoppingCart,
  LogOut,
  User,
} from "lucide-react";

import { useNavigate, Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetDescription,
} from "@/components/ui/sheet";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import { useCartWishlist } from "@/context/CartWishlistContext";

const navLinks: { label: string; path: string }[] = [
  { label: "Home", path: "/" },
  { label: "Hair", path: "/EveryProducts?category=HAIR" },
  { label: "Skin", path: "/EveryProducts?category=SKIN" },
  { label: "Baby", path: "/EveryProducts?category=BABY" },
  {
    label: "Health & Wellness",
    path: "/EveryProducts?category=HEALTH%20%26%20WELLNESS",
  },
  { label: "Shop All", path: "/EveryProducts" },
  { label: "About Us", path: "/About" },
  { label: "Contact", path: "/Contact" },
];

export const NavigationSheet = () => {
  const navigate = useNavigate();

  const { cart, wishlist } = useCartWishlist();

  const [isLoggedIn, setIsLoggedIn] = React.useState(
    () => !!localStorage.getItem("token")
  );

  const [avatarUrl, setAvatarUrl] = React.useState(
    () =>
      localStorage.getItem("avatar") ||
      "/user-avatar.png"
  );

  const [userName, setUserName] = React.useState(
    () =>
      localStorage.getItem("user_name") ||
      "User"
  );

  const [userId, setUserId] = React.useState(
    () =>
      localStorage.getItem("user_id") ||
      ""
  );

  // UPDATE AUTH STATE
  const updateAuthState = () => {
    const token = localStorage.getItem("token");

    setIsLoggedIn(!!token);

    setAvatarUrl(
      localStorage.getItem("avatar") ||
        "/user-avatar.png"
    );

    setUserName(
      localStorage.getItem("user_name") ||
        "User"
    );

    setUserId(
      localStorage.getItem("user_id") || ""
    );
  };

  React.useEffect(() => {
    updateAuthState();

    const handleStorage = () =>
      updateAuthState();

    const handleAuthChange = () =>
      updateAuthState();

    window.addEventListener(
      "storage",
      handleStorage
    );

    window.addEventListener(
      "authChange",
      handleAuthChange
    );

    return () => {
      window.removeEventListener(
        "storage",
        handleStorage
      );

      window.removeEventListener(
        "authChange",
        handleAuthChange
      );
    };
  }, []);

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("token");

    localStorage.removeItem("avatar");

    localStorage.removeItem("user_id");

    localStorage.removeItem("user_name");

    localStorage.removeItem("user_data");

    setIsLoggedIn(false);

    setAvatarUrl("/user-avatar.png");

    setUserName("User");

    setUserId("");

    window.dispatchEvent(
      new Event("authChange")
    );

    navigate("/");
  };

  return (
    <Sheet>

      <VisuallyHidden>
        <SheetTitle>
          Navigation Menu
        </SheetTitle>

        <SheetDescription>
          Dharani Herbbals navigation options and
          account menu
        </SheetDescription>
      </VisuallyHidden>

      {/* MENU BUTTON */}
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          className="
            rounded-full
            border-zinc-200
            hover:bg-zinc-50
          "
        >
          <Menu className="h-5 w-5 text-zinc-700" />
        </Button>
      </SheetTrigger>

      {/* MOBILE DRAWER */}
      <SheetContent
        side="right"
        className="
          w-[320px]
          border-l
          border-zinc-200
          bg-[#fafaf7]
          px-0
          py-0
          flex
          flex-col
        "
      >

        {/* TOP LOGO */}
        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-zinc-200
            px-6
            py-5
            bg-white
          "
        >
          <img
            src="/logo.png"
            alt="Dharani Herbbals"
            className="
              h-11
              w-auto
              object-contain
            "
          />
        </div>

        {/* AUTH SECTION */}
        <div
          className="
            px-6
            py-4
            border-b
            border-zinc-200
            bg-white
          "
        >

          {isLoggedIn ? (

            <div className="space-y-4">

              {/* PROFILE */}
              <div className="flex items-center gap-3">

                <Avatar className="h-12 w-12 ring-2 ring-[#0d5c3f]/20">

                  <AvatarImage
                    src={avatarUrl}
                    alt={userName}
                  />

                  <AvatarFallback className="bg-[#0d5c3f] text-white">
                    {userName
                      .charAt(0)
                      .toUpperCase()}
                  </AvatarFallback>

                </Avatar>

                <div>
                  <p className="text-sm font-semibold text-zinc-800">
                    {userName}
                  </p>

                  <p className="text-xs text-zinc-500">
                    ID: {userId}
                  </p>
                </div>
              </div>

              {/* ACCOUNT BUTTON */}
              <SheetClose asChild>
                <Link to="/profile">
                  <Button
                    variant="outline"
                    className="
                      w-full
                      rounded-full
                      border-zinc-200
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <User className="w-4 h-4" />
                    My Account
                  </Button>
                </Link>
              </SheetClose>

              {/* LOGOUT */}
              <Button
                onClick={handleLogout}
                variant="destructive"
                className="
                  w-full
                  rounded-full
                  flex
                  items-center
                  gap-2
                "
              >
                <LogOut className="w-4 h-4" />
                Logout
              </Button>

            </div>

          ) : (

            <div className="flex flex-col gap-2">

              {/* SIGN IN */}
              <SheetClose asChild>
                <Link
                  to="/signin"
                  className="w-full"
                >
                  <Button
                    variant="outline"
                    className="
                      rounded-full
                      w-full
                      border-zinc-200
                      hover:bg-zinc-50
                      text-zinc-700
                      font-semibold
                    "
                  >
                    Sign In
                  </Button>
                </Link>
              </SheetClose>

              {/* SIGN UP */}
              <SheetClose asChild>
                <Link
                  to="/signup"
                  className="w-full"
                >
                  <Button
                    className="
                      rounded-full
                      w-full
                      bg-[#0d5c3f]
                      hover:bg-[#0b4f36]
                      text-white
                      font-semibold
                      shadow-sm
                    "
                  >
                    Sign Up
                  </Button>
                </Link>
              </SheetClose>

            </div>
          )}
        </div>

        {/* WISHLIST & CART */}
        <div
          className="
            grid
            grid-cols-2
            gap-2
            px-6
            py-3
            border-b
            border-zinc-200
            bg-white
          "
        >

          {/* WISHLIST */}
          <SheetClose asChild>
            <Link
              to="/wishlist"
              className="
                flex
                items-center
                justify-center
                gap-2
                py-2
                px-3
                rounded-xl
                border
                border-zinc-200
                hover:bg-zinc-50
                text-zinc-700
                font-medium
                transition-all
              "
            >
              <Heart className="h-4 w-4 text-emerald-800" />

              <span className="text-sm">
                Wishlist
              </span>

              {wishlist.length > 0 && (
                <span
                  className="
                    bg-[#0d5c3f]
                    text-white
                    text-[10px]
                    font-bold
                    px-1.5
                    py-0.5
                    rounded-full
                  "
                >
                  {wishlist.length}
                </span>
              )}
            </Link>
          </SheetClose>

          {/* CART */}
          <SheetClose asChild>
            <Link
              to="/cart"
              className="
                flex
                items-center
                justify-center
                gap-2
                py-2
                px-3
                rounded-xl
                border
                border-zinc-200
                hover:bg-zinc-50
                text-zinc-700
                font-medium
                transition-all
              "
            >
              <ShoppingCart className="h-4 w-4 text-[#0d5c3f]" />

              <span className="text-sm">
                Cart
              </span>

              {cart.length > 0 && (
                <span
                  className="
                    bg-[#0d5c3f]
                    text-white
                    text-[10px]
                    font-bold
                    px-1.5
                    py-0.5
                    rounded-full
                  "
                >
                  {cart.length}
                </span>
              )}
            </Link>
          </SheetClose>
        </div>

        {/* NAVIGATION */}
        <div
          className="
            flex
            flex-col
            flex-1
            overflow-y-auto
            bg-white/50
          "
        >
          {navLinks.map((item) => (
            <SheetClose
              asChild
              key={item.label}
            >
              <Link
                to={item.path}
                className="
                  border-b
                  border-zinc-100
                  px-6
                  py-4
                  text-[16px]
                  font-medium
                  text-zinc-800
                  hover:bg-emerald-50
                  hover:pl-8
                  hover:text-[#0d5c3f]
                  transition-all
                  duration-300
                  flex
                  items-center
                  justify-between
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

