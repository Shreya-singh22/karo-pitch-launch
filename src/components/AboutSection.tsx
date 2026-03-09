import { Target, Users, Lightbulb } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-24 bg-warm">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">About Karo Pitch</p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
          Bridging the Gap Between<br />Founders & Investors
        </h2>
        <p className="text-muted-foreground text-lg">
          Thousands of founders across Bharat are building amazing businesses but lack access to the right investors. 
          Karo Pitch connects these founders with investors through curated pitch events and a discovery platform — 
          making fundraising accessible for every ambitious founder in India.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: Target, title: "Our Mission", desc: "Democratize access to funding for startups across every tier of India — from metros to emerging cities." },
          { icon: Users, title: "Community First", desc: "Built by KaroStartup, a thriving community of 50,000+ founders, investors, and startup enthusiasts." },
          { icon: Lightbulb, title: "Why It Matters", desc: "India's next unicorn could come from anywhere. We ensure no great idea goes unfunded due to lack of access." },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-3">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
