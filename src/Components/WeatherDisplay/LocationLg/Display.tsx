import { LocationLgDataType } from "./types";

type DisplayProps = {
  data: LocationLgDataType;
};

function Display({ data }: DisplayProps) {
  console.log(data);

  return <div>med</div>;
}

export default Display;
