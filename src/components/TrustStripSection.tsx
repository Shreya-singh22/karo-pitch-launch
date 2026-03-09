const investors = ["Sequoia Capital", "Blume Ventures", "Kalaari Capital", "Matrix Partners", "100X.VC", "AngelList India"];

const TrustStripSection = () => (
  <section className="py-10 bg-muted/50 border-y border-border">
    <div className="container">
      <p className="text-center text-sm text-muted-foreground mb-6 tracking-wide uppercase">Trusted by investors from</p>
      <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
        {investors.map((name) => (
          <span key={name} className="font-heading font-bold text-foreground/40 text-lg hover:text-primary transition-colors duration-300 cursor-default">
            {name}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default TrustStripSection;
