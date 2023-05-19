import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../components/Login/Login";
import Blogs from "../components/Blogs";
import Register from "../components/Register";
import Details from "../components/Details";

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
        path:'register',
        element:<Register></Register>
      },
      {
        path:'blogs',
        element:<Blogs></Blogs>,
        loader: ()=>fetch("/blog.json")
      },
      {
        path:"/products/:id",
        element:<Details></Details>,
        loader: ({params})=>fetch(`http://localhost:5000/products/${params.id}`)
      }
    ],
  },
  {
    path: "*",
    element: <p>404</p>,
  },
]);

export default router;
