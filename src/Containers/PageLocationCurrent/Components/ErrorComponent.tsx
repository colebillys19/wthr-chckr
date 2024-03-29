import { ShadowDiv } from "../../../ComponentsBase";

type ErrorComponentPropsType = {
  error: string;
};

function ErrorComponent({ error }: ErrorComponentPropsType) {
  //

  return (
    <div className="relative px-6 pb-8">
      <span className="text-error">{error}</span>
      <ShadowDiv />
    </div>
  );
}

export default ErrorComponent;
