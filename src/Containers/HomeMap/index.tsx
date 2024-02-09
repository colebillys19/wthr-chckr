import { WeatherMap } from "../../SharedComponents";
import { HomeSectionContainer } from "../../SharedComponentsAux";

function HomeMap() {
  //

  return (
    <HomeSectionContainer>
      <WeatherMap location="39.09984,-94.57971" zoom={4} useDeviceTime />
    </HomeSectionContainer>
  );
}

export default HomeMap;
