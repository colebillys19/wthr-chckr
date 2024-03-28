import { LabelValueText, WeatherSvg } from "../../../ComponentsBase";

type WeatherDisplayTallPropsType = {
  dayName: string;
  svgId: number;
  summary: string;
  tempMax: string;
  tempMin: string;
  feelsLikeMax: string;
  feelsLikeMin: string;
  precChance: string;
  windSpeed: string;
  humidity: string;
  rainVolume: string;
  snowVolume: string;
};

function WeatherDisplayTall({
  dayName,
  svgId,
  summary,
  tempMax,
  tempMin,
  feelsLikeMax,
  feelsLikeMin,
  precChance,
  windSpeed,
  humidity,
  rainVolume,
  snowVolume,
}: WeatherDisplayTallPropsType) {
  //

  return (
    <div className="inline-flex flex-col items-center sm:items-start">
      <span className="text-xl font-bold mb-4">{dayName}</span>
      <div className="mb-4">
        <WeatherSvg id={svgId} isDayTime={true} size={60} />
      </div>
      <span className="text-center mb-4 sm:text-right">{summary}</span>
      <div className="flex flex-col items-center gap-1 sm:items-start">
        <LabelValueText label="Temperature (high)" value={tempMax} />
        <LabelValueText label="Temperature (low)" value={tempMin} />
        <LabelValueText label="Feels like (high)" value={feelsLikeMax} />
        <LabelValueText label="Feels like (low)" value={feelsLikeMin} />
        <LabelValueText label="Average wind speed" value={windSpeed} />
        <LabelValueText label="Chance of precipitation" value={precChance} />
        {!!rainVolume && (
          <LabelValueText label="Rain volume" value={rainVolume} />
        )}
        {!!snowVolume && (
          <LabelValueText label="Snow volume" value={snowVolume} />
        )}
        <LabelValueText label="Average humidity" value={humidity} />
      </div>
    </div>
  );
}

export default WeatherDisplayTall;
