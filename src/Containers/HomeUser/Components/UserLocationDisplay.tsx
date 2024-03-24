import { useContext } from "react";

import { UserLocationContext } from "../../../contexts/userLocationContext";
import { UserLocationNameContext } from "../../../contexts/userLocationNameContext";
import useFetchLocationData from "../../../utils/customHooks/useFetchLocationData";
import useUpdateUserLocation from "../../../utils/customHooks/useUpdateUserLocation";
import useUpdateUserLocationName from "../../../utils/customHooks/useUpdateUserLocationName";
import { LinkButton } from "../../../BaseComponents";
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
    <div className="mb-8">
      <h2 className="mb-4 text-xl">My Location</h2>
      <WeatherDisplayAsyncContainer
        data={data}
        error={error}
        isLoading={isLoading}
        name={userLocationName}
        userLocation={userLocation}
      />
      <LinkButton handleClick={handleClearLocation} text="Clear location" />
    </div>
  );
}

export default UserLocationDisplay;
