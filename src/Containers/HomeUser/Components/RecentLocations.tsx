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
      <div className="spacer" />
      <h3>recently viewed</h3>
      <div className="spacer" />
      <ul style={tempStyles}>
        {recentLocations.map((location) => (
          <li key={location}>
            <RecentLocationDisplay location={location} />
          </li>
        ))}
      </ul>
      <div className="spacer" />
      <button onClick={handleClearRecent}>clear recent</button>
    </>
  );
}

export default RecentLocations;
