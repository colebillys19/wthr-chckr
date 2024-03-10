import { useGlobalState } from "../../../context";
import { WeatherSvg } from "../../../SharedComponentsAux";
import { HourlyType } from "../../../utils/types/openWeatherMap";
import { getTimeData } from "../../../utils/helpers";

type WeatherDisplayPropsType = {
  data: HourlyType;
  timezoneOffset: number;
  sunrise: number;
  sunset: number;
};

function WeatherDisplay({
  data,
  timezoneOffset,
  sunrise,
  sunset,
}: WeatherDisplayPropsType) {
  const { unitType, timeType } = useGlobalState();

  const { dt, temp, feels_like, weather, humidity, wind_speed, rain, snow } =
    data;

  const { time, isDayTime } = getTimeData({
    dtSec: dt,
    apiTimezoneOffsetSec: timezoneOffset,
    sunriseSec: sunrise,
    sunsetSec: sunset,
    timeType,
  });

  const tempUnit = unitType === "imperial" ? "°F" : "°C";
  const windUnit = unitType === "imperial" ? "mph" : "m/s";

  const dataArr = [
    { label: "Temperature", value: `${Math.round(temp)}${tempUnit}` },
    { label: "Feels like", value: `${Math.round(feels_like)}${tempUnit}` },
    { label: "Wind speed", value: `${Math.round(wind_speed)}${windUnit}` },
    { label: "Humidity", value: `${humidity}%` },
  ];

  if (rain && rain["1h"]) {
    dataArr.push({ label: "Rain (inches)", value: `${rain["1h"]}` });
  }

  if (snow && snow["1h"]) {
    dataArr.push({ label: "Snow (inches)", value: `${snow["1h"]}` });
  }

  return (
    <div>
      <div>
        <b>{time}</b>
      </div>
      <div className="spacer" />
      <div>
        <WeatherSvg id={weather[0].id} isDayTime={isDayTime} size={120} />
      </div>
      <div className="spacer" />
      <div>{weather[0].main}</div>
      <div className="spacer" />
      <ul>
        {dataArr.map(({ label, value }) => (
          <li key={label}>
            <span>{label}:&nbsp;</span>
            <b>{value}</b>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeatherDisplay;
