import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { authenticationSliceActions } from "../../Store/AuthenticationSlice";

import { GrCubes } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import { BiMessageAltMinus } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { MdPeopleOutline, MdOutlineLogout } from "react-icons/md";

const DNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logOutHandler() {
    dispatch(authenticationSliceActions.logOut());
    navigate("/");
  }

  return (
    <nav className="fixed left-0 top-0 w-56 h-screen overflow-hidden p-4 bg-white">
      <div className="flex items-center gap-3 ">
        <img
          src={require("../../assets/Logo.png")}
          alt="logo"
          className="w-10"
        />
        <h1 className="text-lg font-bold mt-1">D-Community</h1>
      </div>

      <ul className="mt-10">
        <li className="font-semibold rounded-xl my-1 hover:bg-blue-100">
          <NavLink to="home">
            {({ isActive }) => (
              <span
                className={`${
                  isActive ? "bg-blue-100 rounded-xl" : undefined
                } flex w-full p-4 items-center gap-3`}
              >
                <GrCubes />
                Feed
              </span>
            )}
          </NavLink>
        </li>
        <li className="font-semibold rounded-xl my-1 hover:bg-blue-100">
          <NavLink to="messages">
            {({ isActive }) => (
              <span
                className={`${
                  isActive ? "bg-blue-100 rounded-xl" : undefined
                } flex w-full p-4 items-center gap-3`}
              >
                <BiMessageAltMinus />
                Messages
              </span>
            )}
          </NavLink>
        </li>
        <li className="font-semibold rounded-xl my-1 hover:bg-blue-100">
          <NavLink to="notifications">
            {({ isActive }) => (
              <span
                className={`${
                  isActive ? "bg-blue-100 rounded-xl" : undefined
                } flex w-full p-4 items-center gap-3`}
              >
                <BiMessageAltMinus />
                Notifications
              </span>
            )}
          </NavLink>
        </li>
        <li className="font-semibold rounded-xl my-1 hover:bg-blue-100">
          <NavLink to="community">
            {({ isActive }) => (
              <span
                className={`${
                  isActive ? "bg-blue-100 rounded-xl" : undefined
                } flex w-full p-4 items-center gap-3`}
              >
                <MdPeopleOutline />
                Community
              </span>
            )}
          </NavLink>
        </li>
        <li className="font-semibold rounded-xl my-1 hover:bg-blue-100">
          <NavLink to="profile">
            {({ isActive }) => (
              <span
                className={`${
                  isActive ? "bg-blue-100 rounded-xl" : undefined
                } flex w-full p-4 items-center gap-3`}
              >
                <BsPerson />
                Profile
              </span>
            )}
          </NavLink>
        </li>
        <li className="font-semibold rounded-xl my-1 hover:bg-blue-100">
          <NavLink to="settings/editProfile">
            {({ isActive }) => (
              <span
                className={`${
                  isActive ? "bg-blue-100 rounded-xl" : undefined
                } flex w-full p-4 items-center gap-3`}
              >
                <FiSettings />
                Settings
              </span>
            )}
          </NavLink>
        </li>
        <li className="font-semibold rounded-xl my-1 hover:bg-blue-100">
          <button
            type="button"
            className="flex w-full p-4 items-center gap-3"
            onClick={logOutHandler}
          >
            <MdOutlineLogout />
            Log Out
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default DNav;
