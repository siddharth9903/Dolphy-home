import React from "react";
import Chrome from "../../public/icons/chrome.svg";
const Difficulties = () => {
  return (
    <div className="py-40 flex flex-col gap-20">
      <div className="flex flex-col gap-7">
        <h2 className="text-center">It Gets Difficult!</h2>
        <div className="text-center text-xl">
          Coming up with a creative reply <br /> everytime
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <h2 className="text-center">Building Community</h2>
        <div className="text-center text-xl">
          but the struggle is real with writing a tailored reply and <br />{" "}
          carry conversation to next level
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <h2 className="text-center">Confused?</h2>
        <div className="text-center text-xl">
          and spending valuable time thinking what to write and <br /> whether
          the reply will be liked by the other people or not?
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <div className="text-center text-xl">
          As a result Twitter interactions lack personalization, <br />{" "}
          resulting in less effective and engaging conversations.
        </div>
      </div>
      <div className="bg-[#04045c] flex flex-col p-20 gap-10 items-center">
        <h2 className="text-white text-center">Not anymore!</h2>
        <div className="text-white text-xl text-center">
          Say goodbye to time-consuming replies and hello to AI-powered
          productivity. <br /> Let our AI assistant handle your Twitter replies,
          so you can focus on what matters most.
        </div>
        <button className="flex flex-row text-black bg-white items-center gap-7 p-3 rounded-full">
          <div className="text-white bg-[#04045c] p-2 px-6 rounded-full">
            install
          </div>
          Extension for chrome <Chrome />
        </button>
      </div>
    </div>
  );
};

export default Difficulties;
