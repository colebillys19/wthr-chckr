import { useContext, useEffect, useRef, useState } from "react";

import { GoogleMapsContext } from "../../contexts/googleMapsContext";
import { TimeTypeContext } from "../../contexts/timeTypeContext";
import { Spinner } from "../../ComponentsBase";
import TimeControls from "./TimeControls";
import { mapStyles } from "./constants";
import { FrameType } from "./types";

type WeatherMapPropsType = {
  location: string;
  zoom: number;
  useDeviceTime?: boolean;
};

function WeatherMap({
  location,
  zoom,
  useDeviceTime = false,
}: WeatherMapPropsType) {
  const [radarLayerTime, setRadarLayerTime] = useState(-1);
  const [timezoneOffsetSec, setTimezoneOffsetSec] = useState(0);
  const [timezoneName, setTimezoneName] = useState("");
  const [error, setError] = useState("");
  const [isIntervalPaused, setIsIntervalPaused] = useState(true);
  const [timezoneFetchFailed, setTimezoneFetchFailed] = useState(false);

  const mapRef = useRef<google.maps.Map | null>(null);
  const mapDivRef = useRef(null);
  const currentLayerIndexRef = useRef(-1);
  const timestampArrRef = useRef([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const { googleMaps } = useContext(GoogleMapsContext);
  const { timeType } = useContext(TimeTypeContext);

  useEffect(() => {
    if (googleMaps !== null && mapDivRef.current !== null) {
      const [lat, lng] = location.split(",");
      mapRef.current = new googleMaps.Map(mapDivRef.current, {
        center: { lat: Number(lat), lng: Number(lng) },
        zoom,
        styles: mapStyles,
      });
    }
  }, [location, zoom]);

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
  }, [location]);

  /*
   *
   */
  useEffect(() => {
    if (useDeviceTime) {
      return;
    }
    const nowSec = Math.round(Date.now() / 1000);
    fetch(
      `https://us-central1-total-fiber-419214.cloudfunctions.net/get-timezone?location=${location}&timestamp=${nowSec}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Issue fetching timezone data.");
        }
        return res.json();
      })
      .then((resData) => {
        if (!!resData.errorMessage) {
          setTimezoneFetchFailed(true);
        } else {
          setTimezoneOffsetSec(resData.rawOffset);
          setTimezoneName(resData.timeZoneName);
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        setTimezoneFetchFailed(true);
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
    setIsIntervalPaused(false);
  };

  /*
   *
   */
  const pause = () => {
    clearInterval(intervalRef.current as NodeJS.Timeout);
    intervalRef.current = null;
    setIsIntervalPaused(true);
  };

  /*
   *
   */
  const handlePlayPauseClick = () => {
    if (intervalRef.current === null) {
      iterateLayer();
      play();
    } else {
      pause();
    }
  };

  /*
   *
   */
  const handlePrevClick = () => {
    if (intervalRef.current !== null) {
      pause();
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
      pause();
    }
    iterateLayer();
  };

  if (!!error) {
    return <div className="text-error">{error}</div>;
  }

  const isLoading = currentLayerIndexRef.current === -1;

  return (
    <>
      <TimeControls
        radarLayerTime={radarLayerTime}
        timezoneOffsetSec={timezoneOffsetSec}
        timeType={timeType}
        useDeviceTime={useDeviceTime}
        timezoneName={timezoneName}
        handlePrevClick={handlePrevClick}
        handlePlayPauseClick={handlePlayPauseClick}
        handleNextClick={handleNextClick}
        isIntervalPaused={isIntervalPaused}
        timezoneFetchFailed={timezoneFetchFailed}
      />
      <div className="relative w-full max-w-3xl h-96 border border-grey-b">
        <div ref={mapDivRef} className="w-full h-full" />
        {isLoading && (
          <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full">
            <Spinner />
          </div>
        )}
      </div>
    </>
  );
}

export default WeatherMap;
