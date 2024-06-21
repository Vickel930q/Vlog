// "use client";
// import { useState } from 'react';

// export default function Tracking() {
//   const [trackingNumber, setTrackingNumber] = useState('');
//   const [trackingDetails, setTrackingDetails] = useState(null);
//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     setTrackingNumber(e.target.value);
//   };

//   const isValidTrackingNumber = (number) => {
//     // Add your tracking number validation logic here
//     return true; // Replace with your validation logic
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setTrackingDetails(null);

//     if (!isValidTrackingNumber(trackingNumber)) {
//       setError('Invalid tracking number');
//       return;
//     }

//     try {
//       const response = await fetch(`/api/track?number=${trackingNumber}`);
//       const contentType = response.headers.get("content-type");
//       if (!contentType ||!contentType.includes("application/json")) {
//         throw new Error("Invalid response from server");
//       }

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message);
//       }

//       const data = await response.json();
//       setTrackingDetails(data);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Track Your Shipment</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Tracking Number:</label>
//           <input
//             type="text"
//             name="trackingNumber"
//             value={trackingNumber}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Track</button>
//       </form>

//       {error && <p style={{ color: 'ed' }}>{error}</p>}
//       {trackingDetails && (
//         <div>
//           <h2>Tracking Details</h2>
//           <p><strong>Status:</strong> {trackingDetails.status}</p>
//           <p><strong>Location:</strong> {trackingDetails.location}</p>
//           <p><strong>Expected Delivery:</strong> {trackingDetails.expectedDelivery}</p>
//         </div>
//       )}
//     </div>
//   );
// }
"use client"
import React, { useState } from 'react';

const PackageTrackingPage = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingInfo, setTrackingInfo] = useState(null);
  const [error, setError] = useState(null);

  const handleTrackingNumberChange = (e) => {
    setTrackingNumber(e.target.value);
  };

  const handleTrackPackage = async () => {
    try {
      const response = await fetch(`/api/track/${trackingNumber}`); // Replace with your actual API endpoint
      if (!response.ok) {
        throw new Error('Tracking number not found');
      }
      const data = await response.json();
      setTrackingInfo(data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setTrackingInfo(null);
    }
  };

  return (
    <div>
      <h1>Track Package</h1>
      <label>
        Enter Tracking Number:
        <input type="text" value={trackingNumber} onChange={handleTrackingNumberChange} />
      </label>
      <button type="button" onClick={handleTrackPackage}>
        Track Package
      </button>
      {error && <p>{error}</p>}
      {trackingInfo && (
        <div>
          <h2>Tracking Information</h2>
          <p>
            <strong>Tracking Number:</strong> {trackingInfo.trackingNumber}
          </p>
          <p>
            <strong>Status:</strong> {trackingInfo.status}
          </p>
          <p>
            <strong>Location:</strong> {trackingInfo.location}
          </p>
          <p>
            <strong>Estimated Delivery:</strong> {trackingInfo.estimatedDelivery}
          </p>
        </div>
      )}
    </div>
  );
};

export default PackageTrackingPage;
