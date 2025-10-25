export default function AboutUs() {
  return (
    <section style={{ backgroundColor: 'rgb(49, 54, 52)', padding: '72px 0' }}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Container */}
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Section Header */}
          <div style={{ marginBottom: '14.4px' }}>
            <h2
              style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: '28px',
                fontWeight: '700',
                lineHeight: '37.8px',
                letterSpacing: '-0.2px',
                color: 'rgb(255, 255, 255)',
                textAlign: 'center',
                margin: 0
              }}
            >
              Tentang Kami
            </h2>
          </div>

          {/* Content */}
          <div>
            <p
              style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: '21px',
                fontWeight: '600',
                lineHeight: '30.45px',
                letterSpacing: '-0.1px',
                color: 'rgb(229, 242, 239)',
                textAlign: 'center',
                margin: 0
              }}
            >
              Astro Digital Solution berkomitmen untuk menyediakan solusi terbaik untuk sistem informasi, aplikasi, pemasaran digital, dan semua hal terkait IT. Dengan rencana dan harga yang fleksibel, Astro Digital Solution menyediakan layanan konsultasi, pemasaran digital, pengembangan sistem dan aplikasi mobile serta manajemen konten dan pemeliharaan sistem. Tim profesional kami siap menjadi bagian dari kesuksesan Anda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}