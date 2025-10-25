'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function ClientSection() {
  const clientLogos = [
    "https://nore.co.id/wp-content/uploads/2024/09/image-6.png",
    "https://nore.co.id/wp-content/uploads/2024/09/image-7.png",
    "https://nore.co.id/wp-content/uploads/2024/09/image-8.png",
    "https://nore.co.id/wp-content/uploads/2024/09/image-6-1.png",
    "https://nore.co.id/wp-content/uploads/2024/09/image-6-2.png",
    "https://nore.co.id/wp-content/uploads/2024/09/image-6-4.png",
    "https://nore.co.id/wp-content/uploads/2024/09/image-6-5.png",
    "https://nore.co.id/wp-content/uploads/2024/09/image-8-1.png",
    "https://nore.co.id/wp-content/uploads/2024/09/image-8-2.png",
    "https://nore.co.id/wp-content/uploads/2024/09/image-9.png",
    "https://nore.co.id/wp-content/uploads/2024/09/image-9-1.png",
    "https://nore.co.id/wp-content/uploads/2024/09/image-10.png",
    "https://nore.co.id/wp-content/uploads/2024/09/image-10-1.png",
    "https://nore.co.id/wp-content/uploads/2024/09/image-11.png"
  ];

  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let currentPosition = 0;
    const slideWidth = 190; // Each slide is 190px wide
    const totalSlides = clientLogos.length * 3; // Original + duplicates for infinite scroll
    const maxPosition = -(clientLogos.length * slideWidth); // Reset after one full cycle
    const animationSpeed = 15000; // 15 seconds for full animation (matching reference)

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
                  letterSpacing: '-0.4px',
                  color: 'rgb(255, 255, 255)',
                  textAlign: 'left',
                  margin: 0
                }}
              >
                Clients Trusted Us
              </h2>
            </div>

            {/* Description */}
            <div>
              <p
                style={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: '21px',
                  fontWeight: '600',
                  lineHeight: '30px',
                  letterSpacing: '-0.1px',
                  color: 'rgb(229, 242, 239)',
                  margin: 0,
                  maxWidth: '100%'
                }}
              >
                We have produced and released hundreds of solutions including company profile websites, mobile apps, and sophisticated information systems which were built from scratch
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Logo Slider with Button */}
      <section style={{
        backgroundColor: 'rgb(49,54, 52)',
        padding: '0 0 60px 0', // Add bottom padding for button
        position: 'relative',
        width: '100vw',
        minHeight: '280px', // Increased height to accommodate button and margin
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
                position: 'relative'
              }}
            >
              <div
                style={{
                  display: 'block',
                  position: 'static',
                  width: '190px',
                  height: '166px',
                  boxSizing: 'border-box',
                  textAlign: 'center'
                }}
              >
                <Image
                  src={logo}
                  alt={`Client logo ${index + 1}`}
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
                    objectFit: 'contain'
                  }}
                />
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
                position: 'relative'
              }}
            >
              <div
                style={{
                  display: 'block',
                  position: 'static',
                  width: '190px',
                  height: '166px',
                  boxSizing: 'border-box',
                  textAlign: 'center'
                }}
              >
                <Image
                  src={logo}
                  alt={`Client logo ${index + 1} duplicate`}
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
                    objectFit: 'contain'
                  }}
                />
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
                position: 'relative'
              }}
            >
              <div
                style={{
                  display: 'block',
                  position: 'static',
                  width: '190px',
                  height: '166px',
                  boxSizing: 'border-box',
                  textAlign: 'center'
                }}
              >
                <Image
                  src={logo}
                  alt={`Client logo ${index + 1} triplicate`}
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
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* See Our Portfolio Button - Bottom of Slider */}
        <div style={{
          position: 'absolute',
          bottom: '50px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          justifyContent: 'center',
          width: '100%'
        }}>
          <a
            href="https://nore.co.id/portofolio/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '18px 40px', // Increased padding for better appearance
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
              margin: '10px 0' // Add vertical margin
            }}
          >
            See Our Portfolio
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