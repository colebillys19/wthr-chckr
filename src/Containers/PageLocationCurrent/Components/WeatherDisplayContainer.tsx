import { CurrentType } from "../../../utils/types/openWeatherMap";
import WeatherDisplay from "./WeatherDisplay";

type WeatherDisplayContainerPropsType = {
  data: CurrentType;
  timezoneOffset: number;
};

function WeatherDisplayContainer({
  data,
  timezoneOffset,
}: WeatherDisplayContainerPropsType) {
  //

  return <WeatherDisplay data={data} timezoneOffset={timezoneOffset} />;
}

export default WeatherDisplayContainer;
