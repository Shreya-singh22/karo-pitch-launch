import { Rocket, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ["About", "How It Works", "Startups", "Investors", "Apply"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-secondary-foreground/10">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <Rocket className="h-6 w-6 text-primary" />
          <span className="font-heading font-bold text-lg text-secondary-foreground">
            Karo<span className="text-primary">Pitch</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/ /g, "-")}`}
              className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
            >
              {l}
            </a>
          ))}
          <Button variant="hero" size="sm">Apply to Pitch</Button>
        </div>

        <button className="md:hidden text-secondary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-secondary border-t border-secondary-foreground/10 px-6 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/ /g, "-")}`}
              className="block text-sm text-secondary-foreground/70 hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
          <Button variant="hero" size="sm" className="w-full">Apply to Pitch</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
