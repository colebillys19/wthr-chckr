import Display from "./Display";
import Skeleton from "./Skeleton";
import Error from "./Error";
import { LocationSmDataType } from "./types";

type WeatherDisplaySmPropsType = {
  data: LocationSmDataType;
  error: string;
  isLoading: boolean;
};

function WeatherDisplaySm({ data, error, isLoading }: WeatherDisplaySmPropsType) {
  if (isLoading) {
    return <Skeleton />;
  }

  return error ? <Error /> : <Display data={data} />;
}

export default WeatherDisplaySm;
