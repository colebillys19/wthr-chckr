import { OpenWeatherMapDataType } from "../../utils/types/openWeatherMap";
import { NameDataType } from "../../utils/types/geocoder";
import { LocationTabContainer } from "../../AuxComponents";
import { WeatherDisplayLocationLg } from "../../Components";

type LocationCurrentPropsType = {
  data: OpenWeatherMapDataType;
  nameData: NameDataType;
};

function LocationCurrent({ data, nameData }: LocationCurrentPropsType) {
  //

  return (
    <LocationTabContainer>
      <div>LocationCurrent</div>
      <WeatherDisplayLocationLg data={data} nameData={nameData} />
    </LocationTabContainer>
  );
}

export default LocationCurrent;
