import { v4 as uuidv4 } from "uuid";

import { HourlyType } from "../../../utils/types/openWeatherMap";
import WeatherDisplay from "../Components/WeatherDisplay";

type LocationHourlyPropsType = {
  data: HourlyType[];
  timezoneOffset: number;
  sunrise: number;
  sunset: number;
};

function LocationHourly({ data, timezoneOffset, sunrise, sunset }: LocationHourlyPropsType) {
  const dataToUse = data.slice(1, 13);

  return (
    <>
      <ul>
        {dataToUse.map((hourlyData) => (
          <li key={uuidv4()}>
            <WeatherDisplay
              data={hourlyData}
              timezoneOffset={timezoneOffset}
              sunrise={sunrise}
              sunset={sunset}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default LocationHourly;
