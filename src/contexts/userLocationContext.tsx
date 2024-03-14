import { createContext, ReactNode, useState } from "react";

const initialState = { userLocation: "", setUserLocation: () => null };

type UserLocationContextPropsType = {
  userLocation: string;
  setUserLocation: (value: string) => void;
};

export const UserLocationContext =
  createContext<UserLocationContextPropsType>(initialState);

type UserLocationContextProviderPropsType = { children: ReactNode };

export default function UserLocationContextProvider({
  children,
}: UserLocationContextProviderPropsType) {
  const [userLocation, setUserLocation] = useState("");

  return (
    <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
      {children}
    </UserLocationContext.Provider>
  );
}
