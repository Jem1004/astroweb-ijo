import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import ServicesInfo from "@/components/ServicesInfo";
import AboutUs from "@/components/AboutUs";
import OurService from "@/components/OurService";
import OurBrands from "@/components/OurBrands";
import ClientSection from "@/components/ClientSection";
import BusinessEscalation from "@/components/BusinessEscalation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <InfoSection />
      <ServicesInfo />
      <AboutUs />
      {/* <OurService /> */}
      <OurBrands />
      <ClientSection />
      <BusinessEscalation />
      <Footer />
    </div>
  );
}

