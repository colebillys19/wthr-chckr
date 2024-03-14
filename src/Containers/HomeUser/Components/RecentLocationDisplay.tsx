import { useContext, useEffect, useState } from "react";

import { UnitTypeContext } from "../../../contexts/unitTypeContext";
import { WeatherDisplayHome } from "../../../SharedComponents";
import { locationDataEmpty } from "../../../utils/constants";

type RecentLocationDisplayPropsType = { location: string; name: string };

function RecentLocationDisplay({
  location,
  name,
}: RecentLocationDisplayPropsType) {
  const [data, setData] = useState(locationDataEmpty);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const { unitType } = useContext(UnitTypeContext);

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

  return (
    <WeatherDisplayHome
      data={data}
      error={error}
      isLoading={isLoading}
      name={name}
    />
  );
}

export default RecentLocationDisplay;
