import { getPrecStr } from "../../utils/helpers";

type getTodayDataArrPropsType = {
  todayRain?: number;
  todaySnow?: number;
  todaySunriseTime: string;
  todaySunsetTime: string;
  todayTempMax: number;
  todayTempMin: number;
  todayFeelsLikeHigh: number;
  todayFeelsLikeLow: number;
  todayWindSpeed: number;
  todayPop: number;
  todayHumidity: number;
  tempUnit: string;
  windUnit: string;
  unitType: string;
};

export const getTodayDataArr = ({
  todayRain,
  todaySnow,
  todaySunriseTime,
  todaySunsetTime,
  todayTempMax,
  todayTempMin,
  todayFeelsLikeHigh,
  todayFeelsLikeLow,
  todayWindSpeed,
  todayPop,
  todayHumidity,
  tempUnit,
  windUnit,
  unitType,
}: getTodayDataArrPropsType) => {
  const todayDataArr = [
    { label: "Sunrise", value: todaySunriseTime },
    { label: "Sunset", value: todaySunsetTime },
    {
      label: "Temperature (high)",
      value: `${Math.round(todayTempMax)}${tempUnit}`,
    },
    {
      label: "Temperature (low)",
      value: `${Math.round(todayTempMin)}${tempUnit}`,
    },
    {
      label: "Feels like (high)",
      value: `${Math.round(todayFeelsLikeHigh)}${tempUnit}`,
    },
    {
      label: "Feels like (low)",
      value: `${Math.round(todayFeelsLikeLow)}${tempUnit}`,
    },
    {
      label: "Avg. wind speed",
      value: `${Math.round(todayWindSpeed)}${windUnit}`,
    },
    {
      label: "Chance of precipitation",
      value: `${Math.round(todayPop * 100)}%`,
    },
  ];

  if (!!todayRain) {
    todayDataArr.push({
      label: "Rain volume",
      value: getPrecStr(todayRain, unitType),
    });
  }

  if (!!todaySnow) {
    todayDataArr.push({
      label: "Snow volume",
      value: getPrecStr(todaySnow, unitType),
    });
  }

  todayDataArr.push({ label: "Avg. humidity", value: `${todayHumidity}%` });

  return todayDataArr;
};
