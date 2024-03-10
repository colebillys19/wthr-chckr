import { useGlobalState } from "../../context";
import { HomeSectionContainer } from "../../SharedComponentsAux";
import UserLocation from "./Components/UserLocation";
import UserLocationOff from "./Components/UserLocationOff";
import RecentLocations from "./Components/RecentLocations";

function HomeUser() {
  const { userPrefersNoLocation, recentLocations } = useGlobalState();

  return (
    <HomeSectionContainer>
      <div>my location</div>
      {userPrefersNoLocation ? (
        <UserLocationOff />
      ) : (
        <UserLocation />
      )}
      {!!recentLocations.length && <RecentLocations />}
    </HomeSectionContainer>
  );
}

export default HomeUser;
