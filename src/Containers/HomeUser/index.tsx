import { useGlobalState } from "../../context";
import { HomeSectionContainer } from "../../AuxComponents";
import UserLocation from "./Components/UserLocation";
import UserLocationOff from "./Components/UserLocationOff";
import RecentLocations from "./Components/RecentLocations";

function HomeUser() {
  const { userPrefersNoLocation, recentLocations } = useGlobalState();

  return (
    <HomeSectionContainer>
      {userPrefersNoLocation ? <UserLocationOff /> : <UserLocation />}
      {!!recentLocations.length && <RecentLocations />}
    </HomeSectionContainer>
  );
}

export default HomeUser;
