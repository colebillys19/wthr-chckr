import { useMemo, useState } from "react";

import { Spinner } from "../../ComponentsBase";
import EnterLocationContainer from "./EnterLocationContainer";

type SetLocationFlowPropsType = {
  isModal?: boolean;
};

function SetLocationFlow({ isModal = false }: SetLocationFlowPropsType) {
  const [isEnteringLocation, setIsEnteringLocation] = useState(false);
  const [isGeolocating, setIsGeolocating] = useState(false);
  const [isVerifyingAddress, setIsVerifyingAddress] = useState(false);

  const showSpinner = useMemo(
    () => isGeolocating || isVerifyingAddress,
    [isGeolocating, isVerifyingAddress]
  );

  return (
    <div className="relative">
      <EnterLocationContainer
        isEnteringLocation={isEnteringLocation}
        isGeolocating={isGeolocating}
        isVerifyingAddress={isVerifyingAddress}
        setIsEnteringLocation={setIsEnteringLocation}
        setIsGeolocating={setIsGeolocating}
        setIsVerifyingAddress={setIsVerifyingAddress}
        isModal={isModal}
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
