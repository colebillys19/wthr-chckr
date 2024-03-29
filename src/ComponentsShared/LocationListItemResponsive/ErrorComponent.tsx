type ErrorComponentPropsType = {
  error: string;
};

function ErrorComponent({ error }: ErrorComponentPropsType) {
  //

  return (
    <>
      <div className="sm:hidden">
        <div className="flex justify-between items-center h-20 py-6 pr-6 text-error">
          <span className="line-clamp-2">{error}</span>
        </div>
      </div>
      <div className="hidden sm:block">
        <div className="flex justify-center items-center w-40 min-h-56 p-6 text-center text-error border border-t-grey-b border-r-grey-a border-b-grey-a border-l-grey-b">
          <span className="line-clamp-6">{error}</span>
        </div>
      </div>
    </>
  );
}

export default ErrorComponent;
