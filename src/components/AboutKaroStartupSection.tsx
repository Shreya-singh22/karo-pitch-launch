import { Newspaper, Users, Globe } from "lucide-react";

const AboutKaroStartupSection = () => (
  <section className="py-24 bg-warm">
    <div className="container">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Powered By</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            About KaroStartup
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            KaroStartup is India's leading startup media platform, empowering founders with stories, resources, 
            and a vibrant community to help them build and scale their ventures.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Newspaper, stat: "10,000+", label: "Startup Stories Published" },
            { icon: Users, stat: "50,000+", label: "Founder Community" },
            { icon: Globe, stat: "100+", label: "Cities Covered" },
          ].map(({ icon: Icon, stat, label }) => (
            <div key={label} className="text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon className="h-7 w-7 text-primary" />
              </div>
              <p className="text-3xl font-heading font-bold text-foreground">{stat}</p>
              <p className="text-muted-foreground text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutKaroStartupSection;
