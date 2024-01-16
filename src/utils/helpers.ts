import { NameDataType } from './types/geocoder';
import { geocoderLocationTypes, daysOfWeek } from './constants';

export const getLocationNameData = (results: google.maps.GeocoderResult[]) => {
  const dataArr: NameDataType[] = [];

  geocoderLocationTypes.forEach((locationType) => {
    const res = results.find((result) => result.types.includes(locationType));
    const obj = res?.address_components.find((result) =>
      result.types.includes(locationType)
    );
    if (obj?.short_name) {
      dataArr.push({ label: locationType, value: obj?.short_name });
    }
  });

  return dataArr;
};

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

export const getTimeData = (unixTime: number, timezoneOffset: number) => {
  const utcMs = (unixTime + 18000) * 1000; // TODO
  const offsetMs = timezoneOffset * 1000;
  const localTimeMs = utcMs + offsetMs;
  const date = new Date(localTimeMs);
  const day = daysOfWeek[date.getDay()];
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const timeStandard = `${hours % 12 || 12}:${
    minutes < 10 ? "0" : ""
  }${minutes} ${hours < 12 ? "AM" : "PM"}`;
  const timeMilitary = `${hours < 10 ? "0" : ""}${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
  const isDayTime = hours > 6 && hours < 18;
  return { day, timeStandard, timeMilitary, isDayTime };
};

type NumObjType = {
  [key: string]: number;
};

export const getHighLow = (numObj: NumObjType): { high: number; low: number } => {
  const values = Object.keys(numObj).map(key => numObj[key]);

  const high = values.reduce((a, b) => Math.max(a, b));
  const low = values.reduce((a, b) => Math.min(a, b));

  return { high, low };
};
