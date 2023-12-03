import React from "react";
import { HomeIcon, Bars2Icon } from "@heroicons/react/24/outline";

const DashboardHeader = () => {
  return (
    <div className="bg-white p-4 z-50 rounded-bl-md rounded-br-md flex justify-between">
      <Bars2Icon className="h-6 w-6 text-blue-950 ml-4" />
      <HomeIcon className="h-6 w-6 text-blue-950 mr-4" />
    </div>
  );
};

export default DashboardHeader;
