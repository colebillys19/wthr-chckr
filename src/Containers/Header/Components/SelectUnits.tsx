import { useCallback, useContext, useMemo } from "react";

import { UnitTypeContext } from "../../../contexts/unitTypeContext";
import useUpdateUnitType from "../../../utils/customHooks/useUpdateUnitType";
import { LinkButton } from "../../../BaseComponents";

function SelectTime() {
  const { unitType } = useContext(UnitTypeContext);

  const updateTimeType = useUpdateUnitType();

  const buttonText = useMemo(() => {
    const otherFormat = unitType === "imperial" ? "metric" : "imperial";
    return `Switch to ${otherFormat} units`;
  }, [unitType]);

  const handleClick = useCallback(() => {
    const newType = unitType === "imperial" ? "metric" : "imperial";
    updateTimeType(newType);
  }, [unitType]);

  return <LinkButton handleClick={() => handleClick()} text={buttonText} />;
}

export default SelectTime;
