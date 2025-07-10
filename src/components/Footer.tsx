import React from "react";

export default function Footer() {
  return (
    <footer className="bg-base-200/80 backdrop-blur-lg text-center py-10 mt-20 border-t border-base-300 w-full rounded-t-2xl shadow-inner">
      <div className="flex justify-center space-x-8 mb-6">
        <a href="https://github.com/anmolbhardwaj" className="link link-hover text-base-content" aria-label="GitHub" target="_blank" rel="noopener noreferrer">Github</a>
        <a href="https://linkedin.com/in/anmolbhardwaj" className="link link-hover text-base-content" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:anmolbhardwaj.official@gmail.com" className="link link-hover text-base-content" aria-label="Email">Email</a>
      </div>
      <p className="text-sm text-base-content/70">© {new Date().getFullYear()} Anmol Bhardwaj.</p>
    </footer>
  );
}
