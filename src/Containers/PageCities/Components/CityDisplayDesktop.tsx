import { InternalLinkContent } from "../../../ComponentsBase";
import { LabelValueText, WeatherSvg } from "../../../ComponentsBase";

type CityDisplayDesktopPropsType = {
  name: string;
  time: string;
  svgId: number;
  isDayTime: boolean;
  temp: string;
  weatherName: string;
  feelsLike: string;
  windSpeed: string;
  humidity: string;
  location: string;
};

function CityDisplayDesktop({
  name,
  time,
  svgId,
  isDayTime,
  temp,
  weatherName,
  feelsLike,
  windSpeed,
  humidity,
  location,
}: CityDisplayDesktopPropsType) {
  //

  return (
    <InternalLinkContent href={`/location/current?location=${location}`}>
      <div className="inline-flex flex-col justify-center items-center w-60 h-80 px-10 border border-t-grey-b border-r-grey-a border-b-grey-a border-l-grey-b">
        <span className="text-xl font-bold line-clamp-1 mb-1">{name}</span>
        <span className="mb-4">{time}</span>
        <div className="flex items-center gap-4 mb-4">
          <WeatherSvg id={svgId} isDayTime={isDayTime} size={60} />
          <div className="flex flex-col gap-1">
            <span>{temp}</span>
            <span>{weatherName}</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <LabelValueText label="Feels like" value={feelsLike} />
          <LabelValueText label="Wind speed" value={windSpeed} />
          <LabelValueText label="Humidity" value={humidity} />
        </div>
      </div>
    </InternalLinkContent>
  );
}

export default CityDisplayDesktop;
