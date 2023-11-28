import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";

export default function EmptyCart() {
  return (
    <div className="h-screen">
      <div className="bg-white p-6 md:mx-auto">
        <div className="text-6xl flex justify-center mb-2">
            <CiShoppingCart />
        </div>
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Your cart is Empty</h3>
          <p className="text-gray-600 my-2">Start adding favorite items to your cart</p>
          <div className="py-10 text-center">
            <Link href="/" className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-lg">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
