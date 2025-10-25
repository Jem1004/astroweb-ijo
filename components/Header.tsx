'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-25 transition-all duration-300"
      style={{ backgroundColor: 'rgb(49, 54, 52)' }}
    >
      <div className="max-w-6xl mx-auto h-full flex items-center justify-between px-8">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="inline-block">
            <Image
              src="https://nore.co.id/wp-content/uploads/2024/09/nore_1000px-1-1-e1729234875986.png"
              alt="Astro Digital Solution"
              width={111}
              height={64}
              className="h-16 w-auto"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center flex-1">
          <div className="flex space-x-1">
            <a
              href="https://nore.co.id/about-us/"
              className="text-green-400 font-semibold text-sm px-6 py-4 hover:text-green-300 transition-colors duration-400 capitalize relative group"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              About Us
              <span
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-400 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"
                style={{ opacity: 0 }}
              ></span>
            </a>
            <a
              href="https://nore.co.id/our-service/"
              className="text-green-400 font-semibold text-sm px-6 py-4 hover:text-green-300 transition-colors duration-400 capitalize relative group"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              Service
              <span
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-400 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"
                style={{ opacity: 0 }}
              ></span>
            </a>
            <a
              href="https://nore.co.id/portofolio/"
              className="text-green-400 font-semibold text-sm px-6 py-4 hover:text-green-300 transition-colors duration-400 capitalize relative group"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              Portofolio
              <span
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-400 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"
                style={{ opacity: 0 }}
              ></span>
            </a>
            <a
              href="https://nore.co.id/news/"
              className="text-green-400 font-semibold text-sm px-6 py-4 hover:text-green-300 transition-colors duration-400 capitalize relative group"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              News
              <span
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-400 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"
                style={{ opacity: 0 }}
              ></span>
            </a>
          </div>
        </nav>

        {/* Right Section - Contact & Language */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Language Selector */}
          <div className="flex items-center space-x-2">
            <span className="text-green-100 text-sm font-semibold" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>Language:</span>
            <div className="flex space-x-2">
              <button className="text-green-400 font-bold text-sm hover:text-green-300 transition-colors">
                EN
              </button>
              <span className="text-green-400">/</span>
              <button className="text-green-400 font-semibold text-sm hover:text-green-300 transition-colors">
                ID
              </button>
            </div>
          </div>

          {/* Contact Button */}
          <a
            href="https://api.whatsapp.com/send/?phone=6285162951515&text=Hello%20Astro%20Digital%20Solution,%20I%20would%20like%20to%20get%20in%20touch&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-1.5 border-2 border-green-400 text-green-400 font-semibold rounded-full hover:bg-green-50 transition-all duration-300"
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: '15px',
              fontWeight: '600',
              borderRadius: '200px'
            }}
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2.5 rounded hover:bg-gray-700 transition-colors"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            border: '1px solid rgb(51, 55, 61)',
            borderRadius: '3px'
          }}
          aria-label="Toggle menu"
        >
          <div className="space-y-1">
            <span className={`block w-5 h-0.5 bg-white transform transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-white transform transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96' : 'max-h-0 overflow-hidden'}`} style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
        <div className="px-8 py-6 space-y-4">
          <a
            href="https://nore.co.id/about-us/"
            className="block text-gray-700 font-semibold text-sm py-2.5 px-5 hover:bg-gray-100 transition-colors capitalize"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
          >
            About Us
          </a>
          <a
            href="https://nore.co.id/our-service/"
            className="block text-gray-700 font-semibold text-sm py-2.5 px-5 hover:bg-gray-100 transition-colors capitalize"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
          >
            Service
          </a>
          <a
            href="https://nore.co.id/portofolio/"
            className="block text-gray-700 font-semibold text-sm py-2.5 px-5 hover:bg-gray-100 transition-colors capitalize"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
          >
            Portofolio
          </a>
          <a
            href="https://nore.co.id/news/"
            className="block text-gray-700 font-semibold text-sm py-2.5 px-5 hover:bg-gray-100 transition-colors capitalize"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
          >
            News
          </a>

          {/* Mobile Contact Button */}
          <div className="pt-2">
            <a
              href="https://api.whatsapp.com/send/?phone=6285162951515&text=Hello%20Astro%20Digital%20Solution,%20I%20would%20like%20to%20get%20in%20touch&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-8 py-1.5 border-2 border-green-400 text-green-400 font-semibold rounded-full hover:bg-green-50 transition-all duration-300"
              style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: '15px',
                fontWeight: '600',
                borderRadius: '200px'
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}