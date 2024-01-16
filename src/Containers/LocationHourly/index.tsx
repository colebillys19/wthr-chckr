import { CSSProperties } from "react";
import { v4 as uuidv4 } from 'uuid';

import { LocationTabContainer } from "../../SharedComponentsAux";
import { HourlyType } from "../../utils/types/openWeatherMap";
import WeatherDisplay from "./Components/WeatherDisplay";

const tempStyles: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
};

type LocationHourlyPropsType = {
  data: HourlyType[];
  timezoneOffset: number;
};

function LocationHourly({ data, timezoneOffset }: LocationHourlyPropsType) {
  const dataToUse = data.slice(1, 13);

  return (
    <LocationTabContainer>
      <div>LocationHourly</div>
      <ul style={tempStyles}>
        {dataToUse.map((hourlyData) => (
          <li key={uuidv4()}>
            <WeatherDisplay data={hourlyData} timezoneOffset={timezoneOffset} />
          </li>
        ))}
      </ul>
    </LocationTabContainer>
  );
}

export default LocationHourly;
