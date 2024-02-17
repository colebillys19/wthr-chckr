import { useEffect, useState } from "react";

import { useGlobalState } from "../../context";
import { getFormattedLocationName } from "../helpers";
import { locationDataEmpty } from "../constants";
import { useUpdateRecentLocations } from "./localStorage";

export const useFetchLocationData = (location: string) => {
  const [data, setData] = useState(locationDataEmpty);
  const [error, setError] = useState("");
  const [isFetchingData, setIsFetchingData] = useState(true);
  const [isFetchingName, setIsFetchingName] = useState(true);
  const [name, setName] = useState("");

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
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=${unitType}&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Issue fetching location data.");
        }
        return res.json();
      })
      .then((resData) => {
        setData(resData);
        setIsFetchingData(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        setIsFetchingData(false);
      });
  }, [unitType]);

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
          setName(getFormattedLocationName(results));
          setIsFetchingName(false);
        })
        .catch((error: any) => {
          console.error(error);
          setError("Issue fetching location name.");
          setIsFetchingName(false);
        });
    }
  }, [googleMaps]);

  return { data, error, isLoading: isFetchingData || isFetchingName, name };
};

export const useFetchRecentLocationData = (location: string) => {
  const [data, setData] = useState(locationDataEmpty);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const { unitType } = useGlobalState();

  /*
   *
   */
  useEffect(() => {
    if (!isLoading) {
      setIsLoading(true);
    }
    const [lat, lon] = location.split(",");
    fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=${unitType}&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Issue fetching location data.");
        }
        return res.json();
      })
      .then((resData) => {
        setData(resData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        setIsLoading(false);
      });
  }, [unitType]);

  return { data, error, isLoading: isLoading };
};

export const useHandleRecentLocation = (location: string, name: string) => {
  const { recentLocations } = useGlobalState();

  const updateRecentLocations = useUpdateRecentLocations();

  /*
   *
   */
  useEffect(() => {
    if (name) {
      const isDuplicateName = recentLocations.some(
        ({ name: recentLocationName }) => name === recentLocationName
      );
      if (!isDuplicateName) {
        updateRecentLocations([
          { location, name },
          ...recentLocations.slice(0, 2),
        ]);
      }
      const filteredRecentLocations = recentLocations.filter(
        (recentLocation) => recentLocation.name !== name
      );
      updateRecentLocations([
        { location, name },
        ...filteredRecentLocations.slice(0, 2),
      ]);
    }
  }, [name]);
};
