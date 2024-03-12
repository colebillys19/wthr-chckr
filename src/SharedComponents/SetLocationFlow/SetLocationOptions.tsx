import { useState } from "react";

import { useGlobalState } from "../../context";
import {
  useUpdateUserLocation,
  useUpdateUserPrefersNoLocation,
} from "../../utils/customHooks/localStorage";

type SetLocationOptionsPropsType = {
  isGeolocating: boolean;
  setIsEnteringLocation: (value: boolean) => void;
  setIsGeolocating: (value: boolean) => void;
};

function SetLocationOptions({
  isGeolocating,
  setIsEnteringLocation,
  setIsGeolocating,
}: SetLocationOptionsPropsType) {
  const [geolocateError, setGeolocateError] = useState("");

  const { activeModal, setActiveModal } = useGlobalState();

  const updateUserLocation = useUpdateUserLocation();
  const updateUserPrefersNoLocation = useUpdateUserPrefersNoLocation();

  const handleGetLocation = () => {
    if (!isGeolocating) {
      setIsGeolocating(true);
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const locationStr = `${position.coords.latitude},${position.coords.longitude}`;
        updateUserLocation(locationStr);
        if (activeModal === "setLocation") {
          setActiveModal("");
        }
        setIsGeolocating(false);
      },
      (error) => {
        console.error("Error:", error);
        if (error.code === 1) {
          setGeolocateError(
            "It looks like your settings are preventing us from finding your location automatically."
          );
        } else {
          setGeolocateError("There was an issue finding your location.");
        }
        setIsGeolocating(false);
      }
    );
  };

  const handleEnterLocation = () => {
    setIsEnteringLocation(true);
  };

  const handleDontSet = () => {
    updateUserPrefersNoLocation(true);
    if (activeModal === "setLocation") {
      setActiveModal("");
    }
  };

  return (
    <>
      <div>
        <button onClick={handleGetLocation} disabled={!!geolocateError}>
          find my location
        </button>
      </div>
      {!!geolocateError && <div>{geolocateError}</div>}
      <div>
        <button onClick={handleEnterLocation}>enter location</button>
      </div>
      <div>
        <button onClick={handleDontSet}>don't set location</button>
      </div>
    </>
  );
}

export default SetLocationOptions;
