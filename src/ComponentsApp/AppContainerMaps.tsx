import { useContext } from "react";

import useSetContextFromLocalStorage from "../utils/customHooks/useSetContextFromLocalStorage";
import { GoogleMapsContext } from "../contexts/googleMapsContext";
import { Spinner } from "../ComponentsBase";
import AppContainerModal from "./AppContainerModal";

function AppMapsContainer() {
  useSetContextFromLocalStorage();

  const { isGoogleMapsReady } = useContext(GoogleMapsContext);

  if (isGoogleMapsReady === -1) {
    return (
      <div className="flex justify-center items-center w-screen h-screen">
        <Spinner />
      </div>
    );
  }

  if (isGoogleMapsReady === 0) {
    return (
      <div className="flex justify-center items-center w-screen h-screen">
        <p className="text-text text-center px-6">
          There was an issue loading weatherchecker...
        </p>
      </div>
    );
  }

  return <AppContainerModal />;
}

export default AppMapsContainer;
