import { useGlobalState } from "../../../context";
import { useUpdateTimeType } from "../../../utils/customHooks/localStorage";

function SelectTime() {
  const { timeType } = useGlobalState();

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
