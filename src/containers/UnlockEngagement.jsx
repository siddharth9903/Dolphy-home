import Image from "next/image";
import React from "react";
import Download from "../../public/icons/download.svg";
import Chrome from "../../public/icons/chrome.svg";
import img1 from "../../public/pic_1.png";
import img2 from "../../public/pic_2.png";
import img3 from "../../public/pic_3.png";
import tweetfeed from "../../public/tweetfeed.png";

const UnlockEngagement = () => {
  return (
    <div className="px-16 flex flex-col gap-16">
      <div className="flex justify-between mt-10">
        <Image src={tweetfeed} width={250} height={250} />
        <button className="flex flex-row items-center bg-purple-900 text-white p-2 pl-4 rounded-xl">
          install <Download fill="white" />
        </button>
      </div>
      <h1 className="text-center">
        Unlock <span className="text-[#4bcbe3]">90%</span> More Engagement with <span className="text-[#4bcbe3]">AI Reply</span> for Twitter
      </h1>
      <div className="text-center px-64 text-xl">
        Enjoy a seamless and time-saving experience. Just one click, and you'll
        have a perfectly crafted reply ready to go. It's that easy!
      </div>
      <div className="flex flex-row justify-evenly items-center px-56">
        <div>TweeFeed</div>
        <button className="flex flex-row justify-center items-center gap-4 bg-black text-white py-2 px-4 rounded-full">
          {" "}
          <Chrome />
          Add to Chrome
        </button>
      </div>
      <div className="text-center text-xl">
        Join 1000+ entrepreneurs, startups & marketers
        <div className="flex justify-center items-center">
          <Image src={img1} />
        </div>
        <div className="flex justify-center items-center">
          <Image src={img2} />
        </div>
      </div>
      <div className="text-center text-2xl">
        <h3><b>Trusted</b> by </h3>
        <div className="flex justify-center items-center">
          <Image src={img3} />
        </div>
      </div>
    </div>
  );
};

export default UnlockEngagement;
