import EnterLocation from "./EnterLocation";
import SetLocationOptions from "./SetLocationOptions";

type EnterLocationContainerPropsType = {
  isEnteringLocation: boolean;
  isGeolocating: boolean;
  isVerifyingAddress: boolean;
  setIsEnteringLocation: (value: boolean) => void;
  setIsGeolocating: (value: boolean) => void;
  setIsVerifyingAddress: (value: boolean) => void;
  isModal: boolean;
};

function EnterLocationContainer({
  isEnteringLocation,
  isGeolocating,
  isVerifyingAddress,
  setIsEnteringLocation,
  setIsGeolocating,
  setIsVerifyingAddress,
  isModal,
}: EnterLocationContainerPropsType) {
  if (isEnteringLocation) {
    return (
      <EnterLocation
        isVerifyingAddress={isVerifyingAddress}
        setIsEnteringLocation={setIsEnteringLocation}
        setIsVerifyingAddress={setIsVerifyingAddress}
      />
    );
  }

  return (
    <SetLocationOptions
      isGeolocating={isGeolocating}
      setIsEnteringLocation={setIsEnteringLocation}
      setIsGeolocating={setIsGeolocating}
      isModal={isModal}
    />
  );
}

export default EnterLocationContainer;
