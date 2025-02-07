import { NavLink } from "react-router-dom";
import "../assets/css/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <h1>Logo</h1>
      </div>
      <NavLink className="navbar " to="/">
        Home
      </NavLink>
      <NavLink className="navbar" to="Login">
        Login
      </NavLink>
      <NavLink className="navbar" to="AboutUs">
        AboutUs
      </NavLink>
      <NavLink className="navbar" to="Consultation">
        Consultation
      </NavLink>
      <NavLink className="navbar" to="Resources">
        Resources
      </NavLink>
      <NavLink className="navbar" to="Github">
        Github User
      </NavLink>
      <NavLink className="navbar" to="Mygithub">
        MyGithub
      </NavLink>
      <myHook />
    </div>
  );
};

export default Navbar;
