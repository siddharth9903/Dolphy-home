import React from "react";

const Card = ({ content }) => {
  return (
    <div className="border-4 border-[#04045c] text-xl rounded-3xl p-5 lg:px-8 lg:py-14">{content}</div>
  );
};

export default Card;
