import { Target, Users, Award, Globe } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: "Strategic Excellence",
      description: "Precision-driven consulting that delivers measurable results for your business growth."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Seasoned professionals with deep industry knowledge and proven track records."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "ISO-certified processes ensuring the highest standards in every engagement."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "International best practices combined with local Sri Lankan market insights."
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="gradient-text">CSTI Bureau</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For over 15 years, CSTI Bureau has been Sri Lanka's trusted partner in business transformation. 
            We bridge the gap between traditional business practices and modern innovation, helping 
            organizations unlock their full potential through strategic consultancy and comprehensive training.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="fade-in-up animate">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Empowering Sri Lankan Businesses Since 2008
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our journey began with a simple mission: to elevate Sri Lankan businesses to compete 
              on the global stage. Today, we're proud to have helped over 500 organizations across 
              diverse industries achieve sustainable growth and operational excellence.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              What sets us apart is our deep understanding of the local market combined with 
              international expertise. We don't just provide solutions; we build lasting 
              partnerships that drive continuous improvement and innovation.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-foreground">ISO 9001:2015 Certified Quality Management</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-foreground">Registered with Ministry of Education, Sri Lanka</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-foreground">Member of Sri Lanka Association of Management Consultants</span>
              </div>
            </div>
          </div>

          {/* Right Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="professional-card hover-lift fade-in-up animate"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg mb-4">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;