'use client'

import EmptyCart from '@/app/components/cart/EmptyCart';
import { useCart } from '@/app/context/CartContext';
import { APP_URL } from '@/app/utils/constant';
import { useState } from 'react';
import { CiLock } from "react-icons/ci";

const Checkout = () => {
    const { cart } = useCart();
    const [loading, setLoading] = useState(false)

    const handleCheckout = async () => {
        setLoading(true)

        await fetch(APP_URL + "/api/checkout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ products: cart }),
        })
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                if (response.url) {
                    window.location.href = response.url;
                }
            }).finally(() => {
                setLoading(false)
            });
    }

    return cart.length === 0 ? <EmptyCart /> : (
        <div className="w-full mx-auto p-6 text-gray-700">
            <div class="-mx-3 md:flex items-start">
                <div class="px-3 md:w-7/12 lg:pr-10">
                    <div class="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                        {cart.map(item => (
                            <div key={item.id} class="w-full flex items-center">
                                <div class="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
                                    <img src={item.image} alt="" />
                                </div>
                                <div class="flex-grow pl-3 pr-5">
                                    <h6 class="font-semibold uppercase text-gray-600">{item.title}</h6>
                                    <p class="text-gray-400">x {item.quantity}</p>
                                </div>
                                <div>
                                    <span class="font-semibold text-gray-600 text-xl">${item.price * item.quantity}</span>
                                </div>
                            </div>
                        ))}

                    </div>
                    <div class="mb-6 pb-6 border-b border-gray-200 text-gray-800">
                        <div class="w-full flex mb-3 items-center">
                            <div class="flex-grow">
                                <span class="text-gray-600">Subtotal</span>
                            </div>
                            <div class="pl-3">
                                <span class="font-semibold">{cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</span>
                            </div>
                        </div>
                        <div class="w-full flex items-center text-gray-600">
                            <div class="flex-grow">
                                <span class="text-gray-600">Taxes</span>
                            </div>
                            <div class="pl-3">
                                <span class="font-semibold">$0.00</span>
                            </div>
                        </div>
                        <div class="w-full flex items-center text-gray-600">
                            <div class="flex-grow">
                                <span class="text-gray-600">Delivery charge</span>
                            </div>
                            <div class="pl-3">
                                <span class="font-semibold">$0.00</span>
                            </div>
                        </div>
                    </div>
                    <div class="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
                        <div class="w-full flex items-center">
                            <div class="flex-grow">
                                <span class="text-gray-600">Total</span>
                            </div>
                            <div class="pl-3">
                                <span class="font-bold text-gray-700 text-sm">{cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</span>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={handleCheckout}
                        disabled={loading}
                        className="btn bg-blue-400 rounded-full p-2 w-full text-white font-semibold flex justify-center items-center gap-2">
                        <span className='font-black'><CiLock /></span>
                        <span>{loading ? "Loading..." : "Pay now"}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
