import { CSSProperties, useState } from "react";

import { useGlobalState } from "../../context";
import EnterLocation from "./Components/EnterLocation";
import SetLocationOptions from "./Components/SetLocationOptions";

const tempStyles: CSSProperties = { opacity: 0.1 };

function SetLocationFlow() {
  const [isEnteringLocation, setIsEnteringLocation] = useState(false);

  const { isVerifyingAddress } = useGlobalState();

  return (
    <div style={isVerifyingAddress ? tempStyles : {}}>
      {isEnteringLocation ? (
        <EnterLocation setIsEnteringLocation={setIsEnteringLocation} />
      ) : (
        <SetLocationOptions setIsEnteringLocation={setIsEnteringLocation} />
      )}
    </div>
  );
}

export default SetLocationFlow;
