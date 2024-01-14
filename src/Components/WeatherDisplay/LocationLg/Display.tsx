import { LocationLgDataType } from "./types";

type DisplayPropsType = {
  data: LocationLgDataType;
};

function Display({ data }: DisplayPropsType) {
  console.log(data);

  return <div>lg</div>;
}

export default Display;
