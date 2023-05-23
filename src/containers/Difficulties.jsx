import React from "react";
import Image from "next/image";
import Chrome from "../../public/icons/chrome.svg";
import Emoji from "../../public/images/26.png";
import Confused1 from "../../public/images/27.png";
import Confused2 from "../../public/images/28.png";
import Fire from "../../public/images/29.png";

const Difficulties = () => {
  return (
    <div className="py-20 md:py-24 text-center flex flex-col gap-10 md:gap-20">
      <div className="flex flex-col gap-7">
        <h2 >It Gets Difficult!</h2>
        <div className="text-xl">
          Coming up with a creative reply <br /> everytime
        </div>
      </div>
      <div className="flex flex-col items-center gap-7">
        <Image src={Emoji} width={70} height={70}/>
        <h2 className="font-normal">Building Community</h2>
        <div className="text-xl">
          but the struggle is real with writing a tailored reply and <br />{" "}
          carry conversation to next level
        </div>
      </div>
      <div className="flex flex-col items-center gap-7">
      <Image src={Confused1} width={70} height={70}/>
        <h2 className="font-normal">Confused?</h2>
        <div className="text-xl">
          and spending valuable time thinking what to write and <br /> whether
          the reply will be liked by the other people or not?
        </div>
      </div>
      <div className="flex flex-col items-center gap-7">
      <Image src={Confused2} width={70} height={70}/>
        <div className="text-xl">
          As a result Twitter interactions lack personalization, <br />{" "}
          resulting in less effective and engaging conversations.
        </div>
      </div>
      <div className="bg-[#04045c] flex flex-col p-12 md:p-20 gap-10 items-center">
        <h2 className="text-white text-center flex items-center gap-2">Not Anymore! <Image src={Fire} width={60} height={60}/> </h2>
        <div className="text-white text-2xl text-center">
          Say goodbye to time-consuming replies and hello to AI-powered
          productivity. <br /> Let our AI assistant handle your Twitter replies,
          so you can focus on what matters most.
        </div>
        <button className="flex flex-row text-black bg-white items-center gap-7 px-6 rounded-full">
          <div className="text-white bg-[#04045c] px-6 rounded-full">
            INSTALL
          </div>
          Extension for chrome <Chrome />
        </button>
      </div>
    </div>
  );
};

export default Difficulties;
