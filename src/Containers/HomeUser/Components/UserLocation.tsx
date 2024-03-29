import { useContext } from "react";

import { UserLocationContext } from "../../../contexts/userLocationContext";
import { SetLocationFlow } from "../../../ComponentsShared";
import UserLocationDisplay from "./UserLocationDisplay";

type UserLocationPropsType = {
  isRecentLocationsLength: boolean;
};

function UserLocation({ isRecentLocationsLength }: UserLocationPropsType) {
  const { userLocation } = useContext(UserLocationContext);

  if (!!userLocation) {
    return (
      <UserLocationDisplay isRecentLocationsLength={isRecentLocationsLength} />
    );
  }

  return (
    <div className={isRecentLocationsLength ? "mb-6" : ""}>
      <SetLocationFlow />
    </div>
  );
}

export default UserLocation;
