import CartItem from "@/components/CartItem";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cart = () => {
  return <div className="w-full md:py-20">
<Wrapper>
    {/* heading and parahgraph start */}
    <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
        <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">Shopping Cart</div>
    </div>
    {/* heading and parahgraph End */}
{/* Crat content Start */}
<div className="flex flex-col lg-flex-row gap-12 py-10">
<CartItem/>

</div>
{/* Crat content End */}
</Wrapper>

  </div>;
};

export default Cart;
