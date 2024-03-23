import { homeCitiesShort } from "../../utils/constants";
import CityDisplay from "./Components/CityDisplay";

function HomeCities() {
  //

  return (
    <ul>
      {homeCitiesShort.map((location) => (
        <li key={location}>
          <CityDisplay location={location} />
        </li>
      ))}
    </ul>
  );
}

export default HomeCities;
