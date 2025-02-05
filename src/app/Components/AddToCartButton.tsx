"use client";
import React from "react";
import { toast } from "react-toastify";
import { useCart } from "@/app/Context/CartContext";

interface AddToCartButtonProps {
  productId: string;
  productName: string;
  productPrice: number;
  productImage: string;
  productSize?: string;
  productColor?: string;
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
    if (!addToCart) {
      console.error("Cart context is not available.");
      return;
    }

    addToCart({
      id: productId,
      name: productName,
      price: productPrice,
      image: productImage,
      size: productSize || "N/A", // Avoid undefined
      color: productColor || "N/A", // Avoid undefined
      quantity: 1, // Ensure quantity is set
    });

    toast.success(`${productName} has been added to your cart!`);
  };

  return (
    <div className="text-center">
      <button
        type="button"
        className="bg-black text-white font-medium rounded-full text-sm md:text-base px-14 py-2 md:py-3 w-full md:w-auto mt-6"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCartButton;

