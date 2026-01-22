"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Agence", href: "/agence" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="/"
            className="text-2xl font-bold text-gray-900"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            EP <span className="text-orange-500">Digital</span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isHashLink = item.href.startsWith("#");
              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    if (isHashLink) {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }
                    // For non-hash links (like /contact, /), let the default navigation happen
                  }}
                  className="text-gray-700 hover:text-orange-500 transition-colors"
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                </motion.a>
              );
            })}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+33123456789"
              className="text-gray-700 hover:text-orange-500"
            >
              +33 1 23 45 67 89
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item) => {
                const isHashLink = item.href.startsWith("#");
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      if (isHashLink) {
                        e.preventDefault();
                        scrollToSection(item.href);
                      }
                      // For non-hash links (like /contact, /), let the default navigation happen
                    }}
                    className="text-gray-700 hover:text-orange-500 transition-colors"
                  >
                    {item.label}
                  </a>
                );
              })}
              <a
                href="tel:+33123456789"
                className="text-orange-500 font-medium"
              >
                +33 1 23 45 67 89
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
