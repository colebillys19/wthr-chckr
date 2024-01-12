import { CSSProperties, useState } from "react";

import EnterLocation from "./Components/EnterLocation";
import SetLocationOptions from "./Components/SetLocationOptions";

const tempStyles: CSSProperties = { opacity: 0.1 };

function SetLocationFlow() {
  const [isEnteringLocation, setIsEnteringLocation] = useState(false);
  const [isGeolocating, setIsGeolocating] = useState(false);
  const [isVerifyingAddress, setIsVerifyingAddress] = useState(false);

  return (
    <div style={isGeolocating || isVerifyingAddress ? tempStyles : {}}>
      {isEnteringLocation ? (
        <EnterLocation setIsEnteringLocation={setIsEnteringLocation} setIsVerifyingAddress={setIsVerifyingAddress} />
      ) : (
        <SetLocationOptions setIsEnteringLocation={setIsEnteringLocation} setIsGeolocating={setIsGeolocating} />
      )}
    </div>
  );
}

export default SetLocationFlow;
