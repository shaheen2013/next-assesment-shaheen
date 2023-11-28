"use client"

import { useCart } from "@/app/context/CartContext";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import CategoryTitleBadge from "../category/CategoryTitleBadge";

const CartItem = ({ item }) => {
    const { incrementQuantity, decrementQuantity, removeFromCart } = useCart();

    return (
        <div key={item.id} className="flex items-center justify-between border-b py-4">
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <CategoryTitleBadge title={item.category} />
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="text-gray-700">${item.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => decrementQuantity(item.id)}
                  disabled={item.quantity === 1}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FaMinus />
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => incrementQuantity(item.id)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FaPlus />
                </button>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:bg-gray-200 p-2 text-xl rounded-full hover:text-red-700">
                  <MdDelete />
                </button>
              </div>
            </div>
    )
}

export default CartItem;