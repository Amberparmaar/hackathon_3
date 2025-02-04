"use client";
import React from "react";
import { toast } from "react-toastify";
import { useCart } from "@/app/Context/CartContext";

interface AddToCartButtonProps {
  productId: string;
  productName: string;
  productPrice: number;
  productImage: string;
  productSize?: string; // Optional prop
  productColor?: string; // Optional prop
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  productId,
  productName,
  productPrice,
  productImage,
  productSize,
  productColor,
}) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: productId,
      name: productName,
      price: productPrice,
      image: productImage,
      sizes: productSize,
      colors: productColor,
    });
    toast.success(`${productName} has been added to your cart!`);
  };

  return (
    <button
      type="button"
      className="bg-black text-white font-medium rounded-full text-sm md:text-base px-10 py-2 md:py-3 w-full md:w-auto"
      onClick={handleAddToCart}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
