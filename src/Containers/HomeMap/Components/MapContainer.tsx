import { useEffect, useState } from "react";

import { WeatherMap } from "../../../SharedComponents";

function MapContainer() {
  const [zoomLevel, setZoomLevel] = useState(-1);

  useEffect(() => {
    if (window.innerWidth < 512) {
      setZoomLevel(3);
    } else if (window.innerWidth < 768) {
      setZoomLevel(3.5);
    } else {
      setZoomLevel(4);
    }
  }, []);

  if (zoomLevel === -1) {
    return null;
  }

  return (
    <WeatherMap location="39.09984,-94.57971" zoom={zoomLevel} useDeviceTime />
  );
}

export default MapContainer;
