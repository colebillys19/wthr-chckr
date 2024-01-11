import { useGlobalState } from "../../../context";
import UserLocationSet from "./UserLocationSet";
import UserLocationNotSet from "./UserLocationNotSet";

function UserLocation() {
  const { userLocation } = useGlobalState();

  return userLocation ? (
    <UserLocationSet userLocation={userLocation} />
  ) : (
    <UserLocationNotSet />
  );
}

export default UserLocation;
