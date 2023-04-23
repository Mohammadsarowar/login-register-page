import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../layout/AuthProvider";
const Header = () => {
  const { user,logOut} =useContext(AuthContext)
  console.log(user);
  const handelLogout = () =>{
    logOut()
    .then(()=>{})
    .catch((error)=>{
      console.error(error)
    })
  }
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label className="btn btn-ghost lg:hidden"></label>
            <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <NavLink>Home</NavLink>
              </li>
              <li tabIndex={0}>
                <NavLink to="/login" className="justify-between">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center  lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li>
              <NavLink to="/orders">Orders</NavLink>
            </li>
            { user&&<li>
              <NavLink to="/profile">Profile</NavLink>
            </li>}
          </ul>
        </div>
        {
          user ?<><span>{user.email}</span> 
           <button onClick={handelLogout} className="btn btn-xs">singOut</button></>
          :<NavLink to="/register" className="btn btn-xs">Register</NavLink>
        }
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
