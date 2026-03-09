import { LayoutDashboard, Search, Presentation } from "lucide-react";

const demos = [
  {
    icon: LayoutDashboard,
    title: "Founder Dashboard",
    desc: "Track your pitch applications, investor interest, and funding pipeline in one place.",
    items: ["Application status", "Investor views", "Pitch analytics", "Funding tracker"],
  },
  {
    icon: Search,
    title: "Investor Discovery",
    desc: "Browse curated investor profiles filtered by stage, sector, and ticket size.",
    items: ["Smart matching", "Sector filters", "Direct connect", "Portfolio view"],
  },
  {
    icon: Presentation,
    title: "Pitch Event Page",
    desc: "Join virtual or in-person pitch events with structured presentations and Q&A.",
    items: ["Live pitching", "Investor Q&A", "Real-time feedback", "Follow-up tools"],
  },
];

const PlatformDemoSection = () => (
  <section className="py-28 bg-hero">
    <div className="container">
      <div className="text-center mb-16">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Platform</p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-secondary-foreground">
          Inside the KaroPitch Platform
        </h2>
        <p className="text-secondary-foreground/60 text-lg mt-4 max-w-xl mx-auto">
          Everything founders and investors need, built into one seamless experience.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {demos.map(({ icon: Icon, title, desc, items }) => (
          <div key={title} className="bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-2xl p-6 hover:bg-secondary-foreground/10 transition-all duration-300 hover-scale">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-5">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-lg text-secondary-foreground mb-2">{title}</h3>
            <p className="text-secondary-foreground/60 text-sm mb-5 leading-relaxed">{desc}</p>
            <ul className="space-y-2">
              {items.map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-secondary-foreground/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PlatformDemoSection;
