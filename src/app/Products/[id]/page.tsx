'use client';
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Ratings from "@/app/Components/Ratings";
import AddToCartButton from "@/app/Components/AddToCartButton";
import { useEffect, useState } from "react";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  discountPercent?: number;
  imageUrl: string;
  colors?: string[];
  sizes?: string[];
}

interface Props {
  params: {
    id: string;
  };
}

export default function ProductDetails({ params }: Props) {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<{ id: string; name: string; price: number; image: string; quantity: number }[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await client.fetch<Product>(
        `*[_type == "products" && _id == $id][0] {
          _id,
          name,
          description,
          price,
          oldPrice,
          discountPercent,
          "imageUrl": image.asset->url,
          colors,
          sizes
        }`,
        { id: params.id }
      );
      setProduct(fetchedProduct);
      if (fetchedProduct?.sizes?.length) {
        setSelectedSize(fetchedProduct.sizes[0]); // Default to first size
      }
      if (fetchedProduct?.colors?.length) {
        setSelectedColor(fetchedProduct.colors[0]); // Default to first color
      }
    };

    fetchProduct();
  }, [params.id]);

  const handleAddToCart = () => {
    if (!product) return;

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === product._id);
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === product._id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      }
      return [...prevItems, { id: product._id, name: product.name, price: product.price, image: product.imageUrl, quantity: 1 }];
    });
  };

  if (!product) {
    return <div>Loading...</div>; // Loading state while fetching product
  }

  return (
    <div className="max-w-screen-2xl flex flex-col lg:flex-row justify-center gap-8 mt-4 mx-auto p-4">
      {/* Product Images Section */}
      <div className="flex flex-col gap-4 w-full lg:w-1/3">
        <div className="relative rounded-lg">
          <Image
            className="rounded-lg w-full"
            src={product.imageUrl}
            alt={product.name}
            width={500}
            height={500}
            priority
          />
        </div>
      </div>

      {/* Product Details Section */}
      <div className="space-y-4 lg:w-2/3">
        <h2 className="sm:text-2xl md:text-3xl lg:text-3xl font-extrabold text-black leading-2">
          {product.name}
        </h2>
        
        <Ratings />

        <div className="text-2xl font-bold text-black">
          ${product.price}{" "}
          {product.oldPrice && (
            <span className="text-xl font-medium text-gray-400 line-through">
              ${product.oldPrice}
            </span>
          )}
        </div>

        <p className="text-sm text-gray-400 max-w-[590px]">
          {product.description || "No description available"}
        </p>

        {/* Sizes Selection */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Select Size:</h3>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 border rounded-md ${
                    selectedSize === size ? "bg-black text-white" : "border-gray-300"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Colors Selection */}
        {product.colors && product.colors.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Select Color:</h3>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  className={`w-10 h-10 rounded-full border-2 ${
                    selectedColor === color ? "border-black" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Add to Cart Button */}
        <AddToCartButton 
           productId={product._id} 
           productName={product.name} 
           productPrice={product.price} 
           productImage={product.imageUrl} 
           onAddToCart={handleAddToCart} 
        />
      </div>
    </div>
  );
}
