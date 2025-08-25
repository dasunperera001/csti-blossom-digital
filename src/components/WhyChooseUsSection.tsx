import { CheckCircle, Award, Users, Zap, Globe, Shield } from "lucide-react";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: Award,
      title: "Proven Excellence",
      description: "Over 15 years of delivering exceptional results with 98% client satisfaction rate.",
      metric: "15+ Years"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified professionals with diverse industry experience and international qualifications.",
      metric: "50+ Experts"
    },
    {
      icon: Zap,
      title: "Innovation Focus",
      description: "Cutting-edge methodologies and digital transformation solutions for modern businesses.",
      metric: "100+ Solutions"
    },
    {
      icon: Globe,
      title: "Local Expertise",
      description: "Deep understanding of Sri Lankan market dynamics combined with global best practices.",
      metric: "500+ Clients"
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "ISO 9001:2015 certified processes ensuring consistent, high-quality service delivery.",
      metric: "ISO Certified"
    },
    {
      icon: CheckCircle,
      title: "Results Driven",
      description: "Measurable outcomes and ROI-focused approach in every project we undertake.",
      metric: "Guaranteed ROI"
    }
  ];

  const achievements = [
    "Sri Lanka's Leading Consultancy Award 2023",
    "Excellence in Training & Development 2022",
    "ISO 9001:2015 Quality Management Certification",
    "Member of International Association of Consultants"
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="gradient-text">CSTI Bureau?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            When you partner with CSTI Bureau, you're choosing a team committed to your success. 
            Here's what sets us apart in the competitive consultancy landscape.
          </p>
        </div>

        {/* Main Reasons Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={index}
                className="text-center group fade-in-up animate"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                
                <div className="text-2xl font-bold text-secondary mb-2 group-hover:scale-105 transition-transform duration-300">
                  {reason.metric}
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {reason.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Achievements Section */}
        <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 md:p-12 text-center fade-in-up animate">
          <h3 className="text-3xl font-bold text-primary-foreground mb-8">
            Recognized Excellence
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 text-primary-foreground/90"
              >
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-left">{achievement}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              "CSTI Bureau has consistently demonstrated excellence in consultancy services, 
              helping businesses across Sri Lanka achieve sustainable growth and operational efficiency."
            </p>
            <p className="text-secondary font-semibold mt-4">
              - Sri Lanka Chamber of Commerce
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;