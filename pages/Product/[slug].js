import ProductDeatilsCarousel from "@/components/ProductDeatilsCarousel";
import RelatedProduct from "@/components/RelatedProduct";
import Wrapper from "@/components/Wrapper";
import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";

const Productdetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* Left column start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDeatilsCarousel />
          </div>
          {/* Left column End */}

          {/* Right column start */}
          <div className="flex-[1] py-3">
            {/* Product Title */}
            <div className="text-[34px] font-semibold mb-2">
              Jordan Retro 6 G
            </div>

            {/* Product SubTitle */}
            <div className="text-lg font-semibold mb-5">
              Men&apos;s Golf Shoes
            </div>

            {/*Product Price  */}
            <div className="text-lg font-semibold">MRP: $19695.00</div>
            <div className="text-md: font-mediumi text-black/[0.5]">
              Incl.of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(also includes all application duties)`}
            </div>

            {/* Product Size range start */}
            <div className="mb-10">
              {/* Heading Start */}
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold ">Select size</div>
              </div>
              <div className="text-md font-medium text-black/[0.5]">
                Select Guide
              </div>
            </div>
            {/* Heading End */}

            {/* Size Start */}
            <div className="grid grid-cols-3 gap-2">
              <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                Uk - 6
              </div>
              <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                Uk - 6
              </div>
              <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                Uk - 6
              </div>
              <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                Uk - 6
              </div>
              <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                Uk - 6
              </div>
              <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                Uk - 6
              </div>
              <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                Uk - 6
              </div>
            </div>
            {/* Size End */}

            {/* Show Error Start */}
            <div className="text-red-600 mt-1">size Selection is required</div>
            {/* product size range end */}

            {/* add to cart button start */}
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opicity-75">
              {" "}
              Add to cart
            </button>
            {/* add to cart button end */}
            {/* wishlist button Start */}
            <button className="w-full  py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opicity-75 mb-10">
              {" "}
              whishlist
              <IoMdHeartEmpty size={20} />
            </button>
            {/* wishlist button end */}
            {/* Product details start */}
            <div className="text-lg font-bold mb-5 ">Product Details</div>
            <div className="text-md mb-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit,
              reprehenderit dolorem voluptatibus iure quis temporibus beatae
              magnam tempora non adipisci totam, amet id modi sit hic quia quae
              doloribus illum? Assumenda provident quae ex esse. Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Dolore quod
              architecto placeat possimus impedit aspernatur voluptatibus
              quisquam eum recusandae. Facere ad, cupiditate, quod temporibus
              reiciendis eaque aperiam debitis voluptate inventore, nulla
              consequatur maxime nesciunt molestias? Officia, quidem quibusdam,
              mollitia consequuntur culpa deleniti beatae ipsum alias quas esse
              recusandae! Sit magni assumenda dolore quaerat! Enim, dolore?
            </div>
            {/* Product details End */}
          </div>

          {/* Right column End */}
        </div>
        <RelatedProduct/>
      </Wrapper>
    </div>
  );
};

export default Productdetails;
