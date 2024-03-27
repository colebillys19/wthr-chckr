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
    <div className="flex flex-col items-center">
      <span className="text-xl font-bold mb-4">{time}</span>
      <div className="mb-4">
        <WeatherSvg id={svdId} isDayTime={isDayTime} size={100} />
      </div>
      <span className="mb-1">{temp}</span>
      <span className="mb-4">{weatherName}</span>
      <div className="flex flex-col items-center gap-1">
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
  );
}

export default WeatherDisplayTall;
