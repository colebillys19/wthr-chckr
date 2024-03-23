import { FormEvent, useContext, useEffect, useRef, useState } from "react";

import { ActiveModalContext } from "../../contexts/activeModalContext";
import { UserPrefersNoLocationContext } from "../../contexts/userPrefersNoLocationContext";
import { GoogleMapsContext } from "../../contexts/googleMapsContext";
import { TextField, ButtonPrimary, LinkButton } from "../../BaseComponents";
import useUpdateUserLocation from "../../utils/customHooks/useUpdateUserLocation";
import useUpdateUserLocationName from "../../utils/customHooks/useUpdateUserLocationName";
import useUpdateUserPrefersNoLocation from "../../utils/customHooks/useUpdateUserPrefersNoLocation";
import { getFormattedLocationName } from "../../utils/helpers";

type EnterLocationDefaultPropsType = {
  isVerifyingAddress: boolean;
  setIsCoordsEntry: (value: boolean) => void;
  setIsEnteringLocation: (value: boolean) => void;
  setIsVerifyingAddress: (value: boolean) => void;
};

function EnterLocationDefault({
  isVerifyingAddress,
  setIsCoordsEntry,
  setIsEnteringLocation,
  setIsVerifyingAddress,
}: EnterLocationDefaultPropsType) {
  const [inputError, setInputError] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const autoCompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { activeModal, setActiveModal } = useContext(ActiveModalContext);
  const { googleMaps } = useContext(GoogleMapsContext);
  const { userPrefersNoLocation } = useContext(UserPrefersNoLocationContext);

  const updateUserLocation = useUpdateUserLocation();
  const updateUserLocationName = useUpdateUserLocationName();
  const updateUserPrefersNoLocation = useUpdateUserPrefersNoLocation();

  useEffect(() => {
    if (googleMaps !== null && inputRef.current) {
      autoCompleteRef.current = new googleMaps.places.Autocomplete(
        inputRef.current
      );
      autoCompleteRef.current.addListener("place_changed", () => {
        if (inputError !== "") {
          setInputError("");
        }
      });
    }
    return () => {
      if (googleMaps !== null && autoCompleteRef.current) {
        googleMaps.event.clearInstanceListeners(autoCompleteRef.current);
      }
    };
  }, []);

  /*
   *
   */
  const handleChange = () => {
    if (inputError !== "") {
      setInputError("");
    }
    setIsSubmitDisabled(!inputRef.current || inputRef.current.value === "");
  };

  /*
   *
   */
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (googleMaps !== null) {
      if (!isVerifyingAddress) {
        setIsVerifyingAddress(true);
      }
      const geocoder = new googleMaps.Geocoder();
      new Promise((resolve, reject) => {
        geocoder.geocode(
          { address: inputRef.current?.value },
          (
            results: google.maps.GeocoderResult[],
            status: google.maps.GeocoderStatus
          ) => {
            if (status === googleMaps.GeocoderStatus.OK) {
              const location = results[0].geometry.location;
              const locationStr = `${location.lat()},${location.lng()}`;
              updateUserLocation(locationStr);
              updateUserLocationName(getFormattedLocationName(results));
              if (userPrefersNoLocation) {
                updateUserPrefersNoLocation(false);
              }
              if (activeModal === "setLocation") {
                setActiveModal("");
              }
              setIsVerifyingAddress(false);
              resolve(true);
            } else {
              reject("Invalid location");
            }
          }
        );
      }).catch((error) => {
        console.error(error);
        setInputError(error);
        setIsVerifyingAddress(false);
      });
    }
  };

  /*
   *
   */
  const handleEnterCoords = () => {
    setIsCoordsEntry(true);
  };

  /*
   *
   */
  const handleBack = () => {
    setIsEnteringLocation(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="address" className="hidden">
          Enter address, city, or zip
        </label>
        <TextField
          ref={inputRef}
          handleChange={handleChange}
          id="address"
          type="text"
          placeholder="Enter address, city, or zip"
        />
        {inputError && <div className="mt-2">{inputError}</div>}
        <div className="mt-2 mb-4">
          <ButtonPrimary
            text="Set location"
            isDisabled={isSubmitDisabled || isVerifyingAddress}
            isSubmit
          />
        </div>
      </form>
      <div className="mb-2">
        <LinkButton
          handleClick={handleEnterCoords}
          text="Enter coordinates"
          isDisabled={isVerifyingAddress}
        />
      </div>
      <LinkButton
        handleClick={handleBack}
        text="Back"
        isDisabled={isVerifyingAddress}
      />
    </>
  );
}

export default EnterLocationDefault;
