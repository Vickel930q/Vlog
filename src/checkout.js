import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { v4 as uuidv4 } from 'uuid';

export async function Checkpage({lineItems}) {
  let stripePromise = null

  const getStripe = () => {
    if(!stripePromise){
      stripePromise=loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

    }
    return stripePromise
  }

  const stripe = await getStripe()

  await stripe.redirectToCheckout({
    mode:"payment",
    lineItems: lineItems,
    successUrl: "http://localhost:3000/home",
    cancelUrl: window.location.origin

  })

  const sessionId = uuidv4(); // Generate a UUID for the session

  console.log('Session ID:', sessionId); // Log the UUID for tracking
    
 
}

// "use client"
// import React, { useEffect } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import { v4 as uuidv4 } from 'uuid';

// const Checkpage = ({ lineItems }) => {
//   useEffect(() => {
//     const redirectToCheckout = async () => {
//       let stripePromise = null;

//       const getStripe = () => {
//         if (!stripePromise) {
//           stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
//         }
//         return stripePromise;
//       };

//       const stripe = await getStripe();

//       const sessionId = uuidv4(); // Generate a UUID for the session
//       console.log('Session ID:', sessionId); // Log the UUID for tracking

//       try {
//         const { error } = await stripe.redirectToCheckout({
//           mode: 'payment',
//           lineItems: lineItems,
//           successUrl: 'http://localhost:3000/home',
//           cancelUrl: window.location.origin,
//         });

//         if (error) {
//           console.error('Error redirecting to checkout:', error);
//           // Handle error, e.g., show an alert to the user
//         }
//       } catch (error) {
//         console.error('Error redirecting to checkout:', error);
//         // Handle any unexpected errors
//       }
//     };

//     redirectToCheckout();
//   }, [lineItems]);

//   return (
//     <div>
//       {/* You can add any JSX content here if needed */}
//     </div>
//   );
// };

// export default Checkpage;
