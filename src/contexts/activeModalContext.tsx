import { createContext, ReactNode, useState } from "react";

const initialState = { activeModal: "", setActiveModal: () => null };

type ActiveModalContextPropsType = {
  activeModal: string;
  setActiveModal: (value: string) => void;
};

export const ActiveModalContext =
  createContext<ActiveModalContextPropsType>(initialState);

type ActiveModalContextProviderPropsType = { children: ReactNode };

export default function ActiveModalContextProvider({
  children,
}: ActiveModalContextProviderPropsType) {
  const [activeModal, setActiveModal] = useState("");

  return (
    <ActiveModalContext.Provider value={{ activeModal, setActiveModal }}>
      {children}
    </ActiveModalContext.Provider>
  );
}
