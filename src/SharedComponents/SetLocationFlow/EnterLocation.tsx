import { useState } from "react";

import EnterLocationDefault from "./EnterLocationDefault";
import EnterLocationCoords from "./EnterLocationCoords";

type EnterLocationPropsType = {
  isVerifyingAddress: boolean;
  setIsEnteringLocation: (value: boolean) => void;
  setIsVerifyingAddress: (value: boolean) => void;
};

function EnterLocation({
  isVerifyingAddress,
  setIsEnteringLocation,
  setIsVerifyingAddress,
}: EnterLocationPropsType) {
  const [isCoordsEntry, setIsCoordsEntry] = useState(false);

  if (isCoordsEntry) {
    return (
      <EnterLocationCoords
        isVerifyingAddress={isVerifyingAddress}
        setIsCoordsEntry={setIsCoordsEntry}
        setIsVerifyingAddress={setIsVerifyingAddress}
      />
    );
  }

  return (
    <EnterLocationDefault
      isVerifyingAddress={isVerifyingAddress}
      setIsCoordsEntry={setIsCoordsEntry}
      setIsEnteringLocation={setIsEnteringLocation}
      setIsVerifyingAddress={setIsVerifyingAddress}
    />
  );
}

export default EnterLocation;
