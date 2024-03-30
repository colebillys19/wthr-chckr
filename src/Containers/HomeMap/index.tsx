import { ShadowDiv } from "../../ComponentsBase";
import MapContainer from "./Components/MapContainer";

function HomeMap() {
  //

  return (
    <div className="relative pt-8 px-6 pb-12">
      <h2 className="mb-6 text-xl font-bold">Live Map</h2>
      <MapContainer />
      <ShadowDiv />
    </div>
  );
}

export default HomeMap;
