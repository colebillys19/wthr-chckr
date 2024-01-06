import { MouseEvent } from "react";

type EnterLocationDefaultProps = {
  setIsCoordsEntry: (value: boolean) => void;
  setIsEnteringLocation: (value: boolean) => void;
};

function EnterLocationDefault({
  setIsCoordsEntry,
  setIsEnteringLocation,
}: EnterLocationDefaultProps) {
  const handleEnterCoords = (e: MouseEvent) => {
    e.preventDefault();
    setIsCoordsEntry(true);
  };

  const handleBack = (e: MouseEvent) => {
    e.preventDefault();
    setIsEnteringLocation(false);
  };

  return (
    <div>
      EnterLocationDefault
      <div>
        <a onClick={handleEnterCoords} href="#">
          enter exact coordinates
        </a>
      </div>
      <div>
        <a onClick={handleBack} href="#">
          back
        </a>
      </div>
    </div>
  );
}

export default EnterLocationDefault;
