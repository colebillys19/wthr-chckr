import { Spinner } from "../../../SharedComponentsAux";

function Skeleton() {
  //

  return (
    <>
      <div className="sm:hidden">
        <div className="flex justify-center items-center h-64">
          <Spinner />
        </div>
        <hr className="w-44 mt-8 border-grey-b" />
      </div>
      <div className="hidden sm:block">
        <div className="flex justify-center items-center w-60 h-80 border border-t-grey-b border-r-grey-a border-b-grey-a border-l-grey-b">
          <Spinner />
        </div>
      </div>
    </>
  );
}

export default Skeleton;
