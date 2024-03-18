import { useContext } from "react";

import { UserLocationContext } from "../../../contexts/userLocationContext";
import { UserLocationNameContext } from "../../../contexts/userLocationNameContext";
import useFetchLocationData from "../../../utils/customHooks/useFetchLocationData";
import useUpdateUserLocation from "../../../utils/customHooks/useUpdateUserLocation";
import useUpdateUserLocationName from "../../../utils/customHooks/useUpdateUserLocationName";
import WeatherDisplayAsyncContainer from "./WeatherDisplayAsyncContainer";

function UserLocationDisplay() {
  const { userLocation } = useContext(UserLocationContext);
  const { userLocationName } = useContext(UserLocationNameContext);

  const { isLoading, error, data } = useFetchLocationData(userLocation);

  const updateUserLocation = useUpdateUserLocation();
  const updateUserLocationName = useUpdateUserLocationName();

  const handleClearLocation = () => {
    updateUserLocation("");
    updateUserLocationName("");
  };

  return (
    <>
      <WeatherDisplayAsyncContainer
        data={data}
        error={error}
        isLoading={isLoading}
        name={userLocationName}
      />
      <button onClick={handleClearLocation}>clear location</button>
    </>
  );
}

export default UserLocationDisplay;
