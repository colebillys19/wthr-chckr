import {
  LabelValueText,
  ShadowDiv,
  WeatherSvg,
} from "../../../SharedComponentsAux";

type WeatherDisplayPropsType = {
  svgId: number;
  isDayTime: boolean;
  weatherName: string;
  temp: string;
  feelsLike: string;
  windSpeed: string;
  humidity: string;
  // rainVolume: string;
  // snowVolume: string;
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
  // rainVolume,
  // snowVolume,
  dayName,
  todaySummary,
  todayDataArr,
}: WeatherDisplayPropsType) {
  //

  return (
    <div>
      <div className="relative flex justify-center px-6 py-8 sm:justify-start">
        <div>
          <div className="flex justify-center gap-6 mb-4 sm:flex-col sm:items-start">
            <WeatherSvg id={svgId} isDayTime={isDayTime} size={100} />
            <div className="flex flex-col justify-center items-center gap-1 sm:items-start">
              <span className="text-xl font-bold">{temp}</span>
              <span className="text-xl">{weatherName}</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <LabelValueText label="Feels like" value={feelsLike} />
            <LabelValueText label="Wind speed" value={windSpeed} />
            <LabelValueText label="Humidity" value={humidity} />
          </div>
        </div>
        <ShadowDiv />
      </div>
      <div className="relative px-6 py-8">
        <h4 className="text-xl mb-6">{dayName} Summary</h4>
        <div className="mb-2">{todaySummary}</div>
        <ul>
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
