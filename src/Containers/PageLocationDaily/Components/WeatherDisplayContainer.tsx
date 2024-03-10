import { v4 as uuidv4 } from "uuid";

import { DailyType } from "../../../utils/types/openWeatherMap";
import WeatherDisplay from "./WeatherDisplay";

type WeatherDisplayContainerPropsType = {
  data: DailyType[];
  timezoneOffset: number;
};

function WeatherDisplayContainer({
  data,
  timezoneOffset,
}: WeatherDisplayContainerPropsType) {

  return (
    <ul>
      {data.map((dailyData, i) => (
        <li key={uuidv4()}>
          <WeatherDisplay data={dailyData} timezoneOffset={timezoneOffset} isToday={i === 0} />
        </li>
      ))}
    </ul>
  );
}

export default WeatherDisplayContainer;
