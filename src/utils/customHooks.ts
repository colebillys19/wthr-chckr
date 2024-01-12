import { useGlobalState } from "../context";

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

  const updateRecentLocations = (recentLocations: []) => {
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
      localStorage.setItem("userPrefersNoLocation", 'true');
    }
  };

  return updateUserPrefersNoLocation;
};
