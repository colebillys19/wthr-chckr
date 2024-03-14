import { useContext } from 'react';

import { UserLocationContext } from '../../contexts/userLocationContext';
import { RecentLocationsContext } from '../../contexts/recentLocationsContext';
import { UserPrefersNoLocationContext } from '../../contexts/userPrefersNoLocationContext';
import { UnitTypeContext } from '../../contexts/unitTypeContext';
import { TimeTypeContext } from '../../contexts/timeTypeContext';
import { RecentLocationType } from "../../utils/types/misc";

/*
 *
 */
export const useUpdateUserLocation = () => {
  const { setUserLocation } = useContext(UserLocationContext);

  const updateUserLocation = (userLocation: string) => {
    setUserLocation(userLocation);
    if (userLocation === "") {
      localStorage.removeItem("userLocation");
    } else {
      localStorage.setItem("userLocation", userLocation);
    }
  };

  return updateUserLocation;
};

/*
 *
 */
export const useUpdateRecentLocations = () => {
  const { setRecentLocations } = useContext(RecentLocationsContext);

  const updateRecentLocations = (recentLocations: RecentLocationType[]) => {
    setRecentLocations(recentLocations);
    localStorage.setItem("recentLocations", JSON.stringify(recentLocations));
  };

  return updateRecentLocations;
};

/*
 *
 */
export const useUpdateUserPrefersNoLocation = () => {
  const { setUserPrefersNoLocation } = useContext(UserPrefersNoLocationContext);

  const updateUserPrefersNoLocation = (value: boolean) => {
    setUserPrefersNoLocation(value);
    if (!value) {
      localStorage.removeItem("userPrefersNoLocation");
    } else {
      localStorage.setItem("userPrefersNoLocation", "true");
    }
  };

  return updateUserPrefersNoLocation;
};

/*
 *
 */
export const useUpdateUnitType = () => {
  const { setUnitType } = useContext(UnitTypeContext);

  const updateUnitType = (unitType: string) => {
    setUnitType(unitType);
    if (unitType === "") {
      localStorage.removeItem("unitType");
    } else {
      localStorage.setItem("unitType", unitType);
    }
  };

  return updateUnitType;
};

/*
 *
 */
export const useUpdateTimeType = () => {
  const { setTimeType } = useContext(TimeTypeContext);

  const updateTimeType = (timeType: string) => {
    setTimeType(timeType);
    if (timeType === "") {
      localStorage.removeItem("timeType");
    } else {
      localStorage.setItem("timeType", timeType);
    }
  };

  return updateTimeType;
};
