type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type Minutely = {
  dt: number;
  precipitation: number;
};

export type OpenWeatherMapDataType = {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: {
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
    wind_deg: number;
    weather: Weather[];
  };
  minutely: Minutely[];
};
