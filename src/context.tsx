import { createContext, ReactNode, useContext, useState } from "react";

type GlobalStateProps = {
  isDarkMode: boolean;
  unitType: string;
  setIsDarkMode: (value: boolean) => void;
  setUnitType: (value: string) => void;
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
  const [unitType, setUnitType] = useState("imperial");

  const value = { isDarkMode, setIsDarkMode, setUnitType, unitType };

  return <GlobalState.Provider value={value}>{children}</GlobalState.Provider>;
};

export default GlobalStateProvider;
