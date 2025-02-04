import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import Contact from "@/app/Components/Contact";
import Footer from "../Components/Footer";
import Link from "next/link";
import Image from "next/image";
import Ratings from "@/app/Components/Ratings";
import AddToCartButton from "../Components/AddToCartButton";
import SideBar from "@/app/Components/SideBar";
import product from "@/sanity/schemaTypes/product";
import ProductDetails from "../Products/[id]/page";

const data = [
  {
    _id: "1",
    name: "Gradient Graphic T-Shirt",
    oldPrice: 200,
    price: 145,
    discountPercent: 0,
    imageUrl: "/Assets/gradientTshirt.png", // Updated path
  },
  {
    _id: "2",
    name: "Polo With Tipping Details",
    price: 180,
    discountPercent: 0,
    imageUrl: "/Assets/polotipping.png", // Updated path
  },
  {
    _id: "3",
    name: "Black Striped T-Shirt",
    price: 120,
    discountPercent: 30,
    imageUrl: "/Assets/blackstripped.png", // Updated path
  },
  {
    _id: "4",
    name: "SKINNY FIT JEANS",
    price: 240,
    discountPercent: 20,
    imageUrl: "/Assets/pant1.png", // Updated path
  },
  {
    _id: "5",
    name: "Checkered Shirt",
    price: 180,
    discountPercent: 0,
    imageUrl: "/Assets/checkshirt.png", // Updated path
  },
  {
    _id: "6",
    name: "Sleeve Striped T-Shirt",
    price: 130,
    discountPercent: 30,
    imageUrl: "/Assets/orangrshirt.png", // Updated path
  },
  {
    _id: "7",
    name: "Vertical Striped Shirt",
    price: 212,
    discountPercent: 20,
    imageUrl: "/Assets/greenshirt.png", // Updated path
  },
  {
    _id: "8",
    name: "Courage Graphic T-Shirt",
    price: 145,
    discountPercent: 0,
    imageUrl: "/Assets/tshirt.png", // Updated path
  },
  {
    _id: "9",
    name: "Loose Fit Bermuda Short",
    price: 80,
    discountPercent: 0,
    imageUrl: "/Assets/shorts.png", // Updated path
  },
];

function Casual() {
  return (
    <main className="max-w-screen-2xl mx-auto my-6">
      <div className="mx-4">
        <h3>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <Link
                  className="hover:underline cursor-pointer"
                  href="http://localhost:3000"
                >
                  Home
                </Link>
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
                  <Link
                    className="hover:underline cursor-pointer"
                    href="http://localhost:3000"
                  >
                    Casual
                  </Link>
                </div>
              </li>
            </ol>
          </nav>
        </h3>
      </div>

      <div className="flex ">
        <SideBar />

        <div className="w-3/4">
          {" "}
          <div className="flex justify-between ">
            <h4 className="sm:text-lg ml-6 md:text-3xl font-semibold">
              Casual
            </h4>

            <span className="flex items-center  ">
              Showing 1-10 of 100 Products Sorted By: <b>Most Popular</b>
              <RiArrowDropDownLine className="text-3xl" />
            </span>
          </div>{" "}
          {/* cards */}
          <div className=" grid grid-cols-1 lg:grid-cols-3 grid-rows-3">
            {" "}
            {data.map((item) => {
              return (
                <div
                  key={item._id}
                  className="max-w-sm dark:bg-gray-800 rounded-lg hover:scale-90"
                >
                  <Image
                    className="p-8 rounded-t-lg"
                    src={product.imageUrl} // Updated path
                    alt="product image"
                    width={350}
                    height={320}
                  />
                  <div className="px-5 pb-5">
                    <a href="#">
                      <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white">
                        {product.name}
                      </h5>
                    </a>
                    <div className="flex items-center mt-2.5 mb-2">
                      <Ratings />
                    </div>
                    <div className="text-2xl font-bold text-black">
                      ${item.price}
                      {item.oldPrice && (
                        <span className="text-lg font-medium text-gray-400 line-through dark:text-white ml-2">
                          ${item.oldPrice}
                        </span>
                      )}
                      {item.discountPercent > 0 && (
                        <span className="text-sm text-red-300 border bg-red-100 rounded-full px-2">
                          -{item.discountPercent}%
                        </span>
                      )}
                    </div>
                    <AddToCartButton
                    
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center mb-6">
            <nav aria-label="Page navigation example">
              <Link href={"../AllProducts"}>
                <ul className="inline-flex -space-x-px text-sm">
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      Previous
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      aria-current="page"
                      className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    >
                      3
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      4
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      5
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      Next
                    </a>
                  </li>
                </ul>
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </main>
  );
}

export default Casual;
