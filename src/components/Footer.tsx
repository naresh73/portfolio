'use client'

import { ArrowUp, Facebook, Linkedin, Instagram, Mail } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-dark-gray py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Back to Top */}
        <div className="text-center mb-6 sm:mb-8">
          <button
            onClick={scrollToTop}
            className="flex flex-col items-center text-light-gray hover:text-white transition-colors group mx-auto"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 mb-1 sm:mb-2 group-hover:translate-y-[-4px] transition-transform" />
            <span className="text-xs sm:text-sm">BACK TO TOP</span>
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-gray hover:text-white transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-gray hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-gray hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a
            href="mailto:contact@example.com"
            className="text-light-gray hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-light-gray text-[10px] sm:text-xs">
            ©2020 Teemax Guide All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

