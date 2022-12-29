import React from "react";
import { Outlet } from "react-router-dom";

import DHeader from "../../Components/Developer/DHeader";
import DNav from "../../Components/Developer/DNav";

const DeveloperPage = (props) => {
  return (
    <div className="w-[73%]">
      <DHeader />
      <DNav />

      <div className="ml-auto w-[calc(100%-14rem)] h-full mt-16 overflow-hidden rounded-xl p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default DeveloperPage;
