import { useGlobalState } from "../../../context";
import { WeatherDisplayHome } from "../../../SharedComponents";
import { useUpdateUserLocation } from "../../../utils/customHooks/localStorage";
import { useFetchLocationData } from "../../../utils/customHooks/locationData";

function UserLocationDisplay() {
  const { userLocation } = useGlobalState();
  const { data, error, isLoading, name } =
    useFetchLocationData(userLocation);

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
      <div>
        <div className="spacer" />
        <button onClick={handleChangeLocation}>change location</button>
      </div>
    </>
  );
}

export default UserLocationDisplay;
