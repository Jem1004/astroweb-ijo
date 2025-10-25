import Image from 'next/image';

export default function ServicesInfo() {
  const services = [
    {
      title: "Development",
      description: "We create custom websites and applications tailored to your business needs with cutting-edge technology.",
      icon: "🚀"
    },
    {
      title: "Digital Marketing",
      description: "Strategic marketing solutions that amplify your brand and drive meaningful engagement.",
      icon: "📈"
    },
    {
      title: "Consultation",
      description: "Expert guidance to help navigate digital challenges and achieve your business goals.",
      icon: "💡"
    },
    {
      title: "System Maintenance",
      description: "Comprehensive maintenance and support to keep your systems running smoothly.",
      icon: "🔧"
    },
    {
      title: "Content Management",
      description: "Professional content strategy and management to enhance your digital presence.",
      icon: "📝"
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      icon: "📱"
    }
  ];

  return (
    <section style={{ backgroundColor: 'rgb(49, 54, 52)', padding: '72px 0' }}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: '28px',
              fontWeight: '700',
              lineHeight: '37.8px',
              letterSpacing: '-0.2px',
              color: 'rgb(255, 255, 255)',
              textAlign: 'center',
              marginBottom: '14.4px'
            }}
          >
            Our Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: 'rgb(54, 109, 70)',
                boxShadow: 'rgba(255, 255, 255, 0.32) 2px 2px 8px 0px inset'
              }}
            >
              {/* Icon */}
              <div className="text-4xl mb-4 text-center">
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className="mb-3 text-center"
                style={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: '20px',
                  fontWeight: '700',
                  lineHeight: '28px',
                  letterSpacing: '-0.1px',
                  color: 'rgb(255, 255, 255)'
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="text-center leading-relaxed"
                style={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: '15px',
                  lineHeight: '22px',
                  color: 'rgb(229, 242, 239)'
                }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="https://api.whatsapp.com/send/?phone=628551170021&text=Hello%20Nore%20Inovasi,%20I%E2%80%99d%20like%20to%20discuss%20your%20services."
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
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}