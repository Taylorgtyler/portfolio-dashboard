import React from "react";

const Card = ({ title, children, colSpan, rowSpan, style }) => {
  const colSpanClasses = {
    1: "col-span-1",
    2: "md:col-span-2",
    3: "lg:col-span-3",
  };

  const rowSpanClasses = {
    1: "row-span-1",
    2: "row-span-2",
    // Add more as needed
  };

  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-sm ${
        colSpanClasses[colSpan] || ""
      } ${rowSpanClasses[rowSpan] || ""}`}
      style={style}
    >
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <div className="mt-3">{children}</div>
    </div>
  );
};

export default Card;
