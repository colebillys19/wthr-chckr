import { useGlobalState } from "../../../context";
import UserLocationSet from "./UserLocationSet";
import UserLocationNotSet from "./UserLocationNotSet";

function UserLocation() {
  const { userLocation } = useGlobalState();

  if (!!userLocation) {
    return <UserLocationSet />;
  }

  return <UserLocationNotSet />;
}

export default UserLocation;
