import { useGlobalState } from "../../../context";
import { WeatherDisplayMed } from "../../../Components";
import { useUpdateUserLocation } from "../../../utils/customHooks/localStorage";

function UserLocationDisplay() {
  const { userLocation } = useGlobalState();

  const updateUserLocation = useUpdateUserLocation();

  const handleChangeLocation = () => {
    updateUserLocation("");
  };

  return (
    <>
      <WeatherDisplayMed location={userLocation} />
      <button onClick={handleChangeLocation}>change location</button>
    </>
  );
}

export default UserLocationDisplay;
