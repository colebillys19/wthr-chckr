import { useGlobalState } from "../../../context";
import { WeatherUiMed } from "../../../Components";
import SetLocation from "./SetLocation";

function UserLocaiton() {
  const { userLocation } = useGlobalState();

  return userLocation ? (
    <WeatherUiMed location={userLocation} />
  ) : (
    <SetLocation />
  );
}

export default UserLocaiton;
