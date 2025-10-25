import Image from 'next/image';

export default function BusinessEscalation() {
  return (
    <section style={{
      backgroundColor: 'rgb(49, 54, 52)',
      padding: '72px 16px',
      position: 'relative',
      width: '100%',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '72px'
      }}>
        {/* Image Section */}
        <div style={{
          width: '100%',
          maxWidth: '855px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <Image
            src="https://nore.co.id/wp-content/uploads/2024/09/image-14.png"
            alt="Business Escalation"
            width={855}
            height={481}
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: '855px',
              display: 'inline-block',
              verticalAlign: 'middle'
            }}
          />
        </div>

        {/* Content Section */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '14.4px',
          textAlign: 'center'
        }}>
          {/* Title */}
          <h2
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: '28px',
              fontWeight: '800',
              lineHeight: '37.8px',
              letterSpacing: '-0.2px',
              color: 'rgb(255, 255, 255)',
              textAlign: 'center',
              margin: 0,
              marginBottom: '14.4px'
            }}
          >
            Escalate Your Business With Us!
          </h2>

          {/* Description */}
          <p
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: '21px',
              fontWeight: '600',
              lineHeight: '30.4px',
              letterSpacing: '-0.1px',
              color: 'rgb(229, 242, 239)',
              textAlign: 'center',
              margin: 0,
              maxWidth: '100%'
            }}
          >
            Grow your personal brand and business with our comprehensive IT service. Website, system, Android &amp; iOS app development, digital marketing and beyond
          </p>
        </div>

        {/* Button Section */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%'
        }}>
          <a
            href="https://api.whatsapp.com/send/?phone=628551170021&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '16px 32px',
              border: '2px solid rgba(255, 255, 255, 0)',
              borderRadius: '200px',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: '17.5px',
              fontWeight: '600',
              lineHeight: '26px',
              textAlign: 'center',
              color: 'rgb(255, 255, 255)',
              backgroundColor: 'rgb(95, 198, 124)',
              cursor: 'pointer',
              boxShadow: 'rgba(49, 54, 52, 0.32) -2px -2px 8px 0px inset',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
          >
            Start Now
          </a>
        </div>
      </div>
    </section>
  );
}