import React, { useState } from "react";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const ViewingSharing = () => {
  const [viewShare, setViewShare] = useState({
    whoCanSeePost: "everyone",
    whoCanSeeProfile: "everyone",
    whoCanFollow: "everyone",
  });
  const [isDisable, setIsDisable] = useState(true);

  function viewShareChangeHandler(e) {
    const { name, value } = e.target;
    setViewShare({ ...viewShare, [name]: value });
    setIsDisable(false);
  }

  function viewShareSubmitHandler(e) {
    e.preventDefault();

    console.log(viewShare);
    setIsDisable(true);
  }

  return (
    <section className="w-[calc(100%-14rem)] h-screen ml-auto bg-white p-3">
      <h1 className="font-bold mb-6">Viewing and Sharing</h1>

      <form
        onSubmit={viewShareSubmitHandler}
        className="flex flex-col justify-start gap-8"
      >
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            Who can see your post?
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="everyone"
            name="whoCanSeePost"
            value={viewShare.whoCanSeePost}
            onChange={viewShareChangeHandler}
          >
            <FormControlLabel
              value="everyone"
              control={<Radio />}
              label="Everyone"
            />
            <FormControlLabel
              value="followers"
              control={<Radio />}
              label="Followers"
            />
            <FormControlLabel
              value="onlyMe"
              control={<Radio />}
              label="Only Me"
            />
          </RadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            Who can see your profile?
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="everyone"
            name="whoCanSeeProfile"
            value={viewShare.whoCanSeeProfile}
            onChange={viewShareChangeHandler}
          >
            <FormControlLabel
              value="everyone"
              control={<Radio />}
              label="Everyone"
            />
            <FormControlLabel
              value="followers"
              control={<Radio />}
              label="Followers"
            />
            <FormControlLabel
              value="onlyMe"
              control={<Radio />}
              label="Only Me"
            />
          </RadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            Who can see Follow you?
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="everyone"
            name="whoCanFollow"
            value={viewShare.whoCanFollow}
            onChange={viewShareChangeHandler}
          >
            <FormControlLabel
              value="everyone"
              control={<Radio />}
              label="Everyone"
            />
            <FormControlLabel
              value="noOne"
              control={<Radio />}
              label="No one"
            />
          </RadioGroup>
        </FormControl>

        <div className="flex justify-center">
          <button
            type="submit"
            className={`${
              isDisable ? "bg-gray-500 cursor-not-allowed" : "bg-customBlue"
            } px-4 py-2 font-semibold rounded-md text-white`}
          >
            Save
          </button>
        </div>
      </form>
    </section>
  );
};

export default ViewingSharing;
