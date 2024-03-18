import { v4 as uuidv4 } from "uuid";

import { DailyType } from "../../../utils/types/openWeatherMap";
import WeatherDisplayContainer from "./WeatherDisplayContainer";

type ListContainerPropsType = {
  data: DailyType[];
  timezoneOffset: number;
};

function ListContainer({ data, timezoneOffset }: ListContainerPropsType) {
  return (
    <ul>
      {data.map((dailyData, i) => (
        <li key={uuidv4()}>
          <WeatherDisplayContainer
            data={dailyData}
            timezoneOffset={timezoneOffset}
            isToday={i === 0}
          />
        </li>
      ))}
    </ul>
  );
}

export default ListContainer;
