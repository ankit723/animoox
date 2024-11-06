import React, { useState, useEffect } from 'react';
import { DummyProduct } from '@/assets/images';
import Image from 'next/image';
import { ViewIcon } from '@/assets/icons/view-icon';
import { ShopIcon } from '@/assets/icons/shop-icon';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { CrossIcon } from '@/assets/icons/cross-icon';

const ProductComponent = ({ price, tag, category, title, description, animationCount, buttonText, productId, addProductToCart, isCartItem=false, removeProductFromCart }:any) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="w-[23rem] bg-[#EBEBEB] shadow-lg rounded-xl mb-5 relative cursor-pointer hover:shadow-2xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative">
        {/* Price Tag */}
        <div className="absolute top-2 left-2 bg-[#E6E6E6] text-gray-800 rounded-full px-3 py-1 text-sm font-normal z-10">
          ${price}
        </div>

        {/* Image Placeholder */}
        <div className="h-80 bg-white rounded-t-lg flex items-center justify-center relative overflow-hidden">
          {/* Product Image */}
          <Image src={DummyProduct} alt="Product" className="max-h-full" />

          {/* Hover Overlay */}
          {hovered && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4 text-lg">
              {/* Replace these with your specific SVGs or icons */}
              {!isCartItem?(
                <>
                  <Link href={`/products-preview/${productId}`}>
                    <ViewIcon />
                  </Link>
                  <div className="" onClick={()=>addProductToCart(productId)}>
                    <ShopIcon />
                  </div>
                </>
              ):(
                <>
                  <div className="" onClick={()=>removeProductFromCart(productId)}>
                    <CrossIcon />
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="px-5 bg-[#EBEBEB] rounded-lg">
        {/* Tags */}
        <div className="flex gap-2 my-4">
          <span className="bg-[#0F0726] text-white px-3 py-1 text-sm font-normal rounded-full">{tag}</span>
          <span className="bg-[#BFCCDC] text-brand px-3 py-1 text-sm font-normal rounded-full">{category}</span>
        </div>

        {/* Title */}
        <h3 className="text-sm font-medium text-[#0F0726] my-4">{title}</h3>

        {/* Animation Count */}
        <div className="flex justify-between items-center mb-7">
          <p className="text-secondary-text">{animationCount} Animations Included</p>

          {/* Buy Now Button */}
          <button className="bg-[#BFCCDC] text-[#0F0726] rounded-full py-2 px-6 font-normal">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
