import React from "react";
import { Outlet } from "react-router-dom";

import DSettings from "../../../Components/Developer/DSettings/DSettings";

const DSettingsPage = () => {
  return (
    <>
      <DSettings />
      <Outlet />
    </>
  );
};

export default DSettingsPage;
