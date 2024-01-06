import { useGlobalState } from "../../../context";

function UserLocationDisabled() {
  const { setActiveModal } = useGlobalState();
  
  const handleSetLocation = () => {
    setActiveModal("setLocation");    
  };

  return (
    <div>
      <span>You've chosen not to set your location.</span>&nbsp;
      <button onClick={handleSetLocation}>set location</button>
    </div>
  );
}

export default UserLocationDisabled;
