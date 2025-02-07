import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../src/assets/css/App.css";
import {
  AboutUs,
  Login,
  Consultation,
  Homelayout,
  Home,
  Resources,
  Github,
  Mygithub,
} from "./page";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "Login",
        element: <Login />,
      },
      {
        path: "Mygithub",
        element: <Mygithub />,
      },
      {
        path: "AboutUs",
        element: <AboutUs />,
      },

      {
        path: "Consultation",
        element: <Consultation />,
      },

      {
        path: "Resources",
        element: <Resources />,
      },
      {
        path: "Github",
        element: <Github />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
