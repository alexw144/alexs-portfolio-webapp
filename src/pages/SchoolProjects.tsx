import NavItems from "../components/navbar";
import ProjectGroup from "../components/projectCard";

export function SchoolProjects() {
  return (
    <div>
      <NavItems />
      <div className="div-school-projects-page">
        <ProjectGroup />
      </div>
    </div>
  );
}
