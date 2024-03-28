import { useContext } from "react";

import { LinkButton } from "../../../ComponentsBase";
import { RecentLocationsContext } from "../../../contexts/recentLocationsContext";
import useUpdateRecentLocations from "../../../utils/customHooks/useUpdateRecentLocations";
import { LocationListItemResponsive } from "../../../ComponentsShared";

function RecentLocations() {
  const { recentLocations } = useContext(RecentLocationsContext);

  const updateRecentLocations = useUpdateRecentLocations();

  const handleClearRecent = () => {
    updateRecentLocations([]);
  };

  if (!recentLocations.length) {
    return null;
  }

  return (
    <>
      <h2 className="mb-6 text-xl">Recently Viewed</h2>
      <ul className="flex flex-col gap-4 mb-6 sm:flex-row">
        {recentLocations.map(({ location, name }) => (
          <li key={location}>
            <LocationListItemResponsive location={location} name={name} />
          </li>
        ))}
      </ul>
      <LinkButton handleClick={handleClearRecent} text="Clear recent" />
    </>
  );
}

export default RecentLocations;
