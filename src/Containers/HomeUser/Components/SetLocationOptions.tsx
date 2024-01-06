import { useGlobalState } from "../../../context";

type SetLocationOptionsProps = {
  setIsEnteringLocation: (value: boolean) => void;
};

function SetLocationOptions({
  setIsEnteringLocation,
}: SetLocationOptionsProps) {
  const { setUserPrefersNoLocation } = useGlobalState();
  //
  const handleGetLocation = () => {};

  //
  const handleEnterLocation = () => {
    setIsEnteringLocation(true);
  };

  const handleDontSet = () => {
    setUserPrefersNoLocation(true);
  };

  return (
    <>
      <div>
        <button onClick={handleGetLocation}>find my location</button>
      </div>
      <div>
        <button onClick={handleEnterLocation}>enter location</button>
      </div>
      <div>
        <button onClick={handleDontSet}>don't set location</button>
      </div>
    </>
  );
}

export default SetLocationOptions;
