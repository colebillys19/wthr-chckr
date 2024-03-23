import { WeatherSvg } from "../SharedComponentsAux";

type WeatherDisplaySmallWidePropsType = {
  mainText: string;
  svgId: number;
  isDayTime: boolean;
  temp: string;
  weatherName: string;
};

function WeatherDisplaySmallWide({
  mainText,
  svgId,
  isDayTime,
  temp,
  weatherName,
}: WeatherDisplaySmallWidePropsType) {
  //

  return (
    <div className="inline-flex items-center">
      <WeatherSvg id={svgId} isDayTime={isDayTime} size={60} />
      <div className="flex flex-col">
        <span>{mainText}</span>
        <span className="text-grey-a">{temp}</span>
        <span className="text-grey-a">{weatherName}</span>
      </div>
    </div>
  );
}

export default WeatherDisplaySmallWide;
