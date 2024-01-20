import { WeatherSvg } from "../../../SharedComponentsAux";
import { CurrentType } from "../../../utils/types/openWeatherMap";
import { getTimeData } from "../../../utils/helpers";

type WeatherDisplayPropsType = {
  data: CurrentType;
  timezoneOffset: number;
};

function WeatherDisplay({ data, timezoneOffset }: WeatherDisplayPropsType) {
  const { dt, temp, feels_like, weather, humidity, wind_speed } = data;

  const { day, isDayTime, timeStandard } = getTimeData(dt, timezoneOffset);

  const dataArr = [
    { label: "Day/Time", value: `${day}, ${timeStandard}` },
    { label: "Time", value: timeStandard },
    { label: "Temperature", value: temp },
    { label: "Feels like", value: feels_like },
    { label: "Weather", value: weather[0].main },
    { label: "Humidity", value: humidity },
    { label: "Wind speed", value: wind_speed },
  ];

  return (
    <div>
      <ul>
        {dataArr.map(({ label, value }) => (
          <li key={label}>
            <span>{label}:&nbsp;</span>
            <b>{value}</b>
          </li>
        ))}
      </ul>
      <div>
        <WeatherSvg
          id={weather[0].id}
          isDayTime={isDayTime}
          size={120}
        />
      </div>
    </div>
  );
}

export default WeatherDisplay;