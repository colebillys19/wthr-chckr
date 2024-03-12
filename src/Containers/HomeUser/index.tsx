import { useGlobalState } from "../../context";
import { HomeSectionContainer } from "../../SharedComponentsAux";
import UserLocationContainer from "./Components/UserLocationContainer";
import RecentLocations from "./Components/RecentLocations";

function HomeUser() {
  const { recentLocations } = useGlobalState();

  return (
    <HomeSectionContainer>
      <div>my location</div>
      <UserLocationContainer />
      {!!recentLocations.length && <RecentLocations />}
    </HomeSectionContainer>
  );
}

export default HomeUser;
