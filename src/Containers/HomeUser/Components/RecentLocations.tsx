import { CSSProperties } from "react";

import { useGlobalState } from "../../../context";
import { useUpdateRecentLocations } from "../../../utils/customHooks/localStorage";
import RecentLocationDisplay from "./RecentLocationDisplay";

const tempStyles: CSSProperties = {
  display: "flex",
  gap: "16px",
};

function RecentLocations() {
  const { recentLocations } = useGlobalState();

  const updateRecentLocations = useUpdateRecentLocations();

  const handleClearRecent = () => {
    updateRecentLocations([]);
  };

  if (!recentLocations.length) {
    return null;
  }

  return (
    <>
      <br />
      <h3>recently viewed</h3>
      <br />
      <ul style={tempStyles}>
        {recentLocations.map((location) => (
          <li key={location}>
            <RecentLocationDisplay location={location} />
          </li>
        ))}
      </ul>
      <br />
      <button onClick={handleClearRecent}>clear recent</button>
    </>
  );
}

export default RecentLocations;
