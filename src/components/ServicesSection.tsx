import { 
  TrendingUp, 
  Users, 
  Cog, 
  PieChart, 
  Briefcase, 
  GraduationCap,
  ArrowRight 
} from "lucide-react";
import { motion } from "framer-motion";
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
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Our <span className="gradient-text">Services</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Comprehensive consultancy and training solutions designed to address every aspect of your business growth. 
            From strategic planning to operational excellence, we've got you covered.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                className="group professional-card hover-lift"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className="h-8 w-8 text-primary-foreground" />
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  {service.title}
                </motion.h3>
                
                <motion.p 
                  className="text-muted-foreground mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  {service.description}
                </motion.p>

                <motion.div 
                  className="space-y-2 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  {service.features.map((feature, featureIndex) => (
                    <motion.div 
                      key={featureIndex} 
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.8 + featureIndex * 0.05, ease: "easeOut" }}
                      viewport={{ once: true }}
                    >
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 1.0, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-lg text-muted-foreground mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Need a customized solution? Let's discuss your specific requirements.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Button className="btn-hero">
              Request Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;