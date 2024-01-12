import { OpenWeatherMapDataType } from "../../utils/types/openWeatherMap";

type DisplayProps = {
  data: OpenWeatherMapDataType;
};

function Display({ data }: DisplayProps) {
  console.log(data);

  return <div>med</div>;
}

export default Display;
