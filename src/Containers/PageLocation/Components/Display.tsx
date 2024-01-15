import { useEffect, useState } from "react";

import { useGlobalState } from "../../../context";
import { getLocationNameData } from "../../../utils/helpers";
import { locationDataEmpty } from "../../../utils/constants";
import { NameDataType } from "../../../utils/types/geocoder";
import LocationCurrent from "../../LocationCurrent";
import LocationDaily from "../../LocationDaily";
import LocationHourly from "../../LocationHourly";
import TabNav from "./TabNav";
import Error from "./Error";
import Skeleton from "./Skeleton";

type DisplayPropsType = {
  location: string;
};

function Display({ location }: DisplayPropsType) {
  const [data, setData] = useState(locationDataEmpty);
  const [error, setError] = useState("");
  const [isFetchingData, setIsFetchingData] = useState(true);
  const [isFetchingName, setIsFetchingName] = useState(true);
  const [nameData, setNameData] = useState<NameDataType>([]);
  const [activeTab, setActiveTab] = useState("current");

  const { googleMaps, unitType } = useGlobalState();

  /*
   *
   */
  useEffect(() => {
    if (!isFetchingData) {
      setIsFetchingData(true);
    }
    if (location !== null) {
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
    }
  }, [unitType]);

  /*
   *
   */
  useEffect(() => {
    if (googleMaps !== null && location !== null) {
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
            setIsFetchingName(false);
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
  }, [googleMaps]);

  if (isFetchingData || isFetchingName) {
    return <Skeleton />;
  }

  if (error !== "") {
    return <Error error={error} />;
  }

  const { current, daily, hourly, timezone_offset } = data;

  return (
    <>
      <ul>
        {nameData.map(({ label, value }) => (
          <li key={label}>
            <span>{label}:&nbsp;</span>
            <b>{value}</b>
          </li>
        ))}
      </ul>
      <TabNav activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "current" && (
        <LocationCurrent data={current} timezoneOffset={timezone_offset} />
      )}
      {activeTab === "hourly" && <LocationHourly data={hourly} />}
      {activeTab === "daily" && <LocationDaily data={daily} />}
    </>
  );
}

export default Display;
