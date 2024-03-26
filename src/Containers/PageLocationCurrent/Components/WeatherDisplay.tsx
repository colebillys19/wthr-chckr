import { WeatherDisplayLarge } from "../../../BaseComponents";
import { LabelValueText, ShadowDiv } from "../../../SharedComponentsAux";

type WeatherDisplayPropsType = {
  currentTime: string;
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
      <div className="relative flex justify-center px-6 py-8">
        <WeatherDisplayLarge
          svgId={svgId}
          isDayTime={isDayTime}
          temp={temp}
          weatherName={weatherName}
          feelsLike={feelsLike}
          windSpeed={windSpeed}
          humidity={humidity}
        />
        <ShadowDiv />
      </div>
      <div className="relative px-6 py-8">
        <h4 className="text-xl mb-2">{dayName} Summary</h4>
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
