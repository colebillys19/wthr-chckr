import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";

import { useGlobalState } from "../../../context";
import { useUpdateUserLocation } from "../../../utils/customHooks/localStorage";

type EnterLocationCoordsPropsType = {
  setIsCoordsEntry: (value: boolean) => void;
  setIsVerifyingAddress: (value: boolean) => void;
};

function EnterLocationCoords({
  setIsCoordsEntry,
  setIsVerifyingAddress,
}: EnterLocationCoordsPropsType) {
  const [inputError, setInputError] = useState("");
  const [latValue, setLatValue] = useState("");
  const [lonValue, setLonValue] = useState("");

  const { activeModal, googleMaps, setActiveModal } = useGlobalState();

  const updateUserLocation = useUpdateUserLocation();

  /*
   *
   */
  const handleLatChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLatValue(e.target.value);
    if (inputError) {
      setInputError("");
    }
  };

  /*
   *
   */
  const handleLonChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLonValue(e.target.value);
    if (inputError) {
      setInputError("");
    }
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
          { address: `${latValue}, ${lonValue}` },
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
              setInputError("Invalid coordinates");
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
  const handleBack = (e: MouseEvent) => {
    e.preventDefault();
    setIsCoordsEntry(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="lat">Latitude: </label>
          <input
            onChange={handleLatChange}
            type="number"
            id="lat"
            value={latValue}
            required
          />
        </div>
        <div>
          <label htmlFor="lon">Longitude: </label>
          <input
            onChange={handleLonChange}
            type="number"
            id="lon"
            value={lonValue}
            required
          />
        </div>
        {inputError && <div>{inputError}</div>}
        <div>
          <input
            type="submit"
            value="Set Location"
            disabled={!latValue || !lonValue}
          />
        </div>
      </form>
      <div>
        <a onClick={handleBack} href="#">
          back
        </a>
      </div>
    </>
  );
}

export default EnterLocationCoords;
