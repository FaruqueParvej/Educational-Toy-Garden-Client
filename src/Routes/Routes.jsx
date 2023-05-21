import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddToys from "../Pages/AddToys/AddToys";
import AllToys from "../Pages/AllToys/AllToys";
import Home from "../Pages/Home/Home/Home";
import MyToys from "../Pages/MyToys/MyToys";
import Blogs from "../components/Blogs";
import Details from "../components/Details";
import ErrorPage from "../components/ErrorPage";
import Login from "../components/Login/Login";
import Register from "../components/Register";
import PrivateRoute from "./PrivateRoute";

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
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
        loader: () => fetch("/blog.json"),
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b7a11-toy-marketplace-server-side-faruque-parvej.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "alltoys",
        element: <AllToys></AllToys>,
      },
      {
        path: "mytoys",
        element: <MyToys></MyToys>,
      },
      {
        path: "addtoys",
        element: (
          <PrivateRoute>
            <AddToys></AddToys>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
