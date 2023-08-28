import express from 'express';
import Stripe from 'stripe';
import dotenv from "dotenv";
dotenv.config();

const stripe = Stripe(process.env.STRIPE_KEY);

const router = express.Router();

router.post("/create-checkout-session", async (req, res) => {
   
  const line_items = req.body.cartItems.map(item => {
    const priceInInteger = parseInt((item.price.cost)*100);
  
    return {
      price_data: {
        currency: "inr",
        product_data: {
          name: item.title.longTitle, 
          images: [item.url], 
          metadata: {
            id: item.id
          },
        },
        unit_amount: priceInInteger,
      },
      quantity: item.quantity,
    };
  });

  try {
    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/checkout-success`,
      cancel_url: `${process.env.CLIENT_URL}/cart`,
    });

    res.send({ url: session.url });
  } catch (error) {
    // Handle the error properly, you might want to log it or send an appropriate response
    console.error("Stripe Error:", error);
    res.status(500).send("An error occurred while processing your request.");
  }
});

export default router;
