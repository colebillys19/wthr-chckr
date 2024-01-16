import { CSSProperties } from "react";
import { v4 as uuidv4 } from 'uuid';

import { LocationTabContainer } from "../../SharedComponentsAux";
import { DailyType } from "../../utils/types/openWeatherMap";
import WeatherDisplay from "./Components/WeatherDisplay";

const tempStyles: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
};

type LocationDailyPropsType = {
  data: DailyType[];
  timezoneOffset: number;
};

function LocationDaily({ data, timezoneOffset }: LocationDailyPropsType) {
  const dataToUse = data.slice(1);

  return (
    <LocationTabContainer>
      <div>LocationDaily</div>
      <ul style={tempStyles}>
        {dataToUse.map((dailyData) => (
          <li key={uuidv4()}>
            <WeatherDisplay data={dailyData} timezoneOffset={timezoneOffset} />
          </li>
        ))}
      </ul>
    </LocationTabContainer>
  );
}

export default LocationDaily;
