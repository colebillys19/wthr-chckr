import { MouseEvent } from "react";

import { useUpdateUserPrefersNoLocation } from "../../../utils/customHooks/localStorage";

function UserLocationOff() {
  const updateUserPrefersNoLocation = useUpdateUserPrefersNoLocation();

  const handleSetLocation = (e: MouseEvent) => {
    e.preventDefault();
    updateUserPrefersNoLocation(false);
  };

  return (
    <>
      <span>You've chosen not to set your location</span>&nbsp;
      <a onClick={handleSetLocation} href="#">
        set location
      </a>
    </>
  );
}

export default UserLocationOff;
