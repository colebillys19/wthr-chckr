import { HomeSectionContainer } from "../../AuxComponents";
import CityDisplay from "./Components/CityDisplay";

function HomeCities() {
  //
  return (
    <HomeSectionContainer>
      <div>HomeCities</div>
      <CityDisplay location="34.04127848077994,-118.24741869520864" />
      <CityDisplay location="41.87826763372753,-87.62939343536833" />
      <CityDisplay location="32.77812051838209,-96.79616206703409" />
    </HomeSectionContainer>
  );
}

export default HomeCities;
