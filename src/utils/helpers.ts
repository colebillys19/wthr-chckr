const locationTypes = [
  "neighborhood",
  "sublocality",
  "locality",
  "administrative_area_level_2",
  "administrative_area_level_1",
  "country",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

type NameDataType = { label: string; value: string }[];

export const getLocationNameData = (results: google.maps.GeocoderResult[]) => {
  const dataArr: NameDataType = [];

  locationTypes.forEach((locationType) => {
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

export const getIsDayTime = (timezoneOffset: number) => {
  const utcDate = new Date().getTime();
  const offsetMilliseconds = timezoneOffset * 1000;
  const localDate = new Date(utcDate + offsetMilliseconds);
  const localHours = localDate.getHours();
  return localHours > 6 && localHours < 18;
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
  const day = days[date.getDay()];
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const timeStandard = `${hours % 12 || 12}:${
    minutes < 10 ? "0" : ""
  }${minutes} ${hours < 12 ? "AM" : "PM"}`;
  const timeMilitary = `${hours < 10 ? "0" : ""}${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
  return { day, timeStandard, timeMilitary };
};
