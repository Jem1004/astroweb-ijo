import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {

  const contactInfo = [
    {
      icon: '📞',
      title: 'Telepon',
      value: '+62 8215 8736 885',
      link: 'tel:+6282158736885'
    },
    {
      icon: '✉️',
      title: 'Email',
      value: 'info@astrods.id',
      link: 'mailto:info@astrods.id'
    },
    {
      icon: '📍',
      title: 'Alamat',
      value: 'Banyuasin, Sumatera Selatan, Indonesia',
      link: '#'
    },
    {
      icon: '🕐',
      title: 'Jam Operasional',
      value: 'Senin - Jumat: 09:00 - 18:00',
      link: '#'
    }
  ];

  const socialMedia = [
    {
      name: 'WhatsApp',
      icon: '💬',
      link: 'https://api.whatsapp.com/send/?phone=6282158736885&text=Hello%20Astro%20Digital%20Solution,%20I%20would%20like%20to%20get%20in%20touch',
      color: 'rgb(37, 211, 102)'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      link: '#',
      color: 'rgb(59, 130, 246)'
    },
    {
      name: 'Instagram',
      icon: '📷',
      link: '#',
      color: 'rgb(236, 72, 153)'
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
            Hubungi Kami
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
            Kami siap membantu mewujudkan solusi digital untuk kebutuhan bisnis Anda
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
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
                fontSize: '17.5px',
                fontWeight: '600',
                lineHeight: '26px',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: 'rgba(49, 54, 52, 0.32) -2px -2px 8px 0px inset'
              }}
            >
              WhatsApp Langsung
            </a>
            <a
              href="mailto:info@astrods.id"
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
              Kirim Email
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section style={{ backgroundColor: 'rgb(49, 54, 52)', padding: '72px 0' }}>
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
              Informasi Kontak
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                style={{
                  textAlign: 'center',
                  padding: '32px 20px',
                  borderRadius: '16px',
                  backgroundColor: 'rgb(54, 109, 70)',
                  boxShadow: 'rgba(255, 255, 255, 0.32) 2px 2px 8px 0px inset',
                  transition: 'all 0.3s ease'
                }}
                className="hover:shadow-xl hover:scale-105"
              >
                <div
                  style={{
                    fontSize: '48px',
                    marginBottom: '16px'
                  }}
                >
                  {info.icon}
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
                  {info.title}
                </h3>
                <a
                  href={info.link}
                  className="hover:text-green-400 transition-colors duration-300"
                  style={{
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: '16px',
                    color: 'rgb(229, 242, 239)',
                    textDecoration: 'none',
                    cursor: 'pointer'
                  }}
                >
                  {info.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Contact Us Section */}
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
              Mengapa Memilih Astro Digital Solution?
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
              Kami adalah mitra terpercaya untuk transformasi digital bisnis Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Solusi Kustom",
                description: "Kami mengembangkan solusi digital yang disesuaikan dengan kebutuhan spesifik bisnis Anda.",
                icon: "🎯"
              },
              {
                title: "Tim Ahli Berpengalaman",
                description: "Didukung oleh tim profesional yang berpengalaman dalam berbagai teknologi terkini.",
                icon: "👥"
              },
              {
                title: "Support 24/7",
                description: "Layanan dukungan teknis yang responsif untuk memastikan sistem Anda berjalan optimal.",
                icon: "🛡️"
              },
              {
                title: "Harga Kompetitif",
                description: "Solusi berkualitas tinggi dengan harga yang kompetitif dan transparan.",
                icon: "💰"
              },
              {
                title: "Proses Transparan",
                description: "Kami menjaga transparansi penuh dalam setiap tahap proyek dari awal hingga selesai.",
                icon: "🔍"
              },
              {
                title: "Garansi Kepuasan",
                description: "Kami berkomitmen untuk memberikan hasil terbaik dan memastikan kepuasan klien.",
                icon: "✨"
              }
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'rgb(54, 109, 70)',
                  borderRadius: '16px',
                  padding: '32px 25px',
                  boxShadow: 'rgba(255, 255, 255, 0.32) 2px 2px 8px 0px inset',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
                className="hover:shadow-xl hover:scale-105"
              >
                <div
                  style={{
                    fontSize: '48px',
                    marginBottom: '20px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: '21px',
                    fontWeight: '700',
                    lineHeight: '30px',
                    letterSpacing: '-0.2px',
                    color: 'rgb(255, 255, 255)',
                    marginBottom: '14.4px'
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: '15px',
                    lineHeight: '25.6px',
                    color: 'rgb(229, 242, 239)',
                    margin: 0
                  }}
                >
                  {item.description}
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
            Siap Memulai Proyek Digital Anda?
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
            Mari diskusikan bagaimana kami dapat membantu mengembangkan bisnis Anda melalui solusi digital yang inovatif
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href="https://api.whatsapp.com/send/?phone=6282158736885&text=Hello%20Astro%20Digital%20Solution,%20I%20would%20like%20to%20start%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
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
              Mulai Konsultasi
            </a>
            <a
              href="mailto:info@astrods.id"
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
              Kirim Email
            </a>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
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
            Hubungi Kami
          </h2>
          <p
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: '18px',
              color: 'rgb(156, 163, 175)',
              marginBottom: '32px'
            }}
          >
            Pilih platform yang paling nyaman untuk Anda
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '56px',
                  height: '56px',
                  backgroundColor: 'rgb(95, 198, 124)',
                  borderRadius: '50%',
                  textDecoration: 'none',
                  fontSize: '24px',
                  boxShadow: 'rgba(49, 54, 52, 0.32) -2px -2px 8px 0px inset'
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}