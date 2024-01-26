import { CSSProperties } from "react";

import { HomeSectionContainer } from "../../SharedComponentsAux";
import { homeCities } from "../../utils/constants";
import CityDisplay from "./Components/CityDisplay";

const tempStyles: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "16px",
};

function HomeCities() {
  //

  return (
    <HomeSectionContainer>
      <h3>major cities</h3>
      <div className="spacer" />
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
