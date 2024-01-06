import { MouseEvent } from "react";

type EnterLocationCoordsProps = {
  setIsCoordsEntry: (value: boolean) => void;
};

function EnterLocationCoords({ setIsCoordsEntry }: EnterLocationCoordsProps) {
  const handleBack = (e: MouseEvent) => {
    e.preventDefault();
    setIsCoordsEntry(false);
  };

  return (
    <div>
      EnterLocationCoords
      <div>
        <a onClick={handleBack} href="#">
          back
        </a>
      </div>
    </div>
  );
}

export default EnterLocationCoords;
