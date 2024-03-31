import { useCallback, useContext } from "react";

import { UnitTypeContext } from "../../../contexts/unitTypeContext";
import useUpdateUnitType from "../../../utils/customHooks/useUpdateUnitType";
import { LinkButton } from "../../../ComponentsBase";

type SelectUnitsPropsType = {
  handleCloseMenu: () => void;
};

function SelectTime({ handleCloseMenu }: SelectUnitsPropsType) {
  const { unitType } = useContext(UnitTypeContext);

  const updateTimeType = useUpdateUnitType();

  const handleClick = useCallback(() => {
    const newType = unitType === "imperial" ? "metric" : "imperial";
    updateTimeType(newType);
    handleCloseMenu();
  }, [unitType]);

  return <LinkButton handleClick={() => handleClick()} text={`Switch to ${unitType === "imperial" ? "metric" : "imperial"} units`} />;
}

export default SelectTime;
