import { ShadowDiv } from "../../SharedComponentsAux";
import { RecentLocationType } from "../../utils/types/misc";
import UserLocation from "./Components/UserLocation";
import RecentLocations from "./Components/RecentLocations";

type HomeUserPropsType = {
  userPrefersNoLocation: boolean;
  recentLocations: RecentLocationType[];
};

function HomeUser({ userPrefersNoLocation, recentLocations }: HomeUserPropsType) {
  //

  return (
    <div className="relative px-6 py-8">
      {!userPrefersNoLocation && <UserLocation />}
      {!!recentLocations.length && <RecentLocations />}
      <ShadowDiv />
    </div>
  );
}

export default HomeUser;
