import NavItems from "../components/navbar";
import AboutSect from "../components/about";
import SkillList from "../components/skills";
import ContactInfo from "../components/contact";

export function Home() {
  return (
    <div>
      <NavItems />
      <div className="div-home-page">
        <AboutSect />
        <SkillList />
        <ContactInfo />
      </div>
    </div>
  );
}
