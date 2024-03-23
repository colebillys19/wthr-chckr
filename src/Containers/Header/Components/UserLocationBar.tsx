import { useContext, useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { UserLocationNameContext } from "../../../contexts/userLocationNameContext";
import useUpdateUserLocation from "../../../utils/customHooks/useUpdateUserLocation";
import useUpdateUserLocationName from "../../../utils/customHooks/useUpdateUserLocationName";
import { LinkButton } from "../../../BaseComponents";

type LocationBarPropsType = {
  location: string;
};

function LocationBar({ location }: LocationBarPropsType) {
  const { userLocationName } = useContext(UserLocationNameContext);
  const { search } = useLocation();

  const updateUserLocation = useUpdateUserLocation();
  const updateUserLocationName = useUpdateUserLocationName();

  const urlParams = new URLSearchParams(search);
  const locationParam = urlParams.get("location");

  const isViewingUserLocation = useMemo(
    () => location === locationParam,
    [location, locationParam]
  );

  const handleClearLocation = () => {
    updateUserLocation("");
    updateUserLocationName("");
  };

  return (
    <div className="relative flex justify-end px-6 py-4">
      <div className="mr-8">
        <span>my location: </span>
        &nbsp;
        {isViewingUserLocation && <span>{userLocationName}</span>}
        {!isViewingUserLocation && (
          <NavLink
            to={`/location/current?location=${location}`}
            className="underline"
          >
            {userLocationName}
          </NavLink>
        )}
      </div>
      <LinkButton handleClick={() => handleClearLocation()} text="clear" />
      <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-b from-grey-b to-transparent"></div>
    </div>
  );
}

export default LocationBar;
