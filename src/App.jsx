import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../src/assets/css/App.css";
import {
  AboutUs,
  Login,
  Consultation,
  Homelayout,
  Home,
  Resources,
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
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
