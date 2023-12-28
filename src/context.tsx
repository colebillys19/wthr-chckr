import { createContext, ReactNode, useContext, useState } from "react";

type AppContextProps = {
  areBrowserLocationServicesEnabled: boolean;
  isDarkMode: boolean;
  unitType: string;
  userLocation: string;
  userPrefersNoLocation: boolean;
  setAreBrowserLocationServicesEnabled: (value: boolean) => void;
  setIsDarkMode: (value: boolean) => void;
  setUnitType: (value: string) => void;
  setUserLocation: (value: string) => void;
  setUserPrefersNoLocation: (value: boolean) => void;
};

const AppContext = createContext<Partial<AppContextProps>>({});

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a ContextProvider");
  }
  return context as AppContextProps;
};

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [
    areBrowserLocationServicesEnabled,
    setAreBrowserLocationServicesEnabled,
  ] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [unitType, setUnitType] = useState('imperial');
  const [userLocation, setUserLocation] = useState('');
  const [userPrefersNoLocation, setUserPrefersNoLocation] = useState(false);

  const value = {
    areBrowserLocationServicesEnabled,
    isDarkMode,
    unitType,
    userLocation,
    userPrefersNoLocation,
    setAreBrowserLocationServicesEnabled,
    setIsDarkMode,
    setUnitType,
    setUserLocation,
    setUserPrefersNoLocation,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
