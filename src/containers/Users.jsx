import Card from "@/components/Card";
import React from "react";
import Chrome from "../../public/icons/chrome.svg";
import Image from "next/image";
import img4 from "../../public/pic_4.png";


const cards = [
  {
    id: 1,
    content:
      "Tailored responses for different emotions, adding authenticity to your tweets.",
  },
  {
    id: 2,
    content:
      "Tailored responses for different emotions, adding authenticity to your tweets.",
  },
  {
    id: 3,
    content:
      "Tailored responses for different emotions, adding authenticity to your tweets.",
  },
  {
    id: 4,
    content:
      "Tailored responses for different emotions, adding authenticity to your tweets.",
  },
  {
    id: 5,
    content:
      "Tailored responses for different emotions, adding authenticity to your tweets.",
  },
  {
    id: 6,
    content:
      "Tailored responses for different emotions, adding authenticity to your tweets.",
  },
];

const Users = () => {
  return (
    <div className="px-40 flex flex-col gap-20 items-center">
      <div className="flex justify-center items-center">
          <Image src={img4} />
        </div>
      <h2 className="text-center">Hear form our Users!</h2>
      <div className="flex flex-row items-center">
        <div className="flex flex-1">
          {/* trump */}
          {/* <Image src={images} */}
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
        </div>
      </div>
      <div className="grid grid-cols-3 gap-16">
        {cards.map((x) => {
          return <Card {...x} />;
        })}
      </div>
      <button className="flex flex-row text-black bg-white items-center gap-7 p-3 rounded-full border-4 border-[#04045c]">
        <div className="text-white bg-[#04045c] p-2 px-6 rounded-full">
          install
        </div>
        Extension for chrome <Chrome />
      </button>
    </div>
  );
};

export default Users;
