import HeaderSection from "@/components/HeaderSection";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import FeaturedProgramsSection from "@/components/FeaturedProgramsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTABannerSection from "@/components/CTABannerSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {

  return (
    <div className="min-h-screen">
      <HeaderSection />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <FeaturedProgramsSection />
      <TestimonialsSection />
      <CTABannerSection />
      <FooterSection />
    </div>
  );
};

export default Index;
