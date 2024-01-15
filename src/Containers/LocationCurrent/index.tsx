import { CurrentType } from "../../utils/types/openWeatherMap";
import { LocationTabContainer } from "../../AuxComponents";
import { WeatherDisplayLocationCurrent } from "../../Components";

type LocationCurrentPropsType = {
  data: CurrentType;
  timezoneOffset: number;
};

function LocationCurrent({ data, timezoneOffset }: LocationCurrentPropsType) {
  //

  return (
    <LocationTabContainer>
      <div>LocationCurrent</div>
      <WeatherDisplayLocationCurrent
        data={data}
        timezoneOffset={timezoneOffset}
      />
    </LocationTabContainer>
  );
}

export default LocationCurrent;
