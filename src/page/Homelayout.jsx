import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

const Homelayout = () => {
  return (
    <div className="setup">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
``;
export default Homelayout;
