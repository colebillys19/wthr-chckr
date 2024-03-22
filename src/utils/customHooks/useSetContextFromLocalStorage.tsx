import { useContext, useEffect } from "react";

import { UserLocationContext } from '../../contexts/userLocationContext';
import { UserLocationNameContext } from '../../contexts/userLocationNameContext';
import { RecentLocationsContext } from '../../contexts/recentLocationsContext';
import { UserPrefersNoLocationContext } from '../../contexts/userPrefersNoLocationContext';
import { UnitTypeContext } from '../../contexts/unitTypeContext';
import { TimeTypeContext } from '../../contexts/timeTypeContext';

const useSetContextFromLocalStorage = () => {
  const { setUserLocation } = useContext(UserLocationContext);
  const { setUserLocationName } = useContext(UserLocationNameContext);
  const { setRecentLocations } = useContext(RecentLocationsContext);
  const { setUserPrefersNoLocation } = useContext(UserPrefersNoLocationContext);
  const { setUnitType } = useContext(UnitTypeContext);
  const { setTimeType } = useContext(TimeTypeContext);

  useEffect(() => {
    const storageUserLocation = localStorage.getItem("userLocation");
    if (storageUserLocation) {
      setUserLocation(storageUserLocation);
    }

    const storageUserLocationName = localStorage.getItem("userLocationName");
    if (storageUserLocationName) {
      setUserLocationName(storageUserLocationName);
    }
    const storageRecentLocations = localStorage.getItem("recentLocations");
    if (storageRecentLocations) {
      setRecentLocations(JSON.parse(storageRecentLocations));
    }
    const storageUserPrefersNoLocation = localStorage.getItem(
      "userPrefersNoLocation"
    );
    if (storageUserPrefersNoLocation) {
      setUserPrefersNoLocation(true);
    }
    const storageUnitType = localStorage.getItem("unitType");
    if (storageUnitType) {
      setUnitType(storageUnitType);
    }
    const storageTimeType = localStorage.getItem("timeType");
    if (storageTimeType) {
      setTimeType(storageTimeType);
    }
  }, []);
};

export default useSetContextFromLocalStorage;
