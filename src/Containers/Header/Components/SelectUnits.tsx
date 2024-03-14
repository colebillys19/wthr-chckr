import { useContext } from "react";

import { UnitTypeContext } from "../../../contexts/unitTypeContext";
import useUpdateUnitType from "../../../utils/customHooks/useUpdateUnitType";

function SelectUnits() {
  const { unitType } = useContext(UnitTypeContext);

  const updateUnitType = useUpdateUnitType();

  const handleUnitClick = (type: string) => {
    updateUnitType(type);
  };

  return (
    <>
      <span>
        Units:&nbsp;
        <button
          onClick={() => handleUnitClick("imperial")}
          disabled={unitType === "imperial"}
        >
          Imperial
        </button>
        &nbsp;|&nbsp;
        <button
          onClick={() => handleUnitClick("metric")}
          disabled={unitType === "metric"}
        >
          Metric
        </button>
      </span>
    </>
  );
}

export default SelectUnits;
