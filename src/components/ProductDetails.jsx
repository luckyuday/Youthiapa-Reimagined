import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productData from "../data/products.json";

// A skeleton loader component that EXACTLY mimics your original layout.
const ProductDetailSkeleton = () => (
  <div className="pt-[4rem] px-4 md:px-8 lg:px-16 flex flex-col md:flex-row font-[dosis] gap-6 md:gap-12 lg:gap-20 max-w-7xl mx-auto animate-pulse">
    {/* Image Skeleton */}
    <div className="w-full md:w-1/2 flex-shrink-0">
      <div className="w-full aspect-square bg-gray-200 rounded-lg shadow-md"></div>
    </div>
    {/* Details Skeleton */}
    <div className="flex flex-col gap-4 md:gap-6 w-[full] justify-center md:w-1/2 lg:w-3/5">
      <div className="h-10 sm:h-12 lg:h-14 bg-gray-200 rounded-md w-3/4"></div>
      <div className="flex flex-row justify-between items-center w-full">
        <div className="h-5 sm:h-6 bg-gray-200 rounded-md w-1/4"></div>
        <div className="h-6 sm:h-7 bg-gray-200 rounded-md w-1/3"></div>
      </div>
      <div className="space-y-2 mt-2">
        <div className="h-4 bg-gray-200 rounded-md w-full"></div>
        <div className="h-4 bg-gray-200 rounded-md w-full"></div>
        <div className="h-4 bg-gray-200 rounded-md w-2/3"></div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center w-full mt-4 gap-4 sm:gap-6">
        <div className="h-12 bg-gray-200 rounded-xl w-full sm:w-auto flex-grow"></div>
        <div className="h-12 bg-gray-200 rounded-xl w-full sm:w-auto flex-grow"></div>
      </div>
    </div>
  </div>
);

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data for a single product
    const timer = setTimeout(() => {
      const foundProduct = productData.find((p) => p.id == id);
      setProduct(foundProduct);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return <ProductDetailSkeleton />;
  }

  if (!product) {
    return (
      <div className="pt-[4rem] px-4 md:px-8 lg:px-16 text-center text-xl font-dosis">
        Product not found.
      </div>
    );
  }

  // NOTE: Your original code used property names like `imageURL` and `productName`.
  // I'm using those here to match your code exactly. Make sure they exist in your `products.json`.
  return (
    <div className="pt-[4rem] px-4 md:px-8 lg:px-16 flex flex-col md:flex-row font-[dosis] gap-6 md:gap-12 lg:gap-20 max-w-7xl mx-auto">
      {/* Product Image Section */}
      <div className="w-full md:w-1/2 flex-shrink-0">
        <img
          src={product.imageURL}
          alt={product.productName}
          loading="lazy"
          className="w-full aspect-square object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Product Details Section (Your original styling is preserved) */}
      <div className="flex flex-col gap-4 md:gap-6 w-[full] justify-center md:w-1/2 lg:w-3/5">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight text-center md:text-left font-semibold">
          {product.productName}
        </h1>

        <div className="flex flex-row justify-between items-center sm:items-start w-full gap-2 sm:gap-0">
          <h4 className="text-base sm:text-lg font-normal">
            {product.availability}
          </h4>
          <h4 className="text-xl sm:text-2xl font-semibold ">
            Rs. {product.price}
          </h4>
        </div>

        <p className="text-sm sm:text-base font-light font-[Outfit] leading-relaxed">
          {product.description}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center w-full mt-4 gap-4 sm:gap-6">
          <button className="bg-[var(--coral)] px-6 py-3 rounded-xl text-base sm:text-lg text-[var(--seasalt)] w-full sm:w-auto hover:opacity-90 transition-opacity duration-200">
            Buy now
          </button>
          <button className="bg-[var(--mountbatten-pink)] px-6 py-3 rounded-xl text-base sm:text-lg text-[var(--seasalt)] w-full sm:w-auto hover:opacity-90 transition-opacity duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
