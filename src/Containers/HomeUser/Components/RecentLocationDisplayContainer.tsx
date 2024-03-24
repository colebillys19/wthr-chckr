import useFetchLocationData from "../../../utils/customHooks/useFetchLocationData";
import { Spinner } from "../../../SharedComponentsAux";
import RecentLocationDisplay from "./RecentLocationDisplay";
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
    return (
      <div className="flex">
        <Spinner />
      </div>
    );
  }

  if (!!error) {
    return <ErrorComponent />;
  }

  return <RecentLocationDisplay data={data} name={name} location={location} />;
}

export default RecentLocationDisplayContainer;
