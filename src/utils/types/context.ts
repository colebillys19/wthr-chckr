export type RecentLocationType = { location: string; name: string };

export type GlobalStatePropsType = {
  activeModal: string;
  googleMaps: typeof google.maps | null;
  isDarkMode: boolean;
  recentLocations: RecentLocationType[];
  timeType: string;
  unitType: string;
  userLocation: string;
  userPrefersNoLocation: boolean;
  setActiveModal: (value: string) => void;
  setGoogleMaps: (value: typeof google.maps | null) => void;
  setIsDarkMode: (value: boolean) => void;
  setRecentLocations: (value: RecentLocationType[]) => void;
  setTimeType: (value: string) => void;
  setUnitType: (value: string) => void;
  setUserLocation: (value: string) => void;
  setUserPrefersNoLocation: (value: boolean) => void;
};
