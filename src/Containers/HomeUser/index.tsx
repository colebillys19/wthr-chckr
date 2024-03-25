import { useContext } from "react";

import { UserLocationContext } from "../../contexts/userLocationContext";
import { ShadowDiv } from "../../SharedComponentsAux";
import { RecentLocationType } from "../../utils/types/misc";
import UserLocation from "./Components/UserLocation";
import RecentLocations from "./Components/RecentLocations";

type HomeUserPropsType = {
  userPrefersNoLocation: boolean;
  recentLocations: RecentLocationType[];
};

function HomeUser({
  userPrefersNoLocation,
  recentLocations,
}: HomeUserPropsType) {
  const { userLocation } = useContext(UserLocationContext);

  const bottomPadding = !!userLocation || !!recentLocations.length ? "pb-12" : "pb-8";

  return (
    <div className={`relative pt-8 px-6 ${bottomPadding}`}>
      {!userPrefersNoLocation && (
        <UserLocation isRecentLocationsLength={!!recentLocations.length} />
      )}
      {!!recentLocations.length && <RecentLocations />}
      <ShadowDiv />
    </div>
  );
}

export default HomeUser;
