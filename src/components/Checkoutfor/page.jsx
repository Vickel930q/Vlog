// // components/CheckoutForm.js
// "use client"
// import React, { useState } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import Swal from 'sweetalert2';

// const CheckoutForm = ({ handleCheckoutSuccess }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [processing, setProcessing] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setProcessing(true);

//     if (!stripe || !elements) {
//       // Stripe.js has not loaded yet
//       return;
//     }

//     const cardElement = elements.getElement(CardElement);
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card: cardElement,
//     });

//     if (error) {
//       setError(error.message);
//       setProcessing(false);
//     } else {
//       // Send paymentMethod.id to your server for processing the payment
//       const response = await fetch('/api/payment', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ paymentMethodId: paymentMethod.id }),
//       });

//       const paymentResult = await response.json();

//       if (paymentResult.error) {
//         setError(paymentResult.error);
//         setProcessing(false);
//       } else {
//         Swal.fire({
//           title: 'Order Successful!',
//           text: 'Thank you for your purchase.',
//           icon: 'success'
//         }).then(() => {
//           handleCheckoutSuccess();
//         });
//       }
//     }
//   };

//   return (
//     <div  className="checkout-container">

//     <form className="checkout-form" onSubmit={handleSubmit}>
//       <CardElement  className="StripeElement"  />
//       {error && <div className="error">{error}</div>}
//       <button disabled={processing || !stripe} type="submit">
//         {processing ? 'Processing…' : 'Pay'}
//       </button>
//     </form>
//     </div>
//   );
// };

// export default CheckoutForm;
