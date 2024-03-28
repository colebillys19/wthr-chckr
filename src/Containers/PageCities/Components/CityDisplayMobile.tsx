import { InternalLinkText } from "../../../BaseComponents";
import { LabelValueText, WeatherSvg } from "../../../SharedComponentsAux";

type CityDisplayMobilePropsType = {
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

function CityDisplayMobile({
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
}: CityDisplayMobilePropsType) {
  //

  return (
    <div className="flex flex-col items-center">
      <div className="inline-flex flex-col items-center px-12 h-64">
        <div className="flex items-baseline gap-4 mb-4">
          <span className="text-xl font-bold line-clamp-1">{name}</span>
          <span className="shrink-0">{time}</span>
        </div>
        <div className="flex items-center gap-4 mb-4">
          <WeatherSvg id={svgId} isDayTime={isDayTime} size={60} />
          <div className="flex flex-col gap-1">
            <span>{temp}</span>
            <span>{weatherName}</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1 mb-4">
          <LabelValueText label="Feels like" value={feelsLike} />
          <LabelValueText label="Wind speed" value={windSpeed} />
          <LabelValueText label="Humidity" value={humidity} />
        </div>
        <InternalLinkText href={`/location/current?location=${location}`}>
          See more
        </InternalLinkText>
      </div>
      <hr className="w-44 mt-8 border-grey-b" />
    </div>
  );
}

export default CityDisplayMobile;
