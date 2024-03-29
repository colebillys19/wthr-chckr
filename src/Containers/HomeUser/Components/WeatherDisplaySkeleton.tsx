import { Spinner } from "../../../ComponentsBase";

function WeatherDisplaySkeleton() {
  //

  return (
    <>
      <div className="h-96 mb-60 sm:hidden">
        <div className="flex">
          <Spinner />
        </div>
      </div>
      <div className="hidden h-96 mb-12 sm:block">
        <div className="flex">
          <Spinner />
        </div>
      </div>
    </>
  );
}

export default WeatherDisplaySkeleton;
