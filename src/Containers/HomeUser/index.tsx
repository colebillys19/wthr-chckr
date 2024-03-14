import { useContext } from "react";

import { RecentLocationsContext } from "../../contexts/recentLocationsContext";
import { HomeSectionContainer } from "../../SharedComponentsAux";
import UserLocationContainer from "./Components/UserLocationContainer";
import RecentLocations from "./Components/RecentLocations";

function HomeUser() {
  const { recentLocations } = useContext(RecentLocationsContext);

  return (
    <HomeSectionContainer>
      <div>my location</div>
      <UserLocationContainer />
      {!!recentLocations.length && <RecentLocations />}
    </HomeSectionContainer>
  );
}

export default HomeUser;
