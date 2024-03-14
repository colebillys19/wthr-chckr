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
  const [isLoading, setIsLoading] = useState(-1);

  const { unitType } = useContext(UnitTypeContext);

  /*
   *
   */
  useEffect(() => {
    if (isLoading !== 1) {
      setIsLoading(1);
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
        setIsLoading(0);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        setIsLoading(0);
      });
  }, [unitType]);

  return (
    <WeatherDisplayHome
      data={data}
      error={error}
      isLoading={isLoading !== 0}
      name={name}
    />
  );
}

export default RecentLocationDisplay;
