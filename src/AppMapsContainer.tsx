import { useContext } from "react";

import useSetContextFromLocalStorage from "./utils/customHooks/useSetContextFromLocalStorage";
import { GoogleMapsContext } from "./contexts/googleMapsContext";
import AppRouter from "./AppRouter";
import { Spinner } from "./SharedComponentsAux";

function AppMapsContainer() {
  useSetContextFromLocalStorage();

  const { isGoogleMapsReady } = useContext(GoogleMapsContext);

  if (!isGoogleMapsReady) {
    return <Spinner />;
  }

  return <AppRouter />;
}

export default AppMapsContainer;
