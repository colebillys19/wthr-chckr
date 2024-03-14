import { createContext, ReactNode, useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const initialState = {
  googleMaps: null,
  isGoogleMapsReady: false,
  setIsGoogleMapsReady: () => null,
};

type GoogleMapsContextPropsType = {
  googleMaps: typeof google.maps | null;
  isGoogleMapsReady: boolean;
  setIsGoogleMapsReady: (value: boolean) => void;
};

export const GoogleMapsContext =
  createContext<GoogleMapsContextPropsType>(initialState);

type GoogleMapsContextProviderPropsType = { children: ReactNode };

export default function GoogleMapsContextProvider({
  children,
}: GoogleMapsContextProviderPropsType) {
  const [isGoogleMapsReady, setIsGoogleMapsReady] = useState(false);

  const googleMapsRef = useRef<typeof google.maps | null>(null);

  useEffect(() => {
    const googleApiInit = async () => {
      const loader = new Loader({
        apiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY || "",
        libraries: ["places"],
      });
      try {
        const google = await loader.load();
        googleMapsRef.current = google.maps;
        setIsGoogleMapsReady(true);
      } catch (error) {
        console.error(error);
      }
    };
    googleApiInit();
  }, []);

  return (
    <GoogleMapsContext.Provider
      value={{
        googleMaps: googleMapsRef.current,
        isGoogleMapsReady,
        setIsGoogleMapsReady,
      }}
    >
      {children}
    </GoogleMapsContext.Provider>
  );
}
