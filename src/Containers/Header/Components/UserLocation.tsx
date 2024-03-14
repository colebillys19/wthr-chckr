import { useContext } from "react";

import { UserLocationContext } from "../../../contexts/userLocationContext";
import UserLocationSet from "./UserLocationSet";
import UserLocationNotSet from "./UserLocationNotSet";

function UserLocation() {
  const { userLocation } = useContext(UserLocationContext);

  if (!!userLocation) {
    return <UserLocationSet />;
  }

  return <UserLocationNotSet />;
}

export default UserLocation;
