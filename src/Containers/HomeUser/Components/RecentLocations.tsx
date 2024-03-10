import { useGlobalState } from "../../../context";
import { useUpdateRecentLocations } from "../../../utils/customHooks/localStorage";
import RecentLocationDisplay from "./RecentLocationDisplay";

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
      <div>recently viewed</div>
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
