import React from "react";

const KPI = ({ label, value }) => {
  return (
    <div className="text-center rounded-lg">
      <div className="text-lg text-gray-500 mb-4">{label}</div>
      <div className="text-xl font-bold text-gray-900">{value}</div>
    </div>
  );
};

export default KPI;
