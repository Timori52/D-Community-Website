import React from "react";

import { BiLike } from "react-icons/bi";
import { SiTinyletter } from "react-icons/si";
import {
  MdOutlineInsertComment,
  MdPersonOutline,
  MdShare,
} from "react-icons/md";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useState } from "react";

const Notifications = () => {
  const [notifications, setNotifications] = useState({
    like: true,
    comment: true,
    mention: true,
    post: false,
    share: false,
    follow: true,
  });

  function notificationHandler(e) {
    const { name, checked } = e.target;
    setNotifications({ ...notifications, [name]: checked });
  }

  console.log(notifications.follow);

  function notificationsSubmitHandler(e) {
    e.preventDefault();
  }
  return (
    <section className="w-[calc(100%-14rem)] h-screen ml-auto bg-white p-3">
      <h1 className="font-bold mb-6">Viewing and Sharing</h1>

      <p className="mb-6">What Notifications you Receive</p>

      <form onSubmit={notificationsSubmitHandler} className="w-72">
        <FormGroup>
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-2">
              <BiLike className="text-red-500" />
              <p>Like</p>
            </div>
            <FormControlLabel
              control={
                <Switch
                  defaultChecked
                  onChange={notificationHandler}
                  name="like"
                />
              }
              label=""
            />
          </div>
        </FormGroup>
        <FormGroup>
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-2">
              <MdOutlineInsertComment className="text-blue-500" />
              <p>Comment</p>
            </div>
            <FormControlLabel
              control={
                <Switch
                  defaultChecked
                  onChange={notificationHandler}
                  name="comment"
                />
              }
              label=""
            />
          </div>
        </FormGroup>
        <FormGroup>
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-2">
              <MdPersonOutline className="text-brown-500" />
              <p>Mention</p>
            </div>
            <FormControlLabel
              control={
                <Switch
                  defaultChecked
                  onChange={notificationHandler}
                  name="mention"
                />
              }
              label=""
            />
          </div>
        </FormGroup>
        <FormGroup>
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-2">
              <SiTinyletter className="text-orange-500" />
              <p>Post</p>
            </div>
            <FormControlLabel
              control={
                <Switch
                  defaultChecked
                  onChange={notificationHandler}
                  name="post"
                />
              }
              label=""
            />
          </div>
        </FormGroup>
        <FormGroup>
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-2">
              <MdShare className="text-teal-500" />
              <p>Share</p>
            </div>
            <FormControlLabel
              control={
                <Switch
                  defaultChecked
                  onChange={notificationHandler}
                  name="share"
                />
              }
              label=""
            />
          </div>
        </FormGroup>
        <FormGroup>
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-2">
              <MdPersonOutline className="text-purple-500" />
              <p>Follow</p>
            </div>
            <FormControlLabel
              control={
                <Switch
                  defaultChecked
                  onChange={notificationHandler}
                  name="follow"
                />
              }
              label=""
            />
          </div>
        </FormGroup>

        <div className="mt-8 flex justify-center">
          <button
            type="submit"
            className="px-4 py-2 font-semibold bg-customBlue rounded-md text-white"
          >
            Save
          </button>
        </div>
      </form>
    </section>
  );
};

export default Notifications;
