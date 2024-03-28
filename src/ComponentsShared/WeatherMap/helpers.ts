import {
  getOffsetTimeMs,
  getDayHoursMinutes,
  getTimeStandard,
  getTimeMilitary,
} from "../../utils/helperHelpers";

type GetMapTimePropsType = {
  radarLayerTime: number;
  timezoneOffsetSec: number;
  timeType: string;
  useDeviceTime?: boolean;
};

/*
 *
 */
export const getMapTime = ({
  radarLayerTime,
  timezoneOffsetSec,
  timeType,
  useDeviceTime,
}: GetMapTimePropsType) => {
  const timeToUse = useDeviceTime
    ? radarLayerTime * 1000
    : getOffsetTimeMs(radarLayerTime, timezoneOffsetSec);
  const { hours, minutes } = getDayHoursMinutes(timeToUse);
  const time =
    timeType === "standard"
      ? getTimeStandard(hours, minutes)
      : getTimeMilitary(hours, minutes);
  return time;
};
