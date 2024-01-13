import { LocationLgDataType } from "./types";

type DisplayProps = {
  data: LocationLgDataType;
};

function Display({ data }: DisplayProps) {
  console.log(data);

  return <div>lg</div>;
}

export default Display;
