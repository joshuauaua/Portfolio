import './projectCard.css';

export default function ProjectCard({ project }) {
  if (!project) {
    return <div className="project-card">No project data provided.</div>;
  }

  const {
    title = "Untitled Project",
    tags = [],
    description = "No description available.",
    image = "",
    button = { link: "#", text: "View Project" }
  } = project;

  return (
    <div className="project-card">
      {image && <img src={image} alt={`${title} Thumbnail`} className="project-image" />}

      <div className="project-details">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>

        <div className="project-tags">
          {tags.map((tag, idx) => (
            <p className="project-tag" key={idx}>{tag}</p>
          ))}
        </div>

        <a href={button.link} className="project-button">
          {button.text}
        </a>
      </div>
    </div>
  );
}