import Display from "./Display";
import Skeleton from "./Skeleton";
import Error from "./Error";
import { OpenWeatherMapDataType } from "../../../utils/types/openWeatherMap";

type WeatherDisplayHomePropsType = {
  data: OpenWeatherMapDataType;
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
