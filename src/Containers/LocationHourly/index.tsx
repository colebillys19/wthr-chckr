import { LocationTabContainer } from "../../SharedComponentsAux";
import { HourlyType } from "../../utils/types/openWeatherMap";
import WeatherDisplay from "./Components/WeatherDisplay";

type LocationHourlyPropsType = {
  data: HourlyType[];
  timezoneOffset: number;
};

function LocationHourly({ data, timezoneOffset }: LocationHourlyPropsType) {
  const dataToUse = data.slice(1, 13);

  return (
    <LocationTabContainer>
      <div>LocationHourly</div>
      <ul>
        {dataToUse.map((hourlyData) => (
          <li>
            <WeatherDisplay data={hourlyData} timezoneOffset={timezoneOffset} />
          </li>
        ))}
      </ul>
    </LocationTabContainer>
  );
}

export default LocationHourly;
