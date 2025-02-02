import React from "react";
import { IoStarSharp } from "react-icons/io5";

function Ratings() {
  const stars = [
    <IoStarSharp />,
    <IoStarSharp />,
    <IoStarSharp />,
    <IoStarSharp />,
    <IoStarSharp />,
  ];
  console.log(stars);
  return (
    <div className="text-yellow-300 flex">
      {stars.map((star, index) => (
        <p key={index}>{star}</p>
      ))}
    </div>
  );
}

export default Ratings;
