import { useContext } from "react";

import { RecentLocationsContext } from "../../contexts/recentLocationsContext";
import { ShadowDiv } from "../../SharedComponentsAux";
import UserLocationContainer from "./Components/UserLocationContainer";
import RecentLocations from "./Components/RecentLocations";

function HomeUser() {
  const { recentLocations } = useContext(RecentLocationsContext);

  return (
    <div className="relative px-6 py-4">
      <UserLocationContainer />
      {!!recentLocations.length && <RecentLocations />}
      <ShadowDiv />
    </div>
  );
}

export default HomeUser;
