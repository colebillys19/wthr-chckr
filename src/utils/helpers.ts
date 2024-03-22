import {
  getPreferredLocationNameData,
  getOffsetTimeMs,
  getDayHoursMinutes,
  getTimeStandard,
  getTimeMilitary,
} from "./helperHelpers";
import { NumObjType, GetTimeDataPropsType } from "./types/helpers";

/*
 *
 */
export const getFormattedLocationName = (
  results: google.maps.GeocoderResult[]
) => {
  const {
    sublocality,
    locality,
    administrative_area_level_1,
    administrative_area_level_2,
    country,
  } = getPreferredLocationNameData(results);
  if (sublocality) {
    if (administrative_area_level_1) {
      return `${sublocality}, ${administrative_area_level_1}`;
    }
    return sublocality;
  }
  if (locality) {
    if (administrative_area_level_1) {
      return `${locality}, ${administrative_area_level_1}`;
    }
    return locality;
  }
  if (administrative_area_level_2) {
    if (administrative_area_level_1) {
      return `${administrative_area_level_2}, ${administrative_area_level_1}`;
    }
    return administrative_area_level_2;
  }
  if (administrative_area_level_1) {
    if (country) {
      return `${administrative_area_level_1}, ${country}`;
    }
    return administrative_area_level_1;
  }
  if (country) {
    return country;
  }
  return 'Location Name';
};

/*
 *
 */
export const getIsValidCoordinatesStr = (coordsStr: string) => {
  if (!coordsStr.includes(",")) {
    return false;
  }
  const [latStr, lonStr] = coordsStr.split(",");
  const latNum = Number(latStr);
  const lonNum = Number(lonStr);
  if (isNaN(latNum) || isNaN(lonNum)) {
    return false;
  }
  if (latNum > 90 || latNum < -90 || lonNum > 180 || lonNum < -180) {
    return false;
  }
  return true;
};

/*
 *
 */
export const getHighLow = (
  numObj: NumObjType
): { high: number; low: number } => {
  const values = Object.keys(numObj).map((key) => numObj[key]);

  const high = values.reduce((a, b) => Math.max(a, b));
  const low = values.reduce((a, b) => Math.min(a, b));

  return { high, low };
};

/*
 *
 */
export const getTimeData = ({
  dtSec,
  apiTimezoneOffsetSec,
  sunriseSec,
  sunsetSec,
  timeType,
}: GetTimeDataPropsType) => {
  const localTimeMs = getOffsetTimeMs(dtSec, apiTimezoneOffsetSec);
  const { day, hours, minutes } = getDayHoursMinutes(localTimeMs);
  const time =
    timeType === "standard"
      ? getTimeStandard(hours, minutes)
      : getTimeMilitary(hours, minutes);
  //
  let isDayTime = true;
  if (sunriseSec && sunsetSec) {
    if (dtSec < sunriseSec || dtSec > sunsetSec) {
      isDayTime = false;
    }
  }
  return { day, time, isDayTime };
};
