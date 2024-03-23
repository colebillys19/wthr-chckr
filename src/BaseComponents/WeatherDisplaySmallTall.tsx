import { WeatherSvg } from "../SharedComponentsAux";

type WeatherDisplaySmallTallPropsType = {
  mainText: string;
  svgId: number;
  isDayTime: boolean;
  temp: string;
  weatherName: string;
};

function WeatherDisplaySmallTall({
  mainText,
  svgId,
  isDayTime,
  temp,
  weatherName,
}: WeatherDisplaySmallTallPropsType) {
  //

  return (
    <div className="inline-flex flex-col items-center">
      <span>{mainText}</span>
      <WeatherSvg id={svgId} isDayTime={isDayTime} size={60} />
      <span className="text-grey-a">{temp}</span>
      <span className="text-grey-a">{weatherName}</span>
    </div>
  );
}

export default WeatherDisplaySmallTall;
