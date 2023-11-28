"use client";

import { useCart } from '@/app/context/CartContext';
import CategoryTitleBadge from '../category/CategoryTitleBadge';

const ProductDetail = ({ product }) => {
  const { addToCart, isProductInCart } = useCart();

  return (
    <div class="w-full max-w-6xl rounded bg-white p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
      <div class="md:flex items-center -mx-10">
        <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0 shadow-md">
          <div>
            <img
              src={product.image}
              alt={product.title}
              className="object-cover w-full rounded-md"
            />
          </div>
        </div>
        <div class="w-full md:w-1/2 px-10">
          <div class="mb-10">
            <CategoryTitleBadge title={product.category} />
            <h1 class="font-bold uppercase text-2xl mb-5 mt-2">{product.title}</h1>
            <p class="text-sm">{product.description}</p>
          </div>
          <div>
            <div class="inline-block align-bottom mr-5">
              <span class="text-2xl leading-none align-baseline">$</span>
              <span class="font-bold text-5xl leading-none align-baseline">{product.price.toString().split(".")[0]}</span>
              <span class="text-2xl leading-none align-baseline">.{product.price.toString().split(".")[1]}</span>
            </div>
          </div>
          <div class="inline-block align-bottom mt-5 w-full">
              <button 
                onClick={() => addToCart(product)}
                className="bg-indigo-300 opacity-75 hover:opacity-100 text-black hover:text-black rounded-full px-10 py-2 font-semibold w-full"
                disabled={isProductInCart(product.id)}
                >
                  {isProductInCart(product.id) ? 'Added to cart' : "BUY NOW"}
              </button>
            </div>
        </div>
      </div>
    </div>
  )
};

export default ProductDetail;
