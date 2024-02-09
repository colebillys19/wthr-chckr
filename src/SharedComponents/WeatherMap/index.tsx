import { CSSProperties, useEffect, useRef, useState } from "react";

import { useGlobalState } from "../../context";
import { mapStyles } from "./constants";
import { getMapTime } from "./helpers";
import { FrameType } from "./types";

const tempStyles: CSSProperties = {
  width: "60%",
  height: "500px",
};

type WeatherMapPropsType = {
  location: string;
  zoom: number;
  useDeviceTime?: boolean;
};

function WeatherMap({ location, zoom, useDeviceTime }: WeatherMapPropsType) {
  const [radarLayerTime, setRadarLayerTime] = useState(0);
  const [timezoneOffsetSec, setTimezoneOffsetSec] = useState(0);
  const [timezoneName, setTimezoneName] = useState("");
  const [error, setError] = useState("");

  const mapRef = useRef<google.maps.Map | null>(null);
  const mapDivRef = useRef(null);
  const currentLayerIndexRef = useRef(-1);
  const timestampArrRef = useRef([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const { googleMaps, timeType } = useGlobalState();

  useEffect(() => {
    if (googleMaps !== null && mapDivRef.current !== null) {
      const [lat, lng] = location.split(",");
      mapRef.current = new googleMaps.Map(mapDivRef.current, {
        center: { lat: Number(lat), lng: Number(lng) },
        zoom,
        styles: mapStyles,
      });
    }
  }, [googleMaps, location, zoom]);

  useEffect(() => {
    if (googleMaps === null || mapRef.current === null) {
      return;
    }
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
        timestampArrRef.current = framesArr.map(
          (frame: FrameType) => frame.time
        );
        if (googleMaps !== null) {
          mapRef.current?.overlayMapTypes.clear();
          framesArr.forEach((frame: FrameType, i: number) => {
            if (mapRef.current !== null) {
              const layer = new googleMaps.ImageMapType({
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
                opacity: i === past.length - 1 ? 0.7 : 0,
              });
              mapRef.current.overlayMapTypes.push(layer);
            }
          });
          currentLayerIndexRef.current = past.length - 1;
          setRadarLayerTime(
            timestampArrRef.current[currentLayerIndexRef.current]
          );
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  }, [googleMaps, location]);

  /*
   *
   */
  useEffect(() => {
    if (useDeviceTime) {
      return;
    }
    const nowSec = Math.round(Date.now() / 1000);
    fetch(
      `https://maps.googleapis.com/maps/api/timezone/json?location=${location}&timestamp=${nowSec}&key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Issue fetching timezone data.");
        }
        return res.json();
      })
      .then((resData) => {
        setTimezoneOffsetSec(resData.rawOffset);
        setTimezoneName(resData.timeZoneName);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  }, [location]);

  /*
   *
   */
  const updateLayerOpacities = (newLayerIndex: number) => {
    const imageMapOld = mapRef.current?.overlayMapTypes.getAt(
      currentLayerIndexRef.current
    ) as google.maps.ImageMapType;
    const imageMapNew = mapRef.current?.overlayMapTypes.getAt(
      newLayerIndex
    ) as google.maps.ImageMapType;
    imageMapOld.setOpacity(0);
    imageMapNew.setOpacity(0.7);
    currentLayerIndexRef.current = newLayerIndex;
    setRadarLayerTime(timestampArrRef.current[newLayerIndex]);
  };

  /*
   *
   */
  const iterateLayer = () => {
    const newLayerIndex =
      currentLayerIndexRef.current === timestampArrRef.current.length - 1
        ? 0
        : currentLayerIndexRef.current + 1;
    updateLayerOpacities(newLayerIndex);
  };

  /*
   *
   */
  const play = () => {
    intervalRef.current = setInterval(iterateLayer, 500);
  };

  /*
   *
   */
  const stop = () => {
    clearInterval(intervalRef.current as NodeJS.Timeout);
    intervalRef.current = null;
  };

  /*
   *
   */
  const handlePlayPauseClick = () => {
    if (intervalRef.current === null) {
      iterateLayer();
      play();
    } else {
      stop();
    }
  };

  /*
   *
   */
  const handlePrevClick = () => {
    if (intervalRef.current !== null) {
      stop();
    }
    const newLayerIndex =
      currentLayerIndexRef.current > 0
        ? currentLayerIndexRef.current - 1
        : timestampArrRef.current.length - 1;
    updateLayerOpacities(newLayerIndex);
  };

  /*
   *
   */
  const handleNextClick = () => {
    if (intervalRef.current !== null) {
      stop();
    }
    iterateLayer();
  };

  if (error) {
    return <div>{error}</div>;
  }

  const isLoading = currentLayerIndexRef.current === -1;

  return (
    <>
      {isLoading && <div>Loading...</div>}
      <div style={isLoading ? { display: "none" } : {}}>
        <div>
          <span>
            {getMapTime({
              radarLayerTime,
              timezoneOffsetSec,
              timeType,
              useDeviceTime,
            })}
          </span>
          {timezoneName && <span>{` (${timezoneName})`}</span>}
        </div>
        <div>
          <button onClick={handlePrevClick}>prev</button>
          <button onClick={handlePlayPauseClick}>play/stop</button>
          <button onClick={handleNextClick}>next</button>
        </div>
        <div ref={mapDivRef} style={tempStyles} />
      </div>
    </>
  );
}

export default WeatherMap;
