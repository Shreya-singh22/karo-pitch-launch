import { FileText, CheckCircle, Presentation, TrendingUp } from "lucide-react";

const steps = [
  { icon: FileText, title: "Apply with Your Pitch Deck", desc: "Submit your startup details and pitch deck through our simple application form." },
  { icon: CheckCircle, title: "Get Shortlisted", desc: "Our team curates the best startups for each cohort based on potential and readiness." },
  { icon: Presentation, title: "Pitch Live to Investors", desc: "Present your startup to a panel of top investors in a structured pitch event." },
  { icon: TrendingUp, title: "Raise Funding & Scale", desc: "Connect with interested investors, close your round, and scale your business." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-28 bg-background">
    <div className="container">
      <div className="text-center mb-16">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">How It Works</p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
          Four Steps to Funding
        </h2>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

        <div className="space-y-12 md:space-y-0">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`relative md:grid md:grid-cols-2 md:gap-12 ${i > 0 ? "md:mt-16" : ""}`}
            >
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 z-10 w-12 h-12 rounded-full bg-primary items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-heading font-bold text-lg">{i + 1}</span>
              </div>

              {/* Content - alternating sides */}
              <div className={`${i % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}`}>
                <div className={`bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 border border-border group`}>
                  <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shrink-0">
                      <Icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-heading font-semibold text-foreground">{title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              </div>

              {/* Empty column for alternating layout */}
              {i % 2 !== 0 && <div className="hidden md:block md:col-start-1 md:row-start-1" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
