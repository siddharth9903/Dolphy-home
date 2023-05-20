import React from "react";

const Subscription = () => {
  return (
    <div className="px-5 lg:px-40 py-10 md:py-20 flex flex-col items-center gap-7">
      <div className="flex flex-col gap-7">
        <h2 className="text-center">Always Free!</h2>
        <div className="text-center text-black text-xl">
          TweeFeed will always be free
        </div>
      </div>
      <button className="flex flex-row items-center gap-5 p-4 px-7 rounded-3xl bg-[#04045c] text-white">
        {" "}
        <h3>50 / </h3> Replies per month
      </button>
      <div className="md:mt-20 flex flex-col items-center gap-7">
        <h2>Want more Free Replies?</h2>
        <div className="text-black text-xl">
          Increase your Free replies with our referral program.
        </div>
      </div>
    </div>
  );
};

export default Subscription;
