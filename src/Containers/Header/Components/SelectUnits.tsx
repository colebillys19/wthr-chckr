import { useGlobalState } from "../../../context";
import { useUpdateUnitType } from "../../../utils/customHooks/localStorage";

function SelectUnits() {
  const { unitType } = useGlobalState();

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
