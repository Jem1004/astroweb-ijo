import Image from 'next/image';

export default function OurService() {
  const services = [
    {
      title: "Konsultasi IT",
      description: "Buka potensi teknologi bisnis Anda dengan tim ahli kami. Kami menawarkan perencanaan strategis, penilaian teknologi, solusi kustom, manajemen vendor dan lainnya.",
      icon: "https://nore.co.id/wp-content/uploads/2024/09/landing-page-internal-7.png"
    },
    {
      title: "Aplikasi Berbasis Web",
      description: "Temukan kekuatan aplikasi berbasis web kami. Disesuaikan dengan kebutuhan bisnis Anda, solusi kami menawarkan pengalaman pengguna yang mulus, skalabilitas, efisiensi, keamanan yang kuat, dan lainnya.",
      icon: "https://nore.co.id/wp-content/uploads/2024/09/landing-page-internal-6.png"
    },
    {
      title: "Aplikasi Mobile",
      description: "Rasakan kekuatan dan kemudahan aplikasi mobile yang ramah pengguna kami. Sederhanakan hidup Anda, tetap terhubung, dan nikmati hiburan di mana pun. Dengan fitur personalisasi dan performa yang mulus.",
      icon: "https://nore.co.id/wp-content/uploads/2024/09/landing-page-internal-5.png"
    }
  ];

  return (
    <section style={{ backgroundColor: 'rgb(49, 54, 52)', padding: '72px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        {/* Section Header */}
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
            Layanan Kami
          </h2>
        </div>

        {/* Services Cards - Horizontal Layout */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: '24px',
          marginBottom: '62px'
        }}>
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'rgb(54, 109, 70)',
                borderRadius: '16px',
                padding: '32px 25px',
                boxShadow: 'rgba(255, 255, 255, 0.32) 2px 2px 8px 0px inset',
                flex: '1',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minHeight: '338.805px'
              }}
            >
              {/* Icon */}
              <div style={{
                width: '84px',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '14.4px'
              }}>
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={84}
                  height={879}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
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
                  margin: '0 0 14.4px 0'
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
                  margin: 0,
                  flex: 1
                }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div style={{ textAlign: 'center' }}>
          <a
            href="/services"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '16px 32px',
              backgroundColor: 'rgb(95, 198, 124)',
              color: 'rgb(255, 255, 255)',
              borderRadius: '200px',
              border: '2px solid rgba(255, 255, 255, 0)',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: '17.5px',
              fontWeight: '600',
              lineHeight: '26px',
              textDecoration: 'none',
              cursor: 'pointer',
              boxShadow: 'rgba(49, 54, 52, 0.32) -2px -2px 8px 0px inset',
              transition: 'all 0.3s ease'
            }}
          >
            Lihat Lebih Banyak Layanan Kami
          </a>
        </div>
      </div>
    </section>
  );
}