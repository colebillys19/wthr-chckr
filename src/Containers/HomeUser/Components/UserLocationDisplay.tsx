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

  return (
    <>
      <WeatherDisplayHome
        data={data}
        error={error}
        isLoading={isLoading}
        name={name}
      />
      <WeatherMap location={userLocation} zoom={8} />
      <button onClick={handleChangeLocation}>clear location</button>
    </>
  );
}

export default UserLocationDisplay;
