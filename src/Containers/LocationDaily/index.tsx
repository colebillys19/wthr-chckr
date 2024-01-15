import { LocationTabContainer } from "../../AuxComponents";
import { DailyType } from "../../utils/types/openWeatherMap";
import WeatherDisplay from "./Components/WeatherDisplay";

type LocationDailyPropsType = {
  data: DailyType[];
  timezoneOffset: number;
};

function LocationDaily({ data, timezoneOffset }: LocationDailyPropsType) {
  const dataToUse = data.slice(1);

  return (
    <LocationTabContainer>
      <div>LocationDaily</div>
      <ul>
        {dataToUse.map((dailyData) => (
          <li>
            <WeatherDisplay data={dailyData} timezoneOffset={timezoneOffset} />
          </li>
        ))}
      </ul>
    </LocationTabContainer>
  );
}

export default LocationDaily;
