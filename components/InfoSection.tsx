import Image from 'next/image';

export default function InfoSection() {
  return (
    <section style={{ backgroundColor: 'rgb(49, 54, 52)', padding: '24px 0 72px 0' }}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: '28px',
              fontWeight: '700',
              lineHeight: '38px',
              letterSpacing: '-0.4px',
              color: 'rgb(255, 255, 255)',
              textAlign: 'left'
            }}
          >
            Yang Membuat Kami Berbeda
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Easy Card */}
          <div
            style={{
              backgroundColor: 'rgb(54, 109, 70)',
              borderRadius: '16px',
              padding: '32px 25px',
              boxShadow: 'rgba(255, 255, 255, 0.32) 2px 2px 8px 0px inset',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            className="hover:shadow-lg transition-all duration-300"
          >
            <div style={{ marginRight: '25px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '96px',
                  height: '100px'
                }}
              >
                <Image
                  src="https://nore.co.id/wp-content/uploads/2024/09/image-2-e1726115143670.png"
                  alt="An hourglass icon from Nore Inovasi that represents passage of time"
                  width={115}
                  height={120}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </div>

            <div>
              <h3
                style={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: '24px',
                  fontWeight: '700',
                  lineHeight: '43.2px',
                  letterSpacing: '-0.2px',
                  color: 'rgb(255, 255, 255)',
                  marginBottom: '14.4px'
                }}
              >
                Mudah
              </h3>
              <p
                style={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: '15px',
                  lineHeight: '22px',
                  color: 'rgb(229, 242, 239)',
                  margin: 0
                }}
              >
                Kami selalu peduli pada klien melalui solusi yang mudah digunakan. Bagi kami, solusi yang dapat digunakan dan praktis yang berbicara sendiri adalah yang paling penting.
              </p>
            </div>
          </div>

          {/* Innovative Card */}
          <div
            style={{
              backgroundColor: 'rgb(54, 109, 70)',
              borderRadius: '16px',
              padding: '32px 25px',
              boxShadow: 'rgba(255, 255, 255, 0.32) 2px 2px 8px 0px inset',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            className="hover:shadow-lg transition-all duration-300"
          >
            <div style={{ marginRight: '25px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '96px',
                  height: '98px'
                }}
              >
                <Image
                  src="https://nore.co.id/wp-content/uploads/2024/09/image-2-1-e1726115380782.png"
                  alt=""
                  width={120}
                  height={122}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </div>

            <div>
              <h3
                style={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: '24px',
                  fontWeight: '700',
                  lineHeight: '43.2px',
                  letterSpacing: '-0.2px',
                  color: 'rgb(255, 255, 255)',
                  marginBottom: '14.4px'
                }}
              >
                Inovatif
              </h3>
              <p
                style={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: '15px',
                  lineHeight: '22px',
                  color: 'rgb(229, 242, 239)',
                  margin: 0
                }}
              >
                Kami selalu percaya bahwa masalah adalah jendela menuju peluang baru. Konsultasikan cerita Anda dan kami akan memberikan solusi inovatif.
              </p>
            </div>
          </div>

          {/* Affordable Card */}
          <div
            style={{
              backgroundColor: 'rgb(54, 109, 70)',
              borderRadius: '16px',
              padding: '32px 25px',
              boxShadow: 'rgba(255, 255, 255, 0.32) 2px 2px 8px 0px inset',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            className="hover:shadow-lg transition-all duration-300"
          >
            <div style={{ marginRight: '25px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '96px',
                  height: '99px'
                }}
              >
                <Image
                  src="https://nore.co.id/wp-content/uploads/2024/09/image-2-2-e1726115411334.png"
                  alt=""
                  width={120}
                  height={123}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </div>

            <div>
              <h3
                style={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: '24px',
                  fontWeight: '700',
                  lineHeight: '43.2px',
                  letterSpacing: '-0.2px',
                  color: 'rgb(255, 255, 255)',
                  marginBottom: '14.4px'
                }}
              >
                Terjangkau
              </h3>
              <p
                style={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: '15px',
                  lineHeight: '22px',
                  color: 'rgb(229, 242, 239)',
                  margin: 0
                }}
              >
                Kami selalu bermimpi untuk solusi digital yang bisa dijangkau oleh semua orang. Kami selalu mencoba memberikan solusi yang sesuai dengan anggaran Anda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}