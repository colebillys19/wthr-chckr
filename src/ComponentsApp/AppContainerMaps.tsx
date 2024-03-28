import { useContext } from "react";

import useSetContextFromLocalStorage from "../utils/customHooks/useSetContextFromLocalStorage";
import { GoogleMapsContext } from "../contexts/googleMapsContext";
import { Spinner } from "../ComponentsBase";
import AppContainerModal from "./AppContainerModal";

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
