export default function ProjectDetail({
  id,
  title,
  image,
  problem,
  tools,
  results,
  github,
  demo
}) {
  return (
    <section id={id} className="project-detail">

      <img src={image} className="project-hero" alt={title} />

      <h2>{title}</h2>

      <div className="project-grid">

        <div>
          <h4>Problem</h4>
          <p>{problem}</p>
        </div>

        <div>
          <h4>Tools</h4>
          <p>{tools}</p>
        </div>

        <div>
          <h4>Results</h4>
          <p>{results}</p>
        </div>

      </div>

      <div className="project-links">
        <a href={github} className="btn secondary">View Code</a>
        <a href={demo} className="btn primary">Live Demo</a>
      </div>

    </section>
  );
}
