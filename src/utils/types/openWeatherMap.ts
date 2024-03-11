type NumObjType = {
  [key: string]: number;
};

export type WeatherType = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type CurrentType = {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  rain?: NumObjType;
  snow?: NumObjType;
  wind_deg: number;
  weather: WeatherType[];
};

export type TemperatureType = {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
};

export type FeelsLikeType = {
  day: number;
  night: number;
  eve: number;
  morn: number;
};

export type DailyType = {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  summary: string;
  temp: TemperatureType;
  feels_like: FeelsLikeType;
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: WeatherType[];
  clouds: number;
  pop: number;
  rain: number;
  snow: number;
  uvi: number;
};

export type HourlyType = {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: WeatherType[];
  pop: number;
  rain: NumObjType;
  snow: NumObjType;
};

export type MinutelyType = {
  dt: number;
  precipitation: number;
};

export type OpenWeatherMapDataType = {
  current: CurrentType;
  daily: DailyType[];
  hourly: HourlyType[];
  lat: number;
  lon: number;
  minutely: MinutelyType[];
  timezone_offset: number;
  timezone: string;
};
