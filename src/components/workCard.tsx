import data from "../workProjects.json";

interface Webpage {
  id: number;
  title: string;
  webLink: string;
  description: string;
  image: string;
  imageAlt: string;
}

function WorkGroup() {
  console.log(data);
  return (
    <section className="section-work">
      <div className="container-fluid">
        <h1>Carlow University - Web Developer Intern</h1>
        {data.webpages.map((webpage: Webpage) => (
          <div key={webpage.id} className="project-card">
            <h2>{webpage.title}</h2>
            <div className="project-img-container">
              <img src={webpage.image} alt={webpage.imageAlt}></img>
            </div>
            <p className="p-webpage-description">{webpage.description}</p>
            <a className="button-link" href={webpage.webLink}>View Web Page</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkGroup;
