import {
  getLocalTimeMs,
  getDayHoursMinutes,
  getTimeStandard,
  getTimeMilitary,
} from "../../utils/helperHelpers";

/*
 *
 */
export const getMapTime = (
  timestampSec: number,
  timezoneOffsetSec: number,
  timeType: string
) => {
  const localTimeMs = getLocalTimeMs(timestampSec, timezoneOffsetSec);
  const { hours, minutes } = getDayHoursMinutes(localTimeMs);
  const time =
    timeType === "standard"
      ? getTimeStandard(hours, minutes)
      : getTimeMilitary(hours, minutes);
  return time;
};
