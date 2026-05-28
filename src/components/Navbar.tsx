import { ArrowUpRight, Search, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";


import { NavigationSheet } from "@/components/navigation-sheet";
import { Link } from "react-router-dom";

// Navigation links specific to Herbal webapp
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
  const isLoggedIn = false; // placeholder – replace with real auth state

  return (
    <nav className="h-16 border-b bg-background flex items-center">
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        {/* Logo */}
        <img src="/logo.png" alt="Dharani Herbbals" className="h-10" />

        {/* Centered navigation links – visible on md+ screens */}
        <ul className="hidden md:flex flex-1 justify-center space-x-6">
          {navLinks.map((link) => (
            <li key={link}>
              <Link
                to={`/${link.replace(/\s+/g, "-").toLowerCase()}`}
                className="text-sm font-medium hover:text-primary"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side: search, icons, auth, mobile menu */}
        <div className="flex items-center gap-3">
          {/* Search bar – hidden on small screens */}
          <div className="relative hidden md:block">
            <Input
              type="text"
              placeholder="Search products..."
              className="w-64 pr-10"
            />
            <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            {/* Placeholder for dropdown suggestions */}
            <div className="absolute left-0 top-full z-10 mt-1 w-full bg-white border rounded-md shadow-lg hidden">
              <ul className="py-1">
                <li className="flex items-center px-3 py-2 hover:bg-muted cursor-pointer">
                  <img src="/placeholder.png" alt="product" className="h-5 w-5 mr-2 rounded" />
                  <span className="flex-1 text-sm">Product Name</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </li>
              </ul>
            </div>
          </div>

          {/* Wishlist */}
          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5" />
          </Button>

          {/* Cart */}
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>

          {/* Auth buttons or avatar */}
          {isLoggedIn ? (
            <Avatar className="h-8 w-8">
              <AvatarImage src="/user-avatar.png" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          ) : (
            <>
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Button size="sm">Sign Up</Button>
            </>
          )}

          {/* Mobile hamburger – visible on small screens */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
