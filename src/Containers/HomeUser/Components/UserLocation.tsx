import { useGlobalState } from "../../../context";
import { WeatherUiMed } from "../../../Components";
import SetLocationOptions from "./SetLocationOptions";

function UserLocaiton() {
  const { userLocation } = useGlobalState();

  return userLocation ? (
    <WeatherUiMed location={userLocation} />
  ) : (
    <SetLocationOptions />
  );
}

export default UserLocaiton;
