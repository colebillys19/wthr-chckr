import { useGlobalState } from "../../context";
import { WeatherMap } from "../../SharedComponents";
import { HomeSectionContainer } from "../../SharedComponentsAux";

function HomeMap() {
  const { userLocation } = useGlobalState();

  return (
    <HomeSectionContainer>
      <h3>HomeMap</h3>
      <div className="spacer" />
      <WeatherMap location={userLocation || "39.09984,-94.57971"} zoom={userLocation ? 8 : 4} />
    </HomeSectionContainer>
  );
}

export default HomeMap;
