import { useGlobalState } from "../../context";
import { HomeSectionContainer } from "../../SharedComponentsAux";
import UserLocation from "./Components/UserLocation";
import UserLocationOff from "./Components/UserLocationOff";
import RecentLocations from "./Components/RecentLocations";

function HomeUser() {
  const { userPrefersNoLocation, recentLocations } = useGlobalState();

  return (
    <HomeSectionContainer>
      <h3>my location</h3>
      <br />
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
