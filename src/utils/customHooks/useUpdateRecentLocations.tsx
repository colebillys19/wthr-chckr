import { useContext } from 'react';

import { RecentLocationsContext } from '../../contexts/recentLocationsContext';
import { RecentLocationType } from "../../utils/types/misc";

const useUpdateRecentLocations = () => {
  const { setRecentLocations } = useContext(RecentLocationsContext);

  const updateRecentLocations = (recentLocations: RecentLocationType[]) => {
    setRecentLocations(recentLocations);
    if (!recentLocations.length) {
      localStorage.removeItem("recentLocations");
    } else {
      localStorage.setItem("recentLocations", JSON.stringify(recentLocations));
    }
  };

  return updateRecentLocations;
};

export default useUpdateRecentLocations;
