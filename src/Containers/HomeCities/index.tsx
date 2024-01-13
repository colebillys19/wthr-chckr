import { useFetchLocationData } from "../../utils/customHooks/locationData";
import { WeatherDisplayHome } from "../../Components";
import { HomeSectionContainer } from "../../AuxComponents";

function HomeCities() {
  const { data, error, isLoading, name } = useFetchLocationData('34.05551316016374,-118.243613');

  return (
    <HomeSectionContainer>
      <div>HomeCities</div>
      <WeatherDisplayHome data={data} error={error} isLoading={isLoading} name={name} />
    </HomeSectionContainer>
  );
}

export default HomeCities;
