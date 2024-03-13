import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Loader } from "@googlemaps/js-api-loader";

import { GlobalStatePropsType, RecentLocationType } from "./utils/types/context";

const GlobalState = createContext<Partial<GlobalStatePropsType>>({});

export const useGlobalState = () => {
  const context = useContext(GlobalState);
  if (!context) {
    throw new Error("useGlobalState must be used within a Provider");
  }
  return context as GlobalStatePropsType;
};

const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const [activeModal, setActiveModal] = useState("");
  const [isGoogleMapsReady, setIsGoogleMapsReady] = useState(false);
  // const [isDarkMode, setIsDarkMode] = useState(false);
  const [recentLocations, setRecentLocations] = useState<RecentLocationType[]>([]);
  const [timeType, setTimeType] = useState("standard");
  const [unitType, setUnitType] = useState("imperial");
  const [userLocation, setUserLocation] = useState("");
  const [userPrefersNoLocation, setUserPrefersNoLocation] = useState(false);

  const googleMapsRef = useRef<typeof google.maps | null>(null);

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
        googleMapsRef.current = google.maps;
        if (!isGoogleMapsReady) {
          setIsGoogleMapsReady(true);
        }
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
    const storageRecentLocations = localStorage.getItem("recentLocations");
    if (storageRecentLocations) {
      setRecentLocations(JSON.parse(storageRecentLocations));
    }
    const storageUserPrefersNoLocation = localStorage.getItem("userPrefersNoLocation");
    if (storageUserPrefersNoLocation) {
      setUserPrefersNoLocation(true);
    }
    const storageUnitType = localStorage.getItem("unitType");
    if (storageUnitType) {
      setUnitType(storageUnitType);
    }
    const storageTimeType = localStorage.getItem("timeType");
    if (storageTimeType) {
      setTimeType(storageTimeType);
    }
  }, []);

  const value = {
    activeModal,
    googleMaps: googleMapsRef.current,
    // isDarkMode,
    isGoogleMapsReady,
    recentLocations,
    timeType,
    unitType,
    userLocation,
    userPrefersNoLocation,
    setActiveModal,
    // setIsDarkMode,
    setRecentLocations,
    setTimeType,
    setUnitType,
    setUserLocation,
    setUserPrefersNoLocation,
  };

  return <GlobalState.Provider value={value}>{children}</GlobalState.Provider>;
};

export default GlobalStateProvider;
