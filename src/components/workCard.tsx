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
    <section>
      <div className="container-fluid">
        {data.webpages.map((webpage: Webpage) => (
          <div key={webpage.id} className="project-card">
            <h3>{webpage.title}</h3>
            <div className="project-img-container">
              <img src={webpage.image} alt={webpage.imageAlt}></img>
            </div>
            <p>{webpage.description}</p>
            <a href={webpage.webLink}>View Web Page</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkGroup;
