import { 
  TrendingUp, 
  Users, 
  Cog, 
  PieChart, 
  Briefcase, 
  GraduationCap,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Strategic Business Consulting",
      description: "Comprehensive business strategy development, market analysis, and growth planning to accelerate your company's success in competitive markets.",
      features: ["Market Research", "Strategic Planning", "Growth Strategy", "Competitive Analysis"]
    },
    {
      icon: Users,
      title: "Human Resource Development",
      description: "Transform your workforce with our HR consulting services, including talent management, organizational development, and performance optimization.",
      features: ["Talent Acquisition", "Performance Management", "HR Policies", "Employee Development"]
    },
    {
      icon: Cog,
      title: "Operations Excellence",
      description: "Streamline your operations with process optimization, quality management systems, and efficiency improvements for sustainable growth.",
      features: ["Process Optimization", "Quality Systems", "Lean Implementation", "Digital Transformation"]
    },
    {
      icon: PieChart,
      title: "Financial Advisory",
      description: "Expert financial consulting including budget planning, financial analysis, risk management, and investment advisory services.",
      features: ["Financial Planning", "Risk Assessment", "Investment Advisory", "Budget Management"]
    },
    {
      icon: Briefcase,
      title: "Project Management",
      description: "End-to-end project management consulting with certified methodologies to ensure successful project delivery on time and budget.",
      features: ["Project Planning", "Risk Management", "Quality Assurance", "Stakeholder Management"]
    },
    {
      icon: GraduationCap,
      title: "Professional Training",
      description: "Customized training programs designed to enhance skills, boost productivity, and develop leadership capabilities across all organizational levels.",
      features: ["Leadership Training", "Skills Development", "Certification Programs", "Corporate Workshops"]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive consultancy and training solutions designed to address every aspect of your business growth. 
            From strategic planning to operational excellence, we've got you covered.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group professional-card hover-lift fade-in-up animate"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="ghost" 
                  className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 fade-in-up animate">
          <p className="text-lg text-muted-foreground mb-6">
            Need a customized solution? Let's discuss your specific requirements.
          </p>
          <Button className="btn-hero">
            Request Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;