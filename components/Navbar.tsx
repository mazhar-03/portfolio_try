"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Common } from "@/lib/types";
import { NavItem } from "@/lib/types";

export default function Navbar({ common }: { common: Common }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Disable background scroll
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on ESC key
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }
    if (isOpen) {
      document.addEventListener("keydown", onKeyDown);
    }
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <nav className="bg-gray-900 py-6 font-ptserif relative z-50">
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link href="/" onClick={() => setIsOpen(false)}>
          <h2 className="text-white text-3xl cursor-pointer hover:text-green-300 transition">
            {common?.nameSurname}
          </h2>
        </Link>

        {/* Hamburger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden focus:outline-none cursor-pointer z-50"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg
            className="w-8 h-8 hover:text-green-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Overlay */}
        <div
          className={`fixed inset-0 z-40 bg-gray-900/30 backdrop-blur-lg transition-opacity duration-300 ease-in-out ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          } md:hidden`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Mobile sliding menu */}
        <div
          ref={menuRef}
          className={`fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out md:hidden z-50
            ${isOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <ul className="flex flex-col mt-20 space-y-6 px-6 text-white text-lg">
            {common.navItemsCollection.items.map((item: NavItem, index: number) => (
              <li key={index}>
                <Link
                  href={item.url}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 hover:text-green-300 transition"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex md:flex-row md:space-x-8 text-white">
          {common.navItemsCollection.items.map((item: NavItem, index: number) => (
            <li
              key={index}
              className="hover:text-green-300 transition px-6 py-3 md:p-0 border-b border-gray-700 md:border-none"
            >
              <Link href={item.url}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
