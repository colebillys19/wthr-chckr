import { WeatherSvg } from "../../../SharedComponentsAux";

type WeatherDisplayWidePropsType = {
  svdId: number;
  isDayTime: boolean;
  time: string;
  temp: string;
  weatherName: string;
  feelsLike: string;
  windSpeed: string;
  precChance: string;
  rainVolume: string;
  snowVolume: string;
  humidity: string;
};

function WeatherDisplayWide({
  svdId,
  isDayTime,
  time,
  temp,
  weatherName,
  feelsLike,
  windSpeed,
  precChance,
  rainVolume,
  snowVolume,
  humidity,
}: WeatherDisplayWidePropsType) {
  //

  return (
    <div
      className="inline-flex items-center"
      style={{ outline: "1px solid black" }}
    >
      <WeatherSvg id={svdId} isDayTime={isDayTime} size={100} />
      <div className="flex flex-col">
        <span className="text-xl font-bold">{time}</span>
        <span>{temp}</span>
        <span>{weatherName}</span>
      </div>
      <div className="flex flex-col">
        <span>
          <span className="text-grey-a">Feels like:</span>
          &nbsp;
          <span>{feelsLike}</span>
        </span>
        <span>
          <span className="text-grey-a">Wind speed:</span>
          &nbsp;
          <span>{windSpeed}</span>
        </span>
        <span>
          <span className="text-grey-a">Chance of precipitation:</span>
          &nbsp;
          <span>{precChance}</span>
        </span>
        {!!rainVolume && (
          <span>
            <span className="text-grey-a">Rain volume:</span>
            &nbsp;
            <span>{rainVolume}</span>
          </span>
        )}
        {!!snowVolume && (
          <span>
            <span className="text-grey-a">Snow volume:</span>
            &nbsp;
            <span>{snowVolume}</span>
          </span>
        )}
        <span>
          <span className="text-grey-a">Humidity:</span>
          &nbsp;
          <span>{humidity}</span>
        </span>
      </div>
    </div>
  );
}

export default WeatherDisplayWide;
