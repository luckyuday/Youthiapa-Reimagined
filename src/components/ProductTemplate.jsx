import React from "react";
import { Link } from "react-router-dom";

const ProductTemplate = ({ productDetails }) => {
  return (
    <Link
      to={`/products/${productDetails.id}`}
      className="font-[dosis] flex flex-col gap-4 sm:gap-5 border p-3 sm:p-4 border-[var(--dark-green)] rounded-lg group shadow-md hover:shadow-lg transition-shadow duration-300 hover:cursor-pointer"
    >
      <div className="img-container  w-full aspect-square rounded-xl overflow-hidden relative h-full ">
        <img
          src={productDetails.imageURL}
          alt={productDetails.productName}
          loading="lazy"
          className="w-full h-full object-cover brightness-"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xlleading-tight sm:leading-tight text-center font-semibold text-[var(--dark-purple)] ">
            {productDetails.productName.toUpperCase()}
          </h2>
          <h5 className="text-base sm:text-lg md:text-xl font-bold text-right p-5 text-[var(--dark-green)] ">
            Rs. {productDetails.price}
          </h5>
        </div>
        <div className="w-full h-fit flex flex-col sm:flex-row justify-between items-center self-end gap-2 sm:gap-4 mt-4">
          <button
            className="bg-[var(--coral)] text-[var(--seasalt)] px-4 py-2 sm:px-5 sm:py-2.5 rounded-full hover:bg-opacity-90 hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out font-medium text-sm sm:text-base w-full sm:w-1/2
          "
          >
            Buy Now
          </button>
          <button className="bg-[var(--mountbatten-pink)] text-[var(--seasalt)] px-4 py-2 sm:px-5 sm:py-2.5 rounded-full hover:bg-opacity-90 hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out font-medium text-sm sm:text-base w-full sm:w-1/2">
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductTemplate;
