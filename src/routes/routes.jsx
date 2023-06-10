import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../components/Home";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import ErrorPage from "../ErrorPage/ErrorPage";
import AllClasses from "../components/AllClasses";
import AllTeachers from "../components/AllTeachers";
import Dashboard from "../Layouts/Dashboard";
import AddClass from "../DashboardComponents/AddClass";
import PrivateRoute from "../SecureRoute/PrivateRoute";
import TeacherClasses from "../DashboardComponents/TeacherClasses";
import UpdateClass from "../DashboardComponents/UpdateClass";
import StudentClasses from "../DashboardComponents/StudentClasses";
import AllUsers from "../DashboardComponents/AllUsers";
import Payment from "../DashboardComponents/Payment";

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
        path: 'studentClasses',
        element: <StudentClasses></StudentClasses>
      },
      {
        path: 'payment/:id',
        element: <Payment></Payment>
      },

      // admin routes
      {
        path:'allUsers',
        element: <AllUsers></AllUsers>
      },

      // instructor routes 
      {
        path: 'allClasses',
        element: <TeacherClasses></TeacherClasses>
      },
      {
        path: 'updateClass/:id',
        element: <UpdateClass></UpdateClass>
      },
      {
        path: 'addClass',
        element: <AddClass></AddClass>
      }
    ]
  }
]);


export default router;
