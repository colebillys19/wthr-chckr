import { CSSProperties } from "react";
import { v4 as uuidv4 } from "uuid";

import { DailyType } from "../../../utils/types/openWeatherMap";
import WeatherDisplay from "./WeatherDisplay";

const tempStyles: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
};

type WeatherDisplayContainerPropsType = {
  data: DailyType[];
  timezoneOffset: number;
};

function WeatherDisplayContainer({
  data,
  timezoneOffset,
}: WeatherDisplayContainerPropsType) {

  return (
    <ul style={tempStyles}>
      {data.map((dailyData, i) => (
        <li key={uuidv4()}>
          <WeatherDisplay data={dailyData} timezoneOffset={timezoneOffset} isToday={i === 0} />
        </li>
      ))}
    </ul>
  );
}

export default WeatherDisplayContainer;
