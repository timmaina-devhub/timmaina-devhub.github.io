export default function ProjectCard({ title, image, link, description }) {
  return (
    <a href={link} className="card link-card">

      <img src={image} alt={title} />

      <h4>{title}</h4>
      <p>{description}</p>

    </a>
  );
}
