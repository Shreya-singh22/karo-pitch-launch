import { Eye, Users } from "lucide-react";

const startups = [
  { name: "FreshKart", category: "D2C", tagline: "Farm-to-door organic groceries across Tier 2 India", raised: "₹2.5 Cr", stage: "Seed", investor: "Blume Ventures", initials: "FK", color: "bg-green-500/20 text-green-600" },
  { name: "CloudStack AI", category: "SaaS", tagline: "AI-powered inventory management for MSMEs", raised: "₹5 Cr", stage: "Pre-Series A", investor: "Sequoia Capital", initials: "CA", color: "bg-blue-500/20 text-blue-600" },
  { name: "BharatCraft", category: "Manufacturing", tagline: "Connecting artisan manufacturers with global buyers", raised: "₹1.8 Cr", stage: "Seed", investor: "100X.VC", initials: "BC", color: "bg-amber-500/20 text-amber-600" },
  { name: "UrbanDairy", category: "Consumer", tagline: "Subscription-based fresh dairy in 20+ cities", raised: "₹8 Cr", stage: "Series A", investor: "Matrix Partners", initials: "UD", color: "bg-purple-500/20 text-purple-600" },
  { name: "FinSetu", category: "SaaS", tagline: "Digital lending infrastructure for rural NBFCs", raised: "₹3.2 Cr", stage: "Seed", investor: "Kalaari Capital", initials: "FS", color: "bg-cyan-500/20 text-cyan-600" },
  { name: "PackRight", category: "D2C", tagline: "Sustainable packaging solutions for e-commerce brands", raised: "₹1.5 Cr", stage: "Pre-Seed", investor: "AngelList India", initials: "PR", color: "bg-rose-500/20 text-rose-600" },
];

const FeaturedStartupsSection = () => (
  <section id="startups" className="py-28 bg-background">
    <div className="container">
      <div className="text-center mb-16">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Featured Startups</p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
          Startups That Pitched & Raised
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {startups.map((s) => (
          <div
            key={s.name}
            className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 border border-border group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-11 h-11 rounded-xl ${s.color} flex items-center justify-center font-heading font-bold text-sm`}>
                {s.initials}
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-bold text-foreground">{s.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-primary bg-primary/10 rounded-full px-2 py-0.5">{s.category}</span>
                  <span className="text-xs text-muted-foreground">{s.stage}</span>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{s.tagline}</p>
            <div className="flex items-center gap-2 mb-4">
              <Users className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Backed by <span className="text-foreground font-medium">{s.investor}</span></span>
            </div>
            <div className="pt-4 border-t border-border flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Raised</p>
                <p className="font-heading font-bold text-primary text-lg">{s.raised}</p>
              </div>
              <button className="text-xs text-primary border border-primary/20 rounded-lg px-3 py-1.5 hover:bg-primary/10 transition-colors flex items-center gap-1 opacity-0 group-hover:opacity-100">
                <Eye className="h-3 w-3" /> View Pitch
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedStartupsSection;
