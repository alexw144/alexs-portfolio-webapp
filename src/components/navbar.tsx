import LinkedInIcon from "../assets/icons/LI-In-Bug.png";
import GitHubIcon from "../assets/icons/github-mark.png";
import GitLabIcon from "../assets/icons/gitlab-logo-500.png";
import { Link } from "react-router-dom";

function NavItems() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-field">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <Link className="navbar-brand" to="/school-projects">
          School Projects
        </Link>
        <Link className="navbar-brand" to="/work-experience">
          Work Experience
        </Link>
      </div>
      <div className="container-field">
        <a
          className="navbar-brand"
          href="https://www.linkedin.com/in/alexander-m-wagner/"
        >
          <img
            src={LinkedInIcon}
            alt="Alex's Linkedin profile page"
            className="nav-icon"
          ></img>
        </a>
        <a className="navbar-brand" href="https://github.com/alexw144">
          <img
            src={GitHubIcon}
            alt="Alex's GitHub profile and projects"
            className="nav-icon"
          ></img>
        </a>
        <a
          className="navbar-brand"
          href="https://gitlab.com/users/awagner50/projects"
        >
          <img
            src={GitLabIcon}
            alt="Alex's GitLab profile and projects"
            className="nav-icon"
          ></img>
        </a>
      </div>
    </nav>
  );
}

export default NavItems;
