import { InternalLinkContent } from "../../../BaseComponents";
import { LabelValueText, WeatherSvg } from "../../../SharedComponentsAux";

function CityDisplayDesktop() {
  //

  return (
    <InternalLinkContent href="/">
      <div className="inline-flex flex-col justify-center items-center w-60 h-80 px-10 border border-t-grey-b border-r-grey-a border-b-grey-a border-l-grey-b">
        <span className="text-xl font-bold line-clamp-1 mb-1">
          Wilkes-Barre, NV
        </span>
        <span className="mb-4">6:54 PM</span>
        <div className="flex items-center gap-4 mb-4">
          <WeatherSvg id={800} isDayTime={true} size={60} />
          <div className="flex flex-col gap-1">
            <span>21°C</span>
            <span>Clouds</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <LabelValueText label="Feels like" value="18°C" />
          <LabelValueText label="Wind speed" value="7 mph" />
          <LabelValueText label="Humidity" value="4%" />
        </div>
      </div>
    </InternalLinkContent>
  );
}

export default CityDisplayDesktop;
