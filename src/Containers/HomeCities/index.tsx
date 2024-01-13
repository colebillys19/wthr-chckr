import { HomeSectionContainer } from "../../AuxComponents";
import City from "./Components/City";

function HomeCities() {
  //
  return (
    <HomeSectionContainer>
      <div>HomeCities</div>
      <City location="34.04127848077994,-118.24741869520864" />
      <City location="41.87826763372753,-87.62939343536833" />
      <City location="32.77812051838209,-96.79616206703409" />
    </HomeSectionContainer>
  );
}

export default HomeCities;
