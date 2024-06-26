import { useContext, useEffect, useRef, useState } from "react";

import { GoogleMapsContext } from "../../contexts/googleMapsContext";
import { UnitTypeContext } from "../../contexts/unitTypeContext";
import { getFormattedLocationName } from "../helpers";
import { locationDataEmpty } from "../constants";

const useFetchLocationDataAndName = (location: string) => {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState("");

  const isFetchingDataRef = useRef(true);
  const dataRef = useRef(locationDataEmpty);
  const isFetchingNameRef = useRef(true);
  const nameRef = useRef("");

  const { unitType } = useContext(UnitTypeContext);
  const { googleMaps } = useContext(GoogleMapsContext);

  /*
   *
   */
  useEffect(() => {
    // keep track of request status using both state and ref to prevent unnecessary re-renders
    if (!isFetching) {
      setIsFetching(true);
    }
    if (isFetchingDataRef.current === false) {
      isFetchingDataRef.current = true;
    }
    // fetch data logic
    const [lat, lon] = location.split(",");
    fetch(
      `https://us-central1-total-fiber-419214.cloudfunctions.net/get-weather-data?lat=${lat}&lon=${lon}&unitType=${unitType}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Issue fetching location data.");
        }
        return res.json();
      })
      .then((resData) => {
        dataRef.current = resData;
        isFetchingDataRef.current = false;
        if (isFetchingNameRef.current === false) {
          setIsFetching(false);
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        isFetchingDataRef.current = false;
        if (isFetchingNameRef.current === false) {
          setIsFetching(false);
        }
      });
  }, [unitType]);

  /*
   *
   */
  useEffect(() => {
    if (googleMaps !== null) {
      // keep track of request status using both state and ref to prevent unnecessary re-renders
      if (!isFetching) {
        setIsFetching(true);
      }
      if (isFetchingNameRef.current === false) {
        isFetchingNameRef.current = true;
      }
      // fetch name logic
      const [lat, lon] = location.split(",");
      new Promise<google.maps.GeocoderResult[]>((resolve, reject) => {
        const geocoder = new googleMaps.Geocoder();
        geocoder.geocode(
          { address: `${lat}, ${lon}` },
          (results: google.maps.GeocoderResult[], status: string) => {
            if (status === "OK") {
              resolve(results);
            } else {
              reject(
                "Geocode was not successful for the following reason: " + status
              );
            }
          }
        );
      })
        .then((results: google.maps.GeocoderResult[]) => {
          nameRef.current = getFormattedLocationName(results);
          isFetchingNameRef.current = false;
          if (isFetchingDataRef.current === false) {
            setIsFetching(false);
          }
        })
        .catch(() => {
          console.error("Issue fetching location name.");
          setError("Issue fetching location name.");
          isFetchingNameRef.current = false;
          if (isFetchingDataRef.current === false) {
            setIsFetching(false);
          }
        });
    }
  }, []);

  return {
    isFetching,
    error,
    data: dataRef.current,
    name: nameRef.current,
  };
};

export default useFetchLocationDataAndName;
