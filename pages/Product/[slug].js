import ProductDeatilsCarousel from "@/components/ProductDeatilsCarousel";
import RelatedProduct from "@/components/RelatedProduct";
import Wrapper from "@/components/Wrapper";
import { addToCart } from "@/store/cardSlice";
import { fetchDataFromApi } from "@/utils/api";
import { getDiscountPrice } from "@/utils/helper";
import React, { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Productdetails = ({ product, products }) => {
  const [selectedSize, setSelectedSize] = useState();
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();
  const p = product?.data?.[0]?.attributes;

  const nofify =()=>{
    toast.success('success , check your Cart', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }

  return (
    <div className="w-full md:py-20">
      <ToastContainer/>
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* Left column start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDeatilsCarousel images={p.image.data} />
          </div>
          {/* Left column End */}

          {/* Right column start */}
          <div className="flex-[1] py-3">
            {/* Product Title */}
            <div className="text-[34px] font-semibold mb-2 leading-tight">{p.name}</div>

            {/* Product SubTitle */}
            <div className="text-lg font-semibold mb-5">
              {product?.data?.[0]?.attributes?.subtitle}
            </div>

            {/*Product Price  */}
            <div>
              <div className="p-3 text-black/[0.9]">
                <h2 className="text-lg font-medium">{p.name}</h2>
                <div className="flex items-center text-black/[0.5]">
                  <p className="mr-2 text-lg font-semibold">&#8377;{p.price}</p>

                  {p.orignal_price && (
                    <>
                      <p className="text-base  font-medium line-through">
                        &#8377;{p.orignal_price}
                      </p>
                      <p className="ml-auto text-base font-medium text-green-500">
                        {getDiscountPrice(p.orignal_price, p.price)} %off
                      </p>
                    </>
                  )}
                </div>
              </div>
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
            <div id="sizesGrid" className="grid grid-cols-3 gap-2">
              {p.size.data.map((item, i) => (
                <div
                  key={i}
                  className={`border rounded-md text-center py-3 font-medium ${
                    item.enabled
                      ? "hover:border-black cursor-pointer"
                      : "cursor-not-allowed bg-black/[0.1] opacity-50"
                  } ${selectedSize === item.size ? "border-black" : ""}`}
                  onClick={() => {
                    setSelectedSize(item.size);
                    setShowError(false);
                  }}
                >
                  {item.size}
                </div>
              ))}
            </div>
            {/* Size End */}

            {/* Show Error Start */}
            {showError && (
              <div className="text-red-600 mt-1">
                size Selection is required
              </div>
            )}
            {/* product size range end */}

            {/* add to cart button start */}
            <button
              className="w-full py-4 mt-10 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opicity-75"
              onClick={() => {
               if (!selectedSize){
                setShowError(true);
                document.getElementById("sizesGrid").scrollIntoView({
                  block: "center",
                  behavior: "smooth",
                });
              }else{
                dispatch(addToCart({...product?.data?.[0],selectedSize,oneQuantityPrice:p.price,}))
                nofify() 
              }
              }}
            >
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
              {product?.data?.[0]?.attributes?.description}
            </div>
            {/* Product details End */}
          </div>

          {/* Right column End */}
        </div>
        <RelatedProduct products={products} />
      </Wrapper>
    </div>
  );
};
export default Productdetails;

export async function getStaticPaths() {
  const products = await fetchDataFromApi("/api/Products?populate=*");
  const paths = products?.data?.map((p) => ({
    params: {
      slug: p.attributes.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const product = await fetchDataFromApi(
    `/api/Products?populate=*&filters[slug][$eq]=${slug}`
  );
  const products = await fetchDataFromApi(
    `/api/Products?populate=*&[filters][slug][$ne]=${slug}`
  );

  return {
    props: {
      product,
      products,
    },
  };
}
