import { useState } from "react";

import EnterLocationContainer from "./EnterLocationContainer";

function SetLocationFlow() {
  const [isEnteringLocation, setIsEnteringLocation] = useState(false);
  const [isGeolocating, setIsGeolocating] = useState(false);
  const [isVerifyingAddress, setIsVerifyingAddress] = useState(false);

  return (
    <div>
      <EnterLocationContainer
        isEnteringLocation={isEnteringLocation}
        isGeolocating={isGeolocating}
        isVerifyingAddress={isVerifyingAddress}
        setIsEnteringLocation={setIsEnteringLocation}
        setIsGeolocating={setIsGeolocating}
        setIsVerifyingAddress={setIsVerifyingAddress}
      />
      {isGeolocating && <div>geolocating</div>}
      {isVerifyingAddress && <div>verifying address</div>}
    </div>
  );
}

export default SetLocationFlow;
