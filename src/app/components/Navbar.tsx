"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Download } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 text-yellow-400 ${
        scrolled ? "nav-blur" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Download CV */}
          <a
            href="/cv/rada-ivankovic-cv.pdf"
            download
            className="text-lg font-bold gradient-text flex items-center space-x-2 hover:scale-105 transition-transform"
          >
            <Download size={18} />
            <span>Download CV</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8  text-yellow-400 ">
            <Link
              href="/"
              className={`text-white hover:text-purple-400 transition-colors font-medium text-lg ${
                pathname === "/" ? "text-purple-400" : ""
              }`}
            >
              About
            </Link>

            <Link
              href="/projects"
              className={`text-white hover:text-purple-400 transition-colors font-medium text-lg ${
                pathname === "/projects" ? "text-purple-400" : ""
              }`}
            >
              Projects
            </Link>

            <Link
              href="/contact"
              className={`text-white hover:text-purple-400 transition-colors font-medium text-lg ${
                pathname === "/contact" ? "text-purple-400" : ""
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:text-purple-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 glass rounded-lg p-4 space-y-2 mx-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 text-white hover:text-purple-400 transition-colors font-medium rounded-lg hover:bg-white/5 ${
                pathname === "/" ? "text-purple-400 bg-purple-400/10" : ""
              }`}
            >
              About
            </Link>

            <Link
              href="/projects"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 text-white hover:text-purple-400 transition-colors font-medium rounded-lg hover:bg-white/5 ${
                pathname === "/projects"
                  ? "text-purple-400 bg-purple-400/10"
                  : ""
              }`}
            >
              Projects
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 text-white hover:text-purple-400 transition-colors font-medium rounded-lg hover:bg-white/5 ${
                pathname === "/contact"
                  ? "text-purple-400 bg-purple-400/10"
                  : ""
              }`}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
