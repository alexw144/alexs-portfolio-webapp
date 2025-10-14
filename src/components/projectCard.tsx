import data from "../schoolProjects.json";

interface Project {
  id: number;
  title: string;
  codeLink: string;
  description: string;
  stack: string[];
  image: string;
  imageAlt: string;
}

function ProjectGroup() {
  console.log(data);
  return (
    <section className="section-projects">
      <div className="container-fluid">
        <h1>School Projects</h1>
        {data.projects.map((project: Project) => (
          <div key={project.id} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="project-img-container">
              <img src={project.image} alt={project.imageAlt}></img>
            </div>
            <h3 className="h3-project-stack">Project Stack</h3>
            <a className="button-link" href={project.codeLink}>View Code</a>
            <ul className="ul-project-stack">
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectGroup;
