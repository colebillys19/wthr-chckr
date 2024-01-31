import { CSSProperties, useEffect, useRef, useState } from "react";

import { useGlobalState } from "../../context";
import { FrameType } from "./rvTypes";

const tempStyles: CSSProperties = {
  width: "60%",
  height: "500px",
};

function TestC() {
  const [currentLayerIndex, setCurrentLayerIndex] = useState(-1);
  const [layersCount, setLayersCount] = useState(-1);
  const [error, setError] = useState("");

  const mapRef = useRef<google.maps.Map | null>(null);
  const mapDivRef = useRef(null);

  const { googleMaps } = useGlobalState();

  useEffect(() => {
    if (googleMaps !== null && mapDivRef.current !== null) {
      mapRef.current = new googleMaps.Map(mapDivRef.current, {
        center: { lat: 40.71407, lng: -74.00019 },
        zoom: 5,
      });
    }
  }, [googleMaps]);

  useEffect(() => {
    if (googleMaps === null || mapRef.current === null) {
      return;
    }

    //
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
        const framesArr = nowcast ? past.concat(nowcast) : past;
        if (googleMaps !== null) {
          framesArr.forEach((frame: FrameType, i: number) => {
            if (mapRef.current !== null) {
              const yooo = new googleMaps.ImageMapType({
                getTileUrl: function (coord, zoom) {
                  return [
                    host + frame.path,
                    512,
                    zoom,
                    coord.x,
                    coord.y,
                    8,
                    "1_1.png",
                  ].join("/");
                },
                tileSize: new googleMaps.Size(256, 256),
                opacity: i === past.length - 1 ? 1 : 0,
              });
              mapRef.current.overlayMapTypes.push(yooo);
            }
          });
          setLayersCount(framesArr.length);
          setCurrentLayerIndex(past.length - 1);
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  }, [googleMaps]);

  /*
   *
   */
  // const handlePlayPauseClick = () => {};

  /*
   *
   */
  const handlePrevClick = () => {
    if (mapRef.current !== null) {
      const newLayerIndex =
        currentLayerIndex > 0 ? currentLayerIndex - 1 : layersCount - 1;
      const imageMapOld = mapRef.current.overlayMapTypes.getAt(
        currentLayerIndex
      ) as google.maps.ImageMapType;
      const imageMapNew = mapRef.current.overlayMapTypes.getAt(
        newLayerIndex
      ) as google.maps.ImageMapType;
      imageMapOld.setOpacity(0);
      imageMapNew.setOpacity(1);
      setCurrentLayerIndex(newLayerIndex);
    }
  };

  /*
   *
   */
  const handleNextClick = () => {
    if (mapRef.current !== null) {
      const newLayerIndex =
        currentLayerIndex === layersCount - 1 ? 0 : currentLayerIndex + 1;
      const imageMapOld = mapRef.current.overlayMapTypes.getAt(
        currentLayerIndex
      ) as google.maps.ImageMapType;
      const imageMapNew = mapRef.current.overlayMapTypes.getAt(
        newLayerIndex
      ) as google.maps.ImageMapType;
      imageMapOld.setOpacity(0);
      imageMapNew.setOpacity(1);
      setCurrentLayerIndex(newLayerIndex);
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  const isLoading = currentLayerIndex === -1 || layersCount === -1;

  return (
    <>
      {isLoading && <div>Loading...</div>}
      <div>
        <button onClick={handlePrevClick}>prev</button>
        <button onClick={handleNextClick}>next</button>
      </div>
      <div ref={mapDivRef} style={tempStyles} />
    </>
  );
}

export default TestC;
