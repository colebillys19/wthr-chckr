import { useContext, useMemo } from "react";

import { UserPrefersNoLocationContext } from "../../contexts/userPrefersNoLocationContext";
import { RecentLocationsContext } from "../../contexts/recentLocationsContext";
// import HomeCities from "../HomeCities";
// import HomeNews from "../HomeNews";
import HomeSearch from "../HomeSearch";
import HomeUser from "../HomeUser";
import HomeMap from "../HomeMap";

function PageHome() {
  const { userPrefersNoLocation } = useContext(UserPrefersNoLocationContext);
  const { recentLocations } = useContext(RecentLocationsContext);

  const hideHomeUser = useMemo(
    () => userPrefersNoLocation && !recentLocations.length,
    [userPrefersNoLocation, recentLocations]
  );

  return (
    <main>
      <HomeSearch />
      {!hideHomeUser && (
        <HomeUser
          userPrefersNoLocation={userPrefersNoLocation}
          recentLocations={recentLocations}
        />
      )}
      {/* <HomeCities /> */}
      <HomeMap />
      {/* <HomeNews /> */}
    </main>
  );
}

export default PageHome;
