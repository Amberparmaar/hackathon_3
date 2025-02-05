import { client } from "@/sanity/lib/client";
import { allProductsQuery } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Ratings from "../Components/Ratings";
import AddToCartButton from "../Components/AddToCartButton";

interface Product {
  _id: string;
  name: string;
  slug: string;
  price: number;
  oldPrice: number;
  discountPercent: number;
  imageUrl: string;
  sizes: string;
  colors: string;
}

export default async function AllProducts() {
  const products = await client.fetch<Product[]>(allProductsQuery);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-center lg:text-5xl md:text-4xl text-3xl font-extrabold text-black mt-10 mb-8">
        All Products
      </h1>

      <div className="max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        {products.map((product) => (
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
            <h2 className="mt-2 text-base md:text-lg font-semibold tracking-tight text-gray-900">
              {product.name}
            </h2>

            <div className="mt-2 mb-2">
              <Ratings />
            </div>

            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-2">
                <span className="text-lg font-bold">${product.price}</span>
                {product.oldPrice && (
                  <span className="text-gray-500 line-through">
                    ${product.oldPrice}
                  </span>
                )}
              </div>
              {product.discountPercent && (
                <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {product.discountPercent}% OFF
                </span>
              )}
            </div>

            <div className="mt-4">
              <AddToCartButton
                productId={product._id}
                productName={product.name}
                productPrice={product.price}
                productImage={product.imageUrl}
                productSize={product.sizes}
                productColor={product.colors}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
