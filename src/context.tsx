import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Loader } from "@googlemaps/js-api-loader";

type GlobalStateProps = {
  activeModal: string;
  googleMaps: typeof google.maps | null;
  isDarkMode: boolean;
  isVerifyingAddress: boolean;
  recentLocations: string[];
  unitType: string;
  userLocation: string;
  userPrefersNoLocation: boolean;
  setActiveModal: (value: string) => void;
  setGoogleMaps: (value: typeof google.maps | null) => void;
  setIsDarkMode: (value: boolean) => void;
  setIsVerifyingAddress: (value: boolean) => void;
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
  const [activeModal, setActiveModal] = useState("");
  const [googleMaps, setGoogleMaps] = useState<typeof google.maps | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isVerifyingAddress, setIsVerifyingAddress] = useState(false);
  const [recentLocations, setRecentLocations] = useState([]);
  const [unitType, setUnitType] = useState("imperial");
  const [userLocation, setUserLocation] = useState("");
  const [userPrefersNoLocation, setUserPrefersNoLocation] = useState(false);

  /*
   *
   */
  useEffect(() => {
    const googleApiInit = async () => {
      const loader = new Loader({
        apiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY || "",
        libraries: ["places"],
      });
      try {
        const google = await loader.load();
        setGoogleMaps(google.maps);
      } catch (error) {
        console.error(error);
      }
    };
    googleApiInit();
  }, []);

  /*
   *
   */
  useEffect(() => {
    const storageUserLocation = localStorage.getItem("userLocation");

    if (storageUserLocation) {
      setUserLocation(storageUserLocation);
    }
  }, []);

  /*
   *
   */
  useEffect(() => {
    const storageRecentLocations = localStorage.getItem("recentLocations");

    if (storageRecentLocations) {
      setRecentLocations(JSON.parse(storageRecentLocations));
    }
  }, []);

  const value = {
    activeModal,
    googleMaps,
    isDarkMode,
    isVerifyingAddress,
    recentLocations,
    unitType,
    userLocation,
    userPrefersNoLocation,
    setActiveModal,
    setIsDarkMode,
    setIsVerifyingAddress,
    setRecentLocations,
    setUnitType,
    setUserLocation,
    setUserPrefersNoLocation,
  };

  return <GlobalState.Provider value={value}>{children}</GlobalState.Provider>;
};

export default GlobalStateProvider;