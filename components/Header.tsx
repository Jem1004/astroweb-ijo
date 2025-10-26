'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}
      style={{
        backgroundColor: isScrolled ? 'rgb(49, 54, 52)' : 'transparent',
        height: '100px',
        minHeight: '100px'
      }}
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6" style={{ margin: '0px 255px' }}>
        {/* Logo */}
        <div className="flex items-center justify-center" style={{ width: '116px', height: '64.5px' }}>
          <a href="/" className="inline-block" style={{ width: '111px', height: '64px', display: 'block', textAlign: 'center' }}>
            <Image
              src="/ASTRO.png"
              alt="Astro Digital Solution"
              width={111}
              height={64}
              className="w-auto h-16"
              style={{ display: 'inline-block', overflow: 'clip', verticalAlign: 'middle' }}
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center flex-1" style={{ width: '812px', height: '64.5px' }}>
          <div className="flex items-center justify-end" style={{ width: '568.398px', height: '56px', marginLeft: '134.125px' }}>
            <div className="flex items-center space-x-0">
              <a
                href="/"
                className="relative font-semibold capitalize transition-all duration-400"
                style={{
                  width: '116.07px',
                  height: '56px',
                  padding: '13px 25px',
                  color: 'rgb(95, 198, 124)',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: '15px',
                  fontWeight: '600',
                  lineHeight: '30px',
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center'
                }}
                onMouseEnter={() => setHoveredItem('beranda')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                Beranda
                <span
                  className="absolute bottom-0 left-0 h-0.5 transition-all duration-300"
                  style={{
                    width: '116.07px',
                    height: '3px',
                    top: '53px',
                    backgroundColor: 'rgb(95, 198, 124)',
                    opacity: hoveredItem === 'beranda' ? 1 : 0,
                    transition: '0.3s cubic-bezier(0.58, 0.3, 0.005, 1)'
                  }}
                />
              </a>
              <a
                href="/about"
                className="relative font-semibold capitalize transition-all duration-400"
                style={{
                  width: '116.07px',
                  height: '56px',
                  padding: '13px 25px',
                  color: 'rgb(95, 198, 124)',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: '15px',
                  fontWeight: '600',
                  lineHeight: '30px',
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center'
                }}
                onMouseEnter={() => setHoveredItem('about')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                Tentang Kami
                <span
                  className="absolute bottom-0 left-0 h-0.5 transition-all duration-300"
                  style={{
                    width: '116.07px',
                    height: '3px',
                    top: '53px',
                    backgroundColor: 'rgb(95, 198, 124)',
                    opacity: hoveredItem === 'about' ? 1 : 0,
                    transition: '0.3s cubic-bezier(0.58, 0.3, 0.005, 1)'
                  }}
                />
              </a>
              <a
                href="/services"
                className="relative font-semibold capitalize transition-all duration-400"
                style={{
                  width: '104.516px',
                  height: '56px',
                  padding: '13px 25px',
                  color: 'rgb(95, 198, 124)',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: '15px',
                  fontWeight: '600',
                  lineHeight: '30px',
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center'
                }}
                onMouseEnter={() => setHoveredItem('services')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                Layanan
                <span
                  className="absolute bottom-0 left-0 h-0.5 transition-all duration-300"
                  style={{
                    width: '104.516px',
                    height: '3px',
                    top: '53px',
                    backgroundColor: 'rgb(95, 198, 124)',
                    opacity: hoveredItem === 'services' ? 1 : 0,
                    transition: '0.3s cubic-bezier(0.58, 0.3, 0.005, 1)'
                  }}
                />
              </a>
              <a
                href="/portfolio"
                className="relative font-semibold capitalize transition-all duration-400"
                style={{
                  width: '122.906px',
                  height: '56px',
                  padding: '13px 25px',
                  color: 'rgb(95, 198, 124)',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: '15px',
                  fontWeight: '600',
                  lineHeight: '30px',
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center'
                }}
                onMouseEnter={() => setHoveredItem('portfolio')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                Portofolio
                <span
                  className="absolute bottom-0 left-0 h-0.5 transition-all duration-300"
                  style={{
                    width: '122.906px',
                    height: '3px',
                    top: '53px',
                    backgroundColor: 'rgb(95, 198, 124)',
                    opacity: hoveredItem === 'portfolio' ? 1 : 0,
                    transition: '0.3s cubic-bezier(0.58, 0.3, 0.005, 1)'
                  }}
                />
              </a>
              <a
                href="/news"
                className="relative font-semibold capitalize transition-all duration-400"
                style={{
                  width: '90.7812px',
                  height: '56px',
                  padding: '13px 25px',
                  color: 'rgb(95, 198, 124)',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: '15px',
                  fontWeight: '600',
                  lineHeight: '30px',
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center'
                }}
                onMouseEnter={() => setHoveredItem('news')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                Berita
                <span
                  className="absolute bottom-0 left-0 h-0.5 transition-all duration-300"
                  style={{
                    width: '90.7812px',
                    height: '3px',
                    top: '53px',
                    backgroundColor: 'rgb(95, 198, 124)',
                    opacity: hoveredItem === 'news' ? 1 : 0,
                    transition: '0.3s cubic-bezier(0.58, 0.3, 0.005, 1)'
                  }}
                />
              </a>
            </div>
          </div>
        </nav>



        {/* Contact Button - Desktop */}
        <div className="hidden lg:flex items-center justify-center" style={{ width: '225.594px', height: '44px', paddingLeft: '18px' }}>
          <a
            href="https://api.whatsapp.com/send/?phone=6282158736885&text=Hello%20Astro%20Digital%20Solution,%20I%20would%20like%20to%20get%20in%20touch&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              width: '144.875px',
              height: '44px',
              padding: '12px 24px',
              border: 'none',
              borderRadius: '12px',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: '14px',
              fontWeight: '600',
              lineHeight: '20px',
              textAlign: 'center',
              color: '#ffffff',
              backgroundColor: 'rgb(95, 198, 124)',
              cursor: 'pointer',
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(95, 198, 124, 0.3)',
              letterSpacing: '0.5px'
            }}
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2.5 rounded-lg transition-all duration-300"
          style={{
            padding: '5.5px',
            borderStyle: 'solid',
            borderColor: 'rgb(51, 55, 61)',
            borderRadius: '3px',
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            color: 'rgb(51, 55, 61)'
          }}
          aria-label="Toggle menu"
        >
          <div className="space-y-1">
            <span className={`block w-5 h-0.5 transform transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-5 h-0.5 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 transform transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}
        style={{
          backgroundColor: 'rgb(255, 255, 255)',
          maxHeight: isMenuOpen ? 'none' : '0px',
          marginTop: '10px'
        }}
      >
        <div className="px-6 py-6">
          <div className="flex flex-col space-y-2">
            <a
              href="/"
              className="block font-semibold capitalize transition-all duration-300"
              style={{
                padding: '10px 20px',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: '15px',
                fontWeight: '600',
                lineHeight: '30px',
                color: 'rgb(51, 55, 61)',
                textTransform: 'capitalize'
              }}
            >
              Beranda
            </a>
            <a
              href="/about"
              className="block font-semibold capitalize transition-all duration-300"
              style={{
                padding: '10px 20px',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: '15px',
                fontWeight: '600',
                lineHeight: '30px',
                color: 'rgb(51, 55, 61)',
                textTransform: 'capitalize'
              }}
            >
              Tentang Kami
            </a>
            <a
              href="/services"
              className="block font-semibold capitalize transition-all duration-300"
              style={{
                padding: '10px 20px',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: '15px',
                fontWeight: '600',
                lineHeight: '30px',
                color: 'rgb(51, 55, 61)',
                textTransform: 'capitalize'
              }}
            >
              Layanan
            </a>
            <a
              href="/portfolio"
              className="block font-semibold capitalize transition-all duration-300"
              style={{
                padding: '10px 20px',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: '15px',
                fontWeight: '600',
                lineHeight: '30px',
                color: 'rgb(51, 55, 61)',
                textTransform: 'capitalize'
              }}
            >
              Portofolio
            </a>
            <a
              href="/contact"
              className="block font-semibold capitalize transition-all duration-300"
              style={{
                padding: '10px 20px',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: '15px',
                fontWeight: '600',
                lineHeight: '30px',
                color: 'rgb(51, 55, 61)',
                textTransform: 'capitalize',
                whiteSpace: 'nowrap'
              }}
            >
              Contact Us
            </a>

            {/* Mobile Contact Button */}
            <div className="pt-4">
              <a
                href="https://api.whatsapp.com/send/?phone=6282158736885&text=Hello%20Astro%20Digital%20Solution,%20I%20would%20like%20to%20get%20in%20touch&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  width: '100%',
                  maxWidth: '200px',
                  height: '44px',
                  padding: '12px 24px',
                  border: 'none',
                  borderRadius: '12px',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: '14px',
                  fontWeight: '600',
                  lineHeight: '20px',
                  textAlign: 'center',
                  color: '#ffffff',
                  backgroundColor: 'rgb(95, 198, 124)',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(95, 198, 124, 0.3)',
                  letterSpacing: '0.5px'
                }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}