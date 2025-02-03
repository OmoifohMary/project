import "../assets/css/aboutUs.css";

const AboutUs = () => {
  return (
    <div className="myAbout">
      <div>
        <h2>About Me</h2>
        <p>
          Hi, I’m John Doe, a Junior Software Developer with a passion for
          learning new technologies and building creative software solutions. I
          specialize in front-end development and have a growing interest in
          full-stack development. I am eager to collaborate with other
          developers and continuously improve my skills.
        </p>
      </div>
      <section id="skills" className="skills">
        <div className="container">
          <h2>Skills</h2>
          <ul>
            <li>HTML5, CSS3, JavaScript</li>
            <li>React.js</li>
            <li>Git & GitHub</li>
            <li>Node.js (Basic)</li>
            <li>RESTful APIs</li>
            <li>Responsive Web Design</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
