import { getIsValidCoordinatesStr } from "../../utils/helpers";
import Display from "./Components/Display";
import Error from "./Components/Error";

function PageLocation() {
  const urlParams = new URLSearchParams(window.location.search);
  const location = urlParams.get("location");

  return (
    <main>
      {!!location && location !== null && getIsValidCoordinatesStr(location) ? (
        <Display location={location} />
      ) : (
        <Error error="Invalid query parameter." />
      )}
    </main>
  );
}

export default PageLocation;
