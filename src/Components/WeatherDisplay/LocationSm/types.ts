import {
  CurrentType,
  DailyType,
  HourlyType,
  MinutelyType,
} from "../../../utils/types/openWeatherMap";

export type LocationSmDataType = {
  current: CurrentType;
  daily: DailyType[];
  hourly: HourlyType[];
  lat: number;
  lon: number;
  minutely: MinutelyType[];
  timezone_offset: number;
  timezone: string;
};