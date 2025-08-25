import { CheckCircle, Award, Users, Zap, Globe, Shield } from "lucide-react";
import { motion } from "framer-motion";

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
            Why Choose <span className="gradient-text">CSTI Bureau?</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            When you partner with CSTI Bureau, you're choosing a team committed to your success. 
            Here's what sets us apart in the competitive consultancy landscape.
          </motion.p>
        </motion.div>

        {/* Main Reasons Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div 
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="relative inline-flex items-center justify-center w-20 h-20 mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <motion.div 
                    className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="text-2xl font-bold text-secondary mb-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  {reason.metric}
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.4, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  {reason.title}
                </motion.h3>
                
                <motion.p 
                  className="text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  {reason.description}
                </motion.p>
              </motion.div>
            );
          })}
        </div>

        {/* Achievements Section */}
        <motion.div 
          className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-3xl font-bold text-primary-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Recognized Excellence
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index}
                className="flex items-center space-x-3 text-primary-foreground/90"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-left">{achievement}</span>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-8 pt-8 border-t border-primary-foreground/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              "CSTI Bureau has consistently demonstrated excellence in consultancy services, 
              helping businesses across Sri Lanka achieve sustainable growth and operational efficiency."
            </p>
            <p className="text-secondary font-semibold mt-4">
              - Sri Lanka Chamber of Commerce
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;