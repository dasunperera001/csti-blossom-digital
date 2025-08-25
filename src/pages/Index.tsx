import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import FeaturedProgramsSection from "@/components/FeaturedProgramsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTABannerSection from "@/components/CTABannerSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  useEffect(() => {
    // Enhanced Intersection Observer for smooth scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add staggered animation delay for grouped elements
          const delay = index * 100;
          setTimeout(() => {
            entry.target.classList.add('animate');
          }, delay);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    });

    // Observe all animated elements with different animation classes
    const animationClasses = [
      '.fade-in-up',
      '.fade-in-left', 
      '.fade-in-right',
      '.fade-in',
      '.scale-in'
    ];
    
    animationClasses.forEach(className => {
      const elements = document.querySelectorAll(className);
      elements.forEach((el, index) => {
        // Add staggered delays to elements in the same section
        if (index > 0 && el instanceof HTMLElement) {
          el.style.transitionDelay = `${index * 150}ms`;
        }
        observer.observe(el);
      });
    });

    // Add smooth scroll behavior enhancement
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1);
        const targetElement = targetId ? document.getElementById(targetId) : null;
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    return () => {
      observer.disconnect();
      smoothScrollLinks.forEach(link => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
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
