"use client";

import React, { useState } from "react";
import Image from "next/image";
import { RiDeleteBinLine } from "react-icons/ri";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import { FaArrowRightLong } from "react-icons/fa6";
import { GoTag } from "react-icons/go";
import Link from "next/link";

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 145,
      quantity: 1,
      image: "gradientTshirt.png",
      size: "Large",
      color: "White",
    },
    {
      id: 2,
      name: "Product 2",
      price: 145,
      quantity: 1,
      image: "checkshirt.png",
      size: "Large",
      color: "White",
    },
    {
      id: 3,
      name: "Product 3",
      price: 145,
      quantity: 1,
      image: "pant1.png",
      size: "Large",
      color: "White",
    },
  ]);

  const handleQuantityChange = (id: number, delta: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <main className="max-w-screen-2xl mx-auto">
      <nav className="mx-10 py-4" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2">
          <li className="inline-flex items-center cursor-pointer hover:underline">
            <Link href="/">Home</Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <Link className="hover:underline cursor-pointer" href="/Casual">
                Casual
              </Link>
            </div>
          </li>
        </ol>
      </nav>
      <h2 className="md:text-5xl lg:text-4xl text-black ml-12 px-5 font-extrabold">
        YOUR CART
      </h2>
      <div className="flex flex-col md:flex-row justify-center space-x-4 my-11">
        {/* Cart items container */}
        <div className="w-full md:w-3/4 lg:w-2/4 border border-gray-200 rounded-2xl mb-8">
          {cartItems.map((item) => (
            <div key={item.id}>
              <div className="flex flex-col md:flex-row justify-start space-y-4 md:space-y-0 md:space-x-3 m-4">
                <Image
                  src={`/Assets/${item.image}`}
                  alt={item.name}
                  width={124}
                  height={100}
                  className="rounded-xl w-full md:w-auto"
                />
                <div className="w-full md:w-3/4">
                  <h4 className="flex justify-between items-center font-semibold mt-2 text-base md:text-lg">
                    {item.name}
                    <span
                      className="text-red-400 cursor-pointer"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <RiDeleteBinLine />
                    </span>
                  </h4>
                  <p className="mt-2 text-sm text-gray-400">
                    Size: {item.size}
                  </p>
                  <p className="text-sm text-gray-400">Color: {item.color}</p>
                  <h4 className="font-semibold mt-4 text-base md:text-lg">
                    ${item.price * item.quantity}
                  </h4>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="text-black bg-[#F0F0F0] py-2 px-6 md:px-10 focus:outline-none focus:ring-4 font-medium rounded-full text-sm md:text-base text-center mb-2"
                      onClick={() => handleQuantityChange(item.id, -1)}
                    >
                      -
                    </button>
                    <span className="py-2 px-4">{item.quantity}</span>
                    <button
                      type="button"
                      className="text-black bg-[#F0F0F0] py-2 px-6 md:px-10 focus:outline-none focus:ring-4 font-medium rounded-full text-sm md:text-base text-center mb-2"
                      onClick={() => handleQuantityChange(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <hr className="border-t-1 border-gray-200 m-4" />
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="w-full md:w-3/4 lg:w-2/4 border border-gray-200 rounded-2xl p-4 md:p-6 mb-20 mx-auto">
          <h3 className="font-semibold text-base md:text-lg">Order Summary</h3>
          <div className="flex justify-between text-sm md:text-base mt-4">
            <h4 className="text-gray-400">Subtotal</h4>
            <span className="font-semibold">${subtotal}</span>
          </div>
          <div className="flex justify-between text-sm md:text-base mt-4">
            <h4 className="text-gray-400">Discount (-20%)</h4>
            <span className="text-red-600 font-semibold">-${discount}</span>
          </div>
          <div className="flex justify-between text-sm md:text-base mt-4">
            <h4 className="text-gray-400">Delivery Fee</h4>
            <span className="font-semibold">${deliveryFee}</span>
          </div>
          <hr className="border-t-1 border-gray-200 my-4" />
          <p className="flex justify-between text-sm md:text-base mt-4">
            Total <span className="font-semibold">${total}</span>
          </p>
          <div className="flex flex-col md:flex-row md:justify-between md:space-x-4 mt-4">
            <button
              type="button"
              className="flex items-center justify-center text-gray-400 bg-gray-200 font-medium rounded-full text-sm md:text-base px-10 py-2 mb-4 md:mb-0 md:py-3 w-full md:w-auto"
            >
              <GoTag className="mr-2" />
              Add promo code
            </button>
            <button
              type="button"
              className="bg-black text-white font-medium rounded-full text-sm md:text-base px-10 py-2 md:py-3 w-full md:w-auto"
            >
              Apply
            </button>
          </div>
          <div className="mt-4">
            <button
              type="button"
              className="flex items-center justify-center text-white bg-black font-medium rounded-full text-sm md:text-base px-10 py-3 w-full md:w-auto"
            >
              Go to Checkout
              <FaArrowRightLong className="ml-2" />
            </button>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </main>
  );
}

export default Cart;
