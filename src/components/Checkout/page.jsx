// components/Checkout.js
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ReactFlagsSelect from "react-flags-select";
import CheckoutForm from "../Checkoutfor/page";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Link from "next/link";

export default function Checkout() {
  let stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );
  const router = useRouter();
  const [planName, setPlanName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    setPlanName(query.get("planName"));
    setPrice(query.get("price"));
  }, []);

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [address, setAddress] = useState('');
  // const [selected, setSelected] = useState("");

  const handleCheckoutSuccess = () => {
    router.push("/home");
  };

  return (
    <>
      <div className="checkout-container">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Checkout</h2>
          <h2 className="mb-4">Order Summary</h2>{" "}
          <p>
            <strong>Plan:</strong> {planName}
          </p>
          <p>
            <strong>Price:</strong> {price}
          </p>{" "}
          {/* <CardElement className="StripeElement" />{" "} */}
          <button type="submit" disabled={!stripe || isLoading}>
            {" "}
            {isLoading ? "Loading..." : "Pay"}
          </button>{" "}
          {isLoading && <div className="loading">Moving to payment</div>}
        </form>
      </div>
    </>
    // <div className="container my-5">
    //   <h1 className="text-center mb-5">Checkout</h1>
    //   <div className="card p-4">
    //     <h2 className="mb-4">Order Summary</h2>
    //     <p><strong>Plan:</strong> {planName}</p>
    //     <p><strong>Price:</strong> {price}</p>

    //     <h2 className="mb-4 mt-5">Billing Information</h2>
    //     <form>
    //       <div className="form-group">
    //         <label htmlFor="name">Name</label>
    //         <input
    //           type="text"
    //           className="form-control"
    //           id="name"
    //           value={name}
    //           onChange={(e) => setName(e.target.value)}
    //           required
    //         />
    //       </div>
    //       <div className="form-group">
    //         <label htmlFor="email">Email</label>
    //         <input
    //           type="email"
    //           className="form-control"
    //           id="email"
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //           required
    //         />
    //       </div>
    //       <div className="form-group">
    //         <label htmlFor="country">Country</label>
    //         <ReactFlagsSelect
    //           selected={selected}
    //           onSelect={(code) => setSelected(code)}
    //           placeholder="Select Country"
    //           searchable
    //           searchPlaceholder="Search Countries"
    //           className="menu-flags"
    //         />
    //       </div>
    //       <div className="form-group">
    //         <label htmlFor="address">Address</label>
    //         <input
    //           type="text"
    //           className="form-control"
    //           id="address"
    //           value={address}
    //           onChange={(e) => setAddress(e.target.value)}
    //           required
    //         />
    //       </div>
    //       <button><Link href="https://buy.stripe.com/test_6oEdSIe43aKDbVS000">Pay Now</Link></button>
    //     </form>
    //   </div>
    // {/* <Elements stripe={stripePromise}>
    //   <CheckoutForm handleCheckoutSuccess={handleCheckoutSuccess} />

    // </Elements> */}
    // </div>
  );
}

// "use client"
// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import axios from 'axios';

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const router = useRouter();
//   const [clientSecret, setClientSecret] = useState('');
//   const [isLoading, setIsLoading] = useState(true);
//   const [planName, setPlanName] = useState('');
//   const [price, setPrice] = useState('');

//   useEffect(() => {
//     const query = new URLSearchParams(window.location.search);
//     setPlanName(query.get('planName'));
//     setPrice(query.get('price'));
//     if (router.isReady && router.query.planName && router.query.price) {
//       const { planName, price } = router.query;
//       console.log('Router is ready:', router.isReady);
//       console.log('Query parameters:', router.query);

//       if (planName && price) {
//         console.log('Creating payment intent for:', planName, price);
//         axios.post('/api/create-payment-intent', {
//           amount: parseFloat(price.replace('$', '').replace('/month', '')),
//         }).then((response) => {
//           console.log('Received client secret:', response.data.clientSecret);
//           setClientSecret(response.data.clientSecret);
//           setIsLoading(false);
//         }).catch(error => {
//           console.error("Error creating payment intent:", error);
//           setIsLoading(false);
//         });
//       } else {
//         console.error('Query parameters are missing');
//         setIsLoading(false);
//       }
//     }
//   }, [router.isReady, router.query]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     const cardElement = elements.getElement(CardElement);

//     const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: cardElement,
//       },
//     });

//     if (error) {
//       console.error(error);
//       alert(error.message);
//     } else if (paymentIntent.status === 'succeeded') {
//       alert('Payment successful!');
//       router.push('/home');
//     }
//   }

//   return (
//     <div className="checkout-container">
//       <form className="checkout-form" onSubmit={handleSubmit}>
//         <h2>Checkout</h2>
//         <h2 className="mb-4">Order Summary</h2>
//         <p><strong>Plan:</strong> {planName}</p>
//         <p><strong>Price:</strong> {price}</p>
//         <CardElement className="StripeElement" />
//         <button type="submit" disabled={!stripe || isLoading}>
//           {isLoading ? 'Loading...' : 'Pay'}
//         </button>
//         {isLoading && <div className="loading">Processing Payment...</div>}
//       </form>
//     </div>
//   );
// };

// const CheckoutPage = () => {
//   return (
//     <Elements stripe={stripePromise}>
//       <CheckoutForm />
//     </Elements>
//   );
// };

// export default CheckoutPage;
