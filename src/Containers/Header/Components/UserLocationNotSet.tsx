import { useContext } from "react";

import { ActiveModalContext } from "../../../contexts/activeModalContext";

function UserLocationNotSet() {
  const { activeModal, setActiveModal } = useContext(ActiveModalContext);

  const handleSetLocation = () => {
    if (!activeModal) {
      setActiveModal("setLocation");
    }
  };

  // TODO (?) disable button when modal is open

  return <button onClick={handleSetLocation}>set location</button>;
}

export default UserLocationNotSet;
