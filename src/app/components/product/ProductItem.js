'use client'

import { useCart } from '@/app/context/CartContext';
import Link from 'next/link';
import { FaCartPlus } from "react-icons/fa";
import CategoryTitleBadge from '../category/CategoryTitleBadge';

const ProductItem = ({ product }) => {
  const { addToCart, removeFromCart, isProductInCart } = useCart();

  const isProductAddedToCart = isProductInCart(product.id)
  
  return (
    <div key={product.id} className="relative bg-white rounded-lg overflow-hidden shadow-md">
      <div className="flex flex-col justify-between p-4 h-full">
        <div className='relative'>
          <CategoryTitleBadge title={product.category} />
          <Link href={`/product/${product.id}`}>
            <img
              src={product.image}
              alt={product.title}
              className="object-contain w-full h-64"
            />
          </Link>
          <p className="text-lg font-semibold mb-2 text-gray-700">{product.title}</p>
        </div>

        <div className='flex items-center justify-between'>
          <p className="text-gray-500">${product.price}</p>
          <button
            onClick={() => isProductAddedToCart ? removeFromCart(product.id) : addToCart(product)}
            className={`mt-4 py-2 px-2 rounded-md transition duration-300 ease-in-out ${isProductAddedToCart ? "bg-blue-400 text-white" : "hover:bg-gray-200 text-black"}`}>
             <FaCartPlus />
          </button>
        </div>
      </div>
    </div>
  )
};

export default ProductItem;
