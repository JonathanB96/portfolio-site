

const Project = ({ title, role, org, duration, overview, actions, tools }) => (
  <div className="card mb-4">
    <div className="card-body">
      <h4 className="card-title">{title}</h4>
      <h6 className="card-subtitle mb-2 text-muted">{role} — {org}</h6>
      <p className="card-text"><strong>Duration:</strong> {duration}</p>
      <p>{overview}</p>
      <ul>
        {actions.map((a, i) => <li key={i}>✅ {a}</li>)}
      </ul>
      <p><strong>Tools & Software:</strong> {tools.join(', ')}</p>
    </div>
  </div>
);

export default Project;
