import Image from 'next/image';

export default function OurBrands() {
  const brands = [
    {
      title: "Nore Digital Agency",
      description: "NDA (Nore Digital Agency) is a one stop solution for digital marketing necessity. NDA provides website, company profile, branding, ads and social media contents.",
      icon: "https://nore.co.id/wp-content/uploads/2024/09/image-2-3.png",
      buttonText: "Digital Marketing",
      buttonLink: "https://nore.web.id/",
      gradient: "linear-gradient(77deg, rgb(130, 214, 178) 0%, rgb(12, 176, 107) 100%)"
    },
    {
      title: "UKM Lokal",
      description: "ULo (UKM Lokal) is a information system built to assist UMKM business. UMKM can start with free Point of Sales feature from ULo and later optimize their business using more complete versions.",
      icon: "https://nore.co.id/wp-content/uploads/2024/09/image-2-4.png",
      buttonText: "Point of Sales",
      buttonLink: "https://ukmlokal.com/",
      gradient: "linear-gradient(77deg, rgb(182, 220, 171) 0%, rgb(130, 163, 146) 100%)"
    },
    {
      title: "Hotely",
      description: "Hotely is a cloud-based Property Management System that helps property owners to manage their properties. Hotely is suitable for various kind of properties such as Hotels, Budget, Inns, Apartments, and Boarding Houses",
      icon: "https://nore.co.id/wp-content/uploads/2024/09/image-2-5.png",
      buttonText: "Property Management",
      buttonLink: "https://hotely.id/",
      gradient: "linear-gradient(77deg, rgb(100, 201, 207) 0%, rgb(47, 165, 221) 100%)"
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
              textAlign: 'center',
              margin: 0
            }}
          >
            Our Brands
          </h2>
        </div>

        {/* Brands Cards - Horizontal Layout */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: '24px'
        }}>
          {brands.map((brand, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'rgb(77, 86, 82)',
                borderRadius: '16px',
                padding: '32px 25px',
                boxShadow: 'rgba(255, 255, 255, 0.32) 2px 2px 8px 0px inset',
                flex: '1',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minHeight: '474.594px',
                justifyContent: 'flex-start'
              }}
            >
              {/* Icon */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '14.4px',
                width: '100%'
              }}>
                <Image
                  src={brand.icon}
                  alt={brand.title}
                  width={161}
                  height={160}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>

              {/* Title */}
              <div style={{ width: '100%', marginBottom: '14.4px' }}>
                <h3
                  style={{
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: '21px',
                    fontWeight: '600',
                    lineHeight: '43.2px',
                    letterSpacing: '-0.2px',
                    color: 'rgb(255, 255, 255)',
                    textAlign: 'center',
                    margin: 0
                  }}
                >
                  {brand.title}
                </h3>
              </div>

              {/* Description */}
              <div style={{ width: '100%', marginBottom: '30px', flex: 1 }}>
                <p
                  style={{
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: '15px',
                    lineHeight: '28px',
                    color: 'rgb(229, 242, 239)',
                    textAlign: 'center',
                    margin: 0
                  }}
                >
                  {brand.description}
                </p>
              </div>

              {/* Button */}
              <div style={{ width: '100%' }}>
                <a
                  href={brand.buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    width: '100%',
                    padding: '16px 20px',
                    border: '2px solid rgba(49, 54, 52, 0.32)',
                    borderRadius: '200px',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: '20px',
                    fontWeight: '600',
                    lineHeight: '30px',
                    textAlign: 'center',
                    color: 'rgb(255, 255, 255)',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    background: brand.gradient,
                    boxShadow: 'rgba(49, 54, 52, 0.32) -2px -2px 8px 0px inset',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {brand.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}