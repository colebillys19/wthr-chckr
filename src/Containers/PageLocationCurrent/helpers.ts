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
}: getTodayDataArrPropsType) => {
  let todayPrecDataArr = [];

  if (!!todayRain) {
    todayPrecDataArr.push({ label: "Rain volume", value: `${todayRain} mm` });
  }

  if (!!todaySnow) {
    todayPrecDataArr.push({ label: "Snow volume", value: `${todaySnow} mm` });
  }

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
      value: `${todayPop * 100}%`,
    },
  ];

  if (!!todayPrecDataArr.length) {
    todayDataArr.push(...todayPrecDataArr);
  }

  todayDataArr.push({ label: "Avg. humidity", value: `${todayHumidity}%` });

  return todayDataArr;
};
