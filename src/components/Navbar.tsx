"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center h-16 md:h-20">
        {/* Left side - Logo on light gray background */}
        <div className="w-1/2 md:w-1/2 bg-light-gray h-full flex items-center pl-4 md:pl-8">
          <div className="text-xl md:text-2xl font-bold text-dark-gray">NS</div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex w-1/2 bg-black h-full items-center justify-end pr-8 gap-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-white hover:opacity-80 transition-opacity text-sm font-medium"
          >
            About me
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-white hover:opacity-80 transition-opacity text-sm font-medium"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="text-white hover:opacity-80 transition-opacity text-sm font-medium"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-100 transition-colors text-sm font-medium"
          >
            CONTACT ME
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden w-1/2 bg-black h-full flex items-center justify-end pr-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black w-full">
          <div className="flex flex-col py-4 space-y-3 px-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:opacity-80 transition-opacity text-sm font-medium text-left py-2"
            >
              About me
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-white hover:opacity-80 transition-opacity text-sm font-medium text-left py-2"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-white hover:opacity-80 transition-opacity text-sm font-medium text-left py-2"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-100 transition-colors text-sm font-medium text-center mt-2"
            >
              CONTACT ME
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
