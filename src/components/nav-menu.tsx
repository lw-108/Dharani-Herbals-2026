"use client";

import { Link } from "react-router-dom";
import type { ComponentProps } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="data-[orientation=vertical]:-ms-2 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start">
        {[
          { name: "Home", to: "/" },
          { name: "Hair", to: "/hair" },
          { name: "Skin", to: "/skin" },
          { name: "Baby", to: "/baby" },
          { name: "Health & Wellness", to: "/health-wellness" },
          { name: "Shop All", to: "/shop-all" },
          { name: "About Us", to: "/about" },
          { name: "Contact", to: "/contact" },
        ].map((item) => (
          <NavigationMenuItem key={item.name}>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link to={item.to}>{item.name}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
  </NavigationMenu>
);
