import { geocoderLocationTypes, daysOfWeek } from "./constants";

/*
 *
 */
export const getPreferredLocationNameData = (
  results: google.maps.GeocoderResult[]
) => {
  const data: Record<string, string> = {};

  geocoderLocationTypes.forEach((locationType) => {
    // const res = results.find((result) => result.types.includes(locationType));
    if (!!results.length) {
      const obj = results[0].address_components.find((result) =>
        result.types.includes(locationType)
      );
      if (locationType === "country") {
        if (obj?.long_name) {
          data[locationType] = obj?.long_name;
        }
      } else {
        if (obj?.short_name) {
          data[locationType] = obj?.short_name;
        }
      }
    }
  });
  return data;
};

/*
 *
 */
export const getOffsetTimeMs = (
  dtSec: number,
  apiTimezoneOffsetSec: number
) => {
  const systemTimezoneOffsetSec = new Date().getTimezoneOffset() * 60;
  const utcMs = (dtSec + systemTimezoneOffsetSec) * 1000;
  const apiOffsetMs = apiTimezoneOffsetSec * 1000;
  return utcMs + apiOffsetMs;
};

/*
 *
 */
export const getDayHoursMinutes = (localTimeMs: number) => {
  const localTimeDate = new Date(localTimeMs);
  return {
    day: daysOfWeek[localTimeDate.getDay()],
    hours: localTimeDate.getHours(),
    minutes: localTimeDate.getMinutes(),
  };
};

/*
 *
 */
export const getTimeStandard = (hours: number, minutes: number) =>
  `${hours % 12 || 12}:${minutes < 10 ? "0" : ""}${minutes} ${
    hours < 12 ? "AM" : "PM"
  }`;

/*
 *
 */
export const getTimeMilitary = (hours: number, minutes: number) =>
  `${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}`;

/*
 *
 */
export const decodeHtmlEntities = (str: string) => {
  const parser = new DOMParser();
  const dom = parser.parseFromString(
    "<!doctype html><body>" + str,
    "text/html"
  );
  return dom.body.textContent;
};
