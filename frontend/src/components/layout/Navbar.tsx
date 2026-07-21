"use client";
import { useState } from "react";
import { navItems, portfolioData } from "../../data/portfolio";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((currentState) => {
      return !currentState;
    });
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-3"
          onClick={closeMenu}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 font-mono text-sm font-bold text-cyan-300 transition-all group-hover:border-cyan-300/50 group-hover:bg-cyan-400/10">
            {portfolioData.shortName}
          </span>

          <span>
            <span className="block text-sm font-bold tracking-wide text-white">
              {portfolioData.name}
            </span>

            <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500 transition-colors group-hover:text-cyan-400">
              {portfolioData.role}
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            return (
              <a
                key={item.number}
                href={item.href}
                className="group relative py-2 font-mono text-sm text-slate-400 transition-colors hover:text-white"
              >
                <span className="mr-2 text-xs text-cyan-400">
                  {item.number}
                </span>

                <span>{item.label}</span>

                <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 to-emerakd-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition-colors hover:border-cyan-400/40 hover:bg-cyan-400/10 md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span className="sr-only">Open navigation menu</span>

          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-current transition-transform duration-300 ${
                isMenuOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-current transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-px w-full bg-current transition-transform duration-300 ${
                isMenuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
        
      </div>

      {/* Mobile navigation */}
      <nav
        id="mobile-navigation"
        className={`border-t border-white/5 bg-slate-950/95 px-6 backdrop-blur-xl md:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
        aria-label="Mobile navigation"
      >
        <div className="mx-auto flex max-w-7xl flex-col py-4">
          {navItems.map((item) => {
            return (
              <a
                key={item.number}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-white/5 py-4 font-mono text-sm text-slate-400 transition-colors last:border-b-0 hover:text-white"
              >
                <span className="mr-3 text-cyan-400">{item.number}</span>

                {item.label}
              </a>
            );
            
          })}
        </div>
      </nav>
    </header>
  );
}
