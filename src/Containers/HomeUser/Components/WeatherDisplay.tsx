import { HourlyType } from "../../../utils/types/openWeatherMap";
import { WeatherDisplayLarge } from "../../../BaseComponents";
import WeatherDisplayHourlyContainer from "./WeatherDisplayHourlyContainer";

type WeatherDisplayPropsType = {
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

function WeatherDisplay({
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
}: WeatherDisplayPropsType) {
  //

  return (
    <div className="inline-flex flex-col items-center w-full sm:items-start sm:w-auto sm:border-r sm:border-b sm:border-grey-b">
      <div className="flex flex-col items-center w-full sm:flex-row sm:justify-center sm:items-baseline">
        <span className="text-2xl font-bold">{locationName}</span>
        <span>{currentTime}</span>
      </div>
      <div className="sm:flex">
        <div>
          <WeatherDisplayLarge
            svgId={svgId}
            isDayTime={isDayTime}
            temp={temp}
            weatherName={weatherName}
            feelsLike={feelsLike}
            windSpeed={windSpeed}
            humidity={humidity}
          />
        </div>
        <div className="flex flex-col items-center">
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
      </div>
    </div>
  );
}

export default WeatherDisplay;
