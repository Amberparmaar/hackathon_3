import React from "react";
import { IoStarSharp } from "react-icons/io5";

function Ratings() {
  const stars = [
    <IoStarSharp key={1} />,
    <IoStarSharp key={2} />,
    <IoStarSharp key={3} />,
    <IoStarSharp key={4} />,
    <IoStarSharp key={5} />,
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
