import { useEffect } from "react";

import { useGlobalState } from "../../context";
import { useUpdateRecentLocations } from "./localStorage";

export const useHandleRecentLocation = (location: string, name: string) => {
  const { recentLocations } = useGlobalState();

  const updateRecentLocations = useUpdateRecentLocations();

  /*
   *
   */
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
