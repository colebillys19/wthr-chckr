import { getIsValidCoordinatesStr } from "../../utils/helpers";
import DisplayContainerContainer from "./Components/DisplayContainerContainer";
import Error from "./Components/Error";

function PageLocationCurrent() {
  const urlParams = new URLSearchParams(window.location.search);
  const location = urlParams.get("location");

  return (
    <main>
      {!!location && location !== null && getIsValidCoordinatesStr(location) ? (
        <DisplayContainerContainer location={location} />
      ) : (
        <Error error="Invalid query parameter." />
      )}
    </main>
  );
}

export default PageLocationCurrent;
