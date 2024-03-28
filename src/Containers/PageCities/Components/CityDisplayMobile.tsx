import { InternalLinkText } from "../../../BaseComponents";
import { LabelValueText, WeatherSvg } from "../../../SharedComponentsAux";

function CityDisplayMobile() {
  //

  return (
    <div className="flex flex-col items-center">
      <div className="inline-flex flex-col items-center px-12 h-64">
        <div className="flex items-baseline gap-4 mb-4">
          <span className="text-xl font-bold line-clamp-1">Reno, NV</span>
          <span className="shrink-0">6:54 PM</span>
        </div>
        <div className="flex items-center gap-4 mb-4">
          <WeatherSvg id={800} isDayTime={true} size={60} />
          <div className="flex flex-col gap-1">
            <span>21°C</span>
            <span>Clouds</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1 mb-4">
          <LabelValueText label="Feels like" value="18°C" />
          <LabelValueText label="Wind speed" value="7 mph" />
          <LabelValueText label="Humidity" value="4%" />
        </div>
        <InternalLinkText href="/">See more</InternalLinkText>
      </div>
      <hr className="w-44 mt-8 border-grey-b" />
    </div>
  );
}

export default CityDisplayMobile;
