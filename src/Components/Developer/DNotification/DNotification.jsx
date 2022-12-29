
import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { dummyNotifications } from "../../../data/TestimonialData.js";

const DNotification = () => {
  return (
    <>
      <section className="  flex flex-col relative rounded-3xl mt-2.5 border-gray-100 max-h-full border-[20px] align-center p-[2rem] ">
        <span className="flex flex-row gap-[44rem] font-bold text-2xl">
          Notifications
          <IoSettingsOutline
            className="w-8 h-8 mb-3   cursor-pointer"
          />
        </span>
        <hr />
        <div className="flex flex-col divide-gray-400 divide-y ">
          {dummyNotifications.map((data) => (
            <>
              <div
                className="align-center space-x-6 m-[3px]  flex items-center  py-3 "

                key={data.id}
              >
                <img
                  src={data.image}
                  alt=""
                  className="h-[44px] w-[44px] rounded-full"
                />
                <div className="flex-col flex ">
                  <span className=" text-gray-900 font-semibold hover:underline cursor-pointer  mb-3">
                    {data.name}{" "}
                  </span>
                  <span class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
                    <svg
                      aria-hidden="true"
                      class="mr-1 w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    {data.elsTime}
                  </span>
                  
                </div> 
                <span style={{display: "flex", marginLeft: "auto"}} className="">
                <button type="button" class="text-white rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2">Follow Back</button>              </span></div>
            </>
          ))}
        </div>

      </section>
    </>
  );
};

export default DNotification;