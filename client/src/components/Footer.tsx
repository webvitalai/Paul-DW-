import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-soft-white text-slate-dark pt-20 pb-10 border-t border-emerald-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* BRAND */}
          <div className="space-y-6">
            <Link
              to="/"
              className="flex items-center gap-3 group"
              aria-label="Driveways Pressure Washed Home"
            >
              <img
                src="/Header/Logo.webp"
                alt="Driveways Pressure Washed Logo"
                className="w-[70px] h-[70px] sm:w-[82px] sm:h-[82px] object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
              />

              <span className="font-display text-xl sm:text-2xl font-bold tracking-tight leading-tight">
                Driveways{" "}
                <span className="text-secondary">Pressure Washed</span>
              </span>
            </Link>

            <p className="text-slate-500 leading-relaxed">
              UK's leading driveway and patio cleaning specialists. Restoring
              beauty and value to your property with professional-grade
              equipment and eco-friendly solutions.
            </p>

            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all hover:scale-110"
                  aria-label="Social Media Link"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6 text-primary">
              Quick Links
            </h4>

            <ul className="space-y-4 text-slate-500">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="hover:text-primary transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6 text-primary">
              Services
            </h4>

            <ul className="space-y-4 text-slate-500">
              {[
                "Driveway Cleaning",
                "Patio Restoration",
                "Oil Stain Removal",
                "Protective Sealing",
                "Commercial Cleaning",
              ].map((link) => (
                <li key={link}>
                  <Link
                    to="/services"
                    className="hover:text-secondary transition-colors font-medium"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6 text-primary">
              Contact Us
            </h4>

            <ul className="space-y-4 text-slate-500">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0" size={20} />
                <span className="font-medium">
                  Stockport, Manchester
                  <br />
                  United Kingdom
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={20} />
                <a
                  href="tel:07778833881"
                  className="font-medium hover:text-primary transition-colors"
                >
                  07778833881
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={20} />
                <a
                  href="mailto:info@paul.co.uk"
                  className="font-medium hover:text-primary transition-colors"
                >
                  info@paul.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pt-8 border-t border-emerald-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>© 2026 Driveways Pressure Washed. All rights reserved.</p>

          <div className="flex gap-6 font-medium">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}