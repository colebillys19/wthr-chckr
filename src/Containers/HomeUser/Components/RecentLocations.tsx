import { useContext } from "react";

import { RecentLocationsContext } from "../../../contexts/recentLocationsContext";
import useUpdateRecentLocations from "../../../utils/customHooks/useUpdateRecentLocations";
import RecentLocationDisplay from "./RecentLocationDisplay";

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
      <h2 className="mb-4 text-xl">Recently Viewed</h2>
      <ul>
        {recentLocations.map(({ location, name }) => (
          <li key={location}>
            <RecentLocationDisplay location={location} name={name} />
          </li>
        ))}
      </ul>
      <button onClick={handleClearRecent}>clear recent</button>
    </>
  );
}

export default RecentLocations;
