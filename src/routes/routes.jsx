import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../components/Home";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import ErrorPage from "../ErrorPage/ErrorPage";
import AllClasses from "../components/AllClasses";
import AllTeachers from "../components/AllTeachers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },

      {
        path: "/SignUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/allClass",
        element: <AllClasses></AllClasses>,
      },
      {
        path: "/allTeachers",
        element: <AllTeachers></AllTeachers>,
      }
    ],
  },
]);


export default router;
