import { useFetchLocationData } from "../../utils/customHooks/locationData";
import { WeatherDisplayHome } from "../../Components";
import { HomeSectionContainer } from "../../AuxComponents";

function HomeCities() {
  const { data, error, isLoading } = useFetchLocationData('34.05551316016374,-118.243613');

  return (
    <HomeSectionContainer>
      <div>HomeCities</div>
      <div>LA</div>
      <WeatherDisplayHome data={data} error={error} isLoading={isLoading} />
    </HomeSectionContainer>
  );
}

export default HomeCities;
