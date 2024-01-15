import { LocationTabContainer } from "../../AuxComponents";
import { WeatherDisplayLocationDaily } from "../../Components";
import { DailyType } from "../../utils/types/openWeatherMap";

type LocationDailyPropsType = {
  data: DailyType[];
};

function LocationDaily({ data }: LocationDailyPropsType) {
  //

  return (
    <LocationTabContainer>
      <div>LocationDaily</div>
      <ul>
        {data.map((dailyData) => (
          <li>
            <WeatherDisplayLocationDaily data={dailyData} />
          </li>
        ))}
        ;
      </ul>
    </LocationTabContainer>
  );
}

export default LocationDaily;
