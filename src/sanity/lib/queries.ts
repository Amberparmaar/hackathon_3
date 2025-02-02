import { groq } from "next-sanity";

export const topSellingQuery = groq`*[_type == "products"][0...3]`;
export const allProductsQuery = groq`*[_type == "products"] {
  _id,
  name,
  slug,
  price,
  oldPrice,
  discountPercent,
  "imageUrl": image.asset->url
}`;
export const NewArrivalQuery = groq`*[_type == "products"][4...7]`;