"use client";

import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "../components/ui/Button";

import React from "react";

const menuItems = [
  { name: "Features", href: "#features" },
  { name: "How it works", href: "#how-it-works" },
  { name: "Pricing", href: "#pricing" },
];

const Header = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed z-20 w-full px-2"
      >
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12",
            isScrolled &&
              "bg-black/80 max-w-4xl rounded-2xl border border-neutral-800 backdrop-blur-lg lg:px-5",
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <a
                href="/"
                aria-label="home"
                className="flex items-center space-x-2 text-2xl font-bold font-serif tracking-wide text-white"
              >
                <span className="text-white">malicc</span>
              </a>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden text-white"
              >
                <Menu
                  className={cn(
                    "m-auto size-6 duration-200 text-white",
                    menuState && "rotate-180 scale-0 opacity-0",
                  )}
                />
                <X
                  className={cn(
                    "absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200 text-white",
                    menuState && "rotate-0 scale-100 opacity-100",
                  )}
                />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm font-medium font-sans tracking-wide">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-neutral-300 hover:text-white block duration-150 relative after:absolute after:bottom-0 after:left-0 after:bg-white after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300"
                    >
                      <span>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={cn(
                "bg-black/90 mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-neutral-800 p-6 backdrop-blur-xl md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none",
                menuState && "block lg:flex",
              )}
            >
              <div className="lg:hidden">
                <ul className="space-y-6 text-base font-sans">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="text-neutral-400 hover:text-white block duration-150"
                      >
                        <span>{item.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button
                  variant="secondary"
                  href="#waitlist"
                  className="w-full sm:w-auto"
                >
                  View a Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
