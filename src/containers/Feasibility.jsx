import Feasible from "@/components/Feasible";
import React from "react";

const data = [
  {
    id: 1,
    number: "2x",
    title: "Higher engagement",
    desc: "Engaging AI replies that drive 2X higher engagement than generic responses.",
  },
  {
    id: 2,
    number: "80%",
    title: "Faster",
    desc: "Engaging AI replies that drive 2X higher engagement than generic responses.",
  },
  {
    id: 3,
    number: "100%",
    title: "Personalized",
    desc: "Engaging AI replies that drive 2X higher engagement than generic responses.",
  },
];

const Feasibility = () => {
  return (
    <div className="flex flex-row p-36">
      {data.map((x) => {
        return <Feasible number={x.number} title={x.title} desc={x.desc} />;
      })}
    </div>
  );
};

export default Feasibility;
