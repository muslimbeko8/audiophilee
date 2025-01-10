import React from "react";
import Swipper from "./Swiper";

export default function Hero() {
  return (
    <div>
      <div className="flex justify-center items-center w-full py-8">
        <div className="flex items-center gap-8">
          <div className="border-r-2 pr-8">
            <ul className="p-4 space-y-4">
              <li className="cursor-pointer  flex justify-between items-center">
                Woman's Fashion <span className="pl-3">&#x25B6;</span>
              </li>
              <li className="cursor-pointer flex justify-between items-center">
                Men's Fashion <span>&#x25B6;</span>
              </li>
              <li className="cursor-pointer">Electronics</li>
              <li className="cursor-pointer">Home & Lifestyle</li>
              <li className="cursor-pointer">Medicine</li>
              <li className="cursor-pointer">Sports & Outdoor</li>
              <li className="cursor-pointer">Baby's & Toys</li>
              <li className="cursor-pointer">Groceries & Pets</li>
              <li className="cursor-pointer">Health & Beauty</li>
            </ul>
          </div>
          <Swipper />
        </div>
      </div>
    </div>
  );
}
