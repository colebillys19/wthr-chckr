import { OpenWeatherMapDataType } from "../../../utils/types/openWeatherMap";
import { Spinner } from "../../../SharedComponentsAux";
import WeatherDisplayContainer from "./WeatherDisplayContainer";
import ErrorComponent from "./WeatherDisplayError";

type WeatherDisplayAsyncContainerPropsType = {
  data: OpenWeatherMapDataType;
  error: string;
  isLoading: boolean;
  name: string;
  userLocation: string;
};

function WeatherDisplayAsyncContainer({
  data,
  error,
  isLoading,
  name,
  userLocation,
}: WeatherDisplayAsyncContainerPropsType) {
  if (isLoading) {
    return (
      <div className="flex">
        <Spinner />
      </div>
    );
  }

  if (!!error) {
    return <ErrorComponent />;
  }

  return (
    <WeatherDisplayContainer
      data={data}
      name={name}
      userLocation={userLocation}
    />
  );
}

export default WeatherDisplayAsyncContainer;
