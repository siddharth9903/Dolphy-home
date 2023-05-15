import Image from "next/image";
import React from "react";
import Download from "../../public/icons/download.svg";
import Chrome from "../../public/icons/chrome.svg";
import Avatars from "../../public/icons/avatars.svg";

const UnlockEngagement = () => {
  return (
    <div className="px-36 flex flex-col gap-24">
      <div className="flex justify-between mt-10">
        <Image src="/../../public/tweeFedd.png" width={32} height={32} />
        <button className="flex flex-row items-center bg-purple-900 text-white p-2 pl-4 rounded-xl">
          install <Download fill="white" />
        </button>
      </div>
      <h1 className="text-center">
        Unlock 90% More Engagement with AI Reply for Twitter
      </h1>
      <div className="text-center px-64 text-2xl">
        Enjoy a seamless and time-saving experience. Just one click, and you'll
        have a perfectly crafted reply ready to go. It's that easy!
      </div>
      <div className="flex flex-row justify-evenly items-center px-56">
        <div>TweeFeed</div>
        <button className="flex flex-row justify-center items-center gap-4 bg-black text-white py-2 px-4 rounded-2xl">
          {" "}
          <Chrome />
          Add to Chrome
        </button>
      </div>
      <div className="text-center text-2xl">
        Join 1000+ entrepreneurs, startups & marketers
        <div>Avatars</div>
      </div>
      {/* <img
        src="../../public/photocollage.png"
        alt="image"
        className="aspect-video z-10"
      /> */}
    </div>
  );
};

export default UnlockEngagement;
