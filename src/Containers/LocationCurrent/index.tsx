import { LocationTabContainer } from "../../AuxComponents";
import { CurrentType } from "../../utils/types/openWeatherMap";
import WeatherDisplay from "./Components/WeatherDisplay";

type LocationCurrentPropsType = {
  data: CurrentType;
  timezoneOffset: number;
};

function LocationCurrent({ data, timezoneOffset }: LocationCurrentPropsType) {
  //

  return (
    <LocationTabContainer>
      <div>LocationCurrent</div>
      <WeatherDisplay data={data} timezoneOffset={timezoneOffset} />
    </LocationTabContainer>
  );
}

export default LocationCurrent;
