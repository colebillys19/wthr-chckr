import { useGlobalState } from "../../../context";

function UserLocationOff() {
  const { setUserPrefersNoLocation } = useGlobalState();

  const handleSetLocation = () => {
    setUserPrefersNoLocation(false);
  };

  return (
    <div>
      <span>You've chosen not to set your location.</span>&nbsp;
      <button onClick={handleSetLocation}>set location</button>
    </div>
  );
}

export default UserLocationOff;
