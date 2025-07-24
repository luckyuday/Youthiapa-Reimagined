import React, { Suspense } from "react";
import productData from "../data/products.json";
import ProductTemplate from "../components/ProductTemplate";

const Products = () => {
  return (
    <Suspense>
      <div className="pt-20 sm:pt-16 md:pt-20 lg:pt-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 w-full flex flex-col items-center gap-8 sm:gap-10 md:gap-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[dosis] text-center leading-tight sm:leading-tight md:leading-tight lg:leading-tight text-[var(--dark-purple)]">
          Youthiapa Collection
        </h1>
        <div className="products grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full">
          {productData.map((e) => {
            return <ProductTemplate key={e.id} productDetails={e} />;
          })}
        </div>
      </div>
    </Suspense>
  );
};

export default Products;
