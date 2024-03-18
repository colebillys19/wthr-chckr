import { LabelValueText, WeatherSvg } from "../../../SharedComponentsAux";

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
    <div className="inline-flex flex-col items-center">
      <span className="text-xl font-bold">{dayName}</span>
      <WeatherSvg id={svgId} isDayTime={true} size={60} />
      <span>{summary}</span>
      <LabelValueText label="Temperature (high):" value={tempMax} />
      <LabelValueText label="Temperature (low):" value={tempMin} />
      <LabelValueText label="Feels like (high):" value={feelsLikeMax} />
      <LabelValueText label="Feels like (low):" value={feelsLikeMin} />
      <LabelValueText label="Average wind speed:" value={windSpeed} />
      <LabelValueText label="Chance of precipitation:" value={precChance} />
      {!!rainVolume && (
        <LabelValueText label="Rain volume:" value={rainVolume} />
      )}
      {!!snowVolume && (
        <LabelValueText label="Snow volume:" value={snowVolume} />
      )}
      <LabelValueText label="Average humidity:" value={humidity} />
    </div>
  );
}

export default WeatherDisplayTall;