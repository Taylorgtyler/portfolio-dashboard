import React from "react";

const KPI = ({ label, value }) => {
  return (
    <div className="p-4 text-center rounded-lg shadow-md">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
};

export default KPI;
