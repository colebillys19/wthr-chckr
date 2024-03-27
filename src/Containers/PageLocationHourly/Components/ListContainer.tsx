import { HourlyType } from "../../../utils/types/openWeatherMap";
import WeatherDisplayContainer from "../Components/WeatherDisplayContainer";

type ListContainerPropsType = {
  data: HourlyType[];
  timezoneOffset: number;
  sunrise: number;
  sunset: number;
};

function ListContainer({
  data,
  timezoneOffset,
  sunrise,
  sunset,
}: ListContainerPropsType) {
  const dataToUse = data.slice(1, 13);

  return (
    <ul className="flex flex-col items-center gap-8 mt-8 sm:items-start">
      {dataToUse.map((hourlyData, i) => {
        const { dt } = hourlyData;
        return (
          <li key={dt}>
            <WeatherDisplayContainer
              data={hourlyData}
              timezoneOffset={timezoneOffset}
              sunrise={sunrise}
              sunset={sunset}
              showDivider={i !== dataToUse.length - 1}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ListContainer;
