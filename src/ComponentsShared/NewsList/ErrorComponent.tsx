type ErrorComponentPropsType = {
  error: string;
};

function ErrorComponent({ error }: ErrorComponentPropsType) {
  //

  return <div className="text-error">{error}</div>;
}

export default ErrorComponent;
