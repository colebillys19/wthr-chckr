import { MouseEvent } from "react";

import { useUpdateUserPrefersNoLocation } from "../../../utils/customHooks";

function UserLocationOff() {
  const updateUserPrefersNoLocation = useUpdateUserPrefersNoLocation();

  const handleSetLocation = (e: MouseEvent) => {
    e.preventDefault();
    updateUserPrefersNoLocation(false);
  };

  return (
    <div>
      <span>You've chosen not to set your location</span>&nbsp;
      <a onClick={handleSetLocation} href="#">
        set location
      </a>
    </div>
  );
}

export default UserLocationOff;
