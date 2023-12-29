import { MutableRefObject } from "react";
import { Loader, Libraries } from "@googlemaps/js-api-loader";

export const initializeGoogleApi = async (
  googleMapsRef: MutableRefObject<typeof google.maps | null>
) => {
  const loader = new Loader({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY || "",
    libraries: ["places"] as Libraries,
  });
  const google = await loader.load();
  googleMapsRef.current = google.maps;
};
