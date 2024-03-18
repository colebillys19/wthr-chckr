import { LabelValueText, WeatherSvg } from "../../../SharedComponentsAux";

type WeatherDisplayWidePropsType = {
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

function WeatherDisplayWide({
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
}: WeatherDisplayWidePropsType) {
  //

  return (
    <div className="inline-flex">
      <div className="flex flex-col items-end">
        <span className="text-xl font-bold">{dayName}</span>
        <WeatherSvg id={svgId} isDayTime={true} size={60} />
        <span>{summary}</span>
      </div>
      <div className="flex flex-col">
        <LabelValueText label="Temperature (high):" value={tempMax} />
        <LabelValueText label="Temperature (low):" value={tempMin} />
        <LabelValueText label="Feels like (high):" value={feelsLikeMax} />
        <LabelValueText label="Feels like (low):" value={feelsLikeMin} />
        <LabelValueText label="Average wind speed:" value={windSpeed} />
        <LabelValueText label="Chance of precipitation:" value={precChance} />
        {!!rainVolume && <LabelValueText label="Rain volume:" value={rainVolume} />}
        {!!snowVolume && <LabelValueText label="Snow volume:" value={snowVolume} />}
        <LabelValueText label="Average humidity:" value={humidity} />
      </div>
    </div>
  );
}

export default WeatherDisplayWide;
