import { useGlobalState } from "../../../context";
import { WeatherDisplayHome, WeatherMap } from "../../../SharedComponents";
import { useUpdateUserLocation } from "../../../utils/customHooks/localStorage";
import { useFetchLocationData } from "../../../utils/customHooks/locationData";

function UserLocationDisplay() {
  const { userLocation } = useGlobalState();
  const { data, error, isLoading, name } = useFetchLocationData(userLocation);

  const updateUserLocation = useUpdateUserLocation();

  const handleChangeLocation = () => {
    updateUserLocation("");
  };

  const { timezone_offset } = data;

  return (
    <>
      <WeatherDisplayHome
        data={data}
        error={error}
        isLoading={isLoading}
        name={name}
      />
      <div className="spacer" />
      <WeatherMap location={userLocation} zoom={9} timezoneOffset={timezone_offset} />
      <div className="spacer" />
      <button onClick={handleChangeLocation}>clear location</button>
    </>
  );
}

export default UserLocationDisplay;
