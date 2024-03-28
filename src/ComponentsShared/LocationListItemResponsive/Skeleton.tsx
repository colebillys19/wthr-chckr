import { Spinner } from "../../ComponentsBase";

function Skeleton() {
  //

  return (
    <>
      <div className="sm:hidden">
        <div className="flex justify-between items-center min-h-20">
          <Spinner />
        </div>
      </div>
      <div className="hidden sm:block">
        <div className="flex justify-center items-center w-40 min-h-56 border border-t-grey-b border-r-grey-a border-b-grey-a border-l-grey-b">
          <Spinner />
        </div>
      </div>
    </>
  );
}

export default Skeleton;
