import { getIsValidCoordinatesStr } from "../../../utils/helpers";
import DataContainer from "./DataContainer";
import ErrorComponent from "./ErrorComponent";

function PageLocationHourly() {
  const urlParams = new URLSearchParams(window.location.search);
  const location = urlParams.get("location");

  if (!!location && location !== null && getIsValidCoordinatesStr(location)) {
    return <DataContainer location={location} />;
  }

  return <ErrorComponent error="Invalid query parameter." />;
}

export default PageLocationHourly;
