export default function ServiceProcess() {
  return (
    <section className="w-full py-20 px-4 md:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Work</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our streamlined process ensures efficient delivery of high-quality results for every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              number: "01",
              title: "Discovery",
              description: "We start by understanding your business goals, target audience, and project requirements."
            },
            {
              number: "02",
              title: "Planning",
              description: "Our team develops a comprehensive strategy and detailed project plan."
            },
            {
              number: "03",
              title: "Execution",
              description: "We implement the solution with a focus on quality and innovation."
            },
            {
              number: "04",
              title: "Delivery & Support",
              description: "We deliver the final product and provide ongoing maintenance and support."
            }
          ].map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card rounded-lg p-6 h-full border hover:shadow-md transition-shadow">
                <div className="text-6xl font-bold text-primary/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              
              {index < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-8 z-10">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 0L32 16L16 32L0 16L16 0Z" fill="hsl(var(--primary) / 0.2)" />
                    <path d="M12 16H20" stroke="hsl(var(--primary))" strokeWidth="2" />
                    <path d="M16 12L20 16L16 20" stroke="hsl(var(--primary))" strokeWidth="2" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}