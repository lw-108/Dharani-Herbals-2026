import React from "react";
import { Heart, ShoppingCart, LogOut, User } from "lucide-react";

import { useNavigate, Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import { NavigationSheet } from "@/components/navigation-sheet";

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
  { label: "About Us", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const navigate = useNavigate();

  const { cart, wishlist } = useCartWishlist();

  const [dialogOpen, setDialogOpen] =
    React.useState(false);

  // AUTH STATES
  const [isLoggedIn, setIsLoggedIn] =
    React.useState(false);

  const [userName, setUserName] =
    React.useState("User");

  const [userId, setUserId] =
    React.useState("");

  const [avatarUrl, setAvatarUrl] =
    React.useState("/user-avatar.png");

  // LOAD AUTH DATA
  const updateAuthState = () => {
    const token = localStorage.getItem("token");

    const storedUserName =
      localStorage.getItem("user_name");

    const storedUserId =
      localStorage.getItem("user_id");

    const storedAvatar =
      localStorage.getItem("avatar");

    setIsLoggedIn(!!token);

    setUserName(storedUserName || "User");

    setUserId(storedUserId || "");

    setAvatarUrl(
      storedAvatar || "/user-avatar.png"
    );
  };

  // INITIAL LOAD
  React.useEffect(() => {
    updateAuthState();

    const handleAuthChange = () => {
      updateAuthState();
    };

    const handleStorage = () => {
      updateAuthState();
    };

    window.addEventListener(
      "authChange",
      handleAuthChange
    );

    window.addEventListener(
      "storage",
      handleStorage
    );

    return () => {
      window.removeEventListener(
        "authChange",
        handleAuthChange
      );

      window.removeEventListener(
        "storage",
        handleStorage
      );
    };
  }, []);

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("token");

    localStorage.removeItem("user_name");

    localStorage.removeItem("user_id");

    localStorage.removeItem("avatar");

    localStorage.removeItem("user_data");

    setIsLoggedIn(false);

    setUserName("User");

    setUserId("");

    setAvatarUrl("/user-avatar.png");

    setDialogOpen(false);

    window.dispatchEvent(
      new Event("authChange")
    );

    navigate("/");
  };

  return (
    <header
      className="
        sticky
        top-0
        z-50
        w-full
        overflow-x-auto
        scrollbar-hide
        border-b
        border-[#0d5c3f]/10
        bg-white
      "
    >
      <nav
        className="
          mx-auto
          flex
          h-[74px]
          min-w-max
          w-full
          max-w-7xl
          items-center
          justify-between
          pl-4
          pr-3
          lg:pr-6
        "
      >
        {/* LEFT */}
        <div className="flex items-center gap-8 lg:gap-12">
          {/* LOGO */}
          <Link
            to="/"
            className="flex shrink-0 items-center"
          >
            <img
              src="/logo.png"
              alt="Dharani Herbbals"
              className="
                h-10
                w-auto
                object-contain
                sm:h-11
                lg:h-12
              "
            />
          </Link>

          {/* DESKTOP NAV */}
          <ul
            className="
              hidden
              items-center
              gap-1
              lg:flex
            "
          >
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.path}
                  className="
                    group
                    relative
                    flex
                    items-center
                    rounded-full
                    px-4
                    py-2
                    text-[15px]
                    font-medium
                    tracking-[0.01em]
                    text-zinc-700
                    transition-all
                    duration-300
                    hover:bg-[#0d5c3f]/6
                    hover:text-[#0d5c3f]
                  "
                >
                  {link.label}

                  <span
                    className="
                      absolute
                      bottom-[6px]
                      left-1/2
                      h-[2px]
                      w-0
                      -translate-x-1/2
                      rounded-full
                      bg-[#0d5c3f]
                      transition-all
                      duration-300
                      group-hover:w-[55%]
                    "
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div
          className="
            flex
            shrink-0
            items-center
            gap-1.5
            sm:gap-2
          "
        >
          {/* WISHLIST */}
          <Link
            to="/wishlist"
            className="relative"
          >
            <Button
              variant="ghost"
              size="icon"
              className="
                relative
                h-10
                w-10
                rounded-full
                text-zinc-700
                transition-all
                duration-300
                hover:scale-105
                hover:bg-[#0d5c3f]/8
                hover:text-[#0d5c3f]
              "
            >
              <Heart className="h-[18px] w-[18px]" />

              {wishlist.length > 0 && (
                <span
                  className="
                    absolute
                    -right-0.5
                    -top-0.5
                    flex
                    h-4
                    w-4
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0d5c3f]
                    text-[9px]
                    font-bold
                    text-white
                  "
                >
                  {wishlist.length}
                </span>
              )}
            </Button>
          </Link>

{/* CART */}
<Link to="/cart" className="relative">
  <Button
    variant="ghost"
    size="icon"
    className="
      relative
      h-10
      w-10
      rounded-full
      text-zinc-700
      transition-all
      duration-300
      hover:scale-105
      hover:bg-[#0d5c3f]/8
      hover:text-[#0d5c3f]
    "
  >
    <ShoppingCart className="h-[18px] w-[18px]" />
    {cart.length > 0 && (
      <span
        className="
          absolute
          -right-0.5
          -top-0.5
          flex
          h-4
          w-4
          items-center
          justify-center
          rounded-full
          bg-[#0d5c3f]
          text-[9px]
          font-bold
          text-white
        "
      >
        {cart.length}
      </span>
    )}
  </Button>
</Link>


          {/* AUTH SECTION */}
          {isLoggedIn ? (
            <Dialog
              open={dialogOpen}
              onOpenChange={setDialogOpen}
            >
              <DialogTrigger asChild>
                <button
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-[#0d5c3f]/10
                    bg-white/80
                    px-2
                    py-1.5
                    shadow-sm
                    transition-all
                    duration-300
                    hover:border-[#0d5c3f]/30
                    hover:bg-[#0d5c3f]
                  "
                >
                  <Avatar
                    className="
                      h-9
                      w-9
                      ring-2
                      ring-[#0d5c3f]/20
                    "
                  >
                    <AvatarImage
                      src={avatarUrl}
                      alt={userName}
                    />

                    <AvatarFallback
                      className="
                        bg-[#0d5c3f]
                        text-white
                      "
                    >
                      {userName
                        .charAt(0)
                        .toUpperCase()}
                    </AvatarFallback>
                  </Avatar>

                  <div className="hidden sm:block text-left pr-2">
                    <p
                      className="
                        text-sm
                        font-semibold
                        text-zinc-800
                        leading-none
                      "
                    >
                      {userName}
                    </p>

                    <p
                      className="
                        mt-1
                        text-[11px]
                        text-zinc-500
                      "
                    >
                      My Account
                    </p>
                  </div>
                </button>
              </DialogTrigger>

              {/* PROFILE DIALOG */}
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>
                    My Profile
                  </DialogTitle>

                  <DialogDescription>
                    Account details and session controls.
                  </DialogDescription>
                </DialogHeader>

                <div
                  className="
                    flex
                    flex-col
                    items-center
                    space-y-5
                    py-4
                  "
                >
                  <Avatar
                    className="
                      h-24
                      w-24
                      ring-4
                      ring-[#0d5c3f]/15
                    "
                  >
                    <AvatarImage
                      src={avatarUrl}
                      alt={userName}
                    />

                    <AvatarFallback
                      className="
                        bg-[#0d5c3f]
                        text-white
                        text-2xl
                      "
                    >
                      {userName
                        .charAt(0)
                        .toUpperCase()}
                    </AvatarFallback>
                  </Avatar>

                  <div className="text-center">
                    <h3
                      className="
                        text-xl
                        font-bold
                        text-zinc-800
                      "
                    >
                      {userName}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-sm
                        text-zinc-500
                      "
                    >
                      User ID: {userId}
                    </p>

                    <p
                      className="
                        mt-3
                        text-xs
                        text-zinc-400
                      "
                    >
                      Welcome back to Dharani Herbals
                    </p>
                  </div>

                  <Button
                    variant="destructive"
                    onClick={handleLogout}
                    className="
                      mt-2
                      w-full
                      rounded-xl
                    "
                  >
                    <LogOut className="mr-2 h-4 w-4" />

                    Logout
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          ) : (
            <Link to="/signin" className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="
                  relative
                  h-10
                  w-10
                  rounded-full
                  text-zinc-700
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-[#0d5c3f]/8
                  hover:text-[#0d5c3f]
                "
              >
                <User className="h-[18px] w-[18px]" />
              </Button>
            </Link>
          )}

          {/* MOBILE MENU */}
          <div className="ml-1 lg:hidden">
            <NavigationSheet />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;