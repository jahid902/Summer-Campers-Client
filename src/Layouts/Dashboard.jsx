import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Dashboard = () => {
  const { user, role } = useContext(AuthContext);
  

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col p-4">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-outline btn-secondary btn-md drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <ul className="menu p-4 w-80 h-full bg-pink-200 font-semibold text-lg">
          {/* Sidebar content here */}
          {role === "instructor" && 
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/dashboard/instructorHome">teacher</Link>
              </li>
              <li>
                <Link to="/dashboard/addClass">Add Class</Link>
              </li>
            </>
          }  
          { role === "student" &&
            <>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard/studentHome">student</Link>
            </li>
            </>
          }
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
