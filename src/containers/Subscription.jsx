import React from "react";
import Image from "next/image";
import YellowBg from "../../public/images/31.png"

const Subscription = () => {
  return (
    <div className="px-5 lg:px-40 flex flex-col items-center gap-7">
      <div className="flex flex-col gap-7 text-center">
        {/* <Image src={YellowBg} width={650} height={650} />/ */}
        <h2 >Always <span className="underline">FREE!</span> </h2>
        <div className=" text-xl">
          TweeFeed will always be free
        </div>
      </div>
      <button className="flex flex-row items-center gap-5 p-4 px-7 rounded-3xl bg-[#04045c] text-white">
        {" "}
        <h3>50 / </h3> Replies per month
      </button>
      <div className="md:mt-20 flex flex-col items-center gap-7">
        <h2>Want more Free Replies?</h2>
        <div className="text-gray-400 text-xl">
          Increase your Free replies with our referral program.
        </div>
      </div>
    </div>
  );
};

export default Subscription;
