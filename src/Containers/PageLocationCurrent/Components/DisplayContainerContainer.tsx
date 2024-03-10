import { WeatherMap } from "../../../SharedComponents";
import DisplayContainer from "./DisplayContainer";

type DisplayContainerContainerPropsType = {
  location: string;
};

function DisplayContainerContainer({
  location,
}: DisplayContainerContainerPropsType) {
  //

  return (
    <>
      <DisplayContainer location={location} />
      <div>
        <h2>Map</h2>
        <WeatherMap location={location} zoom={8} />
      </div>
    </>
  );
}

export default DisplayContainerContainer;
