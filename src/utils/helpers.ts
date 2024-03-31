import {
  getPreferredLocationNameData,
  getOffsetTimeMs,
  getDayHoursMinutes,
  getTimeStandard,
  getTimeMilitary,
  decodeHtmlEntities,
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
  return "Location Name";
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

/*
 *
 */
export const parseXmlData = (data: Document) => {
  const rssElement = data.documentElement;
  // const contentNamespace = rssElement.getAttributeNS(
  //   "http://www.w3.org/2000/xmlns/",
  //   "content"
  // );
  const mediaNamespace = rssElement.getAttributeNS(
    "http://www.w3.org/2000/xmlns/",
    "media"
  );
  const items = Array.from(data.querySelectorAll("item"));
  return items.map((item: any) => {
    // const contentEncoded = item.getElementsByTagNameNS(
    //   contentNamespace,
    //   "encoded"
    // );
    // const contentEncodedTextContent = contentEncoded[0]?.textContent;
    const mediaContent = item.getElementsByTagNameNS(mediaNamespace, "content");
    const imgUrl = mediaContent[0]?.getAttribute("url");
    const imgType = mediaContent[0]?.getAttribute("type");
    const categoriesXmlArr = Array.from(item.querySelectorAll("category"));
    const categoriesArr: string[] = [];
    categoriesXmlArr.forEach((catEl: any) => {
      if (catEl) {
        const catStr = catEl.textContent;
        if (catStr.slice(0, 12) === "fox-weather/") {
          categoriesArr.push(catStr.slice(12));
        }
      }
    });
    return {
      title: item.querySelector("title")?.textContent,
      date: item.querySelector("pubDate")?.textContent,
      link: item.querySelector("link")?.textContent,
      // contentEncodedTextContent,
      imgUrl,
      isGif: imgType === "image/gif",
      description: decodeHtmlEntities(
        item.querySelector("description")?.textContent
      ),
      categories: categoriesArr,
    };
  });
};

/*
 *
 */
export const getPrecStr = (precVal: number, unitType: string) => {
  if (unitType === "imperial") {
    const inchesValue = precVal * 0.0394;
    return `${Number(inchesValue.toFixed(2))} in`;
  }
  return `${precVal} mm`;
};

/*
 *
 */
export const getPrecStrHourly = (unitType: string, precObj?: NumObjType) => {
  if (precObj) {
    const precValue = precObj["1h"];
    if (precValue && typeof precValue === "number") {
      if (unitType === "imperial") {
        const inchesValue = precValue * 0.0394;
        return `${Number(inchesValue.toFixed(2))} in/hr`;
      }
      return `${precValue} mm/hr`;
    }
  }
  return "";
};
