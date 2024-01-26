import { useGlobalState } from "../../context";
import { HomeSectionContainer } from "../../SharedComponentsAux";
import UserLocation from "./Components/UserLocation";
import UserLocationOff from "./Components/UserLocationOff";
import RecentLocations from "./Components/RecentLocations";

function HomeUser() {
  const { userPrefersNoLocation, recentLocations, unitType } = useGlobalState();

  return (
    <HomeSectionContainer>
      <h3>my location</h3>
      <h4>{unitType}</h4>
      <div className="spacer" />
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
