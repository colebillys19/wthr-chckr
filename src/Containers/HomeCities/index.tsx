import { CSSProperties } from "react";

import { HomeSectionContainer } from "../../SharedComponentsAux";
import { homeCities } from "../../utils/constants";
import CityDisplay from "./Components/CityDisplay";

const tempStyles: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
};

function HomeCities() {
  //

  return (
    <HomeSectionContainer>
      <ul style={tempStyles}>
        {homeCities.map((location) => (
          <li key={location}>
            <CityDisplay location={location} />
          </li>
        ))}
      </ul>
    </HomeSectionContainer>
  );
}

export default HomeCities;
