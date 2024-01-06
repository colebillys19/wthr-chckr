import { MouseEvent } from 'react';

import { useGlobalState } from "../../../context";

function UserLocationOff() {
  const { setUserPrefersNoLocation } = useGlobalState();

  const handleSetLocation = (e: MouseEvent) => {
    e.preventDefault();
    setUserPrefersNoLocation(false);
  };

  return (
    <div>
      <span>You've chosen not to set your location.</span>&nbsp;
      <a onClick={handleSetLocation} href="#">set location</a>
    </div>
  );
}

export default UserLocationOff;
