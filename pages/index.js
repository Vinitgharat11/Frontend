import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import {  fetchDataFromApi } from "@/utils/api";
import { useEffect } from "react";
import { useState } from "react";

export default function Home({products}) {
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // const fetchProducts = async () => {
  //   const { data } = await fetchDataFromApi("/api/products");
  //   setData(data);
  // };

  return (
    <main>
      <HeroBanner />
      <Wrapper>
        {/* Heading and Paragraph start */}

        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Cushining for Your Miles
          </div>
          <div className="text-md md:text-xl">
            A lightweight Nike Zoomx Midsole is combined with increase stack
            heights to help Provide cushining during extended straches of
            running
          </div>
        </div>
        {/* Heading and Paragraph end */}

        {/* Product grid Start */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-col-3 gap-5 my-14 px-5 md:px-0">
          {products?.data.map((product)=>(
            <ProductCard key={product?.id} data={product}/>
          ))}
          {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
        </div>
        {/* Product grid End */}
      </Wrapper>
    </main>
  );
}
export async function getStaticProps() {
  const products = await fetchDataFromApi("/api/products?populate=*");

  return {
      props: { products },
  };
}