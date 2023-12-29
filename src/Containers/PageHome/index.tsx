import { FC, useEffect } from 'react';

import HomeCities from "../HomeCities";
import HomeLocation from "../HomeLocation";
import HomeMap from "../HomeMap";
import HomeNews from "../HomeNews";

type PageHomeProps = {
  googleMapsApi: typeof google.maps | null;
}

const PageHome: FC<PageHomeProps> = ({ googleMapsApi }) => {
  useEffect(() => {
    console.log(googleMapsApi);
  }, [googleMapsApi]);

  return (
    <div>
      <HomeLocation />
      <HomeMap />
      <HomeCities />
      <HomeNews />
    </div>
  );
}

export default PageHome;
