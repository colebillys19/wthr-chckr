import { MouseEvent, useState } from "react";

import EnterLocationDefault from "./EnterLocationDefault";
import EnterLocationCoords from "./EnterLocationCoords";

type EnterLocationProps = {
  setIsEnteringLocation: (value: boolean) => void;
};

function EnterLocation({ setIsEnteringLocation }: EnterLocationProps) {
  const [isCoordsEntry, setIsCoordsEntry] = useState(false);

  return (
    <>
      {isCoordsEntry ? (
        <EnterLocationCoords setIsCoordsEntry={setIsCoordsEntry} />
      ) : (
        <EnterLocationDefault setIsCoordsEntry={setIsCoordsEntry} setIsEnteringLocation={setIsEnteringLocation} />
      )}
      
    </>
  );
}

export default EnterLocation;
