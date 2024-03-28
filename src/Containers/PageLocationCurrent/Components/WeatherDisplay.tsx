import {
  LabelValueText,
  ShadowDiv,
  WeatherSvg,
} from "../../../ComponentsBase";

type WeatherDisplayPropsType = {
  svgId: number;
  isDayTime: boolean;
  weatherName: string;
  temp: string;
  feelsLike: string;
  windSpeed: string;
  humidity: string;
  rainVolume: string;
  snowVolume: string;
  dayName: string;
  todaySummary: string;
  todayDataArr: { label: string; value: string }[];
};

function WeatherDisplay({
  svgId,
  isDayTime,
  weatherName,
  temp,
  feelsLike,
  windSpeed,
  humidity,
  rainVolume,
  snowVolume,
  dayName,
  todaySummary,
  todayDataArr,
}: WeatherDisplayPropsType) {
  //

  return (
    <div>
      <div className="relative flex justify-center px-6 py-8 sm:justify-start">
        <div className="flex flex-col sm:flex-row sm:gap-8">
          <div className="flex justify-center gap-6 mb-6 sm:gap-8 sm:mb-0">
            <WeatherSvg id={svgId} isDayTime={isDayTime} size={100} />
            <div className="flex flex-col justify-center items-center gap-1 sm:items-start">
              <span className="text-xl font-bold">{temp}</span>
              <span className="text-xl">{weatherName}</span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-1 sm:items-start">
            <LabelValueText label="Feels like" value={feelsLike} />
            <LabelValueText label="Wind speed" value={windSpeed} />
            <LabelValueText label="Humidity" value={humidity} />
            {rainVolume && <LabelValueText label="Rain volume" value={rainVolume} />}
            {snowVolume && <LabelValueText label="Snow volume" value={snowVolume} />}
          </div>
        </div>
        <ShadowDiv />
      </div>
      <div className="relative px-6 py-8">
        <h4 className="text-xl mb-6">{dayName} Summary</h4>
        <div className="mb-1">{todaySummary}</div>
        <ul className="flex flex-col gap-1">
          {todayDataArr.map(({ label, value }) => (
            <li key={label}>
              <LabelValueText label={label} value={value} />
            </li>
          ))}
        </ul>
        <ShadowDiv />
      </div>
    </div>
  );
}

export default WeatherDisplay;
