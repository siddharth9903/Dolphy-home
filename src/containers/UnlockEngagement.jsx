import React from "react";
import Image from "next/image";
import TweeFeed from "../../public/images/1.png";
import Download from "../../public/icons/download.svg";
import Chrome from "../../public/icons/chrome.svg";
import Start from "../../public/icons/star.svg";
import StartHalf from "../../public/icons/star-half.svg";
import User1 from "../../public/images/2.png"
import User2 from "../../public/images/3.png"
import User3 from "../../public/images/4.png"
import User4 from "../../public/images/5.png"
import User5 from "../../public/images/6.png"
import User6 from "../../public/images/7.png"
import User7 from "../../public/images/8.png"
import User8 from "../../public/images/9.png"
import User9 from "../../public/images/10.png"
import User10 from "../../public/images/11.png"
import User11 from "../../public/images/12.png"
import User12 from "../../public/images/13.png"
import User13 from "../../public/images/14.png"
import User14 from "../../public/images/15.png"
import User15 from "../../public/images/16.png"
import User16 from "../../public/images/17.png"
import User17 from "../../public/images/18.png"
import User18 from "../../public/images/19.png"
import User19 from "../../public/images/20.png"
import User20 from "../../public/images/21.png"
import User21 from "../../public/images/22.png"
import User22 from "../../public/images/23.png"
import User23 from "../../public/images/24.png"
import User24 from "../../public/images/25.png"

const UnlockEngagement = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center p-10">
        <div className="flex items-center gap-2">
          <Image src={TweeFeed} width={60} height={60} />
          <div>
            <p className="text-xl font-bold">TweeFeed</p>
            <p className="text-sm">by Dolphy.io</p>
          </div>
        </div>
        <div>
          {" "}
          <button className="flex flex-row items-center bg-[#04045c] text-white pl-5 rounded-xl">
            Install <Download fill="white" />
          </button>
        </div>
      </div>
      <h2 className="text-center font-bold lg:px-60 leading-snug">
        Unlock <span className="text-[#4bcbe3]">90%</span> More Engagement with{" "}
        <span className="text-[#4bcbe3]">AI Reply</span> for Twitter
      </h2>
      <div className="text-center lg:px-72 text-xl pt-16">
        Enjoy a seamless and time-saving experience. Just one click, and you'll
        have a perfectly crafted reply ready to go. <br /> It's that easy!
      </div>
      <div className="flex flex-row justify-evenly items-center pt-16 md:px-56">
        <div>
          <div className="flex items-center gap-2">
            <Image src={TweeFeed} width={40} height={40} />
            <p className="text-xl font-bold">TweeFeed</p>
          </div>
          <div className="flex">
          <p className="text-base">Rated 4.5 stars</p>
          <Start fill="yellow" />
          <Start fill="yellow" />
          <Start fill="yellow" />
          <Start fill="yellow" />
          <StartHalf fill="yellow" />
          </div>
        </div>
        <button className="flex flex-row justify-center items-center gap-2 bg-black text-white py-2 px-5 rounded-full">
          {" "}
          <Chrome />
          Add to Chrome
        </button>
      </div>
      <div className="pt-16">
        <div className="text-center text-xl">Join 1000+ entrepreneurs, startups & marketers</div>
        <div className="flex justify-center">
          <Image src={User1} width={60} height={60} />
          <Image src={User2} width={60} height={60} />
          <Image src={User3} width={60} height={60} />
          <Image src={User4} width={60} height={60} />
          <Image src={User5} width={60} height={60} />
          <Image src={User6} width={60} height={60} />
          <Image src={User7} width={60} height={60} />
        </div>
      </div>
      <div className="mt-16 bg-[#ebf9fc] grid grid-cols-1 md:grid-cols-3 p-5 mx-5 rounded-3xl">
        <div><Image src={User8} width={360} height={360} /></div>
        <div><Image src={User9} width={360} height={360} /></div>
        <div><Image src={User10} width={360} height={360} /></div>
        <div><Image src={User11} width={360} height={360} /></div>
        <div><Image src={User12} width={360} height={360} /></div>
        <div><Image src={User13} width={360} height={360} /></div>
        <div><Image src={User14} width={360} height={360} /></div>
        <div><Image src={User15} width={360} height={360} /></div>
        <div><Image src={User16} width={360} height={360} /></div>
      </div>
      <div className="pt-16 text-center">
        <h2 className="font-semibold">
         <span className="underline">Trusted</span> by
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div><Image src={User17} width={130} height={130} /></div>
          <div><Image src={User18} width={130} height={130} /></div>
          <div><Image src={User19} width={130} height={130} /></div>
          <div><Image src={User20} width={130} height={130} /></div>
          <div><Image src={User21} width={130} height={130} /></div>
          <div><Image src={User22} width={130} height={130} /></div>
          <div><Image src={User23} width={130} height={130} /></div>
          <div><Image src={User24} width={130} height={130} /></div>
        </div>
      </div>
    </div>
  );
};

export default UnlockEngagement;
