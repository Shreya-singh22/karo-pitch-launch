import { Building2 } from "lucide-react";

const investors = [
  "Sequoia Capital", "Blume Ventures", "Nexus Venture Partners",
  "Kalaari Capital", "100X.VC", "AngelList India",
  "Indian Angel Network", "Matrix Partners",
];

const InvestorsSection = () => (
  <section id="investors" className="py-28 bg-hero">
    <div className="container text-center">
      <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Investors</p>
      <h2 className="text-3xl md:text-5xl font-heading font-bold text-secondary-foreground mb-4">
        Meet Investors Actively Looking<br />to Fund the Next Big Idea.
      </h2>
      <p className="text-secondary-foreground/60 text-lg max-w-xl mx-auto mb-12">
        Top VCs, angel investors, and family offices attend KaroPitch events to discover high-potential startups.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
        {investors.map((name) => (
          <div
            key={name}
            className="bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-xl p-5 flex items-center gap-3 hover:bg-secondary-foreground/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
          >
            <Building2 className="h-5 w-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
            <span className="text-secondary-foreground text-sm font-medium">{name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default InvestorsSection;
