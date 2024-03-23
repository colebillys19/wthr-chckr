import { useCallback, useContext, useMemo } from "react";

import { TimeTypeContext } from "../../../contexts/timeTypeContext";
import useUpdateTimeType from "../../../utils/customHooks/useUpdateTimeType";
import { LinkButton } from "../../../BaseComponents";

type SelectTimePropsType = {
  handleCloseMenu: () => void;
};

function SelectTime({ handleCloseMenu }: SelectTimePropsType) {
  const { timeType } = useContext(TimeTypeContext);

  const updateTimeType = useUpdateTimeType();

  const buttonText = useMemo(() => {
    const otherFormat = timeType === "standard" ? "24 hr" : "12 hr";
    return `Switch to ${otherFormat} time`;
  }, [timeType]);

  const handleClick = useCallback(() => {
    const newType = timeType === "standard" ? "military" : "standard";
    updateTimeType(newType);
    handleCloseMenu();
  }, [timeType]);

  return <LinkButton handleClick={() => handleClick()} text={buttonText} />;
}

export default SelectTime;
