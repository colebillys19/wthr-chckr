import { useGlobalState } from "../../../context";
import { SetLocationFlow } from "../../../SharedComponents";
import UserLocationDisplay from "./UserLocationDisplay";

function UserLocation() {
  const { userLocation } = useGlobalState();

  if (!!userLocation) {
    return <UserLocationDisplay />;
  }

  return <SetLocationFlow />;
}

export default UserLocation;
