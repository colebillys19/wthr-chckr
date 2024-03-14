import { useContext, useEffect, useRef, useState } from "react";

import { GoogleMapsContext } from "../../../contexts/googleMapsContext";
import { UnitTypeContext } from "../../../contexts/unitTypeContext";
import { UserLocationContext } from "../../../contexts/userLocationContext";
import { WeatherDisplayHome } from "../../../SharedComponents";
import useUpdateUserLocation from "../../../utils/customHooks/useUpdateUserLocation";
import { getFormattedLocationName } from "../../../utils/helpers";
import { locationDataEmpty } from "../../../utils/constants";

function UserLocationDisplay() {
  const { userLocation } = useContext(UserLocationContext);

  const { isFetching, error, data, name } = useFetchData(userLocation);

  const updateUserLocation = useUpdateUserLocation();

  const handleClearLocation = () => {
    updateUserLocation("");
  };

  return (
    <>
      <WeatherDisplayHome
        data={data}
        error={error}
        isLoading={isFetching}
        name={name}
      />
      <button onClick={handleClearLocation}>clear location</button>
    </>
  );
}

export default UserLocationDisplay;

//
//
//
//
//
//
//
//
//
//

const useFetchData = (location: string) => {
  const [isFetching, setIsFetching] = useState(true);

  const errorRef = useRef("");
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
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=${unitType}&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`
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
        errorRef.current = error.message;
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
          errorRef.current = "Issue fetching location name.";
          isFetchingNameRef.current = false;
          if (isFetchingDataRef.current === false) {
            setIsFetching(false);
          }
        });
    }
  }, []);

  return {
    isFetching,
    error: errorRef.current,
    data: dataRef.current,
    name: nameRef.current,
  };
};
