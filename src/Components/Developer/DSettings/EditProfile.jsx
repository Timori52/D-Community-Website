import React, { useState } from "react";
import { Input, Radio, Select, Option } from "@material-tailwind/react";

import UploadProfileAvatar from "../../../assets/uploadProfileAvatar.gif";

const EditProfile = () => {
  const [summary, setSummary] = useState({
    name: "",
    dob: "",
    gender: "",
    email: "",
    phoneNo: "",
    availability: "",
  });

  function inputChangeHandler(e) {
    const { name, value } = e.target;
    setSummary({ ...summary, [name]: value });
    console.log(summary);
  }

  function testchange(e) {
    console.log(e.target.value);
  }

  return (
    <section className="w-[calc(100%-14rem)] h-screen ml-auto bg-white p-3">
      <h1 className="font-bold mb-6">Edit Profile</h1>
      {/* summary */}
      <div className="relative border-[1px] border-gray-300 p-3 rounded-md">
        <p className="absolute top-0 left-3 px-2 -translate-y-1/2 bg-white text-sm">
          Summary
        </p>
        <form className="flex gap-4 flex-wrap justify-evenly">
          <div className="min-w-full">
            <label
              htmlFor="uploadImage"
              className="w-32 h-32 text-center mx-auto border-[1px] border-gray-400 rounded-full flex flex-col justify-center items-center cursor-pointer"
            >
              <input
                type="file"
                id="uploadImage"
                name="profile_picture"
                onChange={inputChangeHandler}
                accept="image/*"
                className="w-0 h-0"
              />
              <img
                src={UploadProfileAvatar}
                alt="profile"
                className="w-full h-full rounded-full"
              />
            </label>
          </div>
          <div className="max-w-[18rem] min-w-[18rem]">
            <Input
              name="name"
              label="Full Name"
              onChange={inputChangeHandler}
            />
          </div>
          <div className="max-w-[18rem] min-w-[18rem]">
            <Input
              type="date"
              name="dob"
              label="Date of Birth"
              onChange={inputChangeHandler}
            />
          </div>
          <div className="flex flex-wrap px-2justify-around max-w-[18rem] min-w-[18rem] border-[1px] border-gray-400 rounded-md">
            <Radio
              id="male"
              name="gender"
              label="Male"
              value="male"
              onChange={inputChangeHandler}
            />
            <Radio
              id="female"
              name="gender"
              label="Female"
              value="female"
              onChange={inputChangeHandler}
            />
            <Radio
              id="custom"
              name="gender"
              label="Custom"
              value="custom"
              onClick={inputChangeHandler}
            />
          </div>
          <div className="max-w-[18rem] min-w-[18rem]">
            <Input type="email" name="email" label="Email" />
          </div>
          <div className="max-w-[18rem] min-w-[18rem]">
            <Input type="number" name="phoneNo" label="Phone No" />
          </div>

          <div className="max-w-[18rem] min-w-[18rem]">
            <Select
              name="availability"
              label="Availability"
              onChange={testchange}
            >
              <Option value="lookingForAJob">Looking for a Job</Option>
              <Option value="hiring">Hiring</Option>
              <Option value="exploring">Exploring</Option>
            </Select>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditProfile;
