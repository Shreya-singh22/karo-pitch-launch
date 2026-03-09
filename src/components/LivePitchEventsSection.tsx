import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    title: "Bharat Tech Pitch Day",
    date: "24 March 2026",
    location: "Virtual",
    spots: 12,
    investors: ["Blume Ventures", "100X.VC", "Kalaari Capital"],
    tag: "Upcoming",
  },
  {
    title: "D2C Founders Summit",
    date: "10 April 2026",
    location: "Mumbai",
    spots: 8,
    investors: ["Sequoia Capital", "Matrix Partners"],
    tag: "Open for Applications",
  },
  {
    title: "SaaS India Pitch Night",
    date: "28 April 2026",
    location: "Bangalore",
    spots: 15,
    investors: ["AngelList India", "Indian Angel Network", "100X.VC"],
    tag: "Coming Soon",
  },
];

const LivePitchEventsSection = () => (
  <section className="py-28 bg-warm">
    <div className="container">
      <div className="text-center mb-16">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Events</p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
          Upcoming Pitch Events
        </h2>
        <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
          Pitch your startup at our curated events and meet investors face-to-face.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {events.map((e) => (
          <div key={e.title} className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 border border-border group">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1">{e.tag}</span>
              <span className="text-xs text-muted-foreground">{e.spots} spots left</span>
            </div>
            <h3 className="font-heading font-bold text-lg text-foreground mb-3">{e.title}</h3>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 text-primary" />
                <span>{e.date}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{e.location}</span>
              </div>
            </div>
            <div className="pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                <Users className="h-3.5 w-3.5" /> Investors Attending
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                {e.investors.map(inv => (
                  <span key={inv} className="text-xs text-foreground/70 bg-muted rounded-full px-2 py-0.5">{inv}</span>
                ))}
              </div>
              <Button variant="default" size="sm" className="w-full group-hover:bg-primary transition-colors gap-1">
                Apply to Pitch <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LivePitchEventsSection;
