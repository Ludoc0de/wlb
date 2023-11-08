const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// const YOUR_DOMAIN = "http://localhost:3000/";
const YOUR_DOMAIN = "https://wlb.onrender.com/";

module.exports = {
  memoryPayment: async (req, res) => {
    YOUR_DOMAIN;
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: "price_1Looa6E79bJvVWvwUI5q0fGO",
          quantity: 1,
        },
      ],
      mode: "payment",
      allow_promotion_codes: true,
      success_url: `${YOUR_DOMAIN}?success=true`,
      cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    });
    res.redirect(303, session.url);
  },
  // testPayement
  // memoryPayment: async (req, res) => {
  //   YOUR_DOMAIN;
  //   const session = await stripe.checkout.sessions.create({
  //     line_items: [
  //       {
  //         price: "price_1Looa6E79bJvVWvwUI5q0fGO",
  //         quantity: 1,
  //       },
  //     ],
  //     mode: "payment",
  //     allow_promotion_codes: true,
  //     success_url: `${YOUR_DOMAIN}?success=true`,
  //     cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  //   });
  //   res.redirect(303, session.url);
  // },
};
