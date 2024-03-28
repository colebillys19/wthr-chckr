import { useContext, useMemo } from "react";
import { useLocation } from "react-router-dom";

import { UserLocationNameContext } from "../../../contexts/userLocationNameContext";
import { RecentLocationsContext } from "../../../contexts/recentLocationsContext";
import useUpdateUserLocation from "../../../utils/customHooks/useUpdateUserLocation";
import useUpdateUserLocationName from "../../../utils/customHooks/useUpdateUserLocationName";
import useUpdateRecentLocations from "../../../utils/customHooks/useUpdateRecentLocations";
import { ShadowDiv } from "../../../ComponentsBase";
import { LinkButton } from "../../../ComponentsBase";

type LocationBarPropsType = {
  userLocation: string;
};

function LocationBar({ userLocation }: LocationBarPropsType) {
  const { userLocationName } = useContext(UserLocationNameContext);
  const { recentLocations } = useContext(RecentLocationsContext);
  const { search } = useLocation();

  const updateUserLocation = useUpdateUserLocation();
  const updateUserLocationName = useUpdateUserLocationName();
  const updateRecentLocations = useUpdateRecentLocations();

  const urlParams = new URLSearchParams(search);
  const locationParam = urlParams.get("location");

  const isViewingUserLocation = useMemo(
    () => userLocation === locationParam,
    [userLocation, locationParam]
  );

  const handleClearLocation = () => {
    updateUserLocation("");
    updateUserLocationName("");
    if (isViewingUserLocation) {
      updateRecentLocations([
        { location: userLocation, name: userLocationName },
        ...recentLocations.slice(0, 2),
      ]);
    }
  };

  const handleNavigate = () => {
    window.location.href = `/location/current?location=${userLocation}`;
  };

  return (
    <div className="relative flex justify-end px-6 py-4">
      <div className="mr-4">
        <span>my location: </span>
        &nbsp;
        {isViewingUserLocation && <span>{userLocationName}</span>}
        {!isViewingUserLocation && (
          <LinkButton handleClick={handleNavigate} text={userLocationName} />
        )}
      </div>
      <LinkButton handleClick={() => handleClearLocation()} text="clear" />
      <ShadowDiv />
    </div>
  );
}

export default LocationBar;
