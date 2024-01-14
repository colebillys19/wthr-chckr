import { useGlobalState } from "../../../context";
import { useUpdateUserLocation } from "../../../utils/customHooks/localStorage";

function UserLocationEnabledSet() {
  const { setActiveModal, userLocation } = useGlobalState();

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

export default UserLocationEnabledSet;
