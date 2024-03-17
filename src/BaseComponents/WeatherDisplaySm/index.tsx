import { WeatherSvg } from "../../SharedComponentsAux";

type WeatherDisplaySmPropsType = {
  locationName: string;
  svgId: number;
  isDayTime: boolean;
  temp: string;
  weatherName: string;
};

function WeatherDisplaySm({
  locationName,
  svgId,
  isDayTime,
  temp,
  weatherName,
}: WeatherDisplaySmPropsType) {
  //

  return (
    <div className="inline-flex items-center" style={{ outline: "1px solid black" }}>
      <WeatherSvg id={svgId} isDayTime={isDayTime} size={60} />
      <div className="flex flex-col">
        <span>{locationName}</span>
        <span className="text-grey-a">{temp}</span>
        <span className="text-grey-a">{weatherName}</span>
      </div>
    </div>
  );
}

export default WeatherDisplaySm;
