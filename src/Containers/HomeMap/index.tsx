import { CSSProperties, useEffect, useRef } from "react";

import { useGlobalState } from "../../context";

import { HomeSectionContainer } from "../../SharedComponentsAux";

// https://happycoding.io/tutorials/javascript/libraries/simple-weather-map
// https://embed.plnkr.co/ZuQneJ/

const tempStyles: CSSProperties = {
  width: "100%",
  height: "500px",
};

//
//
//
const getDateString = (date: Date) => {
  let year = date.getUTCFullYear();
  let month: number | string = date.getUTCMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  let day: number | string = date.getUTCDate();
  if (day < 10) {
    day = "0" + day;
  }
  let hour: number | string = date.getUTCHours();
  if (hour < 10) {
    hour = "0" + hour;
  }
  let minute: number | string = date.getUTCMinutes();
  minute = minute - (minute % 5);
  if (minute < 10) {
    minute = "0" + minute;
  }
  return (
    year.toString() +
    month.toString() +
    day.toString() +
    hour.toString() +
    minute.toString()
  );
};

/*
 *
 *
 *
 *
 *
 *
 *
 *
 */
function HomeMap() {
  // let map: google.maps.Map;

  const mapRef = useRef<google.maps.Map | null>(null);
  const mapDivRef = useRef(null);

  const { googleMaps } = useGlobalState();

  useEffect(() => {
    const refreshWeatherLayer = () => {
      if (mapRef.current !== null) {
        mapRef.current.overlayMapTypes.clear();
        addWeatherFrame(0, getDateString(new Date()), 1);
      }
    };

    if (googleMaps !== null && mapDivRef.current !== null) {
      mapRef.current = new googleMaps.Map(mapDivRef.current, {
        center: { lat: 39.7, lng: -96.2 },
        zoom: 5,
      });
      refreshWeatherLayer();
      var now = new Date().getTime();
      var msSinceLastFive = now % (5 * 60 * 1000);
      var msUntilNextFive = 5 * 60 * 1000 - msSinceLastFive;
      setTimeout(function () {
        refreshWeatherLayer();
        // refresh in 5 minutes
        setInterval(refreshWeatherLayer, 5 * 60 * 1000);
      }, msUntilNextFive + 10 * 100);
    }
  }, [googleMaps]);

  //
  //
  //
  const addWeatherFrame = (
    index: number,
    frameWeatherDate: string,
    frameOpacity: number
  ) => {
    if (googleMaps !== null) {
      const frame = new googleMaps.ImageMapType({
        getTileUrl: function (coord, zoom) {
          return (
            "http://mesonet.agron.iastate.edu/cache/tile.py/1.0.0/ridge::USCOMP-N0Q-" +
            frameWeatherDate +
            "/" +
            zoom +
            "/" +
            coord.x +
            "/" +
            coord.y +
            ".png"
          );
        },
        tileSize: new googleMaps.Size(256, 256),
        opacity: frameOpacity,
      });
      if (mapRef.current !== null) {
        mapRef.current.overlayMapTypes.setAt(index, frame);
      }
    }
  };

  return (
    <HomeSectionContainer>
      <div ref={mapDivRef} style={tempStyles}></div>
    </HomeSectionContainer>
  );
}

export default HomeMap;
