import Image from "next/image";
import React from "react";
import Arrow from "../../public/icons/arrow.svg";
import testimonial from "../../public/images/35.png";
import testimonial2 from "../../public/images/36.png";

const Testimonial = () => {
  return (
    <div className="px-5 md:px-9 py-10 md:py-20 flex flex-col items-center gap-10 bg-slate-50 my-14 rounded-3xl">
      <h3>Post a Video Testimonial</h3>
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex flex-col items-center text-2xl gap-7">
          Click below!{" "}
          <button className="text-white bg-[#04045c] p-3 px-10 rounded-full">
            {" "}
            Wall of love{" "}
          </button>
        </div>
        <Arrow width={60} height={60} />
        <div>
          <div>
            <Image
              src={testimonial}
              width={560}
              height={560}
              className="scale-70"
            />
          </div>
          <p className="text-center text-2xl">Select "Record a Video"</p>
        </div>
        <Arrow width={60} height={60} />
        <div>
          <div>
            <Image src={testimonial2} className="scale-50" />
          </div>
          <p className="text-center text-2xl">
            Record a nice video talking about{" "}
            <span className="text-[#04045c] font-semibold">TweeFeed</span>
          </p>
        </div>
      </div>
      <div className="text-3xl">
        Get{" "}
        <span className="text-5xl md:text-7xl font-bold text-[#04045c]">
          {" "}
          200{" "}
        </span>
        Free Replies
      </div>
    </div>
  );
};

export default Testimonial;
