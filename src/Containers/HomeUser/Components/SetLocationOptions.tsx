import { useGlobalState } from "../../../context";

function SetLocationOptions() {
  const { setUserPrefersNoLocation } = useGlobalState();

  //
  const handleGetLocation = () => {};

  //
  const handleEnterLocation = () => {};

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
