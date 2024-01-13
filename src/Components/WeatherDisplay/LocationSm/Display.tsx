import { LocationSmDataType } from "./types";

type DisplayProps = {
  data: LocationSmDataType;
};

function Display({ data }: DisplayProps) {
  console.log(data);

  return <div>sm</div>;
}

export default Display;
