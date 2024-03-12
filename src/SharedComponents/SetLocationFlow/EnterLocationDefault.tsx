import { FormEvent, useEffect, useRef, useState } from "react";

import { useGlobalState } from "../../context";
import { useUpdateUserLocation } from "../../utils/customHooks/localStorage";

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
  const inputErrorRef = useRef("");

  const { activeModal, googleMaps, setActiveModal } = useGlobalState();

  const updateUserLocation = useUpdateUserLocation();

  useEffect(() => {
    if (googleMaps !== null && inputRef.current) {
      autoCompleteRef.current = new googleMaps.places.Autocomplete(
        inputRef.current
      );
      autoCompleteRef.current.addListener("place_changed", () => {
        if (inputErrorRef.current !== "") {
          inputErrorRef.current = "";
          setInputError("");
        }
      });
    }
    return () => {
      if (googleMaps !== null && autoCompleteRef.current) {
        googleMaps.event.clearInstanceListeners(autoCompleteRef.current);
      }
    };
  }, [googleMaps]);

  /*
   *
   */
  const handleChange = () => {
    if (inputErrorRef.current !== "") {
      inputErrorRef.current = "";
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
              if (activeModal === "setLocation") {
                setActiveModal("");
              }
              setIsVerifyingAddress(false);
              resolve(true);
            } else {
              throw new Error("Invalid location");
            }
          }
        );
      }).catch((error) => {
        console.error(error);
        setInputError(error.message);
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
          <input
            id="address"
            onChange={handleChange}
            placeholder=""
            ref={inputRef}
            required
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
