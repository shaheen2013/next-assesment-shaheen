import { APP_URL, STRIPE_SECRET_KEY } from "@/app/utils/constant";
import { NextResponse } from "next/server";

const stripe = require("stripe")(STRIPE_SECRET_KEY);

const getActiveProducts = async () => {
    const checkProducts = await stripe.products.list();
    const availableProducts = checkProducts.data.filter(
        (product) => product.active === true
    );
    return availableProducts;
};

export const POST = async (request) => {
    const { products } = await request.json();
    const data = products;

    let activeProducts = await getActiveProducts();

    console.log(activeProducts, data)

    try {
        for (const product of data) {
            const stripeProduct = activeProducts?.find(
                stripeProduct =>
                    stripeProduct?.name?.toLowerCase() == product?.title?.toLowerCase()?.trim()
            );

            if (stripeProduct == undefined) {

                const prod = await stripe.products.create({
                    name: product.title,
                    default_price_data: {
                        unit_amount: product.price * 100,
                        currency: "usd",
                    },
                });
            }
        }
    } catch (error) {
        console.error("Error in creating a new product", error);
        throw error;
    }

    activeProducts = await getActiveProducts();
    let stripeItems = [];

    for (const product of data) {
        const stripeProduct = activeProducts?.find(
            (prod) => prod?.name?.toLowerCase() == product?.title?.toLowerCase()?.trim()
        );

        if (stripeProduct) {
            stripeItems.push({
                price: stripeProduct?.default_price,
                quantity: product?.quantity,
            });
        }
    }

    const session = await stripe.checkout.sessions.create({
        line_items: stripeItems,
        mode: "payment",
        success_url: APP_URL +  "/success",
        cancel_url: APP_URL +  "/cancel",
    });

    return NextResponse.json({ url: session.url });
};