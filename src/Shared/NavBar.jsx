import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [show, setShow] = useState(false);

  const handleLogout = () => {
    logOut()
    .then(result=>{
      const data = result;
    })
    .catch(error=>{
      console.log(error.message);
    })
  }

  const navLinks = (
    <>
      <li>
        <Link className="font-semibold text-base" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="font-semibold text-base" to="/allTeachers">
          Instructors
        </Link>
      </li>
      <li>
        <Link className="font-semibold text-base" to="/allClass">
          Classes
        </Link>
      </li>
      {user && (
        <li>
          <Link className="font-semibold text-base" to="/dashboard">
            Dashboard{" "}
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-pink-200 w-full md:w-11/12 mx-auto md:px-6 rounded-md">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex md:gap-1 items-center">
          <p className="normal-case text-lg font-bold">Summer Campers</p>
          <img src="/tent (1).png" className="w-10 h-10" alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
          <button onClick={handleLogout} className="btn btn-secondary btn-sm mr-3">Log Out</button>
            <div onMouseEnter={()=>setShow(!show)} className="flex flex-col items-center">
            <img
              className="w-8 h-8 cursor-pointer rounded-full"
              src={user?.photoUrl}
              alt=""
            />
            {show && <span className="text-xs">{user.email}</span>}
            </div>
          </>
        ) : (
          <Link to="/signIn">
            {" "}
            <button className="btn btn-secondary">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
