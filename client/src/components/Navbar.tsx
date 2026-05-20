import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "../lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 sm:px-6 border-b border-emerald-100/50",
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg py-2"
          : "bg-soft-white/95 backdrop-blur-md py-3"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* LOGO + BRAND NAME */}
        <Link
          to="/"
          className="flex items-center gap-3 group shrink-0"
          aria-label="DriveWays Pressure Washed Home"
        >
          <img
            src="/Header/Logo.webp"
            alt="DriveWays Pressure Washed Logo"
            className={cn(
              "object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-md",
              isScrolled
                ? "w-[58px] h-[58px] sm:w-[68px] sm:h-[68px]"
                : "w-[66px] h-[66px] sm:w-[78px] sm:h-[78px]"
            )}
          />

          <span className="font-display text-lg sm:text-xl lg:text-2xl font-bold tracking-tight leading-tight text-slate-dark">
            DriveWays{" "}
            <span className="text-primary">Pressure Washed</span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-bold transition-colors",
                location.pathname === link.href
                  ? "text-primary"
                  : "text-slate-dark/70 hover:text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}

          <a
            href="tel:07778833981"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
          >
            <Phone size={16} />
            0777 883 3981
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-slate-dark flex items-center justify-center w-11 h-11 rounded-xl bg-white/80 border border-emerald-100 shadow-sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
          type="button"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.22 }}
            className="absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl p-8 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-xl font-bold transition-colors",
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-slate-dark hover:text-primary"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <a
                href="tel:07778833981"
                className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl bg-primary text-white font-bold text-lg shadow-xl shadow-primary/20"
              >
                <Phone size={20} />
                0777 883 3981
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}