import { v4 as uuidv4 } from "uuid";

import { HourlyType } from "../../../utils/types/openWeatherMap";
import WeatherDisplay from "../Components/WeatherDisplay";

type WeatherDisplayContainerPropsType = {
  data: HourlyType[];
  timezoneOffset: number;
  sunrise: number;
  sunset: number;
};

function WeatherDisplayContainer({ data, timezoneOffset, sunrise, sunset }: WeatherDisplayContainerPropsType) {
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

export default WeatherDisplayContainer;
