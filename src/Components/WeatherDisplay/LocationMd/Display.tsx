import { LocationMdDataType } from "./types";

type DisplayProps = {
  data: LocationMdDataType;
};

function Display({ data }: DisplayProps) {
  console.log(data);

  return <div>med</div>;
}

export default Display;
