import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from 'next/image';

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Pengembangan Web Aplikasi",
      description: "Solusi web aplikasi kustom yang dirancang khusus untuk kebutuhan bisnis Anda. Kami mengembangkan aplikasi web yang scalable, responsif, dan user-friendly dengan teknologi terkini.",
      features: [
        "Aplikasi berbasis web custom",
        "Sistem informasi perusahaan",
        "E-commerce platform",
        "Dashboard dan analytics",
        "API development",
        "Progressive Web Apps (PWA)"
      ],
      icon: "🌐",
      color: "rgb(95, 198, 124)"
    },
    {
      id: 2,
      title: "Aplikasi Mobile",
      description: "Aplikasi mobile native dan cross-platform yang memberikan pengalaman pengguna luar biasa untuk iOS dan Android. Dari konsept hingga deployment, kami siap membantu.",
      features: [
        "Aplikasi iOS Native",
        "Aplikasi Android Native",
        "Cross-platform React Native",
        "Flutter Apps",
        "UI/UX Design",
        "App Maintenance"
      ],
      icon: "📱",
      color: "rgb(59, 130, 246)"
    },
    {
      id: 3,
      title: "Pemasaran Digital",
      description: "Strategi pemasaran digital komprehensif untuk meningkatkan merek dan mendorong pertumbuhan bisnis Anda di era digital.",
      features: [
        "SEO Optimization",
        "Social Media Marketing",
        "Content Marketing",
        "Google Ads Management",
        "Email Marketing",
        "Analytics & Reporting"
      ],
      icon: "📈",
      color: "rgb(168, 85, 247)"
    },
    {
      id: 4,
      title: "Konsultasi IT",
      description: "Bimbingan ahli untuk membantu bisnis Anda mengadopsi solusi teknologi yang tepat dan mencapai tujuan digital transformation.",
      features: [
        "IT Strategy Consulting",
        "Technology Assessment",
        "Digital Transformation",
        "System Architecture",
        "Project Management",
        "Team Training"
      ],
      icon: "💡",
      color: "rgb(251, 146, 60)"
    },
    {
      id: 5,
      title: "Pemeliharaan Sistem",
      description: "Layanan pemeliharaan dan dukungan teknis 24/7 untuk memastikan sistem Anda berjalan optimal dan terhindar dari downtime.",
      features: [
        "System Monitoring",
        "Bug Fixes & Updates",
        "Performance Optimization",
        "Security Audits",
        "Database Management",
        "Technical Support"
      ],
      icon: "🔧",
      color: "rgb(236, 72, 153)"
    },
    {
      id: 6,
      title: "UI/UX Design",
      description: "Desain interface yang menarik dan user experience yang optimal untuk meningkatkan kepuasan pengguna dan konversi bisnis.",
      features: [
        "User Research",
        "Wireframing & Prototyping",
        "Visual Design",
        "Interaction Design",
        "Usability Testing",
        "Design Systems"
      ],
      icon: "🎨",
      color: "rgb(14, 165, 233)"
    }
  ];

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
            Layanan Kami
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
            Solusi digital komprehensif untuk membantu bisnis Anda berkembang di era digital
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href="https://api.whatsapp.com/send/?phone=6282158736885&text=Hello%20Astro%20Digital%20Solution,%20I%20would%20like%20to%20discuss%20your%20services."
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
              Konsultasi Gratis
            </a>
            <a
              href="#services"
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

      {/* Services Grid */}
      <section id="services" style={{ backgroundColor: 'rgb(49, 54, 52)', padding: '80px 0' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                style={{
                  backgroundColor: 'rgb(54, 109, 70)',
                  borderRadius: '16px',
                  padding: '32px',
                  boxShadow: 'rgba(255, 255, 255, 0.32) 2px 2px 8px 0px inset',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                className="hover:shadow-xl hover:scale-105"
              >
                {/* Icon and Title */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{
                    display: 'inline-block',
                    width: '60px',
                    height: '60px',
                    backgroundColor: service.color,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '28px',
                    marginBottom: '16px'
                  }}>
                    {service.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      fontSize: '22px',
                      fontWeight: '700',
                      lineHeight: '28px',
                      color: 'rgb(255, 255, 255)',
                      marginBottom: '12px'
                    }}
                  >
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p
                  style={{
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: '15px',
                    lineHeight: '24px',
                    color: 'rgb(229, 242, 239)',
                    marginBottom: '24px',
                    flex: 1
                  }}
                >
                  {service.description}
                </p>

                {/* Features */}
                <div style={{ marginBottom: '24px' }}>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li
                        key={index}
                        style={{
                          fontFamily: '"Plus Jakarta Sans", sans-serif',
                          fontSize: '14px',
                          color: 'rgb(200, 230, 220)',
                          marginBottom: '8px',
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        <span style={{
                          marginRight: '8px',
                          color: service.color,
                          fontSize: '12px'
                        }}>
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <div style={{ marginTop: 'auto' }}>
                  <a
                    href={`https://api.whatsapp.com/send/?phone=6282158736885&text=Hello%20Astro%20Digital%20Solution,%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      width: '100%',
                      padding: '12px 24px',
                      backgroundColor: service.color,
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
                  >
                    Pelajari Lebih Lanjut
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{ backgroundColor: 'rgb(30, 41, 59)', padding: '80px 0' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2
              style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: '36px',
                fontWeight: '800',
                lineHeight: '44px',
                color: 'rgb(255, 255, 255)',
                marginBottom: '16px'
              }}
            >
              Proses Kerja Kami
            </h2>
            <p
              style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: '18px',
                color: 'rgb(156, 163, 175)',
                maxWidth: '600px',
                margin: '0 auto'
              }}
            >
              Kami mengikuti proses yang terstruktur untuk memastikan hasil terbaik untuk setiap proyek
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Konsultasi", desc: "Memahami kebutuhan dan tujuan bisnis Anda" },
              { step: 2, title: "Perencanaan", desc: "Membuat strategi dan desain solusi" },
              { step: 3, title: "Pengembangan", desc: "Membangun solusi dengan teknologi terkini" },
              { step: 4, title: "Peluncuran", desc: "Deploy dan monitoring performa" }
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  textAlign: 'center',
                  padding: '24px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: 'rgb(95, 198, 124)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    margin: '0 auto 16px'
                  }}
                >
                  {item.step}
                </div>
                <h3
                  style={{
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: '18px',
                    fontWeight: '600',
                    color: 'rgb(255, 255, 255)',
                    marginBottom: '8px'
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: '14px',
                    color: 'rgb(156, 163, 175)',
                    margin: 0
                  }}
                >
                  {item.desc}
                </p>
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
            Siap Memulihkan Bisnis Anda?
          </h2>
          <p
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: '18px',
              color: 'rgb(229, 242, 239)',
              marginBottom: '40px'
            }}
          >
            Mari diskusikan bagaimana kami dapat membantu mencapai tujuan digital Anda
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=6282158736885&text=Hello%20Astro%20Digital%20Solution,%20I%20would%20like%20to%20start%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '20px 40px',
              backgroundColor: 'rgb(95, 198, 124)',
              color: 'rgb(255, 255, 255)',
              borderRadius: '200px',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: '18px',
              fontWeight: '600',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: 'rgba(49, 54, 52, 0.32) -2px -2px 8px 0px inset'
            }}
          >
            Mulai Sekarang
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}