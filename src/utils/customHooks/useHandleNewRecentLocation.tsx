import { useContext, useEffect } from "react";

import { RecentLocationsContext } from "../../contexts/recentLocationsContext";
import useUpdateRecentLocations from "./useUpdateRecentLocations";

const useHandleNewRecentLocation = (location: string, name: string) => {
  const { recentLocations } = useContext(RecentLocationsContext);

  const updateRecentLocations = useUpdateRecentLocations();

  useEffect(() => {
    if (name) {
      const isDuplicateName = recentLocations.some(
        ({ name: recentLocationName }) => name === recentLocationName
      );
      if (!isDuplicateName) {
        updateRecentLocations([
          { location, name },
          ...recentLocations.slice(0, 2),
        ]);
      }
      const filteredRecentLocations = recentLocations.filter(
        (recentLocation) => recentLocation.name !== name
      );
      updateRecentLocations([
        { location, name },
        ...filteredRecentLocations.slice(0, 2),
      ]);
    }
  }, [name]);
};

export default useHandleNewRecentLocation;
