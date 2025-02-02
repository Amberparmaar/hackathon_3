export default interface ProductType {
  imageUrl: string;
  
  name: string;
  image: {
    _type: "image";
    asset: { _ref: string; _type: "reference" };
  };
  discountPercent: number;
  colors: string[];
  sizes: string[];
  _id: string;
  price: number;
  description: string;
  catalog: string;
  isNew: boolean;
}