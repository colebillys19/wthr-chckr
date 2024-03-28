import { useEffect } from "react";
// import { citiesData } from "../../utils/constants";
import CityDisplayContainer from "./Components/CityDisplayContainer";

function PageCities() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-8 px-6 pb-12">
      <h2 className="mb-6 text-xl">Cities</h2>
      {/* <ul>{citiesData.map(({ location, name }) => ())}</ul> */}
      <ul className="flex flex-col flex-wrap items-center gap-6 sm:flex-row">
        <li>
          <CityDisplayContainer />
        </li>
        <li>
          <CityDisplayContainer />
        </li>
        <li>
          <CityDisplayContainer />
        </li>
        <li>
          <CityDisplayContainer />
        </li>
        <li>
          <CityDisplayContainer />
        </li>
      </ul>
    </main>
  );
}

export default PageCities;
