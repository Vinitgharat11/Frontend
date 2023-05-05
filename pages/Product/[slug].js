import Wrapper from "@/components/Wrapper";
import React from "react";

const Productdetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {/* Left column start */}
        <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
          Left
        </div>
        {/* Left column End */}

        {/* Right column start */}
        <div className="flex-[1] py-3">Right</div>
        {/* Right column End */}
      </Wrapper>
    </div>
  );
};

export default Productdetails;
