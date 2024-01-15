import { LocationTabContainer } from "../../AuxComponents";
import { WeatherDisplayLocationHourly } from "../../Components";
import { HourlyType } from "../../utils/types/openWeatherMap";

type LocationHourlyPropsType = {
  data: HourlyType[];
};

function LocationHourly({ data }: LocationHourlyPropsType) {
  const dataToUse = data.slice(0, 12);

  return (
    <LocationTabContainer>
      <div>LocationHourly</div>
      <ul>
        {dataToUse.map((hourlyData) => (
          <li>
            <WeatherDisplayLocationHourly data={hourlyData} />
          </li>
        ))}
      </ul>
    </LocationTabContainer>
  );
}

export default LocationHourly;
