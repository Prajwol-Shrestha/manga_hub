"use client";
import React, { useState } from "react";
import navlinks from "@/app/constants/navlinks.json";
import Link from "next/link";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <nav className="bg-secondary-600 text-white">
      <div className="container flex justify-between items-center px-2 py-4">
        <p> Logo </p>
        <div
          onClick={() => setShowNavbar((prev) => !prev)}
          className={`z-10 flex sm:hidden ${showNavbar ? "opened" : ""}`}
        >
          <svg width="40" height="40" viewBox="0 0 100 100">
            <path
              className="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path className="line line2" d="M 20,50 H 80" />
            <path
              className="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </div>

        <ul className="hidden sm:flex items-center justify-center gap-4">
          {navlinks.map((link) => (
            <li key={link.title}>
              {" "}
              <Link href={link.link}> {link.title} </Link>{" "}
            </li>
          ))}
        </ul>
      </div>
      {showNavbar && (
        <div
          onClick={() => setShowNavbar(false)}
          className="sm:hidden flex items-center justify-end absolute top-0 bg-secondary-300/90 w-full h-full"
        >
          <ul
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="bg-secondary-400 h-full w-9/12 flex items-center justify-center flex-col gap-4"
          >
            {navlinks.map((link) => (
              <li key={link.title} className="text-xl">
                {" "}
                <Link href={link.link}> {link.title} </Link>{" "}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
