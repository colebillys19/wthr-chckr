import { useEffect } from "react";
import { citiesData } from "../../utils/constants";
import CityDisplayAsyncContainer from "./Components/CityDisplayAsyncContainer";

function PageCities() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-8 px-6 pb-36">
      <h2 className="mb-6 text-xl">Cities</h2>
      <ul className="flex flex-col flex-wrap items-center gap-6 sm:flex-row">
        {citiesData.map(({ location, name }) => (
          <li key={location}>
            <CityDisplayAsyncContainer location={location} name={name} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default PageCities;
