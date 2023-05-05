import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";

export default function Home() {
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
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
        {/* Product grid End */}

      </Wrapper>
    </main>
  );
}
