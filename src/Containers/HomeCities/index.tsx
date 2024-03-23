import { HomeSectionContainer } from "../../SharedComponentsAux";
import { homeCitiesShort } from "../../utils/constants";
import CityDisplay from "./Components/CityDisplay";

function HomeCities() {
  //

  return (
    <HomeSectionContainer>
      <ul>
        {homeCitiesShort.map((location) => (
          <li key={location}>
            <CityDisplay location={location} />
          </li>
        ))}
      </ul>
    </HomeSectionContainer>
  );
}

export default HomeCities;
