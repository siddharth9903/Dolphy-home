import React from "react";
import Image from "next/image";
import Arrow from "../../public/icons/arrow.svg";
import twiiter_mobile from "../../public/images/32.png";
import TweetImg from "../../public/images/33.png";
import TweeterImg from "../../public/images/34.png";

const Shoutout = () => {
  return (
    <div className="px-5 md:px-9 py-10 md:py-20 flex flex-col items-center gap-10 bg-slate-50 my-14 rounded-3xl">
      <h3>
        Give us a Shoutout on <span className="text-[#4bcbe3]">Twitter</span>{" "}
      </h3>
      <div className="flex flex-col md:flex-row gap-5 lg:gap-12 items-center">
        <div className="flex flex-col text-black text-xl gap-2">
          <div className="flex justify-center items-center">Click below</div>
          <button className="text-white bg-[#04045c] p-2 px-5 rounded-full">
            {" "}
            Wall of love{" "}
          </button>
          <div className="flex justify-center items-center">or</div>
          <div className="flex justify-center items-center">
            <Image
              src={twiiter_mobile}
              width={120}
              height={120}
              class=" transform hover:scale-135"
            />
          </div>
          <div className="flex justify-center items-center">Go to Twitter</div>
        </div>
        <Arrow width={60} height={60} />
        <div>
          <div className="justify-center items-center">
            <Image src={TweetImg} width={360} height={360} />
            <p className="text-center text-lg">Click on "Share Shoutout on Twitter"</p>
          </div>
        </div>
        <Arrow width={60} height={60} />
        <div className="flex text-center gap-5">
          <div>
            <p className="text-2xl">Write a Tweet</p>
            <p className="text-lg">
              Don't forget to tag us <br /> @Dolphy_io
            </p>
          </div>
          <div><Image src={TweeterImg} width={40} height={40} /></div>
        </div>
      </div>
      <div className="text-3xl">
        Get{" "}
        <span className="text-5xl md:text-7xl font-bold text-[#04045c]">
          {" "}
          50{" "}
        </span>
        Free Replies
      </div>
    </div>
  );
};

export default Shoutout;
