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
              About Us
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
              Nore Innovation is committed to provide the best solutions for information system, app, digital marketing, and all kinds of IT related matter. With flexible plan and price, Nore Innovation provides consultation service, digital marketing, system and mobile app development as well as system content management and maintenance. Our professional team is ready to be a part of your success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}