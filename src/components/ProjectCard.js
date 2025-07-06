const ProjectCard = ({ title, role, org, duration, overview, actions, tools }) => (
  <div className="project-card" data-aos="fade-up">
    <h3>{title}</h3>
    <p><strong>{role}</strong> — {org}</p>
    <p><strong>Duration:</strong> {duration}</p>
    <p>{overview}</p>
    <ul>
      {actions.map((a, i) => <li key={i}>✅ {a}</li>)}
    </ul>
    <p><strong>Tools:</strong> {tools.join(', ')}</p>
  </div>
);

export default ProjectCard;
