import { useGlobalState } from "../context";

export const useUpdateUserLocation = () => {
  const { setUserLocation } = useGlobalState();

  const updateUserLocation = (userLocation: string) => {
    setUserLocation(userLocation);
    localStorage.setItem("userLocation", userLocation);
  };

  return updateUserLocation;
};

export const useUpdateRecentLocations = () => {
  const { setRecentLocations } = useGlobalState();

  const updateRecentLocations = (recentLocations: []) => {
    setRecentLocations(recentLocations);
    localStorage.setItem("recentLocations", JSON.stringify(recentLocations));
  };

  return updateRecentLocations;
};
