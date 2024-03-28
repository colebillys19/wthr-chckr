import { WeatherSvg } from "../ComponentsBase";

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
    <div className="inline-flex flex-col items-center w-full">
      <span className="w-full truncate mb-2">{mainText}</span>
      <WeatherSvg id={svgId} isDayTime={isDayTime} size={60} />
      <span className="mt-2 text-grey-a">{temp}</span>
      <span className="text-grey-a">{weatherName}</span>
    </div>
  );
}

export default WeatherDisplaySmallTall;
