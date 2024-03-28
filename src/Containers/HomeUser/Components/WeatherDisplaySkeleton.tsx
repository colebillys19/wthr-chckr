import { Spinner } from "../../../ComponentsBase";

function WeatherDisplaySkeleton() {
  //

  return (
    <div className="h-80 mb-6">
      <div className="flex">
        <Spinner />
      </div>
    </div>
  );
}

export default WeatherDisplaySkeleton;
