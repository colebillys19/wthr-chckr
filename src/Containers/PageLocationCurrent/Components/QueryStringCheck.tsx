import { getIsValidCoordinatesStr } from "../../../utils/helpers";
import DisplayContainerContainer from "./DisplayContainerContainer";
import ErrorComponent from "./ErrorComponent";

function PageLocationCurrent() {
  const urlParams = new URLSearchParams(window.location.search);
  const location = urlParams.get("location");

  if (!!location && location !== null && getIsValidCoordinatesStr(location)) {
    return <DisplayContainerContainer location={location} />;
  }

  return <ErrorComponent error="Invalid query parameter." />;
}

export default PageLocationCurrent;
