import React from "react";

const Feasible = ({ number, title, desc }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-2">
        <h2 className="text-[#00c4cc]">{number}</h2>
        <h5 className="flex items-end">{title}</h5>
      </div>
      <div className="text-black text-xl">{desc}</div>
    </div>
  );
};

export default Feasible;
