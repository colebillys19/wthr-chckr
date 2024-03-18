import { WeatherSvg } from "../../SharedComponentsAux";

type WeatherDisplayLargePropsType = {
  svgId: number;
  isDayTime: boolean;
  temp: string;
  weatherName: string;
  feelsLike: string;
  windSpeed: string;
  humidity: string;
};

function WeatherDisplayLarge({
  svgId,
  isDayTime,
  temp,
  weatherName,
  feelsLike,
  windSpeed,
  humidity,
}: WeatherDisplayLargePropsType) {
  //

  return (
    <div className="inline-block">
      <div className="flex justify-center">
        <WeatherSvg id={svgId} isDayTime={isDayTime} size={100} />
        <div className="flex flex-col justify-center items-center">
          <span className="text-xl font-bold">{temp}</span>
          <span className="text-xl">{weatherName}</span>
        </div>
      </div>
      <div className="flex flex-col items-center">
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
          <span className="text-grey-a">Humidity:</span>
          &nbsp;
          <span>{humidity}</span>
        </span>
      </div>
    </div>
  );
}

export default WeatherDisplayLarge;
