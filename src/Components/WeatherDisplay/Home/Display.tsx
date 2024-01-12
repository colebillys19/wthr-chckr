import { HomeDataType } from "./types";

type DisplayProps = {
  data: HomeDataType;
};

function Display({ data }: DisplayProps) {
  console.log(data);

  return <div>med</div>;
}

export default Display;
