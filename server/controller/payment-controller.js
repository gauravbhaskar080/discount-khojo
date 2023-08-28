// import Stripe from "stripe";

// const YOUR_DOMAIN = 'http://localhost:8000';
// const stripe = Stripe('sk_test_tR3PYbcVNZZ796tH88S4VQ2u');

// export const addPaymentGateway = async (req, res) => {
//     console.log("payment");
//     const session = await stripe.checkout.sessions.create({
//       line_items: [
//         {
//           // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//           price: 10,
//           quantity: 1,
//         },
//       ],
//       mode: 'payment',
//       success_url: `${YOUR_DOMAIN}?success=truer`,
//       cancel_url: `${YOUR_DOMAIN}?canceled=true`,
//     });
  
//     res.redirect(303, session.url);
// }
