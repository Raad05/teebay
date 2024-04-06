import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../components/Auth/Login/Login";
import Signup from "../components/Auth/Signup/Signup";
import AllProducts from "../components/AllProducts/AllProducts";
import MyProducts from "../components/MyProducts/MyProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/products",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "/my-products",
        element: <MyProducts></MyProducts>,
      },
    ],
  },
]);

export default router;