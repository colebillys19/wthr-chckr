import { FormEvent, useContext, useEffect, useRef, useState } from "react";

import { ActiveModalContext } from "../../contexts/activeModalContext";
import { GoogleMapsContext } from "../../contexts/googleMapsContext";
import { TextField } from "../../BaseComponents";
import useUpdateUserLocation from "../../utils/customHooks/useUpdateUserLocation";
import useUpdateUserLocationName from "../../utils/customHooks/useUpdateUserLocationName";
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

  const updateUserLocation = useUpdateUserLocation();
  const updateUserLocationName = useUpdateUserLocationName();

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
        <div>
          <label htmlFor="address">Enter address, city, or zip: </label>
          <TextField
            ref={inputRef}
            handleChange={handleChange}
            id="address"
            type="text"
          />
        </div>
        {inputError && <div>{inputError}</div>}
        <div>
          <input
            type="submit"
            value="Set Location"
            disabled={isSubmitDisabled}
          />
        </div>
      </form>
      <div>
        <button onClick={handleEnterCoords}>enter exact coordinates</button>
      </div>
      <div>
        <button onClick={handleBack}>back</button>
      </div>
    </>
  );
}

export default EnterLocationDefault;
