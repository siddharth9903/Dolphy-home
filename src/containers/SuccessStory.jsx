import React from "react";

const SuccessStory = () => {
  return (
    <div className="px-40 py-20 flex flex-col items-center gap-10">
      <h3>Share your Success Story</h3>
      <div className="flex flex-row gap-20">
        <div className="flex flex-1 flex-col text-black text-xl gap-7">
          Email us your success story at: <br /> Support@dolphy.io
        </div>
        <div className="flex flex-1 flex-col gap-5 text-center text-black text-xl">
          <button className="text-white bg-[#04045c] p-2 rounded-full">
            Download Template
          </button>
          Share your TweeFeed success story
        </div>
      </div>
      <div className="text-black text-xl">
        Get <span className="text-7xl text-[#04045c]"> 500 </span>Free Replies
      </div>
    </div>
  );
};

export default SuccessStory;
