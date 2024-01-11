import { FormEvent, MouseEvent, useEffect, useRef, useState } from "react";

import { useGlobalState } from "../../../context";

type EnterLocationDefaultProps = {
  setIsCoordsEntry: (value: boolean) => void;
  setIsEnteringLocation: (value: boolean) => void;
};

function EnterLocationDefault({
  setIsCoordsEntry,
  setIsEnteringLocation,
}: EnterLocationDefaultProps) {
  const [isInputDisabled, setIsInputDisabled] = useState(true);

  const autoCompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { googleMaps } = useGlobalState();

  /*
   *
   */
  useEffect(() => {
    const googleApiInit = async () => {
      if (inputRef.current && googleMaps !== null) {
        autoCompleteRef.current = new googleMaps.places.Autocomplete(
          inputRef.current
        );
      } else {
        console.error("EnterLocationDefault autocomplete initialization error.");
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
    setIsInputDisabled(!inputRef.current || inputRef.current.value === "");
  };

  /*
   *
   */
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {};

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
    <div>
      EnterLocationDefault
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="address">Enter address, city, or zip: </label>
          <input
            className="address-search-field"
            id="address"
            onChange={handleChange}
            placeholder=""
            ref={inputRef}
            required
            type="text"
          />
        </div>
        <div>
          <input
            type="submit"
            value="Set Location"
            disabled={isInputDisabled}
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
    </div>
  );
}

export default EnterLocationDefault;
