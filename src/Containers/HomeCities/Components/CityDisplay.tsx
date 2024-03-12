import { useEffect, useState } from "react";

import { useGlobalState } from "../../../context";
import { getFormattedLocationName } from "../../../utils/helpers";
import { locationDataEmpty } from "../../../utils/constants";
import { WeatherDisplayHome } from "../../../SharedComponents";

type CityDisplayPropsType = { location: string };

function CityDisplay({ location }: CityDisplayPropsType) {
  const [data, setData] = useState(locationDataEmpty);
  const [error, setError] = useState("");
  const [isFetchingData, setIsFetchingData] = useState(-1);
  const [isFetchingName, setIsFetchingName] = useState(-1);
  const [name, setName] = useState("");

  const { googleMaps, unitType } = useGlobalState();

  /*
   *
   */
  useEffect(() => {
    if (isFetchingData !== 1) {
      setIsFetchingData(1);
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
        setIsFetchingData(0);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        setIsFetchingData(0);
      });
  }, [unitType]);

  /*
   *
   */
  useEffect(() => {
    if (googleMaps !== null) {
      if (isFetchingName !== 1) {
        setIsFetchingName(1);
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
          setIsFetchingName(0);
        })
        .catch((error: any) => {
          console.error(error);
          setError("Issue fetching location name.");
          setIsFetchingName(0);
        });
    }
  }, [googleMaps]);

  const isLoading = isFetchingData !== 0 || isFetchingName !== 0;

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

  return (
    <WeatherDisplayHome
      data={data}
      error={error}
      isLoading={isLoading}
      name={name}
    />
  );
}

export default CityDisplay;
