import { ShoppingBag, Monitor, Factory, Code, Cpu, MapPin } from "lucide-react";

const categories = [
  { icon: ShoppingBag, label: "D2C Brands" },
  { icon: Monitor, label: "Consumer Startups" },
  { icon: Factory, label: "MSMEs" },
  { icon: Code, label: "SaaS Startups" },
  { icon: Cpu, label: "Manufacturing" },
  { icon: MapPin, label: "Bharat-focused Startups" },
];

const WhoCanApplySection = () => (
  <section className="py-24 bg-warm">
    <div className="container">
      <div className="text-center mb-16">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Who Can Apply</p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
          Built for Founders Across Bharat
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {categories.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="bg-card rounded-xl p-6 text-center shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 cursor-default"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <p className="font-heading font-medium text-foreground text-sm">{label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhoCanApplySection;
