import { getIsValidCoordinatesStr } from "../../utils/helpers";
import DisplayContainerContainer from "./Components/DisplayContainerContainer";
import ErrorComponent from "./Components/ErrorComponent";

function PageLocationCurrent() {
  const urlParams = new URLSearchParams(window.location.search);
  const location = urlParams.get("location");

  return (
    <main>
      {!!location && location !== null && getIsValidCoordinatesStr(location) ? (
        <DisplayContainerContainer location={location} />
      ) : (
        <ErrorComponent error="Invalid query parameter." />
      )}
    </main>
  );
}

export default PageLocationCurrent;
