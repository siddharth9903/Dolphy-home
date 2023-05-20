import Image from "next/image";
import React from "react";
import testimonial from '../../public/testimonial.png'
import testimonial2 from '../../public/testimonial2.png'

const Testimonial = () => {
  return (
    <div className="px-5 md:px-9 py-10 md:py-20 flex flex-col items-center gap-10">
      <h3>Post a Video Testimonial</h3>
      <div className="flex flex-col md:flex-row gap-5 lg:gap-20">
        <div className="flex flex-col text-black text-xl gap-7 px-10">
          Click below!{" "}
          <button className="text-white bg-[#04045c] p-2 rounded-full">
            {" "}
            Wall of love{" "}
          </button>
        </div>
        <div>
          <div className='justify-center items-center'>
            <Image src={testimonial} className="scale-70"/>
            <p className='text-center'>Select "Record a Video"</p>
          </div>
        </div>
        
        <div>
          <div className='justify-center items-center'>
            <Image src={testimonial2} className='scale-50' />
            <p className='text-center'>Record a nice video talking about <span className="text-[#04045c] font-semibold">TweeFeed</span></p>
          </div>
        </div>
      </div>
      <div className="text-black text-xl">
        Get <span className="text-5xl md:text-7xl font-bold text-[#04045c]"> 200 </span>Free Replies
      </div>
    </div>
  );
};

export default Testimonial;
