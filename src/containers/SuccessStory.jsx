import React from "react";
import Image from "next/image";
import Arrow from "../../public/icons/arrow.svg";
import MsgBox from "../../public/images/37.png"

const SuccessStory = () => {
  return (
    <div className="px-5 lg:px-40 py-10 md:py-20 flex flex-col items-center gap-10 bg-slate-50 my-14 rounded-3xl">
      <h3>Share your Success Story</h3>
      <div className="flex flex-col md:flex-row gap-5 lg:gap-20 items-center">
        <div className="flex flex-col text-2xl text-center items-center">
          <Image src={MsgBox} width={160} height={160}/>
          Email us your success story at:<span className="text-[#04045c] font-semibold">Support@dolphy.io</span>
        </div>
        <Arrow width={60} height={60} />
        <div className="flex flex-1 flex-col gap-5 text-center text-2xl">
          <button className="text-white bg-[#04045c] p-2 rounded-full">
            Download Template
          </button>
          Share your TweeFeed success story
        </div>
      </div>
      <div className="text-3xl">
        Get <span className="text-5xl md:text-7xl font-bold text-[#04045c]"> 500 </span>Free Replies
      </div>
    </div>
  );
};

export default SuccessStory;
