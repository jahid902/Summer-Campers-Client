import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../components/Home";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import ErrorPage from "../ErrorPage/ErrorPage";
import AllClasses from "../components/AllClasses";
import AllTeachers from "../components/AllTeachers";
import Dashboard from "../Layouts/Dashboard";
import StudentHome from "../DashboardComponents/StudentHome";
import AddClass from "../DashboardComponents/AddClass";
import PrivateRoute from "../SecureRoute/PrivateRoute";
import TeacherClasses from "../DashboardComponents/TeacherClasses";

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

  {
    path : 'dashboard',
    element : <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children : [

      // student routes
      {
        path: 'studentHome',
        element: <StudentHome></StudentHome>
      },

      // instructor routes 
      {
        path: 'allClasses',
        element: <TeacherClasses></TeacherClasses>
      },
      {
        path: 'addClass',
        element: <AddClass></AddClass>
      }
    ]
  }
]);


export default router;
