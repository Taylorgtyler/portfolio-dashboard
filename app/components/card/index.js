import React from "react";

const Card = ({ title, children, size = "normal" }) => {
  const cardSizeClass = size === "large" ? "w-full" : "w-auto";

  return (
    <div className={`bg-white p-6 rounded-lg shadow-sm ${cardSizeClass}`}>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <div className="mt-3">{children}</div>
    </div>
  );
};

export default Card;
