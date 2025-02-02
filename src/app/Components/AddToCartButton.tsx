"use client";
import React from "react";
import { toast } from "react-toastify";

function AddToCartButton() {
  const handleAddToCart = () => {
    toast.success("Item added to cart successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="mt-4 flex justify-center">
      <button
        type="button"
        onClick={handleAddToCart}
        className="text-white bg-[#050708] font-medium rounded-full 
          text-sm md:text-base lg:text-lg px-10 md:px-16 lg:px-20 
          py-2 lg:py-2 text-center inline-flex items-center 
          hover:bg-[#1a1a1a] transition-all duration-300 ease-in-out"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default AddToCartButton;
