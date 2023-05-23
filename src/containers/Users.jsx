import React from "react";
import Image from "next/image";
import Card from "@/components/Card";
import Chrome from "../../public/icons/chrome.svg";
import Left from "../../public/icons/left-arrow.svg";
import Right from "../../public/icons/right-arrow.svg";
import Trump from "../../public/images/30.png"

const cards = [
  {
    id: 1,
    content:
      "Tailored responses for different emotions, adding authenticity to your tweets.",
  },
  {
    id: 2,
    content:
      "Endless stream of creative and relevant responses for diverse interactions.",
  },
  {
    id: 3,
    content:
      "Convenient and easy-to-use tool for crafting perfect replies with just one click.",
  },
  {
    id: 4,
    content:
      "Boost your social media presence with TweeFeed's AI-powered capabilities.",
  },
  {
    id: 5,
    content:
      "Say goodbye to generic replies and enhance your Twitter game with personalized responses.",
  },
  {
    id: 6,
    content:
      "Effortlessly engage with the diverse Twitter community using personalized replies.",
  },
];

const Users = () => {
  return (
    <div className="flex flex-col gap-10 md:gap-20 items-center">
      <div className="flex justify-center items-center">
        
      </div>
      <h2 className="text-center">Hear form our <span className="underline">Users!</span> </h2>
      <div className="flex flex-col md:flex-row items-center gap-16 px-32">
        <div className="flex flex-1">
          <Image src={Trump} />
        </div>
        <div className="flex flex-1 flex-col gap-3 text-xl text-black">
          <div className="mb-10">
            Lorem ipsum dolor sit amet. 33 fugiat quisquam ut tempora cumque in
            dicta laborum. 33 laborum corrupti qui nostrum quidem hic fugiat
            quaerat et accusantium esse? 33 dolores molestiae in porro facere
            eos neque alias et unde unde.
          </div>
          <h4 className="text-black">Webflow</h4>
          <div>Donald Trump</div>
          <div className="flex gap-5">
            <Left/> 
            <Right/>
            </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-5 lg:gap-20 px-16">
        {cards.map((x) => {
          return <Card {...x} />;
        })}
      </div>
      <button className="flex flex-row text-black bg-white items-center gap-7 px-6 rounded-full border-4 border-[#04045c]">
        <div className="text-white bg-[#04045c] px-6 rounded-full">
          INSTALL
        </div>
        Extension for chrome <Chrome />
      </button>
    </div>
  );
};

export default Users;
