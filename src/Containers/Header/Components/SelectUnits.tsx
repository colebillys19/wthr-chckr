import { MouseEvent } from "react";

function SelectUnits() {
  const handleUnitClick = (e: MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <span>
        Units:&nbsp;
        <button onClick={handleUnitClick}>Imperial</button>
        &nbsp;|&nbsp;
        <button onClick={handleUnitClick}>Metric</button>
      </span>
    </div>
  );
}

export default SelectUnits;
