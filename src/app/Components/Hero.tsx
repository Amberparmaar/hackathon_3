import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <Image
        className="absolute inset-0 object-cover w-full h-full"
        src="/Assets/heropic.png"
        alt="Fashion Image"
        layout="fill"
        priority
      />

      {/* Overlay */}
      <div className="relative z-10 bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
        <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center text-center md:text-left">
          {/* Text Content */}
          <div className="md:w-1/2 max-w-xl space-y-6 text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight transition-transform duration-300 hover:scale-105">
              FIND CLOTHES <br />
              THAT MATCHES <br />
              YOUR STYLE
            </h1>
            <p className="text-base sm:text-lg">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <Link href="/AllProducts">
              <button className="bg-white text-black px-10 py-3 rounded-full transition-transform duration-300 hover:scale-105 text-lg sm:text-xl font-bold">
                Shop Now
              </button>
            </Link>

            {/* Stats Section */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold transition-transform duration-300 hover:scale-105">200+</h2>
                <p className="font-bold">International Brands</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold transition-transform duration-300 hover:scale-105">2,000+</h2>
                <p className="font-bold">High-Quality Products</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold transition-transform duration-300 hover:scale-105">30,000+</h2>
                <p className="font-bold">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

