import { useContext } from "react";

import { UserLocationContext } from "../../../contexts/userLocationContext";
import { WeatherDisplayHome } from "../../../SharedComponents";
import useFetchLocationDataAndName from "../../../utils/customHooks/useFetchLocationDataAndName";
import useUpdateUserLocation from "../../../utils/customHooks/useUpdateUserLocation";

function UserLocationDisplay() {
  const { userLocation } = useContext(UserLocationContext);

  const { isFetching, error, data, name } =
    useFetchLocationDataAndName(userLocation);

  const updateUserLocation = useUpdateUserLocation();

  const handleClearLocation = () => {
    updateUserLocation("");
  };

  return (
    <>
      <WeatherDisplayHome
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
