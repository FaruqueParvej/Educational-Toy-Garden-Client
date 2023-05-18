import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../components/Login/Login";
import Blogs from "../components/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'blogs',
        element:<Blogs></Blogs>
      }
    ],
  },
  {
    path: "*",
    element: <p>404</p>,
  },
]);

export default router;
