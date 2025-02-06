import React from "react";
import Image from "next/image";

const dressStyles = [
  { src: "/assets/casual.png", alt: "Casual Dress Style" },
  { src: "/assets/formal.png", alt: "Formal Dress Style" },
  { src: "/assets/party.png", alt: "Party Dress Style" },
  { src: "/assets/gym.png", alt: "Gym Dress Style" },
];

function DressStyle() {
  return (
    <div className="bg-[#F0F0F0] flex flex-col rounded-2xl mt-8 mx-4 md:mx-8 lg:mx-12 xl:mx-20">
      <h2 className="text-3xl md:text-5xl lg:text-5xl text-black text-center mt-8 hover:scale-x-125 font-extrabold">
        BROWSE BY DRESS STYLE
      </h2>

      {/* Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 mt-8 mb-8">
        {dressStyles.map((style, index) => (
          <div key={index} className="flex justify-center">
            <Image
              className="cursor-pointer hover:scale-110 rounded-lg"
              src={style.src}
              alt={style.alt}
              height={300}
              width={400}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DressStyle;

