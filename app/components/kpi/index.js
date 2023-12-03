import React from "react";

const KPI = ({ label, value }) => {
  return (
    <div className="text-center rounded-lg">
      <div className="text-sm text-gray-500 mb-4">{label}</div>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
    </div>
  );
};

export default KPI;
