import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react";

const CTABannerSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-light to-secondary"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="fade-in-up animate">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Ready to Transform Your Business?
          </h2>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Take the first step towards sustainable growth and operational excellence. 
            Our expert consultants are ready to help you unlock your organization's full potential.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button className="bg-secondary hover:bg-secondary-dark text-secondary-foreground font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Schedule Free Consultation
            </Button>
            
            <Button 
              variant="outline" 
              className="border-2 border-primary-foreground text-primary-foreground font-semibold px-8 py-4 rounded-lg hover:bg-primary-foreground hover:text-primary transform hover:-translate-y-1 transition-all duration-300 text-lg"
            >
              <Mail className="mr-2 h-5 w-5" />
              Request Proposal
            </Button>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-foreground/10 rounded-full mb-4 mx-auto">
                <Phone className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Call Us Today</h3>
              <p className="text-primary-foreground/80 mb-2">Get immediate assistance</p>
              <p className="text-secondary font-bold text-lg">+94 11 234 5678</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-foreground/10 rounded-full mb-4 mx-auto">
                <Mail className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Email Us</h3>
              <p className="text-primary-foreground/80 mb-2">Professional support</p>
              <p className="text-secondary font-bold text-lg">info@cstibureau.lk</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-foreground/10 rounded-full mb-4 mx-auto">
                <MessageCircle className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Live Chat</h3>
              <p className="text-primary-foreground/80 mb-2">Instant responses</p>
              <p className="text-secondary font-bold text-lg">Available 24/7</p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/80 mb-4">
              Join 500+ satisfied clients who have transformed their businesses with CSTI Bureau
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-primary-foreground/60 text-sm">
              <span>✓ Free Initial Consultation</span>
              <span>✓ Customized Solutions</span>
              <span>✓ Proven Results</span>
              <span>✓ Local Expertise</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABannerSection;