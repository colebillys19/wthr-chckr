import { useContext, useState } from "react";

import { ActiveModalContext } from "../../contexts/activeModalContext";
import { UserPrefersNoLocationContext } from "../../contexts/userPrefersNoLocationContext";
import useUpdateUserLocation from "../../utils/customHooks/useUpdateUserLocation";
import useFindAndUpdateUserLocationName from "../../utils/customHooks/useFindAndUpdateUserLocationName";
import useUpdateUserPrefersNoLocation from "../../utils/customHooks/useUpdateUserPrefersNoLocation";
import {
  ButtonPrimary,
  ButtonSecondary,
  LinkButton,
} from "../../BaseComponents";

type SetLocationOptionsPropsType = {
  isGeolocating: boolean;
  setIsEnteringLocation: (value: boolean) => void;
  setIsGeolocating: (value: boolean) => void;
  isModal: boolean;
};

function SetLocationOptions({
  isGeolocating,
  setIsEnteringLocation,
  setIsGeolocating,
  isModal,
}: SetLocationOptionsPropsType) {
  const [geolocateError, setGeolocateError] = useState("");

  const { activeModal, setActiveModal } = useContext(ActiveModalContext);
  const { userPrefersNoLocation } = useContext(UserPrefersNoLocationContext);

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
        const userLocationNameSet = await findAndUpdateUserLocationName(
          lat,
          lon
        );
        if (userLocationNameSet) {
          updateUserLocation(locationStr);
          if (userPrefersNoLocation) {
            updateUserPrefersNoLocation(false);
          }
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

  const containerClasses = isModal
    ? "flex flex-col items-center gap-4 w-full"
    : "flex flex-col items-start gap-4 w-full sm:flex-row sm:items-center";

  const geolocateErrorAContainerClasses = isModal
  ? "text-center"
  : "text-left";
  
  const geolocateErrorAClasses = isModal
    ? "mt-1 text-error"
    : "mt-1 text-error sm:hidden";

  const geolocateErrorBClasses = isModal
    ? "hidden mt-2 text-center text-error sm:block"
    : "hidden mt-2 text-error sm:block";

  return (
    <>
      <div className={containerClasses}>
        <ButtonPrimary
          handleClick={handleEnterLocation}
          text="Enter my location"
          isDisabled={isGeolocating}
        />
        <div className={geolocateErrorAContainerClasses}>
          <ButtonSecondary
            handleClick={handleGetLocation}
            text="Find my location"
            isDisabled={isGeolocating || !!geolocateError}
          />
          {!!geolocateError && (
            <div className={geolocateErrorAClasses}>{geolocateError}</div>
          )}
        </div>
        <LinkButton
          handleClick={handleDontSet}
          text="Don't set location"
          isDisabled={isGeolocating}
        />
      </div>
      {!!geolocateError && !isModal && (
        <div className={geolocateErrorBClasses}>
          {geolocateError}
        </div>
      )}
    </>
  );
}

export default SetLocationOptions;
