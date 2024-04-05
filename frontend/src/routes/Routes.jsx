import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../components/Auth/Login/Login";
import Signup from "../components/Auth/Signup/Signup";

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
    ],
  },
]);

export default router;
