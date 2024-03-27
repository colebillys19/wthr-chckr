import { Spinner } from "../../../SharedComponentsAux";

function Skeleton() {
  //

  return (
    <div className="px-6 h-screen">
      <div className="flex">
        <Spinner />
      </div>
    </div>
  );
}

export default Skeleton;
