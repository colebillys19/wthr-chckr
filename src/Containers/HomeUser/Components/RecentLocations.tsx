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
      <div>recently viewed</div>
      <div className="spacer" />
      <ul style={tempStyles}>
        {recentLocations.map(({ location, name }) => (
          <li key={location}>
            <RecentLocationDisplay location={location} name={name} />
          </li>
        ))}
      </ul>
      <div className="spacer" />
      <button onClick={handleClearRecent}>clear recent</button>
    </>
  );
}

export default RecentLocations;
