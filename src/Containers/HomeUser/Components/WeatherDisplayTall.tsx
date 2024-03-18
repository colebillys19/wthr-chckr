import { HourlyType } from "../../../utils/types/openWeatherMap";
import { WeatherDisplayLarge } from "../../../BaseComponents";
import WeatherDisplayHourlyContainer from "./WeatherDisplayHourlyContainer";

type WeatherDisplayTallPropsType = {
  locationName: string;
  currentTime: string;
  svgId: number;
  isDayTime: boolean;
  temp: string;
  weatherName: string;
  feelsLike: string;
  windSpeed: string;
  // rainVolume: string;
  // snowVolume: string;
  humidity: string;
  hourlyDataArr: HourlyType[];
  timezoneOffset: number;
  sunrise: number;
  sunset: number;
};

function WeatherDisplayTall({
  locationName,
  currentTime,
  svgId,
  isDayTime,
  temp,
  weatherName,
  feelsLike,
  windSpeed,
  // rainVolume,
  // snowVolume,
  humidity,
  hourlyDataArr,
  timezoneOffset,
  sunrise,
  sunset,
}: WeatherDisplayTallPropsType) {
  //

  return (
    <div className="inline-flex flex-col items-center">
      <span className="text-2xl font-bold">{locationName}</span>
      <span>{currentTime}</span>
      <WeatherDisplayLarge
        svgId={svgId}
        isDayTime={isDayTime}
        temp={temp}
        weatherName={weatherName}
        feelsLike={feelsLike}
        windSpeed={windSpeed}
        humidity={humidity}
      />
      {hourlyDataArr.map((hourlyData) => {
        const { dt } = hourlyData;
        return (
          <WeatherDisplayHourlyContainer
            key={dt}
            data={hourlyData}
            timezoneOffset={timezoneOffset}
            sunrise={sunrise}
            sunset={sunset}
          />
        );
      })}
    </div>
  );
}

export default WeatherDisplayTall;
