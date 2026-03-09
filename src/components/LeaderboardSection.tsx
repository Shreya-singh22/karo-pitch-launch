import { Trophy, TrendingUp, Flame } from "lucide-react";

const leaderboard = [
  { rank: 1, name: "UrbanDairy", category: "Consumer", raised: "₹8 Cr", trend: "+24%", hot: true },
  { rank: 2, name: "CloudStack AI", category: "SaaS", raised: "₹5 Cr", trend: "+18%", hot: true },
  { rank: 3, name: "FinSetu", category: "SaaS", raised: "₹3.2 Cr", trend: "+15%", hot: false },
  { rank: 4, name: "FreshKart", category: "D2C", raised: "₹2.5 Cr", trend: "+12%", hot: false },
  { rank: 5, name: "BharatCraft", category: "Manufacturing", raised: "₹1.8 Cr", trend: "+9%", hot: false },
];

const LeaderboardSection = () => (
  <section className="py-28 bg-background">
    <div className="container">
      <div className="text-center mb-16">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Trending</p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground flex items-center justify-center gap-3">
          <Trophy className="h-10 w-10 text-primary" />
          Top Trending Startups
        </h2>
      </div>

      <div className="max-w-2xl mx-auto space-y-3">
        {leaderboard.map((s) => (
          <div
            key={s.name}
            className="flex items-center gap-4 bg-card rounded-xl p-5 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 border border-border group"
          >
            <span className={`font-heading font-bold text-2xl w-8 text-center ${s.rank <= 3 ? "text-primary" : "text-muted-foreground"}`}>
              {s.rank}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="font-heading font-bold text-foreground">{s.name}</h3>
                {s.hot && <Flame className="h-4 w-4 text-primary" />}
              </div>
              <span className="text-xs text-muted-foreground">{s.category}</span>
            </div>
            <div className="text-right">
              <p className="font-heading font-bold text-foreground">{s.raised}</p>
              <p className="text-xs text-green-600 flex items-center gap-0.5 justify-end">
                <TrendingUp className="h-3 w-3" /> {s.trend}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LeaderboardSection;
