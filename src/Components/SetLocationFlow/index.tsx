import { useState } from "react";

import EnterLocation from "./Components/EnterLocation";
import SetLocationOptions from "./Components/SetLocationOptions";

function SetLocation() {
  const [isEnteringLocation, setIsEnteringLocation] = useState(false);

  return isEnteringLocation ? (
    <EnterLocation setIsEnteringLocation={setIsEnteringLocation} />
  ) : (
    <SetLocationOptions setIsEnteringLocation={setIsEnteringLocation} />
  );
}

export default SetLocation;
