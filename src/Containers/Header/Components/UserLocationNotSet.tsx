import { useContext } from "react";

import { ActiveModalContext } from "../../../contexts/activeModalContext";

function UserLocationNotSet() {
  const { setActiveModal } = useContext(ActiveModalContext);

  const handleSetLocation = () => {
    setActiveModal("setLocation");
  };

  return <button onClick={handleSetLocation}>set location</button>;
}

export default UserLocationNotSet;
