import { useEffect, useState } from "react";

import { useGlobalState } from "../../context";
import { getLocationNameData } from "../helpers";
import { locationDataEmpty } from '../constants';
import { NameDataType } from "../types/geocoder";

export const useFetchLocationData = (location: string) => {
  const [data, setData] = useState(locationDataEmpty);
  const [error, setError] = useState("");
  const [isFetchingData, setIsFetchingData] = useState(true);
  const [isFetchingName, setIsFetchingName] = useState(true);
  const [nameData, setNameData] = useState<NameDataType>([]);

  const { googleMaps, unitType } = useGlobalState();

  /*
   *
   */
  useEffect(() => {
    if (!isFetchingData) {
      setIsFetchingData(true);
    }
    const [lat, lon] = location.split(",");
    fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=${unitType}&appid=${process.env.REACT_APP_OWM_KEY}`
    )
      .then((res) => {
        if (!res.ok) {
          setError("Issue fetching location data.");
          setIsFetchingData(false);
        }
        return res.json();
      })
      .then((resData) => {
        setData(resData);
        setIsFetchingData(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Issue fetching location data.");
        setIsFetchingData(false);
      });
  }, [unitType, location]);

  /*
   *
   */
  useEffect(() => {
    if (googleMaps !== null) {
      if (!isFetchingName) {
        setIsFetchingName(true);
      }
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
          setNameData(getLocationNameData(results));
          setIsFetchingName(false);
        })
        .catch((error: any) => {
          console.error(error);
          setError("Issue fetching location name.");
          setIsFetchingName(false);
        });
    }
  }, [googleMaps, location]);

  return { data, error, isLoading: isFetchingData || isFetchingName, nameData };
};
