import { Button } from "@/components/ui/button";

const CTASection = () => (
  <section className="py-28 bg-hero relative overflow-hidden">
    {/* Decorative circles */}
    <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
    <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
    <div className="container text-center relative z-10">
      <h2 className="text-3xl md:text-5xl font-heading font-bold text-secondary-foreground mb-6">
        Ready to Raise Your First Round?
      </h2>
      <p className="text-secondary-foreground/60 text-lg max-w-xl mx-auto mb-10">
        Join 500+ founders who've pitched to India's top investors. Your next investor is one pitch away.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="hero" size="lg" className="text-base px-10 py-6">
          Apply to Pitch
        </Button>
        <Button variant="hero-outline" size="lg" className="text-base px-10 py-6">
          Explore Startups
        </Button>
        <Button variant="hero-outline" size="lg" className="text-base px-10 py-6">
          Become an Investor
        </Button>
      </div>
    </div>
  </section>
);

export default CTASection;
