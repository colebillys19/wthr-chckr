import { createContext, ReactNode, useState } from "react";

import { RecentLocationType } from "../utils/types/misc";

const initialState = { recentLocations: [], setRecentLocations: () => null };

type RecentLocationsContextPropsType = {
  recentLocations: RecentLocationType[];
  setRecentLocations: (value: RecentLocationType[]) => void;
};

export const RecentLocationsContext =
  createContext<RecentLocationsContextPropsType>(initialState);

type RecentLocationsContextProviderPropsType = { children: ReactNode };

export default function RecentLocationsContextProvider({
  children,
}: RecentLocationsContextProviderPropsType) {
  const [recentLocations, setRecentLocations] = useState<RecentLocationType[]>(
    []
  );

  return (
    <RecentLocationsContext.Provider
      value={{ recentLocations, setRecentLocations }}
    >
      {children}
    </RecentLocationsContext.Provider>
  );
}
