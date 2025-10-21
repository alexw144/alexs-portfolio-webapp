import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { SchoolProjects } from "./pages/SchoolProjects";
import { WorkExperience } from "./pages/WorkExperience";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/school-projects" element={<SchoolProjects />} />
        <Route path="/work-experience" element={<WorkExperience />} />
      </Routes>
    </Router>
  );
}

export default App;
