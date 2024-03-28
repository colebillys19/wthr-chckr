import { useContext } from "react";

import useSetContextFromLocalStorage from "./utils/customHooks/useSetContextFromLocalStorage";
import { GoogleMapsContext } from "./contexts/googleMapsContext";
import AppContainerModal from "./AppContainerModal";
import { Spinner } from "./SharedComponentsAux";

function AppMapsContainer() {
  useSetContextFromLocalStorage();

  const { isGoogleMapsReady } = useContext(GoogleMapsContext);

  if (!isGoogleMapsReady) {
    return (
      <div className="flex justify-center items-center w-screen h-screen">
        <Spinner />
      </div>
    );
  }

  return <AppContainerModal />;
}

export default AppMapsContainer;
