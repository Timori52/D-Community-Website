import React from "react";
import { Input } from "@material-tailwind/react";
import { AiOutlineSearch } from "react-icons/ai";

import { dummyNotifications } from "../../../data/TestimonialData";

const Blocking = () => {
  return (
    <section className="w-[calc(100%-14rem)] h-screen ml-auto bg-white p-3">
      <h1 className="font-bold mb-6">Blocking</h1>
      <p>
        Once you block someone, that person can no longer see things you post on
        your timeline, tag you, invite you to events or groups, start a
        conversation with you/ or add you as a friend. Note: Does not include
        apps, games or groups you both participate in.
      </p>

      <div className="mt-10 max-w-[40%]">
        <div className="w-full">
          <Input label="Type a name" icon={<AiOutlineSearch />} />
        </div>

        <h2 className="my-4 font-semibold">Blocked Users list</h2>
        <ul className="w-full max-h-[60vh] overflow-scroll">
          {dummyNotifications.map((notification) => (
            <li key={notification.id} className="flex my-5">
              <img
                src={notification.image}
                alt={notification.name}
                className="w-10 h-10 rounded-full mr-2"
              />
              <div>
                <p className="font-semibold">{notification.name}</p>
                <small className="text-xs flex">
                  Blocked - {notification.elsTime}
                </small>
              </div>
              <button
                type="button"
                className="bg-customBlue px-4 py-2 font-semibold rounded-md text-white ml-auto"
              >
                Unblock
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Blocking;
