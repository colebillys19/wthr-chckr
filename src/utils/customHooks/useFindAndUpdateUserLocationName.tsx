import { useContext } from "react";

import { UserLocationNameContext } from "../../contexts/userLocationNameContext";
import { GoogleMapsContext } from "../../contexts/googleMapsContext";
import { getFormattedLocationName } from "../helpers";

const useFindAndUpdateUserLocationName = () => {
  const { setUserLocationName } = useContext(UserLocationNameContext);
  const { googleMaps } = useContext(GoogleMapsContext);

  const findAndUpdateUserLocationName = (lat: number, lon: number) => {
    if (googleMaps !== null) {
      const geocoder = new googleMaps.Geocoder();
      return new Promise((resolve, reject) => {
        geocoder.geocode(
          { address: `${lat}, ${lon}` },
          (
            results: google.maps.GeocoderResult[],
            status: google.maps.GeocoderStatus
          ) => {
            if (status === googleMaps.GeocoderStatus.OK) {
              const locationName = getFormattedLocationName(results);
              setUserLocationName(locationName);
              localStorage.setItem("userLocationName", locationName);
              resolve(true);
            } else {
              reject(false);
            }
          }
        );
      }).catch(() => {
        console.error(
          "There was a bad geocoder status while trying to find and set user location name."
        );
      });
    }
  };

  return findAndUpdateUserLocationName;
};

export default useFindAndUpdateUserLocationName;
