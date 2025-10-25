import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from 'next/image';

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Tim Development",
      role: "Expert dalam teknologi modern",
      description: "Tim ahli dengan pengalaman dalam berbagai framework dan teknologi"
    },
    {
      name: "Tim Design",
      role: "Kreatif dan inovatif",
      description: "Desainer UI/UX yang fokus pada pengalaman pengguna yang optimal"
    },
    {
      name: "Tim Marketing",
      role: "Strategis digital marketing",
      description: "Spesialis dalam meningkatkan kehadiran digital dan brand awareness"
    },
    {
      name: "Tim Support",
      role: "Dukungan teknis 24/7",
      description: "Siap membantu mengatasi masalah teknis kapanpun dibutuhkan"
    }
  ];

  const values = [
    {
      title: "Inovasi",
      description: "Selalu mengikuti perkembangan teknologi terkini untuk memberikan solusi terbaik",
      icon: "💡"
    },
    {
      title: "Profesionalisme",
      description: "Komitmen pada kualitas, deadline, dan kepuasan klien",
      icon: "🎯"
    },
    {
      title: "Kolaborasi",
      description: "Bekerja sama sebagai mitra untuk mencapai tujuan bersama",
      icon: "🤝"
    },
    {
      title: "Transparansi",
      description: "Komunikasi yang jelas dan proses yang terbuka untuk kepercayaan",
      icon: "🔍"
    }
  ];

  const stats = [
    { number: "50+", label: "Proyek Selesai" },
    { number: "15+", label: "Klien Puas" },
    { number: "8+", label: "Tahun Pengalaman" },
    { number: "24/7", label: "Support" }
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
            Tentang Astro Digital Solution
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
            Solusi digital terpercaya untuk membantu bisnis Anda berkembang di era digital
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href="#about-content"
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
              Kenali Lebih Dekat
            </a>
            <a
              href="#contact"
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
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ backgroundColor: 'rgb(54, 109, 70)', padding: '80px 0' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: '48px',
                    fontWeight: '800',
                    color: 'rgb(255, 255, 255)',
                    marginBottom: '8px',
                    fontFamily: '"Plus Jakarta Sans", sans-serif'
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontSize: '18px',
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

      {/* Main Content Section */}
      <section id="about-content" style={{ backgroundColor: 'rgb(49, 54, 52)', padding: '80px 0' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ marginBottom: '60px' }}>
              <h2
                style={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: '32px',
                  fontWeight: '700',
                  lineHeight: '40px',
                  color: 'rgb(255, 255, 255)',
                  textAlign: 'center',
                  marginBottom: '24px'
                }}
              >
                Siapa Kami
              </h2>
              <div
                style={{
                  backgroundColor: 'rgb(54, 109, 70)',
                  borderRadius: '16px',
                  padding: '40px',
                  boxShadow: 'rgba(255, 255, 255, 0.32) 2px 2px 8px 0px inset'
                }}
              >
                <p
                  style={{
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: '18px',
                    lineHeight: '28px',
                    color: 'rgb(229, 242, 239)',
                    textAlign: 'center',
                    margin: 0
                  }}
                >
                  Astro Digital Solution adalah perusahaan teknologi yang berkomitmen untuk memberikan solusi digital inovatif kepada klien kami. Berlokasi di Banyuasin, Sumatera Selatan, kami telah membantu berbagai bisnis dalam mengembangkan sistem informasi yang berkualitas dan efisien.
                </p>
              </div>
            </div>

            <div style={{ marginBottom: '60px' }}>
              <h3
                style={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: '24px',
                  fontWeight: '600',
                  color: 'rgb(255, 255, 255)',
                  marginBottom: '20px'
                }}
              >
                Visi & Misi
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                <div
                  style={{
                    backgroundColor: 'rgb(54, 109, 70)',
                    borderRadius: '16px',
                    padding: '30px',
                    boxShadow: 'rgba(255, 255, 255, 0.32) 2px 2px 8px 0px inset'
                  }}
                >
                  <h4
                    style={{
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      fontSize: '20px',
                      fontWeight: '600',
                      color: 'rgb(95, 198, 124)',
                      marginBottom: '16px'
                    }}
                  >
                    Visi Kami
                  </h4>
                  <p
                    style={{
                      fontFamily: '"PlusJakarta Sans", sans-serif',
                      fontSize: '16px',
                      lineHeight: '24px',
                      color: 'rgb(229, 242, 239)',
                      margin: 0
                    }}
                  >
                    Menjadi mitra digital terpercaya yang membantu UMKM dan perusahaan lain dalam transformasi digital mereka menuju pertumbuhan yang berkelanjutan.
                  </p>
                </div>
                <div
                  style={{
                    backgroundColor: 'rgb(54, 109, 70)',
                    borderRadius: '16px',
                    padding: '30px',
                    boxShadow: 'rgba(255, 255, 255, 0.32) 2px 2px 8px 0px inset'
                  }}
                >
                  <h4
                    style={{
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      fontSize: '20px',
                      fontWeight: '600',
                      color: 'rgb(95, 198, 124)',
                      marginBottom: '16px'
                    }}
                  >
                    Misi Kami
                  </h4>
                  <p
                    style={{
                      fontFamily: '"PlusJakarta Sans", sans-serif',
                      fontSize: '16px',
                      lineHeight: '24px',
                      color: 'rgb(229, 242, 239)',
                      margin: 0
                    }}
                  >
                    Menyediakan solusi teknologi berkualitas dengan harga terjangkau, sambil mempertahankan profesionalisme dan kepuasan klien.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3
                style={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: '24px',
                  fontWeight: '600',
                  color: 'rgb(255, 255, 255)',
                  marginBottom: '20px'
                }}
              >
                Nilai-Nilai Kami
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: 'rgb(54, 109, 70)',
                      borderRadius: '12px',
                      padding: '24px',
                      textAlign: 'center',
                      boxShadow: 'rgba(255, 255, 255, 0.32) 2px 2px 8px 0px inset'
                    }}
                  >
                    <div
                      style={{
                        fontSize: '32px',
                        marginBottom: '12px'
                      }}
                    >
                      {value.icon}
                    </div>
                    <h4
                      style={{
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        fontSize: '18px',
                        fontWeight: '600',
                        color: 'rgb(255, 255, 255)',
                        marginBottom: '8px'
                      }}
                    >
                      {value.title}
                    </h4>
                    <p
                      style={{
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        fontSize: '14px',
                        lineHeight: '20px',
                        color: 'rgb(229, 242, 239)',
                        margin: 0
                      }}
                    >
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ backgroundColor: 'rgb(30, 41, 59)', padding: '80px 0' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2
              style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: '32px',
                fontWeight: '800',
                lineHeight: '40px',
                color: 'rgb(255, 255, 255)',
                marginBottom: '16px'
              }}
            >
              Tim Profesional Kami
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
              Tim kami terdiri dari profesional berpengalaman di bidangnya masing-masing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  padding: '30px',
                  textAlign: 'center'
                }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: 'rgb(95, 198, 124)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    fontSize: '24px',
                    color: 'white'
                  }}
                >
                  👥
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
                  {member.name}
                </h3>
                <p
                  style={{
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: '14px',
                    color: 'rgb(95, 198, 124)',
                    fontWeight: '600',
                    marginBottom: '12px'
                  }}
                >
                  {member.role}
                </p>
                <p
                  style={{
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: '14px',
                    color: 'rgb(156, 163, 175)',
                    margin: 0,
                    lineHeight: '20px'
                  }}
                >
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ backgroundColor: 'rgb(49, 54, 52)', padding: '80px 0' }}>
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
            Mari Berkolaborasi
          </h2>
          <p
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: '18px',
              color: 'rgb(229, 242, 239)',
              marginBottom: '40px'
            }}
          >
            Kami siap membantu mewujudkan solusi digital yang sesuai dengan kebutuhan bisnis Anda
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
              Hubungi via WhatsApp
            </a>
            <a
              href="mailto:info@astrods.id"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px 40px',
                backgroundColor: 'transparent',
                color: 'rgb(95, 198, 124)',
                border: '2px solid rgb(95, 198, 124)',
                borderRadius: '200px',
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: '18px',
                fontWeight: '600',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Kirim Email
            </a>
          </div>

          {/* Contact Info */}
          <div style={{ marginTop: '40px' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '40px',
              flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', color: 'rgb(229, 242, 239)' }}>
                <span style={{ marginRight: '8px', color: 'rgb(95, 198, 124)' }}>📞</span>
                <span>+62 8215 8736 885</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', color: 'rgb(229, 242, 239)' }}>
                <span style={{ marginRight: '8px', color: 'rgb(95, 198, 124)' }}>✉️</span>
                <span>info@astrods.id</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}