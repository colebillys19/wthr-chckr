import { useGlobalState } from "../../context";

/*
 *
 */
export const useUpdateUserLocation = () => {
  const { setUserLocation } = useGlobalState();

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
  const { setRecentLocations } = useGlobalState();

  const updateRecentLocations = (recentLocations: string[]) => {
    setRecentLocations(recentLocations);
    localStorage.setItem("recentLocations", JSON.stringify(recentLocations));
  };

  return updateRecentLocations;
};

/*
 *
 */
export const useUpdateUserPrefersNoLocation = () => {
  const { setUserPrefersNoLocation } = useGlobalState();

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
  const { setUnitType } = useGlobalState();

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
  const { setTimeType } = useGlobalState();

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
