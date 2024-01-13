import {
  CSSProperties,
  FormEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";

import { useGlobalState } from "../../../context";
import { useUpdateUserLocation } from "../../../utils/customHooks/localStorage";

const tempStyles: CSSProperties = {
  minWidth: "240px",
};

type EnterLocationDefaultProps = {
  setIsCoordsEntry: (value: boolean) => void;
  setIsEnteringLocation: (value: boolean) => void;
  setIsVerifyingAddress: (value: boolean) => void;
};

function EnterLocationDefault({
  setIsCoordsEntry,
  setIsEnteringLocation,
  setIsVerifyingAddress,
}: EnterLocationDefaultProps) {
  const [inputError, setInputError] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const autoCompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { activeModal, googleMaps, setActiveModal } = useGlobalState();

  const updateUserLocation = useUpdateUserLocation();

  useEffect(() => {
    const googleApiInit = async () => {
      if (inputRef.current && googleMaps !== null) {
        autoCompleteRef.current = new googleMaps.places.Autocomplete(
          inputRef.current
        );
      } else {
        console.error(
          "EnterLocationDefault autocomplete initialization error."
        );
      }
    };

    googleApiInit();

    return () => {
      if (autoCompleteRef.current && googleMaps !== null) {
        googleMaps.event.clearInstanceListeners(autoCompleteRef.current);
      } else {
        console.error("EnterLocationDefault autocomplete clean-up error.");
      }
    };
  }, []);

  /*
   *
   */
  const handleChange = () => {
    if (inputError) {
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
      setIsVerifyingAddress(true);
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
              resolve(true);
            } else {
              setInputError("Invalid location");
              console.error("Promise rejected:", status);
              reject(false);
            }
            setIsVerifyingAddress(false);
          }
        );
      }).catch((error) => {
        console.error(error);
        setIsVerifyingAddress(false);
      });
    }
  };

  /*
   *
   */
  const handleEnterCoords = (e: MouseEvent) => {
    e.preventDefault();
    setIsCoordsEntry(true);
  };

  /*
   *
   */
  const handleBack = (e: MouseEvent) => {
    e.preventDefault();
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
            style={tempStyles}
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
        <a onClick={handleEnterCoords} href="#">
          enter exact coordinates
        </a>
      </div>
      <div>
        <a onClick={handleBack} href="#">
          back
        </a>
      </div>
    </>
  );
}

export default EnterLocationDefault;
