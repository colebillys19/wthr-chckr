import { useContext } from "react";

import useSetContextFromLocalStorage from "./utils/customHooks/useSetContextFromLocalStorage";
import { GoogleMapsContext } from "./contexts/googleMapsContext";
import AppRouter from "./AppRouter";
import { Spinner } from "./SharedComponentsAux";

function AppMapsContainer() {
  useSetContextFromLocalStorage();

  const { isGoogleMapsReady } = useContext(GoogleMapsContext);

  if (!isGoogleMapsReady) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  return <AppRouter />;
}

export default AppMapsContainer;
