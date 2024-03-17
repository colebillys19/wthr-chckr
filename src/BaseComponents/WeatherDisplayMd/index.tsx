import { WeatherSvg } from "../../SharedComponentsAux";

type WeatherDisplayMdPropsType = {
  locationName: string;
  svgId: number;
  isDayTime: boolean;
  temp: string;
  weatherName: string;
};

function WeatherDisplayMd({
  locationName,
  svgId,
  isDayTime,
  temp,
  weatherName,
}: WeatherDisplayMdPropsType) {
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

export default WeatherDisplayMd;
