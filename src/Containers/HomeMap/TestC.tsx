import { CSSProperties, useEffect, useRef, useState } from "react";

import { useGlobalState } from "../../context";
import { FrameType } from "./rvTypes";

const tempStyles: CSSProperties = {
  width: "100%",
  height: "500px",
};

function TestC() {
  const [mapFrames, setMapFrames] = useState<FrameType[]>([]);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(-1);
  const [error, setError] = useState("");

  const mapRef = useRef<google.maps.Map | null>(null);
  const mapDivRef = useRef(null);

  const { googleMaps } = useGlobalState();

  useEffect(() => {
    if (googleMaps !== null && mapDivRef.current !== null) {
      mapRef.current = new googleMaps.Map(mapDivRef.current, {
        center: { lat: 40.71407, lng: -74.00019 },
        zoom: 8,
      });
    }
  }, [googleMaps]);

  useEffect(() => {
    if (googleMaps !== null && mapRef.current !== null) {
      fetch("https://api.rainviewer.com/public/weather-maps.json")
        .then((res) => {
          if (!res.ok) {
            throw new Error("Issue fetching RainViewer data.");
          }
          return res.json();
        })
        .then((resData) => {
          const { host, radar } = resData;
          const { past, nowcast } = radar;
          const framesArray = nowcast ? past.concat(nowcast) : past;
          setMapFrames(framesArray);
          setCurrentFrameIndex(past.length - 1);
          //
          //
          //
          const currentFrame = framesArray[past.length - 1];
          if (googleMaps !== null) {
            const layerrr = new googleMaps.ImageMapType({
              getTileUrl: function (coord, zoom) {
                return [
                  host + currentFrame.path,
                  256,
                  zoom,
                  coord.x,
                  coord.y,
                  8,
                  "1_1.png",
                ].join("/");
              },
              tileSize: new googleMaps.Size(256, 256),
              opacity: 0.001,
            });
            if (mapRef.current !== null) {
              console.log(layerrr);
              //
              //
              //
              // why isn't this working?
              mapRef.current.overlayMapTypes.push(layerrr);
            }
          }
        })
        .catch((error) => {
          console.error(error);
          setError(error.message);
        });
    }
  }, [googleMaps]);

  if (error) {
    return <div>{error}</div>;
  }

  const isLoading = !mapFrames.length || currentFrameIndex === -1;

  return (
    <>
      {isLoading && <div>Loading...</div>}
      <div ref={mapDivRef} style={tempStyles} />
    </>
  );
}

export default TestC;
