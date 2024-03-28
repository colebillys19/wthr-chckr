type ErrorComponentPropsType = {
  error: string;
};

function Skeleton({ error }: ErrorComponentPropsType) {
  //

  return (
    <>
      <div className="flex flex-col items-center sm:hidden">
        <div className="flex justify-center items-center h-64">
          <span className="text-error">{error}</span>
        </div>
        <hr className="w-44 mt-8 border-grey-b" />
      </div>
      <div className="hidden sm:block">
        <div className="flex justify-center items-center w-60 h-80 px-10 border border-t-grey-b border-r-grey-a border-b-grey-a border-l-grey-b">
          <span className="text-error text-center">{error}</span>
        </div>
      </div>
    </>
  );
}

export default Skeleton;
