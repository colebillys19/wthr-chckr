import { useContext } from "react";

import { UserLocationContext } from "../../../contexts/userLocationContext";
import useFetchLocationDataAndName from "../../../utils/customHooks/useFetchLocationDataAndName";
import useUpdateUserLocation from "../../../utils/customHooks/useUpdateUserLocation";
import useUpdateUserLocationName from "../../../utils/customHooks/useUpdateUserLocationName";
import WeatherDisplayContainer from "./WeatherDisplayContainer";

function UserLocationDisplay() {
  const { userLocation } = useContext(UserLocationContext);

  const { isFetching, error, data, name } =
    useFetchLocationDataAndName(userLocation);

  const updateUserLocation = useUpdateUserLocation();
  const updateUserLocationName = useUpdateUserLocationName();
  

  const handleClearLocation = () => {
    updateUserLocation("");
    updateUserLocationName("");
  };

  return (
    <>
      <WeatherDisplayContainer
        data={data}
        error={error}
        isLoading={isFetching}
        name={name}
      />
      <button onClick={handleClearLocation}>clear location</button>
    </>
  );
}

export default UserLocationDisplay;
