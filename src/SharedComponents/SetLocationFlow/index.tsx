import { useMemo, useState } from "react";

import { Spinner } from "../../SharedComponentsAux";
import EnterLocationContainer from "./EnterLocationContainer";

function SetLocationFlow() {
  const [isEnteringLocation, setIsEnteringLocation] = useState(false);
  const [isGeolocating, setIsGeolocating] = useState(false);
  const [isVerifyingAddress, setIsVerifyingAddress] = useState(false);

  const showSpinner = useMemo(
    () => isGeolocating || isVerifyingAddress,
    [isGeolocating, isVerifyingAddress]
  );

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
      {showSpinner && (
        <div className="absolute flex w-full h-full justify-center items-center top-0 left-0">
          <Spinner />
        </div>
      )}
    </div>
  );
}

export default SetLocationFlow;
