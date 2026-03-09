import { XCircle, ArrowRight, CheckCircle2 } from "lucide-react";

const problems = [
  "Founders struggle to reach the right investors",
  "Cold emails and LinkedIn messages rarely get replies",
  "Pitch events are exclusive and hard to access",
];

const ProblemSolutionSection = () => (
  <section className="py-28 bg-background">
    <div className="container">
      <div className="text-center mb-16">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">The Problem</p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
          Fundraising in India is Broken
        </h2>
      </div>

      <div className="grid md:grid-cols-[1fr,auto,1fr] gap-8 items-center max-w-5xl mx-auto">
        {/* Problems */}
        <div className="space-y-5">
          {problems.map((p) => (
            <div key={p} className="flex items-start gap-4 bg-destructive/5 border border-destructive/10 rounded-xl p-5 hover-scale">
              <XCircle className="h-6 w-6 text-destructive shrink-0 mt-0.5" />
              <p className="text-foreground font-medium">{p}</p>
            </div>
          ))}
        </div>

        {/* Arrow */}
        <div className="hidden md:flex flex-col items-center gap-2">
          <div className="w-px h-16 bg-border" />
          <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg">
            <ArrowRight className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="w-px h-16 bg-border" />
        </div>

        {/* Solution */}
        <div className="bg-primary/5 border border-primary/15 rounded-2xl p-8">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="h-6 w-6 text-primary" />
            <span className="font-heading font-bold text-primary text-lg">The Solution</span>
          </div>
          <h3 className="font-heading font-bold text-xl text-foreground mb-3">
            KaroPitch connects founders with curated investors
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Through digital pitch events, a startup discovery platform, and a curated investor network — we make fundraising accessible for every ambitious founder in India.
          </p>
          <div className="flex gap-2 flex-wrap">
            {["Curated Events", "Investor Matching", "Pitch Training"].map(t => (
              <span key={t} className="text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProblemSolutionSection;
