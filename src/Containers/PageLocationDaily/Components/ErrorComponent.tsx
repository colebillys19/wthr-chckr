type ErrorComponentPropsType = {
  error: string;
};

function ErrorComponent({ error }: ErrorComponentPropsType) {
  //

  return <div className="px-6 py-8 text-error">{error}</div>;
}

export default ErrorComponent;
