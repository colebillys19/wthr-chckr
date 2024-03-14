import { createContext, ReactNode, useState } from "react";

const initialState = { unitType: "imperial", setUnitType: () => null };

type UnitTypeContextPropsType = {
  unitType: string;
  setUnitType: (value: string) => void;
};

export const UnitTypeContext =
  createContext<UnitTypeContextPropsType>(initialState);

type UnitTypeContextProviderPropsType = { children: ReactNode };

export default function UnitTypeContextProvider({
  children,
}: UnitTypeContextProviderPropsType) {
  const [unitType, setUnitType] = useState("imperial");

  return (
    <UnitTypeContext.Provider value={{ unitType, setUnitType }}>
      {children}
    </UnitTypeContext.Provider>
  );
}
