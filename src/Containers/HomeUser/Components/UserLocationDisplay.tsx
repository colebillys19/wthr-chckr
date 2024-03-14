import { useContext, useEffect, useState } from "react";

import { GoogleMapsContext } from "../../../contexts/googleMapsContext";
import { UnitTypeContext } from "../../../contexts/unitTypeContext";
import { UserLocationContext } from "../../../contexts/userLocationContext";
import { WeatherDisplayHome } from "../../../SharedComponents";
import { useUpdateUserLocation } from "../../../utils/customHooks/localStorage";
import { getFormattedLocationName } from "../../../utils/helpers";
import { locationDataEmpty } from "../../../utils/constants";

function UserLocationDisplay() {
  const { userLocation } = useContext(UserLocationContext);

  const {
    data,
    error: dataError,
    isFetching: isDataFetching,
  } = useFetchLocationData(userLocation);

  const {
    name,
    error: nameError,
    isFetching: isNameFetching,
  } = useFetchNameData(userLocation);

  const updateUserLocation = useUpdateUserLocation();

  const handleClearLocation = () => {
    updateUserLocation("");
  };

  const isLoading = isDataFetching || isNameFetching;
  const error = dataError || nameError;

  return (
    <>
      <WeatherDisplayHome
        data={data}
        error={error}
        isLoading={isLoading}
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

const useFetchLocationData = (location: string) => {
  const [data, setData] = useState(locationDataEmpty);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState("");

  const { unitType } = useContext(UnitTypeContext);

  useEffect(() => {
    if (!isFetching) {
      setIsFetching(true);
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
        setIsFetching(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        setIsFetching(false);
      });
  }, [unitType]);

  return { data, error, isFetching };
};

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

const useFetchNameData = (location: string) => {
  const [name, setName] = useState("");
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState("");
    
  const { googleMaps } = useContext(GoogleMapsContext);
  
  useEffect(() => {
    if (googleMaps !== null) {
      if (!isFetching) {
        setIsFetching(true);
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
          setIsFetching(false);
        })
        .catch((error: any) => {
          console.error(error);
          setError("Issue fetching location name.");
          setIsFetching(false);
        });
    }
  }, []);

  return { name, error, isFetching };
};
