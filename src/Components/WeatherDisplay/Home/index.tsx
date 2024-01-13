import Display from "./Display";
import Skeleton from "./Skeleton";
import Error from "./Error";
import { HomeDataType } from "./types";

type WeatherDisplayLgProps = {
  data: HomeDataType;
  error: string;
  isLoading: boolean;
  nameData: { label: string; value: string }[];
};

function WeatherDisplayLg({ data, error, isLoading, nameData }: WeatherDisplayLgProps) {
  if (isLoading) {
    return <Skeleton />;
  }

  return error ? <Error /> : <Display data={data} nameData={nameData} />;
}

export default WeatherDisplayLg;
