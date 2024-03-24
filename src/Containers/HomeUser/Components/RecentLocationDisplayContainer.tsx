import useFetchLocationData from "../../../utils/customHooks/useFetchLocationData";
import RecentLocationDisplay from "./RecentLocationDisplay";
import Skeleton from "./RecentLocationDisplaySkeleton";
import ErrorComponent from "./RecentLocationDisplayError";

type RecentLocationDisplayContainerPropsType = {
  location: string;
  name: string;
};

function RecentLocationDisplayContainer({
  location,
  name,
}: RecentLocationDisplayContainerPropsType) {
  const { isLoading, error, data } = useFetchLocationData(location);

  if (isLoading) {
    return <Skeleton />;
  }

  if (!!error) {
    return <ErrorComponent />;
  }

  return <RecentLocationDisplay data={data} name={name} location={location} />;
}

export default RecentLocationDisplayContainer;
