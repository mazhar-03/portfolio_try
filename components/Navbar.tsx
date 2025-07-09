"use client"
import { useState } from "react";
import Link from "next/link";
import { Common } from "@/lib/types";

export default function Navbar({
    common
}:{
    common: Common;
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-900 py-6 font-ptserif">
            <div className="container mx-auto flex items-center justify-between px-6">
                <Link href="/">
                    <h2 className="text-white text-3xl cursor-pointer hover:text-green-300 transition">
                        Mazhar Altınçay
                    </h2>
                </Link>

                {/* Hamburger button - responsive! */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white md:hidden focus:outline-none cursor-pointer "
                    aria-label="Toggle menu"
                >
                    {/* icon */}
                    <svg
                        className="w-8 h-8 hover:text-green-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isOpen ? (
                            // X when hamburger is clicked
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

                <ul
                    className={`flex-col md:flex md:flex-row md:space-x-8 text-white absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent transition-all
                    ${isOpen ? "flex" : "hidden"}`}
                >
                    <li className="hover:text-green-300 transition px-6 py-3 md:p-0 border-b border-gray-700 md:border-none">
                        <Link href="/projects" onClick={() => setIsOpen(false)}>
                            Projects
                        </Link>
                    </li>
                    <li className="hover:text-green-300 transition px-6 py-3 md:p-0 border-b border-gray-700 md:border-none">
                        <Link href="/about-me" onClick={() => setIsOpen(false)}>
                            About Me
                        </Link>
                    </li>
                    <li className="hover:text-green-300 transition px-6 py-3 md:p-0 border-b border-gray-700 md:border-none">
                        <Link href="/experience" onClick={() => setIsOpen(false)}>
                            Experience
                        </Link>
                    </li>
                    <li className="hover:text-green-300 transition px-6 py-3 md:p-0 border-b border-gray-700 md:border-none">
                        <Link href="/contact" onClick={() => setIsOpen(false)}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
