import { Spinner } from "../../../ComponentsBase";

function Skeleton() {
  //

  return (
    <div className="px-6 h-screen">
      <div className="flex justify-center sm:justify-start">
        <Spinner />
      </div>
    </div>
  );
}

export default Skeleton;
