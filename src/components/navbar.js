import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import Image from "next/image";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { text: "Home", link: "https://www.gunmack.dev/" },
    { text: "About", link: "/archived" },
    { text: "SFU Campuses", link: "/archived/SFU" },
  ];

  return (
    <Navbar className="w-full">
      <NavbarBrand>
        <Image
          src="/images/logo.png"
          alt="logo"
          width={25}
          height={2}
          className="rounded-lg"
        ></Image>
      </NavbarBrand>

      <NavbarContent className="flex md:w-auto">
        <NavbarItem className="hidden sm:flex sm:space-x-10">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="font-mono font-bold text-white hover:bg-zinc-900 rounded-lg p-2"
            >
              {item.text}
            </Link>
          ))}
        </NavbarItem>
      </NavbarContent>

      <NavbarContent>
        {/* Hamburger Menu for small screens */}
        <NavbarItem className="sm:hidden justify-self-end">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="font-mono font-bold text-white hover:bg-zinc-900 rounded-lg p-2"
            aria-label="Toggle menu"
          >
            <div
              className={`w-8 h-8 flex flex-col justify-between items-center space-y-2 
                transition-transform duration-300 ease-in-out`}
            >
              <div
                className={`w-8 h-1 bg-blue-500 transition-all duration-300 ease-in-out ${
                  isMenuOpen
                    ? "w-6 transform rotate-45 translate-y-3.5 "
                    : "rotate-0 translate-y-0"
                }`}
              ></div>
              <div
                className={`w-8 h-1 bg-blue-500 transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></div>
              <div
                className={`w-8 h-1 bg-blue-500 transition-all duration-300 ease-in-out ${
                  isMenuOpen
                    ? "w-6 transform -rotate-45 translate-y-[-14px] translate-x-[-2px]"
                    : "rotate-0 translate-y-0"
                }`}
              ></div>
            </div>
          </button>
        </NavbarItem>
      </NavbarContent>

      {/* Dropdown Menu for small screens */}
      {isMenuOpen && (
        <div className="absolute top-16 right-0 w-full bg-cyan-900 shadow-md z-10 sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="block text-neutral-50 hover:bg-zinc-900 px-3 py-2 rounded-md text-center font-mono"
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
      )}
    </Navbar>
  );
}
