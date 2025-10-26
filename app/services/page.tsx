import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from 'next/image';

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Pengembangan Web Aplikasi",
      description: "Solusi web aplikasi kustom dengan teknologi terkini untuk kebutuhan bisnis Anda. Scalable, responsif, dan user-friendly.",
      features: [
        "Aplikasi berbasis web custom",
        "Sistem informasi perusahaan",
        "E-commerce platform",
        "Dashboard dan analytics"
      ],
      icon: "🌐"
    },
    {
      id: 2,
      title: "Aplikasi Mobile",
      description: "Aplikasi mobile native dan cross-platform dengan pengalaman pengguna luar biasa untuk iOS dan Android.",
      features: [
        "Aplikasi iOS Native",
        "Aplikasi Android Native",
        "Cross-platform React Native",
        "UI/UX Design"
      ],
      icon: "📱"
    },
    {
      id: 3,
      title: "Pemasaran Digital",
      description: "Strategi pemasaran digital komprehensif untuk meningkatkan merek dan mendorong pertumbuhan bisnis Anda.",
      features: [
        "SEO Optimization",
        "Social Media Marketing",
        "Content Marketing",
        "Google Ads Management"
      ],
      icon: "📈"
    },
    {
      id: 4,
      title: "Konsultasi IT",
      description: "Bimbingan ahli untuk mengadopsi solusi teknologi tepat dan mencapai tujuan digital transformation.",
      features: [
        "IT Strategy Consulting",
        "Technology Assessment",
        "Digital Transformation",
        "System Architecture"
      ],
      icon: "💡"
    },
    {
      id: 5,
      title: "Pemeliharaan Sistem",
      description: "Layanan pemeliharaan dan dukungan teknis untuk memastikan sistem berjalan optimal dan terhindar dari downtime.",
      features: [
        "System Monitoring",
        "Bug Fixes & Updates",
        "Performance Optimization",
        "Security Audits"
      ],
      icon: "🔧"
    },
    {
      id: 6,
      title: "UI/UX Design",
      description: "Desain interface menarik dan user experience optimal untuk meningkatkan kepuasan pengguna dan konversi.",
      features: [
        "User Research",
        "Wireframing & Prototyping",
        "Visual Design",
        "Usability Testing"
      ],
      icon: "🎨"
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
          padding: '100px 0 80px 0'
        }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: '28px',
              fontWeight: '700',
              lineHeight: '37px',
              letterSpacing: '-0.2px',
              color: 'rgb(95, 198, 124)',
              marginBottom: '16px'
            }}
          >
            Astro Digital Solution
          </h2>
          <h1
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: '42px',
              fontWeight: '800',
              lineHeight: '52px',
              letterSpacing: '-0.3px',
              color: 'rgb(255, 255, 255)',
              marginBottom: '20px'
            }}
          >
            Layanan Kami
          </h1>
          <p
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: '18px',
              fontWeight: '500',
              lineHeight: '28px',
              color: 'rgb(229, 242, 239)',
              marginBottom: '32px',
              maxWidth: '600px',
              margin: '0 auto 32px'
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
                fontSize: '17.5px',
                fontWeight: '600',
                lineHeight: '26px',
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
                fontSize: '17.5px',
                fontWeight: '600',
                lineHeight: '26px',
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
      <section id="services" style={{ backgroundColor: 'rgb(49, 54, 52)', padding: '72px 0' }}>
        <div className="max-w-6xl mx-auto px-4">
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
              Solusi Digital Kami
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                style={{
                  backgroundColor: 'rgb(54, 109, 70)',
                  borderRadius: '16px',
                  padding: '32px 25px',
                  boxShadow: 'rgba(255, 255, 255, 0.32) 2px 2px 8px 0px inset',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: '300px'
                }}
                className="hover:shadow-xl hover:scale-105"
              >
                {/* Icon */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '48px',
                  marginBottom: '20px',
                  height: '60px'
                }}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: '21px',
                    fontWeight: '700',
                    lineHeight: '30px',
                    letterSpacing: '-0.2px',
                    color: 'rgb(255, 255, 255)',
                    textAlign: 'center',
                    marginBottom: '14.4px'
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: '15px',
                    lineHeight: '25.6px',
                    color: 'rgb(229, 242, 239)',
                    textAlign: 'center',
                    marginBottom: '20px',
                    flex: 1
                  }}
                >
                  {service.description}
                </p>

                {/* Key Features */}
                <div style={{ marginBottom: '24px' }}>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', textAlign: 'center' }}>
                    {service.features.slice(0, 2).map((feature, index) => (
                      <li
                        key={index}
                        style={{
                          fontFamily: '"Plus Jakarta Sans", sans-serif',
                          fontSize: '13px',
                          color: 'rgb(200, 230, 220)',
                          marginBottom: '6px',
                          display: 'inline-block',
                          margin: '3px 6px',
                          padding: '4px 8px',
                          backgroundColor: 'rgba(95, 198, 124, 0.1)',
                          borderRadius: '12px'
                        }}
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <div style={{ marginTop: 'auto', textAlign: 'center' }}>
                  <a
                    href={`https://api.whatsapp.com/send/?phone=6282158736885&text=Hello%20Astro%20Digital%20Solution,%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      padding: '12px 24px',
                      backgroundColor: 'rgb(95, 198, 124)',
                      color: 'rgb(255, 255, 255)',
                      borderRadius: '200px',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      fontSize: '14px',
                      fontWeight: '600',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: 'rgba(49, 54, 52, 0.32) -2px -2px 8px 0px inset'
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
      <section style={{ backgroundColor: 'rgb(30, 41, 59)', padding: '72px 0' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2
              style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: '28px',
                fontWeight: '700',
                lineHeight: '37px',
                letterSpacing: '-0.2px',
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
              Kami mengikuti proses yang terstruktur untuk memastikan hasil terbaik
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Konsultasi", desc: "Memahami kebutuhan bisnis Anda" },
              { step: 2, title: "Perencanaan", desc: "Membuat strategi dan desain" },
              { step: 3, title: "Pengembangan", desc: "Membangun solusi teknologi" },
              { step: 4, title: "Peluncuran", desc: "Deploy dan monitoring" }
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  textAlign: 'center',
                  padding: '32px 20px',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease'
                }}
                className="hover:bg-white/10"
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: 'rgb(95, 198, 124)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '20px',
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
      <section style={{ backgroundColor: 'rgb(49, 54, 52)', padding: '72px 0' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: '28px',
              fontWeight: '700',
              lineHeight: '37px',
              letterSpacing: '-0.2px',
              color: 'rgb(255, 255, 255)',
              marginBottom: '16px'
            }}
          >
            Siap Memulai Proyek Anda?
          </h2>
          <p
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: '18px',
              color: 'rgb(229, 242, 239)',
              marginBottom: '32px',
              maxWidth: '500px',
              margin: '0 auto 32px'
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
              padding: '16px 40px',
              backgroundColor: 'rgb(95, 198, 124)',
              color: 'rgb(255, 255, 255)',
              borderRadius: '200px',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: '17.5px',
              fontWeight: '600',
              lineHeight: '26px',
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