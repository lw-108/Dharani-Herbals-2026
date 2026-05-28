import {
  Heart,
  ShoppingCart,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import { NavigationSheet } from "@/components/navigation-sheet";
import { Link } from "react-router-dom";

const navLinks = [
  "Home",
  "Hair",
  "Skin",
  "Baby",
  "Health & Wellness",
  "Shop All",
  "About Us",
  "Contact",
];

export const Navbar = () => {
  const isLoggedIn = false;

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

        bg-white/85
        backdrop-blur-2xl
        supports-[backdrop-filter]:bg-white/70
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
        {/* LEFT SIDE */}
        <div className="flex items-center gap-8 lg:gap-12">
          {/* LOGO */}
          <Link
            to="/"
            className="
              flex
              shrink-0
              items-center
            "
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

          {/* DESKTOP NAVIGATION */}
          <ul
            className="
              hidden
              items-center
              gap-1

              lg:flex
            "
          >
            {navLinks.map((link) => (
              <li key={link}>
                <Link
                  to={`/${link
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
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
                  {link}

                  {/* UNDERLINE */}
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

        {/* RIGHT SIDE */}
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

                shadow-sm
              "
            >
              2
            </span>
          </Button>

          {/* CART */}
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

                shadow-sm
              "
            >
              3
            </span>
          </Button>

          {/* AUTH */}
          {isLoggedIn ? (
            <Avatar
              className="
                h-10
                w-10

                ring-2
                ring-[#0d5c3f]/20
              "
            >
              <AvatarImage
                src="/user-avatar.png"
                alt="User"
              />

              <AvatarFallback>
                U
              </AvatarFallback>
            </Avatar>
          ) : (
            <div
              className="
                hidden
                items-center
                gap-2

                sm:flex
              "
            >
              {/* SIGN IN */}
              <Button
                variant="outline"
                size="sm"
                className="
                  relative
                  top-[-1px]

                  h-9

                  rounded-full

                  border-zinc-200
                  bg-white/90

                  px-5

                  text-sm
                  font-semibold
                  text-zinc-700

                  shadow-sm
                  backdrop-blur-md

                  transition-all
                  duration-300

                  hover:border-[#0d5c3f]/30
                  hover:bg-[#0d5c3f]/5
                  hover:text-[#0d5c3f]
                "
              >
                Sign In
              </Button>

              {/* SIGN UP */}
              <Button
                size="sm"
                className="
                  relative
                  top-[-1px]

                  h-9

                  rounded-full

                  bg-[#0d5c3f]

                  px-5

                  text-sm
                  font-semibold
                  text-white

                  shadow-md

                  transition-all
                  duration-300

                  hover:scale-[1.02]
                  hover:bg-[#0b4f36]
                  hover:shadow-lg
                "
              >
                Sign Up
              </Button>
            </div>
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