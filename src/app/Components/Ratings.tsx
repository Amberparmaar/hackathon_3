import React from "react";
import { IoStarSharp } from "react-icons/io5";

function Ratings() {
  return (
    <div className="text-yellow-300 flex">
      {[...Array(5)].map((_, index) => (
        <IoStarSharp key={index} className="text-2xl" />
      ))}
    </div>
  );
}

export default Ratings;
