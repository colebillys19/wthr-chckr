import { createContext, ReactNode, useState } from "react";

const initialState = { timeType: "standard", setTimeType: () => null };

type TimeTypeContextPropsType = {
  timeType: string;
  setTimeType: (value: string) => void;
};

export const TimeTypeContext =
  createContext<TimeTypeContextPropsType>(initialState);

type TimeTypeContextProviderPropsType = { children: ReactNode };

export default function TimeTypeContextProvider({
  children,
}: TimeTypeContextProviderPropsType) {
  const [timeType, setTimeType] = useState("standard");

  return (
    <TimeTypeContext.Provider value={{ timeType, setTimeType }}>
      {children}
    </TimeTypeContext.Provider>
  );
}
