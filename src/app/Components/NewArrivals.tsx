
import { client } from "@/sanity/lib/client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Ratings from "./Ratings";
import AddToCartButton from "./AddToCartButton";

interface Product {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  price: number;
  oldPrice?: number;
  discountPercent?: number;
  imageUrl: string;
  sizes:string;
  colors: string;
}

export default async function NewArrivals() {
  const data = await client.fetch<Product[]>(`*[_type == "products"] [0...4] {
    _id,
    name,
    slug,
    price,
    oldPrice,
    discountPercent,
    "imageUrl": image.asset->url
  }`);

  return (
    <div>
      <h3 className="text-center lg:text-5xl md:text-4xl text-3xl font-extrabold hover:scale-125 text-black mt-10">
        NEW ARRIVALS
      </h3>

      <div className="max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5 p-4">
        {data.map((product: Product, index: number) => (
          <div
            key={product._id}
            className="p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Link href={`/Products/${product._id}`}>
              <div className="w-full aspect-square">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={250}
                  height={250}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </Link>
            <h1 className="mt-2 text-base md:text-lg font-semibold tracking-tight text-gray-900">
              {product.name}
            </h1>

            <Ratings />

            {index % 2 === 0 ? (
              <div className="mt-2 text-lg font-bold text-black">
                ${product.price}
              </div>
            ) : (
              <div className="mt-2 flex flex-wrap items-center gap-2 text-sm md:text-base">
                <h1 className="font-bold text-black">${product.price}</h1>
                {product.oldPrice && (
                  <span className="font-medium text-gray-400 line-through">
                    ${product.oldPrice}
                  </span>
                )}
                {product.discountPercent && (
                  <p className="text-red-500 bg-red-100 rounded-full px-2">
                    {product.discountPercent}%
                  </p>
                )}
              </div>
            )}

            <AddToCartButton 
             productId={product._id}
             productName={product.name}
             productPrice={product.price}
             productImage={product.imageUrl}
             productSize={product.sizes}
             productColor={product.colors}/>
          </div>
        ))}
      </div>

      <Link href="/AllProducts">
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black px-12 py-2 rounded-full font-bold hover:scale-125 border-2 border-gray-300">
            View All
          </button>
        </div>
      </Link>
    </div>
  );
}
