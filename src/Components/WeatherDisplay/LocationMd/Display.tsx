import { LocationMdDataType } from "./types";

type DisplayPropsType = {
  data: LocationMdDataType;
};

function Display({ data }: DisplayPropsType) {
  console.log(data);

  return <div>md</div>;
}

export default Display;
