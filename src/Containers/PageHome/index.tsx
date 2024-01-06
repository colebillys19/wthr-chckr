import { useEffect } from "react";

import HomeCities from "../HomeCities";
import HomeUser from "../HomeUser";
import HomeMap from "../HomeMap";
import HomeNews from "../HomeNews";

type PageHomeProps = {
  googleMapsApi: typeof google.maps | null;
};

function PageHome({ googleMapsApi }: PageHomeProps) {
  useEffect(() => {
    if (googleMapsApi) {
      console.log(googleMapsApi);
    }
  }, [googleMapsApi]);

  return (
    <div>
      <HomeUser />
      <HomeMap />
      <HomeCities />
      <HomeNews />
    </div>
  );
}

export default PageHome;
