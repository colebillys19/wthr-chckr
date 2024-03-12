import { useGlobalState } from "../../../context";
import UserLocation from "../Components/UserLocation";
import UserLocationOff from "../Components/UserLocationOff";

function HomeUser() {
  const { userPrefersNoLocation } = useGlobalState();

  if (userPrefersNoLocation) {
    return <UserLocationOff />;
  }

  return <UserLocation />;
}

export default HomeUser;
