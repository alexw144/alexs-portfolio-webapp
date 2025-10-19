function ContactInfo() {
  return (
    <section className="section-contact" id="contact">
      <div className="container-fluid">
        <h2>Contact Information and Useful Links</h2>
        <ul>
          <li>Phone: 412-443-7785</li>
          <li>
            Email:{" "}
            <a className="contact-a" href="mailto:alexanderwagner144@gmail.com">
              alexanderwagner144@gmail.com
            </a>
          </li>
          <li>
            Resume:{" "}
            <a className="contact-a" href="src\assets\documents\Alexander Wagner Resume 1.pdf">
              Alexander Wagner Resume 1.pdf
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a className="contact-a" href="https://www.linkedin.com/in/alexander-m-wagner/">
              linkedin.com/in/alexander-m-wagner/
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a className="contact-a" href="https://github.com/alexw144">
              github.com/alexw144
            </a>
          </li>
          <li>
            GitLab:{" "}
            <a className="contact-a" href="https://gitlab.com/users/awagner50/projects">
              gitlab.com/awagner50
            </a>
          </li>
        </ul>
        <div className="contact-buttons">
          <a className="button-link" href="https://www.linkedin.com/in/alexander-m-wagner/">LinkedIn</a>
          <a className="button-link" href="https://github.com/alexw144">GitHub</a>
          <a className="button-link" href="https://gitlab.com/users/awagner50/projects">GitLab</a>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
