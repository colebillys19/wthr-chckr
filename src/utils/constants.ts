export const locationDataEmpty = {
  current: {
    dt: 0,
    sunrise: 0,
    sunset: 0,
    temp: 0,
    feels_like: 0,
    pressure: 0,
    humidity: 0,
    dew_point: 0,
    uvi: 0,
    clouds: 0,
    visibility: 0,
    wind_speed: 0,
    wind_deg: 0,
    weather: [],
  },
  daily: [],
  hourly: [],
  lat: 0,
  lon: 0,
  minutely: [],
  timezone_offset: 0,
  timezone: "",
};

export const geocoderLocationTypes = [
  "neighborhood",
  "sublocality",
  "locality",
  "administrative_area_level_2",
  "administrative_area_level_1",
  "country",
];

export const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
