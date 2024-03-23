import { WeatherSvg } from "../../../SharedComponentsAux";

type WeatherDisplayPropsType = {
  currentTime: string;
  svgId: number;
  isDayTime: boolean;
  weatherName: string;
  temp: string;
  feelsLike: string;
  windSpeed: string;
  humidity: string;
  rainVolume: string;
  snowVolume: string;
  dayName: string;
  todaySummary: string;
  todayDataArr: { label: string; value: string }[];
};

function WeatherDisplay({
  currentTime,
  svgId,
  isDayTime,
  weatherName,
  temp,
  feelsLike,
  windSpeed,
  humidity,
  rainVolume,
  snowVolume,
  dayName,
  todaySummary,
  todayDataArr,
}: WeatherDisplayPropsType) {
  //

  return (
    <div>
      <h2>Current</h2>
      <div>
        <h3>{currentTime}</h3>
        <div>
          <WeatherSvg id={svgId} isDayTime={isDayTime} size={120} />
        </div>
        <div>{weatherName}</div>
        <div>Temperature: {temp}</div>
        <div>Feels like: {feelsLike}</div>
        <div>Wind speed: {windSpeed}</div>
        <div>Humidity: {humidity}</div>
        {!!rainVolume && <div>Rain: {rainVolume}</div>}
        {!!snowVolume && <div>Snow: {snowVolume}</div>}
      </div>
      <div>
        <h3>{dayName} Summary</h3>
        <div>{todaySummary}</div>
        <ul>
          {todayDataArr.map(({ label, value }) => (
            <li key={label}>
              <span>{label}:&nbsp;</span>
              {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WeatherDisplay;
