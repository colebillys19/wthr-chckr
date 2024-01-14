import Display from "./Display";
import Skeleton from "./Skeleton";
import Error from "./Error";
import { HomeDataType } from "./types";

type WeatherDisplayHomePropsType = {
  data: HomeDataType;
  error: string;
  isLoading: boolean;
  nameData: { label: string; value: string }[];
};

function WeatherDisplayHome({ data, error, isLoading, nameData }: WeatherDisplayHomePropsType) {
  if (isLoading) {
    return <Skeleton />;
  }

  return error ? <Error /> : <Display data={data} nameData={nameData} />;
}

export default WeatherDisplayHome;
