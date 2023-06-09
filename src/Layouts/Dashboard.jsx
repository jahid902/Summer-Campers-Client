import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaHome, FaBook, FaBookMedical, FaBookOpen } from 'react-icons/fa';
import { HiUserGroup} from 'react-icons/Hi';


const Dashboard = () => {
  const { role } = useContext(AuthContext);
  

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
                <Link to="/"><FaHome size={24}></FaHome>Home</Link>
              </li>
              <li>
                <Link to="/dashboard/allClasses"><FaBook size={20}></FaBook>All Classes</Link>
              </li>
              <li>
                <Link to="/dashboard/addClass"><FaBookMedical size={20}></FaBookMedical>Add Class</Link>
              </li>
              <li>
                <Link to="/dashboard/updateClass/:id"><FaBookOpen size={20}></FaBookOpen>Update Class</Link>
              </li>
            </>
          }  
          { role === "student" &&
            <>
            <li>
              <Link to="/"><FaHome size={24}></FaHome>Home</Link>
            </li>
            <li>
              <Link to="/dashboard/studentClasses"><HiUserGroup size={24}></HiUserGroup>Student Classes</Link>
            </li>
            </>
          }
          { role === "admin" &&
            <>
            <li>
              <Link to="/"><FaHome size={24}></FaHome>Home</Link>
            </li>
            <li>
              <Link to="/dashboard/allUsers"><HiUserGroup size={24}></HiUserGroup>All User's</Link>
            </li>
            </>
          }
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
