import React, { useState, useEffect, Suspense, lazy } from "react";
import productData from "../data/products.json";

// OPTIMIZATION 1: Lazy load the component for the individual product cards.
const ProductTemplate = lazy(() => import("../components/ProductTemplate"));

// This is a new component to show while data is loading.
const ProductSkeleton = () => (
  <div className="w-full animate-pulse">
    <div className="w-full bg-gray-200 aspect-square rounded-lg"></div>
    <div className="h-4 bg-gray-200 rounded-md mt-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded-md mt-2 w-1/2"></div>
  </div>
);

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // OPTIMIZATION 2: Simulate an API call to fetch data.
    // This allows us to show a loading state.
    const timer = setTimeout(() => {
      setProducts(productData);
      setLoading(false);
    }, 1000); // Simulate a 1-second network delay

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div className="pt-20 sm:pt-16 md:pt-20 lg:pt-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 w-full flex flex-col items-center gap-8 sm:gap-10 md:gap-12">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[dosis] text-center leading-tight sm:leading-tight md:leading-tight lg:leading-tight text-[var(--dark-purple)]">
        Youthiapa Collection
      </h1>
      <div className="products grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full">
        {loading
          ? // Show 8 skeleton placeholders while loading
            Array.from({ length: 8 }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))
          : // Once loaded, map over the products and render them
            products.map((product) => (
              // OPTIMIZATION 3: Use Suspense for the lazy-loaded component
              <Suspense key={product.id} fallback={<ProductSkeleton />}>
                <ProductTemplate productDetails={product} />
              </Suspense>
            ))}
      </div>
    </div>
  );
};

export default Products;
