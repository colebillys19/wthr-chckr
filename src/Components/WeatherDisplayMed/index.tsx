import { useFetchLocationData } from "../../utils/customHooks/locationData";
import Display from "./Display";
import Skeleton from "./Skeleton";
import Error from "./Error";

type WeatherDisplayMedProps = {
  location: string;
};

function WeatherDisplayMed({ location }: WeatherDisplayMedProps) {
  const { data, error, isLoading } = useFetchLocationData(location);

  if (isLoading) {
    return <Skeleton />;
  }

  return error ? <Error /> : <Display data={data} />;
}

export default WeatherDisplayMed;
