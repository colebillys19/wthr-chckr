import { MouseEvent, useState } from "react";

import EnterLocationDefault from "./EnterLocationDefault";
import EnterLocationCoords from "./EnterLocationCoords";

type EnterLocationProps = {
  setIsEnteringLocation: (value: boolean) => void;
  setIsVerifyingAddress: (value: boolean) => void;
};

function EnterLocation({
  setIsEnteringLocation,
  setIsVerifyingAddress,
}: EnterLocationProps) {
  const [isCoordsEntry, setIsCoordsEntry] = useState(false);

  return (
    <>
      {isCoordsEntry ? (
        <EnterLocationCoords
          setIsCoordsEntry={setIsCoordsEntry}
          setIsVerifyingAddress={setIsVerifyingAddress}
        />
      ) : (
        <EnterLocationDefault
          setIsCoordsEntry={setIsCoordsEntry}
          setIsEnteringLocation={setIsEnteringLocation}
          setIsVerifyingAddress={setIsVerifyingAddress}
        />
      )}
    </>
  );
}

export default EnterLocation;
