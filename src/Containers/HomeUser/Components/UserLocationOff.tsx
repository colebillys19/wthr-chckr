import useUpdateUserPrefersNoLocation from "../../../utils/customHooks/useUpdateUserPrefersNoLocation";
import { LinkButton } from "../../../BaseComponents";

function UserLocationOff() {
  const updateUserPrefersNoLocation = useUpdateUserPrefersNoLocation();

  const handleSetLocation = () => {
    updateUserPrefersNoLocation(false);
  };

  return (
    <>
      <span className="mr-4">You've chosen not to set your location</span>
      <LinkButton handleClick={handleSetLocation} text="Set location" />
    </>
  );
}

export default UserLocationOff;
