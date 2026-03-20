export default function Hero() {
  return (
    <section className="hero">

      <h1 className="hero-title">
        Hi, I'm <span className="accent">Timothy Maina</span>
      </h1>

      <h2 className="hero-subtitle">
        Data Analyst | Aspiring Data Scientist
      </h2>

      <p className="hero-description">
        I transform raw data into actionable insights that drive smarter business decisions.
        I specialize in analytics, statistics, and machine learning to uncover patterns,
        predict outcomes, and communicate results clearly.
      </p>

      <div className="cta-group">
        <a href="/projects" className="btn primary">View Projects</a>
        <a href="/contact" className="btn secondary">Contact Me</a>
        <a href="/resume.pdf" className="btn ghost">Download Resume</a>
      </div>

    </section>
  );
}
