import { GetServerSideProps, NextApiRequest, NextApiResponse } from "next";
import { useContext } from "react";
import Stripe from "stripe";
import { IgniteShopContext } from "../../contexts/IgniteShopContext";
import { stripe } from "../../lib/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    console.log(`Manjericão: ${JSON.stringify(req.body.productsToCheckout)}`)

    // const { productsToCheckout } = req.body;

    if (req.method !== 'POST') {
        return res.status(405).json({ error: "Method not allowed" });
    }

    if (!req.body.productsToCheckout) {
        return res.status(400).json({ error: "Price not found" });
    }

    const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
    const cancel_url = `${process.env.NEXT_URL}/`

    const checkoutSession = await stripe.checkout.sessions.create({
        success_url: successUrl,
        cancel_url: cancel_url,
        mode: 'payment',
        line_items: req.body.productsToCheckout
    })

    return res.status(201).json({
        checkoutUrl: checkoutSession.url,
    });
}