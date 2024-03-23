import { createContext, ReactNode, useState } from "react";

const initialState = { userLocationName: "", setUserLocationName: () => null };

type UserLocationNameContextPropsType = {
  userLocationName: string;
  setUserLocationName: (value: string) => void;
};

export const UserLocationNameContext =
  createContext<UserLocationNameContextPropsType>(initialState);

type UserLocationNameContextProviderPropsType = { children: ReactNode };

export default function UserLocationNameContextProvider({
  children,
}: UserLocationNameContextProviderPropsType) {
  const [userLocationName, setUserLocationName] = useState("");

  return (
    <UserLocationNameContext.Provider value={{ userLocationName, setUserLocationName }}>
      {children}
    </UserLocationNameContext.Provider>
  );
}
