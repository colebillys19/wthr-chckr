import { useState } from "react";

import EnterLocation from "./EnterLocation";
import SetLocationOptions from "./SetLocationOptions";

function SetLocation() {
  const [isEnteringLocation, setIsEnteringLocation] = useState(false);

  return isEnteringLocation ? (
    <EnterLocation setIsEnteringLocation={setIsEnteringLocation} />
  ) : (
    <SetLocationOptions setIsEnteringLocation={setIsEnteringLocation} />
  );
}

export default SetLocation;
