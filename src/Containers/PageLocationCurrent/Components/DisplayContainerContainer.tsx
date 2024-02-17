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
      <div className="spacer" />
      <DisplayContainer location={location} />
      <div>
        <h2>Map</h2>
        <div className="spacer" />
        <WeatherMap location={location} zoom={8} />
      </div>
    </>
  );
}

export default DisplayContainerContainer;
