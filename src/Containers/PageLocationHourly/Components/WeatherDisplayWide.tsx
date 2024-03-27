import { LabelValueText, WeatherSvg } from "../../../SharedComponentsAux";

type WeatherDisplayTallPropsType = {
  svdId: number;
  isDayTime: boolean;
  time: string;
  temp: string;
  weatherName: string;
  feelsLike: string;
  windSpeed: string;
  precChance: string;
  rainVolume: string;
  snowVolume: string;
  humidity: string;
};

function WeatherDisplayTall({
  svdId,
  isDayTime,
  time,
  temp,
  weatherName,
  feelsLike,
  windSpeed,
  precChance,
  rainVolume,
  snowVolume,
  humidity,
}: WeatherDisplayTallPropsType) {
  //

  return (
    <div className="inline-flex items-center gap-8">
      <WeatherSvg id={svdId} isDayTime={isDayTime} size={100} />
      <div className="flex items-center gap-8">
        <div className="flex flex-col gap-1">
          <span className="text-xl font-bold">{time}</span>
          <span>{temp}</span>
          <span>{weatherName}</span>
        </div>
        <div className="flex flex-col gap-1">
          <LabelValueText label="Feels like" value={feelsLike} />
          <LabelValueText label="Wind speed" value={windSpeed} />
          <LabelValueText label="Chance of precipitation" value={precChance} />
          {!!rainVolume && (
            <LabelValueText label="Rain volume" value={rainVolume} />
          )}
          {!!snowVolume && (
            <LabelValueText label="Snow volume" value={snowVolume} />
          )}
          <LabelValueText label="Humidity" value={humidity} />
        </div>
      </div>
    </div>
  );
}

export default WeatherDisplayTall;
