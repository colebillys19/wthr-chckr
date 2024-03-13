import { useGlobalState } from "../../../context";

function UserLocationNotSet() {
  const { setActiveModal } = useGlobalState();

  const handleSetLocation = () => {
    setActiveModal("setLocation");
  };

  return <button onClick={handleSetLocation}>set location</button>;
}

export default UserLocationNotSet;
