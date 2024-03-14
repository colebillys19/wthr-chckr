import { useContext } from "react";

import { ActiveModalContext } from "../../../contexts/activeModalContext";
import { UserLocationContext } from "../../../contexts/userLocationContext";
import useUpdateUserLocation from "../../../utils/customHooks/useUpdateUserLocation";

function UserLocationSet() {
  const { setActiveModal } = useContext(ActiveModalContext);
  const { userLocation } = useContext(UserLocationContext);

  const updateUserLocation = useUpdateUserLocation();

  const handleChangeLocation = () => {
    updateUserLocation("");
    setActiveModal("setLocation");
  };

  return (
    <div>
      <span>Your location:&nbsp;</span>
      <span>{userLocation}</span>
      <button onClick={handleChangeLocation}>change location</button>
    </div>
  );
}

export default UserLocationSet;
