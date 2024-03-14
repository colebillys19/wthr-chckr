import { createContext, ReactNode, useState } from "react";

const initialState = { userPrefersNoLocation: false, setUserPrefersNoLocation: () => null };

type UserPrefersNoLocationContextPropsType = {
  userPrefersNoLocation: boolean;
  setUserPrefersNoLocation: (value: boolean) => void;
};

export const UserPrefersNoLocationContext =
  createContext<UserPrefersNoLocationContextPropsType>(initialState);

type UserPrefersNoLocationContextProviderPropsType = { children: ReactNode };

export default function UserPrefersNoLocationContextProvider({
  children,
}: UserPrefersNoLocationContextProviderPropsType) {
  const [userPrefersNoLocation, setUserPrefersNoLocation] = useState(false);

  return (
    <UserPrefersNoLocationContext.Provider value={{ userPrefersNoLocation, setUserPrefersNoLocation }}>
      {children}
    </UserPrefersNoLocationContext.Provider>
  );
}
