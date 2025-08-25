import { Button } from "@/components/ui/button";
import { Clock, Users, Star, ArrowRight, BookOpen, Award } from "lucide-react";

const FeaturedProgramsSection = () => {
  const programs = [
    {
      title: "Strategic Leadership Development",
      category: "Leadership",
      duration: "6 Weeks",
      participants: "25 Students",
      rating: 4.9,
      price: "LKR 85,000",
      description: "Comprehensive leadership training program designed for senior executives and emerging leaders. Master strategic thinking, decision-making, and team management skills.",
      features: ["Strategic Planning", "Team Leadership", "Decision Making", "Change Management"],
      level: "Advanced",
      format: "Hybrid"
    },
    {
      title: "Digital Transformation Masterclass",
      category: "Technology",
      duration: "4 Weeks",
      participants: "30 Students",
      rating: 4.8,
      price: "LKR 65,000",
      description: "Learn how to lead digital transformation initiatives in your organization. Covers digital strategy, technology adoption, and change management.",
      features: ["Digital Strategy", "Technology Integration", "Process Automation", "Digital Culture"],
      level: "Intermediate",
      format: "Online"
    },
    {
      title: "Financial Management for Non-Finance Managers",
      category: "Finance",
      duration: "3 Weeks",
      participants: "20 Students",
      rating: 4.7,
      price: "LKR 45,000",
      description: "Essential financial knowledge for managers who need to understand financial statements, budgeting, and financial decision-making processes.",
      features: ["Financial Analysis", "Budget Planning", "Cost Management", "ROI Analysis"],
      level: "Beginner",
      format: "In-Person"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured <span className="gradient-text">Training Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Accelerate your career and transform your organization with our carefully curated training programs. 
            Designed by industry experts and delivered by experienced professionals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="group professional-card hover-lift fade-in-up animate relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge for first program */}
              {index === 0 && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-secondary to-secondary-light text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  Most Popular
                </div>
              )}

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-secondary bg-secondary/10 px-2 py-1 rounded-full">
                    {program.category}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                    {program.level}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {program.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {program.description}
                </p>
              </div>

              {/* Program Details */}
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-secondary" />
                  <span className="text-muted-foreground">{program.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-secondary" />
                  <span className="text-muted-foreground">{program.participants}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-secondary" />
                  <span className="text-muted-foreground">{program.rating} Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-4 w-4 text-secondary" />
                  <span className="text-muted-foreground">{program.format}</span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-2">Key Topics:</h4>
                <div className="grid grid-cols-2 gap-1">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-1">
                      <div className="w-1 h-1 bg-secondary rounded-full"></div>
                      <span className="text-xs text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price and CTA */}
              <div className="border-t pt-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xs text-muted-foreground">Starting from</span>
                    <div className="text-xl font-bold text-foreground">{program.price}</div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Award className="h-4 w-4 text-secondary" />
                    <span className="text-xs text-muted-foreground">Certificate</span>
                  </div>
                </div>
                
                <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  Enroll Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Program Categories */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 text-center fade-in-up animate">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            More Training Categories
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Explore our comprehensive range of professional development programs across various domains.
          </p>
          
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 mb-8">
            {[
              "Project Management",
              "Quality Management", 
              "Human Resources",
              "Marketing & Sales",
              "Operations Excellence",
              "Information Technology",
              "Entrepreneurship",
              "Public Speaking"
            ].map((category, index) => (
              <div 
                key={index}
                className="bg-background rounded-lg p-4 hover:shadow-md transition-shadow duration-300 cursor-pointer"
              >
                <span className="text-sm font-medium text-foreground">{category}</span>
              </div>
            ))}
          </div>

          <Button className="btn-hero">
            View All Programs
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProgramsSection;