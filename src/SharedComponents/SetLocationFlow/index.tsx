import { useState } from "react";

import EnterLocation from "./EnterLocation";
import SetLocationOptions from "./SetLocationOptions";

function SetLocationFlow() {
  const [isEnteringLocation, setIsEnteringLocation] = useState(false);
  const [isGeolocating, setIsGeolocating] = useState(false);
  const [isVerifyingAddress, setIsVerifyingAddress] = useState(false);

  // isGeolocating || isVerifyingAddress ? tempStyles : {}

  return (
    <div>
      {isEnteringLocation ? (
        <EnterLocation
          setIsEnteringLocation={setIsEnteringLocation}
          setIsVerifyingAddress={setIsVerifyingAddress}
        />
      ) : (
        <SetLocationOptions
          setIsEnteringLocation={setIsEnteringLocation}
          setIsGeolocating={setIsGeolocating}
        />
      )}
    </div>
  );
}

export default SetLocationFlow;
