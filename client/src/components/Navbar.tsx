import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Droplets, Menu, X, Phone } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 border-b border-emerald-100/50",
        isScrolled 
          ? "bg-white/95 backdrop-blur-xl shadow-lg py-3" 
          : "bg-soft-white/95 backdrop-blur-md py-4"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
            <Droplets size={24} />
          </div>
          <span className="font-display text-xl font-bold tracking-tight">
            PureJet<span className="text-primary">Care</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-bold transition-colors",
                location.pathname === link.href ? "text-primary" : "text-slate-dark/70 hover:text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="tel:+441234567890" 
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
          >
            <Phone size={16} />
            0123 456 7890
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl p-8 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-xl font-bold",
                    location.pathname === link.href ? "text-primary" : "text-slate-dark"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="tel:+441234567890" 
                className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl bg-primary text-white font-bold text-lg shadow-xl shadow-primary/20"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
