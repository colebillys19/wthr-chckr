import { v4 as uuidv4 } from "uuid";

import { HourlyType } from "../../../utils/types/openWeatherMap";
import WeatherDisplayContainer from "../Components/WeatherDisplayContainer";

type ListContainerPropsType = {
  data: HourlyType[];
  timezoneOffset: number;
  sunrise: number;
  sunset: number;
};

function ListContainer({
  data,
  timezoneOffset,
  sunrise,
  sunset,
}: ListContainerPropsType) {
  const dataToUse = data.slice(1, 13);

  return (
    <ul>
      {dataToUse.map((hourlyData) => (
        <li key={uuidv4()}>
          <WeatherDisplayContainer
            data={hourlyData}
            timezoneOffset={timezoneOffset}
            sunrise={sunrise}
            sunset={sunset}
          />
        </li>
      ))}
    </ul>
  );
}

export default ListContainer;
