import data from "../schoolProjects.json";

interface Project {
  id: number;
  title: string;
  codeLink: string;
  description: string;
  stack: string[];
  image: string;
}

function ProjectGroup() {
  console.log(data);
  return (
    <section>
      <div className="container-fluid">
        {data.projects.map((project: Project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-img-container">
              <img
                src={project.image}
                alt="Top of the dutch bicycle website homepage. Shows the navbar, featured image, and featured bikes."
              ></img>
            </div>
            <a href={project.codeLink}>View Code</a>
            <ul>
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
