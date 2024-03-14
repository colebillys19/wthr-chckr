import { useContext } from "react";

import { UserPrefersNoLocationContext } from "../../../contexts/userPrefersNoLocationContext";
import UserLocation from "../Components/UserLocation";
import UserLocationOff from "../Components/UserLocationOff";

function UserLocationContainer() {
  const { userPrefersNoLocation } = useContext(UserPrefersNoLocationContext);

  if (userPrefersNoLocation) {
    return <UserLocationOff />;
  }

  return <UserLocation />;
}

export default UserLocationContainer;
