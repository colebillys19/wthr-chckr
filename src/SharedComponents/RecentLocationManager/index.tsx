import { useContext, useEffect } from "react";

import { RecentLocationsContext } from "../../contexts/recentLocationsContext";
import { UserLocationNameContext } from "../../contexts/userLocationNameContext";
import useUpdateRecentLocations from "../../utils/customHooks/useUpdateRecentLocations";

type RecentLocationManagerPropsType = {
  location: string;
  name: string;
};

const RecentLocationManager = ({
  location,
  name,
}: RecentLocationManagerPropsType) => {
  const { recentLocations } = useContext(RecentLocationsContext);
  const { userLocationName } = useContext(UserLocationNameContext);

  const updateRecentLocations = useUpdateRecentLocations();

  useEffect(() => {
    if (name !== userLocationName) {
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
  }, []);

  return null;
};

export default RecentLocationManager;
