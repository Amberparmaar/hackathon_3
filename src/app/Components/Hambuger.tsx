"use client";
import Link from "next/link";
import React, { useState } from "react";

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
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

      {/* Menu */}
      <div
        className={`absolute top-12 left-0 w-48 bg-white border rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="space-y-1 p-2">
          <li>
            <Link
              href="/"
              className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
            >
              Home
            </Link>
          </li>
          <li>
          <Link
              href="/Shop"
              className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
            >
              Shop
            </Link>
          </li>
          <li>
          <Link
              href="/Casual"
              className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
            >
              On Sale
            </Link>
          </li>
          <li>
          <Link
              href="/AllProducts"
              className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
            >
              New Arrivals
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Brands
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Hamburger;
