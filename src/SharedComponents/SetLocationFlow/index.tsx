import { useState } from "react";

import EnterLocation from "./EnterLocation";
import SetLocationOptions from "./SetLocationOptions";

function SetLocationFlow() {
  const [isEnteringLocation, setIsEnteringLocation] = useState(false);
  const [isGeolocating, setIsGeolocating] = useState(false);
  const [isVerifyingAddress, setIsVerifyingAddress] = useState(false);

  return (
    <div>
      {isEnteringLocation ? (
        <EnterLocation
          isVerifyingAddress={isVerifyingAddress}
          setIsEnteringLocation={setIsEnteringLocation}
          setIsVerifyingAddress={setIsVerifyingAddress}
        />
      ) : (
        <SetLocationOptions
          isGeolocating={isGeolocating}
          setIsEnteringLocation={setIsEnteringLocation}
          setIsGeolocating={setIsGeolocating}
        />
      )}
      {!!isGeolocating && <div>geolocating</div>}
      {!!isVerifyingAddress && <div>verifying address</div>}
    </div>
  );
}

export default SetLocationFlow;
