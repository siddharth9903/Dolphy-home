import React from "react";

const Shoutout = () => {
  return (
    <div className="px-40 py-20 flex flex-col items-center gap-10">
      <h3>Give us a Shoutout on Twitter</h3>
      <div className="flex flex-row gap-20">
        <div className="flex flex-1 flex-col text-black text-xl gap-7">
          Click below{" "}
          <button className="text-white bg-[#04045c] p-2 rounded-full">
            {" "}
            Wall of love{" "}
          </button>
        </div>
        <div className="flex flex-1 text-black text-xl">
          Click on "Share Shoutout on Twitter"
        </div>
        <div className="flex flex-1 text-black text-xl">Write a Tweet</div>
      </div>
      <div className="text-black text-xl">
        Get <span className="text-7xl text-[#04045c]"> 50 </span>Free Replies
      </div>
    </div>
  );
};

export default Shoutout;
