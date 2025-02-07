import "../assets/css/home.css";
import { useHook } from "../contexts";
const Home = () => {
  const { count, myDelete } = useHook();
  return (
    <div className="body">
      <h2>About Me</h2>
      <div className="bio">
        <img src="your-photo.jpg" alt="John Doe" className="profile-pic" />
        <p>
          Hi, I am John Doe, a passionate software engineer with a love for
          solving complex problems and creating innovative solutions. I
          specialize in full-stack development and have experience working with
          a variety of technologies.
        </p>
        <h4>{count}</h4>
        <button onClick={myDelete}>increase</button>
      </div>
    </div>
  );
};

export default Home;
