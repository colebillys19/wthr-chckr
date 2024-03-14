import { useContext } from "react";

import { TimeTypeContext } from "../../../contexts/timeTypeContext";
import { useUpdateTimeType } from "../../../utils/customHooks/localStorage";

function SelectTime() {
  const { timeType } = useContext(TimeTypeContext);

  const updateTimeType = useUpdateTimeType();

  const handleTimeClick = (type: string) => {
    updateTimeType(type);
  };

  return (
    <>
      <span>
        Time Type:&nbsp;
        <button
          onClick={() => handleTimeClick("standard")}
          disabled={timeType === "standard"}
        >
          Standard
        </button>
        &nbsp;|&nbsp;
        <button
          onClick={() => handleTimeClick("military")}
          disabled={timeType === "military"}
        >
          Military
        </button>
      </span>
    </>
  );
}

export default SelectTime;
