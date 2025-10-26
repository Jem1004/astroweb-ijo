import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8" style={{ paddingTop: '100px' }}>
      {/* Background Image - Optimized with Next.js Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Rectangle-45.png"
          alt="Hero background - Digital transformation solution"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={75}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30 z-10" />
      </div>
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-end pb-8 relative z-20">
        {/* Content Section */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Astro Digital Solution Heading */}
          <h2 className="text-[28px] font-extrabold leading-[37px] tracking-[-0.2px] text-green-400" style={{ color: 'rgb(95, 198, 124)' }}>
            Astro Digital Solution
          </h2>

          {/* Main Heading */}
          <h1 className="text-[38px] font-extrabold leading-[48px] tracking-[-0.3px] text-white">
            Simply Better Future
          </h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto mb-[14.4px] text-[21px] font-semibold leading-[30.45px] tracking-[-0.1px] text-white">
  Transformasi digital bisa rumit. Kami membuatnya lebih mudah, aman, dan menyenangkan.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            {/* Schedule a Call Button - Filled */}
            <a
              href="https://api.whatsapp.com/send/?phone=6282158736885&text=Hello%20Astro%20Digital%20Solution,%20I%E2%80%99d%20like%20to%20schedule%20a%20chat%20about%20app%20development.%20Let%20me%20know%20your%20availability."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-[17.5px] font-semibold leading-[26px] text-white border-2 border-transparent rounded-[200px] shadow-[inset_-2px_-2px_8px_0px_rgba(49,54,52,0.32)] no-underline cursor-pointer transition-all duration-300 hover:shadow-[inset_-2px_-2px_12px_0px_rgba(49,54,52,0.4)] group"
              style={{
                backgroundColor: 'rgb(95, 198, 124)',
              }}
            >
              Jadwalkan Panggilan
            </a>

            {/* Get to Know Us Button - Outline */}
            <a
              href="#about-us"
              className="inline-flex items-center justify-center px-8 py-4 text-[17.5px] font-semibold leading-[30px] bg-transparent border-2 rounded-[200px] no-underline cursor-pointer transition-all duration-300 hover:bg-green-50/10 hover:border-green-500 hover:text-green-500"
              style={{
                color: 'rgb(95, 198, 124)',
                borderColor: 'rgb(95, 198, 124)',
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