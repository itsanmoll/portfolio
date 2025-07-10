'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [theme, setTheme] = useState("business");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme") || "business";
      setTheme(stored);
      document.documentElement.setAttribute("data-theme", stored);
    }
  }, []);

  const handleTheme = () => {
    const next = theme === "business" ? "light" : "business";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <div className="bg-base-100/80 backdrop-blur-lg shadow-xl rounded-xl mt-6 mb-10 mx-auto max-w-3xl px-6 sticky top-4 z-50 border border-base-200">
      <nav className="flex items-center justify-between w-full h-16">
        
        {/* Logo */}
        <a
          className="flex items-center gap-2 font-extrabold text-2xl"
          href="#hero"
        >
          <div className="avatar">
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <Image
                src="/images/pfp.png"
                alt="Anmol Bhardwaj"
                width={40}
                height={40}
                className="rounded-full w-10 h-10"
                priority
              />
            </div>
          </div>
          Anmol
        </a>
  
        {/* Nav Links */}
        <ul className="flex gap-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="font-medium text-base rounded-lg hover:bg-primary hover:text-primary-content transition px-3 py-1"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
  
        {/* Theme Toggle */}
        <button
          className="btn btn-ghost btn-circle"
          aria-label="Toggle theme"
          onClick={handleTheme}
        >
          {theme === "business" ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.05l-.71-.71" /><circle cx="12" cy="12" r="5" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21.752 15.002A9.718 9.718 0 0 1 12 22C6.477 22 2 17.523 2 12c0-4.418 2.865-8.186 6.839-9.504a1 1 0 0 1 1.181 1.497A7 7 0 1 0 20.507 15.68a1 1 0 0 1 1.245 1.322z" /></svg>
          )}
        </button>
      </nav>
    </div>
  );
}