import { LocationSmDataType } from "./types";

type DisplayPropsType = {
  data: LocationSmDataType;
};

function Display({ data }: DisplayPropsType) {
  console.log(data);

  return <div>sm</div>;
}

export default Display;
