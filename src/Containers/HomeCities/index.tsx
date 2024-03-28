import { useState } from "react";

import { LinkButton, InternalLinkText } from "../../ComponentsBase";
import { LocationListItemResponsive } from "../../ComponentsShared";
import { ShadowDiv } from "../../ComponentsBase";
import { citiesData } from "../../utils/constants";

function HomeCities() {
  const [showNextFive, setShowNextFive] = useState(false);

  const citiesFirstFive = citiesData.slice(0, 5);
  const citiesNextFive = citiesData.slice(5, 10);

  return (
    <div className="relative pt-8 px-6 pb-12">
      <h2 className="mb-6 text-xl">Cities</h2>
      <ul className="flex flex-col flex-wrap gap-4 mb-6 sm:flex-row">
        {citiesFirstFive.map(({ location, name }) => (
          <li key={location}>
            <LocationListItemResponsive location={location} name={name} />
          </li>
        ))}
        {showNextFive &&
          citiesNextFive.map(({ location, name }) => (
            <li key={location}>
              <LocationListItemResponsive location={location} name={name} />
            </li>
          ))}
      </ul>
      {!showNextFive && (
        <LinkButton
          handleClick={() => setShowNextFive(true)}
          text="Show more"
        />
      )}
      {showNextFive && (
        <InternalLinkText href="/cities">Go to cities page</InternalLinkText>
      )}
      <ShadowDiv />
    </div>
  );
}

export default HomeCities;
