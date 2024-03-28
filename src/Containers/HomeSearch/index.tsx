import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { GoogleMapsContext } from "../../contexts/googleMapsContext";
import { ShadowDiv } from "../../ComponentsBase";
import SearchForm from "./Components/SearchForm";

function HomeSearch() {
  const [inputError, setInputError] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [isVerifyingAddress, setIsVerifyingAddress] = useState(false);

  const autoCompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const navigate = useNavigate();

  const { googleMaps } = useContext(GoogleMapsContext);

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
              navigate(`/location/current?location=${locationStr}`);
              resolve(true);
              setIsVerifyingAddress(false);
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

  return (
    <div
      className={`relative flex flex-col px-6 pb-4${
        isVerifyingAddress ? " opacity-50 pointer-events-none" : ""
      }`}
    >
      <SearchForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isSubmitDisabled={isSubmitDisabled || isVerifyingAddress}
        ref={inputRef}
      />
      {inputError && <div className="mt-2 text-error">{inputError}</div>}
      <ShadowDiv />
    </div>
  );
}

export default HomeSearch;
