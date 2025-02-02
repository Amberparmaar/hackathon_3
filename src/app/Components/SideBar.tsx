'use client';
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";
import { GiCircle } from "react-icons/gi";

export default function Sidebar() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([10, 100]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState("");
  const [showPriceFilter, setShowPriceFilter] = useState(true);
  const [showColorFilter, setShowColorFilter] = useState(true);
  const [showSizeFilter, setShowSizeFilter] = useState(true);

interface PriceRange {
    min: number;
    max: number;
}

interface Filters {
    category: string;
    priceRange: PriceRange;
    colors: string[];
    size: string;
}

const toggleSelection = (value: string, state: string[], setter: React.Dispatch<React.SetStateAction<string[]>>): void => {
    const isSelected = state.includes(value);
    if (isSelected) {
        setter(state.filter((item) => item !== value));
    } else {
        setter([...state, value]);
    }
};

  return (
    <div className="w-1/4 border border-gray-200 p-5 rounded-xl m-5 hidden lg:block">
      <h4 className="text-2xl font-semibold">Filters</h4>
      <hr className="border-t-1 border-gray-200 my-4" />
      <ul className="space-y-2 text-gray-500">
        {["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map((item) => (
          <li
            key={item}
            className="flex justify-between cursor-pointer"
            onClick={() => setSelectedCategory(item)}
          >
            {item} <MdKeyboardArrowRight />
          </li>
        ))}
      </ul>
      <hr className="border-t-1 border-gray-200 my-4" />
      <h2
        className="flex justify-between text-xl font-semibold cursor-pointer"
        onClick={() => setShowPriceFilter(!showPriceFilter)}
      >
        Prices {showPriceFilter ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
      </h2>
      {showPriceFilter && (
        <div className="mt-4">
          <input
            type="range"
            min="10"
            max="100"
            value={priceRange[0]}
            onChange={(e) =>
              setPriceRange([Number(e.target.value), priceRange[1]])
            }
            className="w-full"
          />
          <input
            type="range"
            min="10"
            max="100"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], Number(e.target.value)])
            }
            className="w-full mt-2"
          />
          <p className="text-sm text-gray-500">
            Price: ${priceRange[0]} - ${priceRange[1]}
          </p>
        </div>
      )}
      <hr className="border-t-1 border-gray-200 my-4" />
      <h2
        className="flex justify-between text-xl font-semibold cursor-pointer"
        onClick={() => setShowColorFilter(!showColorFilter)}
      >
        Colors {showColorFilter ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
      </h2>
      {showColorFilter && (
        <div className="flex flex-wrap gap-2 mt-4">
          {["green", "red", "yellow", "orange", "blue", "purple", "pink", "white", "black"].map(
            (color) => (
              <GiCircle
                key={color}
                className={`w-[27px] h-[27px] rounded-full cursor-pointer ${
                  selectedColors.includes(color)
                    ? `ring-2 ring-offset-2 ring-${color}-500`
                    : `bg-${color}-500`
                }`}
                onClick={() =>
                  toggleSelection(color, selectedColors, setSelectedColors)
                }
              />
            )
          )}
        </div>
      )}
      <hr className="border-t-1 border-gray-200 my-4" />
      <h2
        className="flex justify-between text-xl font-semibold cursor-pointer"
        onClick={() => setShowSizeFilter(!showSizeFilter)}
      >
        Sizes {showSizeFilter ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
      </h2>
      {showSizeFilter && (
        <div className="grid grid-cols-2 gap-2 mt-4">
          {["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large"].map(
            (size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`text-gray-900 border border-gray-300 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "bg-[#F0F0F0] hover:bg-gray-100"
                }`}
              >
                {size}
              </button>
            )
          )}
        </div>
      )}
      <hr className="border-t-1 border-gray-200 my-4" />
      <div className="flex justify-center">
        <button
          type="button"
          className="text-white bg-[#050708] font-medium rounded-full text-sm px-20 py-3"
          onClick={() => {
            console.log({
              category: selectedCategory,
              priceRange,
              colors: selectedColors,
              size: selectedSize,
            });
          }}
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}
