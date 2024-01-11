import { useGlobalState } from "../../../context";
import { SetLocationFlow } from "../../../Components";
import UserLocationDisplay from './UserLocationDisplay';

function UserLocation() {
  const { userLocation } = useGlobalState();

  return userLocation ? (
    <UserLocationDisplay />
  ) : (
    <SetLocationFlow />
  );
}

export default UserLocation;
