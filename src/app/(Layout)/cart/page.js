'use client'

import CartItem from "@/app/components/cart/CartItem";
import EmptyCart from "@/app/components/cart/EmptyCart";
import { useCart } from "@/app/context/CartContext";
import Link from "next/link";

const Cart = () => {
  const { cart } = useCart();

  return (
    <div className="w-full mx-auto p-6 text-gray-700">
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div>
          {cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}

          <div className="mt-8">
            <p className="text-xl font-semibold">
              Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
            </p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out">
              <Link href={'/checkout'}>Checkout</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
