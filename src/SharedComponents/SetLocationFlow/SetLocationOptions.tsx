import { useContext, useState } from "react";

import { ActiveModalContext } from "../../contexts/activeModalContext";
import useUpdateUserLocation from "../../utils/customHooks/useUpdateUserLocation";
import useFindAndUpdateUserLocationName from "../../utils/customHooks/useFindAndUpdateUserLocationName";
import useUpdateUserPrefersNoLocation from "../../utils/customHooks/useUpdateUserPrefersNoLocation";

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

  const { activeModal, setActiveModal } = useContext(ActiveModalContext);

  const updateUserLocation = useUpdateUserLocation();
  const findAndUpdateUserLocationName = useFindAndUpdateUserLocationName();
  const updateUserPrefersNoLocation = useUpdateUserPrefersNoLocation();

  const handleGetLocation = () => {
    if (!isGeolocating) {
      setIsGeolocating(true);
    }
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const locationStr = `${lat},${lon}`;
        const userLocationNameSet = await findAndUpdateUserLocationName(lat, lon);
        if (userLocationNameSet) {
          updateUserLocation(locationStr);
          if (activeModal === "setLocation") {
            setActiveModal("");
          }
        } else {
          setGeolocateError("There was an issue finding your location.");
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
