import { createContext, ReactNode, useContext, useState } from "react";

type GlobalStateProps = {
  isDarkMode: boolean;
  recentLocations: string[];
  unitType: string;
  userLocation: string;
  userPrefersNoLocation: boolean;
  setIsDarkMode: (value: boolean) => void;
  setRecentLocations: (value: []) => void;
  setUnitType: (value: string) => void;
  setUserLocation: (value: string) => void;
  setUserPrefersNoLocation: (value: boolean) => void;
};

const GlobalState = createContext<Partial<GlobalStateProps>>({});

export const useGlobalState = () => {
  const context = useContext(GlobalState);
  if (!context) {
    throw new Error("useGlobalState must be used within a Provider");
  }
  return context as GlobalStateProps;
};

const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [recentLocations, setRecentLocations] = useState([]);
  const [unitType, setUnitType] = useState("imperial");
  const [userLocation, setUserLocation] = useState("");
  const [userPrefersNoLocation, setUserPrefersNoLocation] = useState(false);

  const value = {
    isDarkMode,
    recentLocations,
    unitType,
    userLocation,
    userPrefersNoLocation,
    setIsDarkMode,
    setRecentLocations,
    setUnitType,
    setUserLocation,
    setUserPrefersNoLocation,
  };

  return <GlobalState.Provider value={value}>{children}</GlobalState.Provider>;
};

export default GlobalStateProvider;
