import { useGlobalState } from "../../../context";
import { SetLocationFlow, WeatherDisplayMed } from "../../../Components";

function UserLocation() {
  const { userLocation } = useGlobalState();

  return userLocation ? (
    <WeatherDisplayMed location={userLocation} />
  ) : (
    <SetLocationFlow />
  );
}

export default UserLocation;
