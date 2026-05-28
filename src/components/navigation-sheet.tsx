import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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

export const NavigationSheet = () => {
  const isLoggedIn = false;

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
          className="rounded-full border-white/10"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      {/* MOBILE DRAWER */}
      <SheetContent
        side="right"
        className="w-[320px] border-l border-white/10 bg-white px-0 py-0 flex flex-col"
      >
        {/* TOP LOGO */}
        <div className="flex items-center border-b border-zinc-200 px-6 py-5">
          <img
            src="/logo.png"
            alt="Dharani Herbbals"
            className="h-11 w-auto object-contain"
          />
        </div>

        {/* AUTH (NOW BELOW LOGO) */}
        <div className="px-6 py-4 border-b border-zinc-200">
          {isLoggedIn ? (
            <div className="text-sm text-zinc-700 font-medium">
              Account
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <Button
                variant="outline"
                className="rounded-full w-full"
              >
                Sign In
              </Button>

              <Button
                className="
                  rounded-full w-full
                  bg-green-600 hover:bg-green-700
                "
              >
                Sign Up
              </Button>
            </div>
          )}
        </div>

        {/* NAVIGATION */}
        <div className="flex flex-col flex-1 overflow-y-auto">
          {navLinks.map((item) => (
            <Link
              key={item}
              to={`/${item.replace(/\s+/g, "-").toLowerCase()}`}
              className="
                border-b border-zinc-200
                px-6 py-5
                text-[17px] font-medium text-zinc-800
                hover:bg-green-50 hover:pl-8 hover:text-green-600
                transition-all duration-300
              "
            >
              {item}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};