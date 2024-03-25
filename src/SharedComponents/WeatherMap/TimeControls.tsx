import { useMemo } from "react";

import PrevIcon from "../../svg/iconSvgs/Components/Prev";
import PlayIcon from "../../svg/iconSvgs/Components/Play";
import NextIcon from "../../svg/iconSvgs/Components/Next";
import { getMapTime } from "./helpers";

type TimeControlsPropsType = {
  radarLayerTime: number;
  timezoneOffsetSec: number;
  timeType: string;
  useDeviceTime: boolean;
  timezoneName: string;
  handlePrevClick: () => void;
  handlePlayPauseClick: () => void;
  handleNextClick: () => void;
};

function TimeControls({
  radarLayerTime,
  timezoneOffsetSec,
  timeType,
  useDeviceTime,
  timezoneName,
  handlePrevClick,
  handlePlayPauseClick,
  handleNextClick,
}: TimeControlsPropsType) {
  const mapTime = useMemo(
    () =>
      getMapTime({
        radarLayerTime,
        timezoneOffsetSec,
        timeType,
        useDeviceTime,
      }),
    [radarLayerTime, timezoneOffsetSec, timeType, useDeviceTime]
  );

  if (radarLayerTime === -1) {
    return <div className="h-11">loading</div>;
  }

  return (
    <div className="h-11">
      <div className="flex items-center gap-8">
        <button onClick={handlePrevClick}>
          <PrevIcon />
        </button>
        <button onClick={handlePlayPauseClick}>
          <PlayIcon />
        </button>
        <button onClick={handleNextClick}>
          <NextIcon />
        </button>
        <div>
          <span>{mapTime}</span>
          {timezoneName && <span>{` (${timezoneName})`}</span>}
        </div>
      </div>
    </div>
  );
}

export default TimeControls;
