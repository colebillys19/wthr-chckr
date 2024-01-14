import { HeaderDataType } from "./types";

type DisplayPropsType = {
  data: HeaderDataType;
};

function Display({ data }: DisplayPropsType) {
  console.log(data);

  return <div>header</div>;
}

export default Display;
