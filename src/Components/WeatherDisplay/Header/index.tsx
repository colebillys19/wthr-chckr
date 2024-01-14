import Display from "./Display";
import Skeleton from "./Skeleton";
import Error from "./Error";
import { HeaderDataType } from "./types";

type WeatherDisplayHeaderPropsType = {
  data: HeaderDataType;
  error: string;
  isLoading: boolean;
};

function WeatherDisplayHeader({ data, error, isLoading }: WeatherDisplayHeaderPropsType) {
  if (isLoading) {
    return <Skeleton />;
  }

  return error ? <Error /> : <Display data={data} />;
}

export default WeatherDisplayHeader;
