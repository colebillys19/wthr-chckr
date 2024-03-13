import { useGlobalState } from "../../../context";
import UserLocation from "../Components/UserLocation";
import UserLocationOff from "../Components/UserLocationOff";

function UserLocationContainer() {
  const { userPrefersNoLocation } = useGlobalState();

  if (userPrefersNoLocation) {
    return <UserLocationOff />;
  }

  return <UserLocation />;
}

export default UserLocationContainer;
