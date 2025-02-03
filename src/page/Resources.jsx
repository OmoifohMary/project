const Resources = () => {
  return (
    <div>
      <div className="container">
        <h2>Projects</h2>
        <div className="project">
          <h3>Project 1: Task Manager</h3>
          <p>
            A web app that helps users manage tasks with authentication and
            real-time updates.
          </p>
          <p>Tech stack: React, Node.js, MongoDB, Express</p>
          <a
            href="https://github.com/johndoe/task-manager"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </a>
        </div>
        <div className="project">
          <h3>Project 2: Portfolio Website</h3>
          <p>
            A personal portfolio website built with React to showcase my work
            and skills.
          </p>
          <p>Tech stack: React, CSS</p>
          <a
            href="https://github.com/johndoe/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resources;
