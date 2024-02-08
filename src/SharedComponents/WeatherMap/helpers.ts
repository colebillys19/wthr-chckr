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

/*
 *
 */
export const tempGetTime = (timeSec: number) => {
  const date = new Date(timeSec * 1000);
  const timeString = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZoneName: "short",
  }).format(date);
  return timeString;
};
