import { useContext } from "react";

import useSetContextFromLocalStorage from "./utils/customHooks/useSetContextFromLocalStorage";
import { GoogleMapsContext } from "./contexts/googleMapsContext";
import AppContainerRouter from "./AppContainerRouter";
import { Spinner } from "./SharedComponentsAux";

function AppMapsContainer() {
  useSetContextFromLocalStorage();

  const { isGoogleMapsReady } = useContext(GoogleMapsContext);

  if (!isGoogleMapsReady) {
    return <Spinner />;
  }

  return <AppContainerRouter />;
}

export default AppMapsContainer;
