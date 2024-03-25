import { useState } from "react";

import { LinkButton, InternalLinkText } from "../../BaseComponents";
import { LocationListItemResponsive } from "../../SharedComponents";
import { citiesData } from "../../utils/constants";

function HomeCities() {
  const [showNextFive, setShowNextFive] = useState(false);

  const citiesFirstFive = citiesData.slice(0, 5);
  const citiesNextFive = citiesData.slice(0, 5);

  return (
    <div className="px-6 py-8">
      <h2 className="mb-4 text-xl">Major Cities</h2>
      <ul className="flex flex-col flex-wrap gap-4 mb-4 sm:flex-row">
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
    </div>
  );
}

export default HomeCities;
