import { WeatherSvg } from "../../../SharedComponentsAux";

type WeatherDisplayWidePropsType = {
  dayName: string;
  svgId: number;
  summary: string;
  tempMax: string;
  tempMin: string;
  feelsLikeMax: string;
  feelsLikeMin: string;
  precChance: string;
  windSpeed: string;
  humidity: string;
  rainVolume: string;
  snowVolume: string;
};

function WeatherDisplayWide({
  dayName,
  svgId,
  summary,
  tempMax,
  tempMin,
  feelsLikeMax,
  feelsLikeMin,
  precChance,
  windSpeed,
  humidity,
  rainVolume,
  snowVolume,
}: WeatherDisplayWidePropsType) {
  //

  return (
    <div className="inline-flex" style={{ outline: "1px solid black" }}>
      <div className="flex flex-col items-end">
        <span className="text-xl font-bold">{dayName}</span>
        <WeatherSvg id={svgId} isDayTime={true} size={60} />
        <span>{summary}</span>
      </div>
      <div className="flex flex-col">
        <span>
          <span className="text-grey-a">Temperature (high):</span>
          &nbsp;
          <span>{tempMax}</span>
        </span>
        <span>
          <span className="text-grey-a">Temperature (low):</span>
          &nbsp;
          <span>{tempMin}</span>
        </span>
        <span>
          <span className="text-grey-a">Feels like (high):</span>
          &nbsp;
          <span>{feelsLikeMax}</span>
        </span>
        <span>
          <span className="text-grey-a">Feels like (low):</span>
          &nbsp;
          <span>{feelsLikeMin}</span>
        </span>
        <span>
          <span className="text-grey-a">Average wind speed:</span>
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
          <span className="text-grey-a">Average humidity:</span>
          &nbsp;
          <span>{humidity}</span>
        </span>
      </div>
    </div>
  );
}

export default WeatherDisplayWide;
