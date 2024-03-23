import { ChangeEvent, FormEvent, useContext, useState } from "react";

import { ActiveModalContext } from "../../contexts/activeModalContext";
import { GoogleMapsContext } from "../../contexts/googleMapsContext";
import { TextField, ButtonPrimary, LinkButton } from "../../BaseComponents";
import useUpdateUserLocation from "../../utils/customHooks/useUpdateUserLocation";
import useUpdateUserLocationName from "../../utils/customHooks/useUpdateUserLocationName";
import { getFormattedLocationName } from "../../utils/helpers";

type EnterLocationCoordsPropsType = {
  isVerifyingAddress: boolean;
  setIsCoordsEntry: (value: boolean) => void;
  setIsVerifyingAddress: (value: boolean) => void;
};

function EnterLocationCoords({
  isVerifyingAddress,
  setIsCoordsEntry,
  setIsVerifyingAddress,
}: EnterLocationCoordsPropsType) {
  const [inputError, setInputError] = useState("");
  const [latValue, setLatValue] = useState("");
  const [lonValue, setLonValue] = useState("");

  const { activeModal, setActiveModal } = useContext(ActiveModalContext);
  const { googleMaps } = useContext(GoogleMapsContext);

  const updateUserLocation = useUpdateUserLocation();
  const updateUserLocationName = useUpdateUserLocationName();

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
      if (!isVerifyingAddress) {
        setIsVerifyingAddress(true);
      }
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
              updateUserLocationName(getFormattedLocationName(results));
              if (activeModal === "setLocation") {
                setActiveModal("");
              }
              setIsVerifyingAddress(false);
              resolve(true);
            } else {
              reject("Invalid coordinates");
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
  const handleBack = () => {
    setIsCoordsEntry(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="lat" className="hidden">
            Latitude
          </label>
          <TextField
            handleChange={handleLatChange}
            id="lat"
            type="number"
            placeholder="Latitude"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="lon" className="hidden">
            Longitude
          </label>
          <TextField
            handleChange={handleLonChange}
            id="lon"
            type="number"
            placeholder="Longitude"
          />
        </div>
        {inputError && <div className="mb-2">{inputError}</div>}
        <div className="mb-4">
          <ButtonPrimary
            text="Set location"
            isDisabled={!latValue || !lonValue || isVerifyingAddress}
            isSubmit
          />
        </div>
      </form>
      <LinkButton handleClick={handleBack} text="Back" isDisabled={isVerifyingAddress} />
    </>
  );
}

export default EnterLocationCoords;
