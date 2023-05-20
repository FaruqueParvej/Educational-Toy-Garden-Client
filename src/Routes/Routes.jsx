import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../components/Login/Login";
import Blogs from "../components/Blogs";
import Register from "../components/Register";
import Details from "../components/Details";
import AllToys from "../Pages/AllToys/AllToys";
import AddToys from "../Pages/AddToys/AddToys";
import MyToys from "../Pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../components/ErrorPage";

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
        element:<PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params})=>fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path:"alltoys",
        element:<AllToys></AllToys>
      },
      {
        path:"mytoys",
        element:<MyToys></MyToys>
      },
      {
        path:"addtoys",
        element:<PrivateRoute><AddToys></AddToys></PrivateRoute>
      }
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
