import React from "react";
import { NavLink } from "react-router-dom";

import { BsPerson } from "react-icons/bs";
import { TbLanguage } from "react-icons/tb";
import { CgBlock } from "react-icons/cg";
import { GrNotification, GrShieldSecurity } from "react-icons/gr";
import { RxCountdownTimer } from "react-icons/rx";
import { MdPeopleOutline } from "react-icons/md";

const DSettings = () => {
  return (
    <section className="fixed z-50 w-56 h-screen bg-white rounded-l-xl text-sm  border-gray-300 border-r-[1px] p-3">
      <nav>
        <ul>
          <li>
            <NavLink to="editProfile">
              {({ isActive }) => (
                <span
                  className={`${
                    isActive ? "font-bold" : undefined
                  } flex w-full p-3 border-b-2 items-center gap-3`}
                >
                  <BsPerson />
                  Edit Profile
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="language">
              {({ isActive }) => (
                <span
                  className={`${
                    isActive ? "font-bold" : undefined
                  } flex w-full p-3 border-b-2 items-center gap-3`}
                >
                  <TbLanguage />
                  Language
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="blocking">
              {({ isActive }) => (
                <span
                  className={`${
                    isActive ? "font-bold" : undefined
                  } flex w-full p-3 border-b-2 items-center gap-3`}
                >
                  <CgBlock />
                  Blocking
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="notifications">
              {({ isActive }) => (
                <span
                  className={`${
                    isActive ? "font-bold" : undefined
                  } flex w-full p-3 border-b-2 items-center gap-3`}
                >
                  <GrNotification />
                  Notifications
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="passwordSecurity">
              {({ isActive }) => (
                <span
                  className={`${
                    isActive ? "font-bold" : undefined
                  } flex w-full p-3 border-b-2 items-center gap-3`}
                >
                  <GrShieldSecurity />
                  Password & Security
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="activityLog">
              {({ isActive }) => (
                <span
                  className={`${
                    isActive ? "font-bold" : undefined
                  } flex w-full p-3 border-b-2 items-center gap-3`}
                >
                  <RxCountdownTimer />
                  Activity Log
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="viewingSharing">
              {({ isActive }) => (
                <span
                  className={`${
                    isActive ? "font-bold" : undefined
                  } flex w-full p-3 border-b-2 items-center gap-3`}
                >
                  <MdPeopleOutline />
                  Viewing & Sharing
                </span>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default DSettings;
