import { WeatherSvg } from "../../SharedComponentsAux";

type WeatherDisplaySmallTallPropsType = {
  locationName: string;
  svgId: number;
  isDayTime: boolean;
  temp: string;
  weatherName: string;
};

function WeatherDisplaySmallTall({
  locationName,
  svgId,
  isDayTime,
  temp,
  weatherName,
}: WeatherDisplaySmallTallPropsType) {
  //

  return (
    <div className="inline-flex flex-col items-center" style={{ outline: "1px solid black" }}>
      <span>{locationName}</span>
      <WeatherSvg id={svgId} isDayTime={isDayTime} size={60} />
      <span className="text-grey-a">{temp}</span>
      <span className="text-grey-a">{weatherName}</span>
    </div>
  );
}

export default WeatherDisplaySmallTall;
