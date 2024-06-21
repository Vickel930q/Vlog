// pages/api/payment.js
import Stripe from 'stripe';

const stripe = new Stripe('your-secret-key-here');

export default async function handler (req, res){
  if (req.method === 'POST') {
    const { paymentMethodId } = req.body;

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: 1000, // Amount in cents
        currency: 'usd',
        payment_method: paymentMethodId,
        confirm: true,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};
