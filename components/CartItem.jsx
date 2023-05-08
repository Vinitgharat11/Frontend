import React from "react";

const CartItem = () => {
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/* image start */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]"></div>
      <img src="product-1.webp" alt="img" />
      {/* image End */}
      <div className="w-full flex flex-xol">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Product title */}
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8] ">
            jordan retro 6 G
          </div>
          {/* Product title */}
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8] block md:hidden ">
            Men&apos;s Golf Shoes
          </div>
          {/* Product Price */}
          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2 ">
            MRP :$ 19659.00
          </div>
          {/* Product title */}
          <div className="text-MD md:text-medium  font-semibold text-black/[0.5] block  ">
            Men&apos;s Golf Shoes
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default CartItem;
