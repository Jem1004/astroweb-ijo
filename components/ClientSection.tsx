'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function ClientSection() {
  const clientLogos = [
    "/client/Logo-Kabupaten-Penajam-Paser-Utara-Kalimantan-Timur.png",
    "/client/logo%20paser.png",
    "/client/ofa%20royal.png"
  ];

  const clientNames = [
    "Kabupaten Penajam Paser Utara",
    "Paser",
    "OFA Royal"
  ];

  const sliderRef = useRef<HTMLDivElement>(null);
  const [hoveredLogo, setHoveredLogo] = useState<number | null>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let currentPosition = 0;
    const slideWidth = 190; // Each slide is 190px wide
    const totalSlides = clientLogos.length * 3; // Original + duplicates for infinite scroll
    const maxPosition = -(clientLogos.length * slideWidth); // Reset after one full cycle
    const animationSpeed = 12000; // 12 seconds for full animation

    const animate = () => {
      currentPosition -= slideWidth / (animationSpeed / 16.67); // ~60fps

      // Reset position for infinite loop
      if (currentPosition <= maxPosition) {
        currentPosition = 0;
      }

      slider.style.transform = `translate3d(${currentPosition}px, 0px, 0px)`;
    };

    const intervalId = setInterval(animate, 16.67); // ~60fps

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {/* Header and Description Section */}
      <section style={{ backgroundColor: 'rgb(49,54, 52)', padding: '72px 0 32px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '1450px',
            margin: '0 auto'
          }}>
            {/* Header */}
            <div style={{ marginBottom: '14.4px' }}>
              <h2
                style={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: '28px',
                  fontWeight: '700',
                  lineHeight: '37px',
                  letterSpacing: '-0.2px',
                  color: 'rgb(255, 255, 255)',
                  textAlign: 'left',
                  margin: 0
                }}
              >
                Klien Percaya Kami
              </h2>
            </div>

            {/* Description */}
            <div>
              <p
                style={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: '18px',
                  fontWeight: '500',
                  lineHeight: '28px',
                  color: 'rgb(229, 242, 239)',
                  margin: 0,
                  maxWidth: '100%'
                }}
              >
                Kami telah memproduksi dan merilis berbagai solusi digital termasuk website profil perusahaan, aplikasi mobile, dan sistem informasi yang canggih untuk mendukung transformasi digital klien kami
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Logo Slider with Button */}
      <section style={{
        backgroundColor: 'rgb(49,54, 52)',
        padding: '0 0 100px 0', // Add more bottom padding for better spacing
        position: 'relative',
        width: '100vw',
        minHeight: '320px', // Increased height to accommodate button and margin
        overflow: 'hidden'
      }}>
        <div
          ref={sliderRef}
          style={{
            display: 'flex',
            flexDirection: 'row',
            height: '166px',
            alignItems: 'center',
            position: 'absolute',
            willChange: 'transform',
            transition: 'transform 15s linear',
            transform: 'translate3d(0px, 0px, 0px)'
          }}
        >
          {/* Original logos */}
          {clientLogos.map((logo, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '190px',
                height: '166px',
                flexShrink: 0,
                position: 'relative',
                cursor: 'pointer',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                transform: hoveredLogo === index ? 'scale(1.05)' : 'scale(1)',
                boxShadow: hoveredLogo === index ? '0 4px 20px rgba(95, 198, 124, 0.3)' : 'none'
              }}
              onMouseEnter={() => setHoveredLogo(index)}
              onMouseLeave={() => setHoveredLogo(null)}
            >
              <div
                style={{
                  display: 'block',
                  position: 'static',
                  width: '190px',
                  height: '166px',
                  boxSizing: 'border-box',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}
              >
                <Image
                  src={logo}
                  alt={`${clientNames[index]} logo`}
                  width={160}
                  height={160}
                  style={{
                    display: 'inline',
                    position: 'static',
                    overflow: 'clip',
                    width: '160px',
                    height: '160px',
                    maxWidth: '100%',
                    boxSizing: 'border-box',
                    objectFit: 'contain',
                    filter: hoveredLogo === index ? 'none' : 'grayscale(100%)',
                    transition: 'filter 0.3s ease'
                  }}
                />
                {hoveredLogo === index && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '10px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      color: 'white',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      whiteSpace: 'nowrap',
                      zIndex: 10
                    }}
                  >
                    {clientNames[index]}
                  </div>
                )}
              </div>
            </div>
          ))}
          {/* Duplicate logos for infinite scroll effect */}
          {clientLogos.map((logo, index) => (
            <div
              key={`duplicate-${index}`}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '190px',
                height: '166px',
                flexShrink: 0,
                position: 'relative',
                cursor: 'pointer',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                transform: hoveredLogo === (index + 100) ? 'scale(1.05)' : 'scale(1)',
                boxShadow: hoveredLogo === (index + 100) ? '0 4px 20px rgba(95, 198, 124, 0.3)' : 'none'
              }}
              onMouseEnter={() => setHoveredLogo(index + 100)}
              onMouseLeave={() => setHoveredLogo(null)}
            >
              <div
                style={{
                  display: 'block',
                  position: 'static',
                  width: '190px',
                  height: '166px',
                  boxSizing: 'border-box',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}
              >
                <Image
                  src={logo}
                  alt={`${clientNames[index]} logo duplicate`}
                  width={160}
                  height={160}
                  style={{
                    display: 'inline',
                    position: 'static',
                    overflow: 'clip',
                    width: '160px',
                    height: '160px',
                    maxWidth: '100%',
                    boxSizing: 'border-box',
                    objectFit: 'contain',
                    filter: hoveredLogo === (index + 100) ? 'none' : 'grayscale(100%)',
                    transition: 'filter 0.3s ease'
                  }}
                />
                {hoveredLogo === (index + 100) && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '10px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      color: 'white',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      whiteSpace: 'nowrap',
                      zIndex: 10
                    }}
                  >
                    {clientNames[index]}
                  </div>
                )}
              </div>
            </div>
          ))}
          {/* Extra duplicate set for seamless infinite scroll */}
          {clientLogos.map((logo, index) => (
            <div
              key={`triplicate-${index}`}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '190px',
                height: '166px',
                flexShrink: 0,
                position: 'relative',
                cursor: 'pointer',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                transform: hoveredLogo === (index + 200) ? 'scale(1.05)' : 'scale(1)',
                boxShadow: hoveredLogo === (index + 200) ? '0 4px 20px rgba(95, 198, 124, 0.3)' : 'none'
              }}
              onMouseEnter={() => setHoveredLogo(index + 200)}
              onMouseLeave={() => setHoveredLogo(null)}
            >
              <div
                style={{
                  display: 'block',
                  position: 'static',
                  width: '190px',
                  height: '166px',
                  boxSizing: 'border-box',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}
              >
                <Image
                  src={logo}
                  alt={`${clientNames[index]} logo triplicate`}
                  width={160}
                  height={160}
                  style={{
                    display: 'inline',
                    position: 'static',
                    overflow: 'clip',
                    width: '160px',
                    height: '160px',
                    maxWidth: '100%',
                    boxSizing: 'border-box',
                    objectFit: 'contain',
                    filter: hoveredLogo === (index + 200) ? 'none' : 'grayscale(100%)',
                    transition: 'filter 0.3s ease'
                  }}
                />
                {hoveredLogo === (index + 200) && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '10px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      color: 'white',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      whiteSpace: 'nowrap',
                      zIndex: 10
                    }}
                  >
                    {clientNames[index]}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* See Our Portfolio Button - Bottom of Slider */}
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          justifyContent: 'center',
          width: '100%'
        }}>
          <a
            href="/portfolio"
            style={{
              display: 'inline-block',
              padding: '16px 40px',
              border: '2px solid rgba(255, 255, 255, 0)',
              borderRadius: '200px',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: '17.5px',
              fontWeight: '600',
              lineHeight: '26px',
              textAlign: 'center',
              color: 'rgb(255, 255, 255)',
              backgroundColor: 'rgb(95, 198, 124)',
              cursor: 'pointer',
              boxShadow: 'rgba(49, 54, 52, 0.32) -2px -2px 8px 0px inset',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              position: 'relative',
              zIndex: 20,
              margin: '10px 0'
            }}
          >
            Lihat Portfolio Kami
          </a>
        </div>

      <style jsx>{`
        @keyframes buttonPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: rgba(49, 54, 52, 0.32) -2px -2px 8px 0px inset;
          }
          50% {
            transform: scale(1.05);
            box-shadow: rgba(49, 54, 52, 0.5) -2px -2px 12px 0px inset;
          }
        }

        a:hover {
          animation: buttonPulse 2s infinite;
        }
      `}</style>
    </section>
    </>
  );
}