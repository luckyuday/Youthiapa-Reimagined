import React from "react";
import productData from "../data/products.json";
const Products = () => {
  console.log(productData);
  return (
    <div className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 w-full flex flex-col items-center gap-8 sm:gap-10 md:gap-12">
      <h1 className="text-[2rem] font-[dosis]">Youthiapa collection</h1>
    </div>
  );
};

export default Products;
