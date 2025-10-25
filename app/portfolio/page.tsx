'use client';

import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from 'next/image';

export default function PortfolioPage() {
  const portfolios = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Platform e-commerce modern dengan fitur payment gateway, inventory management, dan dashboard analytics.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe API"],
      client: "Fashion Retail Co.",
      year: "2024",
      status: "completed",
      link: "#"
    },
    {
      id: 2,
      title: "Banking Mobile App",
      category: "Mobile Development",
      description: "Aplikasi mobile banking dengan fitur transfer, payment, dan secure authentication.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      tags: ["React Native", "Firebase", "Redux", "JWT Auth"],
      client: "Bank Digital Indonesia",
      year: "2024",
      status: "completed",
      link: "#"
    },
    {
      id: 3,
      title: "SIS+ Education Platform",
      category: "Web Application",
      description: "Sistem informasi sekolah terintegrasi dengan learning management system dan payment gateway.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      tags: ["Next.js", "PostgreSQL", "Tailwind CSS", "Prisma"],
      client: "Sekolah Unggulan",
      year: "2023",
      status: "completed",
      link: "#"
    },
    {
      id: 4,
      title: "Healthcare Management System",
      category: "Web Development",
      description: "Sistem manajemen rumah sakit dengan fitur appointment booking dan medical records.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
      tags: ["Vue.js", "Laravel", "MySQL", "Docker"],
      client: "Rumah Sakit Kasih Ibu",
      year: "2023",
      status: "completed",
      link: "#"
    },
    {
      id: 5,
      title: "Food Delivery App",
      category: "Mobile Development",
      description: "Aplikasi food delivery dengan real-time tracking dan payment integration.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop",
      tags: ["Flutter", "Google Maps API", "Midtrans", "WebSocket"],
      client: "QuickFood Indonesia",
      year: "2023",
      status: "completed",
      link: "#"
    },
    {
      id: 6,
      title: "HR Management Platform",
      category: "Web Application",
      description: "Platform HR management dengan fitur payroll, attendance, dan performance tracking.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      tags: ["Angular", "Spring Boot", "PostgreSQL", "JWT"],
      client: "PT. Maju Bersama",
      year: "2023",
      status: "completed",
      link: "#"
    },
    {
      id: 7,
      title: "Real Estate Website",
      category: "Web Development",
      description: "Website properti dengan fitur listing search, virtual tour, dan mortgage calculator.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      tags: ["Next.js", "Three.js", "PostgreSQL", "Mapbox"],
      client: "Properti Syariah Indonesia",
      year: "2022",
      status: "completed",
      link: "#"
    },
    {
      id: 8,
      title: "Logistics Management System",
      category: "Web Application",
      description: "Sistem manajemen logistik dengan fleet tracking dan warehouse management.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
      tags: ["React", "Node.js", "GPS Tracking", "MongoDB"],
      client: "Jaya Express Logistics",
      year: "2022",
      status: "completed",
      link: "#"
    },
    {
      id: 9,
      title: "Social Media Dashboard",
      category: "Web Development",
      description: "Dashboard analytics untuk social media management dengan automated reporting.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      tags: ["Vue.js", "Python", "TensorFlow", "PostgreSQL"],
      client: "Digital Marketing Agency",
      year: "2022",
      status: "completed",
      link: "#"
    }
  ];

  const categories = ["Semua", "Web Development", "Mobile Development", "Web Application"];
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const filteredPortfolios = selectedCategory === "Semua"
    ? portfolios
    : portfolios.filter(portfolio => portfolio.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        style={{
          backgroundColor: 'rgb(49, 54, 52)',
          backgroundImage: 'linear-gradient(135deg, rgb(49, 54, 52) 0%, rgb(30, 41, 59) 100%)',
          padding: '120px 0 80px 0'
        }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: '48px',
              fontWeight: '800',
              lineHeight: '60px',
              letterSpacing: '-0.5px',
              color: 'rgb(255, 255, 255)',
              marginBottom: '24px'
            }}
          >
            Portofolio Kami
          </h1>
          <p
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: '20px',
              fontWeight: '500',
              lineHeight: '30px',
              color: 'rgb(229, 242, 239)',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px'
            }}
          >
            Karya-karya terbaik yang telah kami hasilkan untuk klien-klien terpercaya
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" style={{ marginTop: '60px' }}>
            {[
              { number: "50+", label: "Proyek Selesai" },
              { number: "30+", label: "Klien Puas" },
              { number: "8+", label: "Tahun Pengalaman" },
              { number: "15+", label: "Penghargaan" }
            ].map((stat, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: '36px',
                    fontWeight: '800',
                    color: 'rgb(95, 198, 124)',
                    marginBottom: '8px',
                    fontFamily: '"Plus Jakarta Sans", sans-serif'
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontSize: '16px',
                    color: 'rgb(229, 242, 239)',
                    fontFamily: '"Plus Jakarta Sans", sans-serif'
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section style={{ backgroundColor: 'rgb(49, 54, 52)', padding: '40px 0' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '16px' }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '12px 24px',
                  backgroundColor: selectedCategory === category ? 'rgb(95, 198, 124)' : 'transparent',
                  color: selectedCategory === category ? 'rgb(255, 255, 255)' : 'rgb(95, 198, 124)',
                  border: '2px solid rgb(95, 198, 124)',
                  borderRadius: '200px',
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section style={{ backgroundColor: 'rgb(30, 41, 59)', padding: '80px 0' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolios.map((portfolio) => (
              <div
                key={portfolio.id}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                className="hover:shadow-xl hover:scale-105 group"
              >
                {/* Image Container */}
                <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                  <Image
                    src={portfolio.image}
                    alt={portfolio.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      backgroundColor: 'rgba(49, 54, 52, 0.9)',
                      color: 'rgb(95, 198, 124)',
                      padding: '6px 12px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: '600',
                      fontFamily: '"Plus Jakarta Sans", sans-serif'
                    }}
                  >
                    {portfolio.category}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '24px' }}>
                  <div style={{ marginBottom: '12px' }}>
                    <span
                      style={{
                        color: 'rgb(156, 163, 175)',
                        fontSize: '12px',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        fontWeight: '500'
                      }}
                    >
                      {portfolio.client} • {portfolio.year}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      fontSize: '20px',
                      fontWeight: '700',
                      color: 'rgb(255, 255, 255)',
                      marginBottom: '12px',
                      lineHeight: '28px'
                    }}
                  >
                    {portfolio.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      fontSize: '14px',
                      lineHeight: '20px',
                      color: 'rgb(156, 163, 175)',
                      marginBottom: '16px'
                    }}
                  >
                    {portfolio.description}
                  </p>

                  {/* Tags */}
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {portfolio.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          style={{
                            backgroundColor: 'rgba(95, 198, 124, 0.1)',
                            color: 'rgb(95, 198, 124)',
                            padding: '4px 8px',
                            borderRadius: '6px',
                            fontSize: '11px',
                            fontFamily: '"Plus Jakarta Sans", sans-serif',
                            fontWeight: '500'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                      {portfolio.tags.length > 3 && (
                        <span
                          style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            color: 'rgb(156, 163, 175)',
                            padding: '4px 8px',
                            borderRadius: '6px',
                            fontSize: '11px',
                            fontFamily: '"Plus Jakarta Sans", sans-serif',
                            fontWeight: '500'
                          }}
                        >
                          +{portfolio.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Button */}
                  <a
                    href={portfolio.link}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      padding: '12px 24px',
                      backgroundColor: 'rgb(95, 198, 124)',
                      color: 'rgb(255, 255, 255)',
                      borderRadius: '8px',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      fontSize: '14px',
                      fontWeight: '600',
                      textAlign: 'center',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    className="hover:bg-opacity-90"
                  >
                    Lihat Detail
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: 'rgb(49, 54, 52)', padding: '80px 0' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: '36px',
              fontWeight: '800',
              lineHeight: '44px',
              color: 'rgb(255, 255, 255)',
              marginBottom: '24px'
            }}
          >
            Siap Memulai Proyek Anda?
          </h2>
          <p
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: '18px',
              color: 'rgb(229, 242, 239)',
              marginBottom: '40px'
            }}
          >
            Mari wujudkan proyek impian Anda bersama tim profesional kami
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <a
              href="https://api.whatsapp.com/send/?phone=6282158736885&text=Hello%20Astro%20Digital%20Solution,%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px 32px',
                backgroundColor: 'rgb(95, 198, 124)',
                color: 'rgb(255, 255, 255)',
                borderRadius: '200px',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: '16px',
                fontWeight: '600',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: 'rgba(49, 54, 52, 0.32) -2px -2px 8px 0px inset'
              }}
            >
              Diskusikan Proyek
            </a>
            <a
              href="/services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px 32px',
                backgroundColor: 'transparent',
                color: 'rgb(95, 198, 124)',
                border: '2px solid rgb(95, 198, 124)',
                borderRadius: '200px',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: '16px',
                fontWeight: '600',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Lihat Layanan
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}