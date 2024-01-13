import { CSSProperties, FormEvent, useEffect, useRef, useState } from "react";

import { useGlobalState } from "../../context";
import { HomeSectionContainer } from "../../AuxComponents";

const tempStylesA: CSSProperties = {
  display: "none",
};

const tempStylesB: CSSProperties = {
  minWidth: "360px",
};

function HomeSearch() {
  const [inputError, setInputError] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const autoCompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { googleMaps } = useGlobalState();

  useEffect(() => {
    if (googleMaps !== null && inputRef.current) {
      autoCompleteRef.current = new googleMaps.places.Autocomplete(
        inputRef.current
      );
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
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (googleMaps !== null) {
      // setIsVerifyingAddress(true);
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
              console.log('*');
              console.log(location);
              // const locationStr = `${location.lat()},${location.lng()}`;
              //
              //
              //
              resolve(true);
            } else {
              setInputError("Invalid location");
              console.error("Promise rejected:", status);
              reject(false);
            }
            // setIsVerifyingAddress(false);
          }
        );
      }).catch((error) => {
        console.error(error);
        // setIsVerifyingAddress(false);
      });
    }
  };

  /*
   *
   */
  const handleChange = () => {
    if (inputError) {
      setInputError("");
    }
    setIsSubmitDisabled(!inputRef.current || inputRef.current.value === "");
  };

  return (
    <HomeSectionContainer>
      <div>HomeSearch</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search" style={tempStylesA}>
          Search
        </label>
        <input
          id="search"
          onChange={handleChange}
          placeholder=""
          ref={inputRef}
          required
          style={tempStylesB}
          type="text"
        />
        {inputError && <span>{inputError}</span>}
        <input type="submit" value="Search" disabled={isSubmitDisabled} />
      </form>
    </HomeSectionContainer>
  );
}

export default HomeSearch;
