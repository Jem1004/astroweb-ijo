import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center px-4 sm:px-6 lg:px-8 pt-24"
      style={{
        backgroundImage: 'url("https://nore.co.id/wp-content/uploads/2024/09/Rectangle-45.png")'
      }}
    >
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-end pb-8">
        {/* Content Section */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Nore Innovation Heading */}
          <h2
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: '28px',
              fontWeight: '800',
              lineHeight: '37px',
              letterSpacing: '-0.2px',
              color: 'rgb(95, 198, 124)'
            }}
          >
            Astro Digital Solution
          </h2>

          {/* Main Heading */}
          <h1
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: '38px',
              fontWeight: '800',
              lineHeight: '48px',
              letterSpacing: '-0.3px',
              color: 'rgb(255, 255, 255)'
            }}
          >
            Simply Better Future
          </h1>

          {/* Description */}
          <p
            className="max-w-2xl mx-auto mb-8"
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: '21px',
              fontWeight: '600',
              lineHeight: '30.45px',
              letterSpacing: '-0.1px',
              color: 'rgb(255, 255, 255)',
              marginBottom: '14.4px'
            }}
          >
  Transformasi digital bisa rumit. Kami membuatnya lebih mudah, aman, dan menyenangkan.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            {/* Schedule a Call Button - Filled */}
            <a
              href="https://api.whatsapp.com/send/?phone=6285162951515&text=Hello%20Astro%20Digital%20Solution,%20I%E2%80%99d%20like%20to%20schedule%20a%20chat%20about%20app%20development.%20Let%20me%20know%20your%20availability."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-full transition-all duration-300"
              style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: '17.5px',
                fontWeight: '600',
                lineHeight: '26px',
                color: 'rgb(255, 255, 255)',
                backgroundColor: 'rgb(95, 198, 124)',
                border: '2px solid rgba(255, 255, 255, 0)',
                borderRadius: '200px',
                boxShadow: 'rgba(49, 54, 52, 0.32) -2px -2px 8px 0px inset',
                padding: '16px 32px',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
            >
  Jadwalkan Panggilan
            </a>

            {/* Get to Know Us Button - Outline */}
            <a
              href="https://nore.co.id/about-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full transition-all duration-300"
              style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: '17.5px',
                fontWeight: '600',
                lineHeight: '30px',
                color: 'rgb(95, 198, 124)',
                backgroundColor: 'rgba(170, 201, 195, 0)',
                border: '2px solid rgb(95, 198, 124)',
                borderRadius: '200px',
                padding: '16px 32px',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
            >
  Kenali Kami Lebih Dekat
            </a>
          </div>

          {/* Bottom Image */}
          <div className="flex justify-center">
            <Image
              src="https://nore.co.id/wp-content/uploads/2024/09/image-40.png"
              alt="An image of heroes from Nore Inovasi that interprets creation of applications and website systems"
              width={828}
              height={344}
              className="max-w-full h-auto"
              priority
              style={{
                width: '828px',
                height: 'auto'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}