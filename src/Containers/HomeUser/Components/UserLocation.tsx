import { useContext } from "react";

import { UserLocationContext } from "../../../contexts/userLocationContext";
import { SetLocationFlow } from "../../../SharedComponents";
import UserLocationDisplay from "./UserLocationDisplay";

function UserLocation() {
  const { userLocation } = useContext(UserLocationContext);

  if (!!userLocation) {
    return <UserLocationDisplay />;
  }

  return <SetLocationFlow />;
}

export default UserLocation;
