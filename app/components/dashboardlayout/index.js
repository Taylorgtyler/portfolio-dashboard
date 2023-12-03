import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="p-4 min-h-screen bg-indigo-950 min-w-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
