import NavItems from "./components/navbar";
import AboutSect from "./components/about";
import SkillList from "./components/skills";
import ProjectOv from "./components/projects";
import ContactInfo from "./components/contact";

function App() {
  return (
    <div>
      <NavItems />
      <AboutSect />
      <SkillList />
      <ProjectOv />
      <ContactInfo />
    </div>
  );
}

export default App;
