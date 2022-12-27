import React from "react";

import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-10">
      <h1 className="text-2xl text-red-400">
        Page you are looking for is not found
      </h1>
      <Link
        to="/"
        className="bg-emerald-500 font-bold rounded-md px-4 py-2 text-center text-gray-100"
      >
        Go back to home page
      </Link>
    </div>
  );
};

export default NotFoundPage;
