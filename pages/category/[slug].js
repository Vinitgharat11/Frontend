import ProductCard from '@/components/ProductCard'
import Wrapper from '@/components/Wrapper'
import React from 'react'
const Category = () => {
  return (
    <div>
      <Wrapper>
        <div className='text-center max-w-[800px] mx-auto mt-8 md:mt-0 '>
<div className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight'> Running Shoes</div>
        </div>
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
    </div>
  )
}

export default Category
