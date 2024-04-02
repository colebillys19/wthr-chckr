import { useMemo } from "react";

import PrevIcon from "../../svg/iconSvgs/Components/Prev";
import PlayIcon from "../../svg/iconSvgs/Components/Play";
import PauseIcon from "../../svg/iconSvgs/Components/Pause";
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
  isIntervalPaused: boolean;
  //
  timezoneFetchFailed: boolean;
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
  isIntervalPaused,
  //
  timezoneFetchFailed,
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
    <div className="h-8">
      <div className="flex items-center gap-8">
        <button onClick={handlePrevClick}>
          <PrevIcon />
        </button>
        <button
          onClick={handlePlayPauseClick}
          className="flex justify-center items-center w-4 h-5"
        >
          {!isIntervalPaused && <PauseIcon />}
          {isIntervalPaused && <PlayIcon />}
        </button>
        <button onClick={handleNextClick}>
          <NextIcon />
        </button>
        {!timezoneFetchFailed && (
          <div className="line-clamp-1">
            <span>{mapTime}</span>
            {timezoneName && <span>{` (${timezoneName})`}</span>}
          </div>
        )}
      </div>
    </div>
  );
}

export default TimeControls;
