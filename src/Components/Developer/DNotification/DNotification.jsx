import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { HiClock } from "react-icons/hi";
import { dummyNotifications } from "../../../data/TestimonialData.js";

const DNotification = () => {
  return (
    <section className="">
      <div className="relative rounded-xl h-full p-4 w-[70%] bg-white">
        <h1 className="flex justify-between font-bold text-xl mb-4">
          Notifications
          <IoSettingsOutline className=" cursor-pointer" />
        </h1>
        <hr />
        <ul className="w-full max-h-[80vh] overflow-scroll">
          {dummyNotifications.map((notification) => (
            <div key={notification.id}>
              <li className="flex my-5">
                <img
                  src={notification.image}
                  alt={notification.name}
                  className="w-10 h-10 rounded-full mr-2"
                />
                <div>
                  <p className="font-semibold">{notification.name}</p>
                  <small className="text-xs flex">
                    <HiClock />
                    {notification.elsTime}
                  </small>
                </div>
                <button
                  type="button"
                  className="bg-customBlue px-4 py-2 font-semibold rounded-md text-white ml-auto"
                >
                  Follows you
                </button>
              </li>
              <hr className="w-full" />
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DNotification;
