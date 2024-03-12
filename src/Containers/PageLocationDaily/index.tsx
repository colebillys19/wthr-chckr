import { getIsValidCoordinatesStr } from "../../utils/helpers";
import DataContainer from "./Components/DataContainer";
import ErrorComponent from "./Components/ErrorComponent";

function PageLocationDaily() {
  const urlParams = new URLSearchParams(window.location.search);
  const location = urlParams.get("location");

  return (
    <main>
      {!!location && location !== null && getIsValidCoordinatesStr(location) ? (
        <DataContainer location={location} />
      ) : (
        <ErrorComponent error="Invalid query parameter." />
      )}
    </main>
  );
}

export default PageLocationDaily;
