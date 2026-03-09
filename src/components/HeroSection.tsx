import { Button } from "@/components/ui/button";
import { Play, TrendingUp, Users, Eye, FileText } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section
    className="relative min-h-screen flex items-center overflow-hidden"
    style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
  >
    <div className="absolute inset-0 bg-secondary/85" />
    <div className="relative z-10 container py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Copy */}
        <div className="text-left">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-6 animate-fade-up">
            India's Premier Startup Pitch Platform
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-secondary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Get Your Startup in Front of{" "}
            <span className="text-gradient">Investors Actively Looking to Fund.</span>
          </h1>
          <p className="text-secondary-foreground/70 text-lg md:text-xl max-w-xl mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Raise funding, connect with VCs, and showcase your startup to a curated investor network — all through one platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg" className="text-base px-8 py-6">
              Apply to Pitch
            </Button>
            <Button variant="hero-outline" size="lg" className="text-base px-8 py-6 gap-2">
              <Play className="h-4 w-4" /> Watch Demo
            </Button>
          </div>
          <div className="mt-12 flex flex-wrap gap-8 text-secondary-foreground/50 text-sm animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div><span className="text-2xl font-heading font-bold text-secondary-foreground counter" data-target="500">500+</span><br />Startups Pitched</div>
            <div><span className="text-2xl font-heading font-bold text-secondary-foreground">₹120Cr+</span><br />Funding Raised</div>
            <div><span className="text-2xl font-heading font-bold text-secondary-foreground">200+</span><br />Investors</div>
          </div>
        </div>

        {/* Right side - Dashboard Preview */}
        <div className="hidden lg:block animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <div className="space-y-4">
            {/* Startup Card Preview */}
            <div className="bg-card/10 backdrop-blur-xl border border-secondary-foreground/10 rounded-2xl p-6 hover-scale">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-primary bg-primary/20 rounded-full px-3 py-1">SaaS</span>
                <span className="text-xs text-secondary-foreground/50 bg-secondary-foreground/5 rounded-full px-3 py-1">Pre-Series A</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-secondary-foreground mb-1">CloudStack AI</h3>
              <p className="text-secondary-foreground/50 text-sm mb-4">AI-powered inventory management for MSMEs</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-secondary-foreground/40">Seeking</p>
                  <p className="font-heading font-bold text-primary">₹5 Cr</p>
                </div>
                <div className="flex gap-2">
                  <button className="text-xs text-primary border border-primary/30 rounded-lg px-3 py-1.5 hover:bg-primary/10 transition-colors flex items-center gap-1">
                    <FileText className="h-3 w-3" /> Pitch Deck
                  </button>
                  <button className="text-xs text-secondary-foreground/70 border border-secondary-foreground/20 rounded-lg px-3 py-1.5 hover:bg-secondary-foreground/5 transition-colors flex items-center gap-1">
                    <Eye className="h-3 w-3" /> View Profile
                  </button>
                </div>
              </div>
            </div>

            {/* Investor Card Preview */}
            <div className="bg-card/10 backdrop-blur-xl border border-secondary-foreground/10 rounded-2xl p-6 hover-scale">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-secondary-foreground">Blume Ventures</h3>
                  <p className="text-secondary-foreground/50 text-xs">Early Stage VC</p>
                </div>
              </div>
              <div className="flex gap-2 mb-3">
                {["SaaS", "AI", "D2C"].map(t => (
                  <span key={t} className="text-xs text-secondary-foreground/60 bg-secondary-foreground/5 rounded-full px-2.5 py-0.5">{t}</span>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-secondary-foreground/50">Ticket Size</span>
                <span className="text-secondary-foreground font-medium">₹1Cr – ₹10Cr</span>
              </div>
            </div>

            {/* Live indicator */}
            <div className="bg-card/10 backdrop-blur-xl border border-secondary-foreground/10 rounded-2xl p-4 flex items-center gap-3">
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-400 animate-ping" />
              </div>
              <div className="flex-1">
                <p className="text-secondary-foreground text-sm font-medium">Bharat Tech Pitch Day</p>
                <p className="text-secondary-foreground/50 text-xs">3 investors matched with startups today</p>
              </div>
              <TrendingUp className="h-4 w-4 text-green-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-secondary-foreground/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-2.5 rounded-full bg-primary animate-scroll-dot" />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
