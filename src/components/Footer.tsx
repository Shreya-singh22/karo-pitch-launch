import { Rocket } from "lucide-react";

const footerLinks = {
  Product: ["Startups", "Investors", "Pitch Events", "Leaderboard"],
  Resources: ["Pitch Deck Guide", "Founder Stories", "Blog", "FAQs"],
  Company: ["About", "Contact", "Careers", "Press"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const Footer = () => (
  <footer className="bg-secondary pt-16 pb-8 border-t border-secondary-foreground/10">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <Rocket className="h-5 w-5 text-primary" />
            <span className="font-heading font-bold text-secondary-foreground">
              Karo<span className="text-primary">Pitch</span>
            </span>
          </div>
          <p className="text-secondary-foreground/40 text-sm leading-relaxed mb-6">
            Helping founders across India raise capital faster.
          </p>
          {/* Social icons */}
          <div className="flex gap-3">
            {["𝕏", "in", "📧", "▶"].map((icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-lg bg-secondary-foreground/5 border border-secondary-foreground/10 flex items-center justify-center text-secondary-foreground/50 hover:text-primary hover:border-primary/30 transition-colors text-xs"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-heading font-semibold text-secondary-foreground text-sm mb-4">{title}</h4>
            <ul className="space-y-2.5">
              {links.map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-secondary-foreground/40 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-secondary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-secondary-foreground/30">
          © 2026 KaroStartup. All rights reserved.
        </p>
        <p className="text-xs text-secondary-foreground/30">
          Made with ❤️ for founders across Bharat
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
