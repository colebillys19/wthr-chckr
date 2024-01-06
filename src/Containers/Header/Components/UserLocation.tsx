import { useGlobalState } from "../../../context";
import UserLocationEnabledSet from "./UserLocationEnabledSet";
import UserLocationEnabledNotSet from "./UserLocationEnabledNotSet";
import UserLocationDisabled from "./UserLocationDisabled";

function UserLocationOff() {
  const { userLocation, userPrefersNoLocation } = useGlobalState();

  if (userPrefersNoLocation) {
    return <UserLocationDisabled />;
  }

  return userLocation ? (
    <UserLocationEnabledSet userLocation={userLocation} />
  ) : (
    <UserLocationEnabledNotSet />
  );
}

export default UserLocationOff;
