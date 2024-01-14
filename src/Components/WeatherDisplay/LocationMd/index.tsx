import Display from "./Display";
import Skeleton from "./Skeleton";
import Error from "./Error";
import { LocationMdDataType } from "./types";

type WeatherDisplayMdPropsType = {
  data: LocationMdDataType;
  error: string;
  isLoading: boolean;
};

function WeatherDisplayMd({ data, error, isLoading }: WeatherDisplayMdPropsType) {
  if (isLoading) {
    return <Skeleton />;
  }

  return error ? <Error /> : <Display data={data} />;
}

export default WeatherDisplayMd;
