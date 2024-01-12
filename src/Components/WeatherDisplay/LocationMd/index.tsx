import Display from "./Display";
import Skeleton from "./Skeleton";
import Error from "./Error";
import { LocationMdDataType } from "./types";

type WeatherDisplayLgProps = {
  data: LocationMdDataType;
  error: string;
  isLoading: boolean;
};

function WeatherDisplayLg({ data, error, isLoading }: WeatherDisplayLgProps) {
  if (isLoading) {
    return <Skeleton />;
  }

  return error ? <Error /> : <Display data={data} />;
}

export default WeatherDisplayLg;
