import { HeaderDataType } from "./types";

type DisplayProps = {
  data: HeaderDataType;
};

function Display({ data }: DisplayProps) {
  console.log(data);

  return <div>med</div>;
}

export default Display;
