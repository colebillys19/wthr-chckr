import useUpdateUserPrefersNoLocation from "../../../utils/customHooks/useUpdateUserPrefersNoLocation";

function UserLocationOff() {
  const updateUserPrefersNoLocation = useUpdateUserPrefersNoLocation();

  const handleSetLocation = () => {
    updateUserPrefersNoLocation(false);
  };

  return (
    <>
      <span>You've chosen not to set your location</span>&nbsp;
      <button onClick={handleSetLocation}>set location</button>
    </>
  );
}

export default UserLocationOff;
