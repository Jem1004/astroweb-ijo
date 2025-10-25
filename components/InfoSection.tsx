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
            What Makes Us Different
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
                Easy
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
                We always care for our clients through easy to use solution. For us, usable and practical solution that speaks for itself is all that matters.
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
                Innovative
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
                We always believe problems are window to new opportunities. Consult your stories and we will provide you with innovative solution.
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
                Affordable
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
                We always dream for digital solution that could be reached by everyone. We always try to provide solution suitable to your budget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}