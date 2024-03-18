import { getIsValidCoordinatesStr } from "../../../utils/helpers";
import PageContainer from "./PageContainer";
import ErrorComponent from "./ErrorComponent";

function QueryStringChecker() {
  const urlParams = new URLSearchParams(window.location.search);
  const location = urlParams.get("location");

  if (!!location && location !== null && getIsValidCoordinatesStr(location)) {
    return <PageContainer location={location} />;
  }

  return <ErrorComponent error="Invalid query parameter." />;
}

export default QueryStringChecker;
