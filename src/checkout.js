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

  // const sessionId = uuidv4(); // Generate a UUID for the session

  // console.log('Session ID:', sessionId); // Log the UUID for tracking
    
 
}


