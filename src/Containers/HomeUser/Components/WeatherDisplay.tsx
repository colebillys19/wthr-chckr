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
    <div className="inline-flex flex-col items-center w-full mb-8 sm:items-start sm:w-auto sm:mb-4 sm:px-16 sm:py-10 sm:border-r sm:border-b sm:border-grey-b">
      <div className="flex flex-col items-center w-full mb-4 sm:flex-row sm:justify-center sm:items-baseline sm:gap-3">
        <span className="text-2xl font-bold">{locationName}</span>
        <span>{currentTime}</span>
      </div>
      <div className="gap-10 sm:flex">
        <div className="mb-8">
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
        <div className="flex flex-col items-center gap-4">
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
