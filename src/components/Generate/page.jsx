"use client"
import { useState } from 'react';

const GenerateTrackingNumberPage = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [packageName, setPackageName] = useState('');
  const [packageWeight, setPackageWeight] = useState(0);
  const [packageDimensions, setPackageDimensions] = useState({
    length: 0,
    width: 0,
    height: 0,
  });

  const handleGenerateTrackingNumber = () => {
    const trackingNumberFormat = 'TRK######';
    const randomNumber = Math.floor(Math.random() * 1000000);
    const trackingNumberGenerated = trackingNumberFormat.replace('######', randomNumber.toString());

    setTrackingNumber(trackingNumberGenerated);
  };

  const handlePackageNameChange = (e) => {
    setPackageName(e.target.value);
  };

  const handlePackageWeightChange = (e) => {
    setPackageWeight(e.target.value);
  };

  const handlePackageDimensionsChange = (e) => {
    const { name, value } = e.target;
    setPackageDimensions((prevDimensions) => ({ ...prevDimensions, [name]: value }));
  };

  return (
    <div>
      <h1>Generate Tracking Number</h1>
      <form>
        <label>
          Package Name:
          <input type="text" value={packageName} onChange={handlePackageNameChange} />
        </label>
        <br />
        <label>
          Package Weight (kg):
          <input type="number" value={packageWeight} onChange={handlePackageWeightChange} />
        </label>
        <br />
        <label>
          Package Dimensions (cm):
          <input
            type="number"
            name="length"
            value={packageDimensions.length}
            onChange={handlePackageDimensionsChange}
          />
          x
          <input
            type="number"
            name="width"
            value={packageDimensions.width}
            onChange={handlePackageDimensionsChange}
          />
          x
          <input
            type="number"
            name="height"
            value={packageDimensions.height}
            onChange={handlePackageDimensionsChange}
          />
        </label>
        <br />
        <button type="button" onClick={handleGenerateTrackingNumber}>
          Generate Tracking Number
        </button>
      </form>
      {trackingNumber && (
        <p>
          Your tracking number is: <strong>{trackingNumber}</strong>
        </p>
      )}
    </div>
  );
};

export default GenerateTrackingNumberPage;