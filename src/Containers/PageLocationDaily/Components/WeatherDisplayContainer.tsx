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
  const dataToUse = data.slice(1);

  return (
    <ul style={tempStyles}>
      {dataToUse.map((dailyData) => (
        <li key={uuidv4()}>
          <WeatherDisplay data={dailyData} timezoneOffset={timezoneOffset} />
        </li>
      ))}
    </ul>
  );
}

export default WeatherDisplayContainer;
