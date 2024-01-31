import { CSSProperties, useEffect, useRef, useState } from "react";

import { useGlobalState } from "../../context";
import { FrameType } from "./rvTypes";

const tempStylesA: CSSProperties = {
  outline: "1px solid black",
  padding: "16px",
};

const tempStylesB: CSSProperties = {
  width: "100%",
  height: "500px",
};

function TestB() {
  const [rvDataHost, setRvDataHost] = useState("");
  const [mapFrames, setMapFrames] = useState<FrameType[]>([]);
  const [radarLayers, setRadarLayers] = useState<any>({}); // fix this
  const [animationPosition, setAnimationPosition] = useState(0);
  const [timeStampStr, setTimeStampStr] = useState("");

  const mapRef = useRef<google.maps.Map | null>(null);
  const mapDivRef = useRef(null);
  const animationTimerRef = useRef<NodeJS.Timeout | null>(null);

  const { googleMaps } = useGlobalState();

  useEffect(() => {
    if (googleMaps !== null && mapDivRef.current !== null) {
      mapRef.current = new googleMaps.Map(mapDivRef.current, {
        center: { lat: 40.71407, lng: -74.00019 },
        zoom: 8,
      });
    }
  }, [googleMaps, mapDivRef.current]);

  useEffect(() => {
    fetch("https://api.rainviewer.com/public/weather-maps.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Issue fetching RainViewer data.");
        }
        return res.json();
      })
      .then((resData) => {
        if (resData.radar && resData.radar.past) {
          let framesArr = resData.radar.past;
          if (resData.radar.nowcast) {
            framesArr = framesArr.concat(resData.radar.nowcast);
          }
          setMapFrames(framesArr);
          // show the last "past" frame
          showFrame(resData.radar.past.length - 1);
        }
        setRvDataHost(resData.host);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [mapRef.current]);

  /*
   * check availability and show particular frame position from the timestamps list
   */
  const showFrame = (nextPosition: number) => {
    if (mapFrames.length > 0) {
      const preloadingDirection = nextPosition - animationPosition > 0 ? 1 : -1;
      changeRadarPosition(nextPosition);
      // preload next next frame to avoid lagging
      changeRadarPosition(nextPosition + preloadingDirection, true);
    }
  };

  /*
   * display particular frame of animation
   * if preloadOnly parameter is set to true, the frame layer only adds for tile preloading
   */
  const changeRadarPosition = (position: number, preloadOnly?: boolean) => {
    while (position >= mapFrames.length) {
      position -= mapFrames.length;
    }
    while (position < 0) {
      position += mapFrames.length;
    }
    let currentFrame = mapFrames[animationPosition];
    let nextFrame = mapFrames[position];
    addLayer(nextFrame);
    if (preloadOnly) {
      return;
    }
    setAnimationPosition(position);
    if (radarLayers[currentFrame.path]) {
      radarLayers[currentFrame.path].setOpacity(0);
    }
    radarLayers[nextFrame.path].setOpacity(100);
    setTimeStampStr(new Date(nextFrame.time * 1000).toString());
  };

  /*
   *
   */
  const addLayer = (frame: FrameType) => {
    if (
      googleMaps !== null &&
      mapRef.current !== null &&
      !radarLayers[frame.path] &&
      rvDataHost !== ""
    ) {
      // test this
      const optionTileSize = 256; // can be 256 or 512
      //
      const newLayer = new googleMaps.ImageMapType({
        getTileUrl: function (coord, zoom) {
          return [
            rvDataHost + frame.path,
            optionTileSize,
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
      //
      const newRadarLayers = radarLayers;
      newRadarLayers[frame.path] = newLayer;
      setRadarLayers(newRadarLayers);
      mapRef.current.overlayMapTypes.push(newLayer);
    }
  };

  /*
   *
   */
  const play = () => {
    showFrame(animationPosition + 1);
    // main animation driver - run this function every 500 ms
    animationTimerRef.current = setTimeout(play, 500);
  };

  /*
   * stop the animation
   * check if the animation timeout is set and clear it
   */
  const stop = () => {
    if (animationTimerRef.current !== null) {
      clearTimeout(animationTimerRef.current);
      animationTimerRef.current = null;
      return true;
    }
    return false;
  };

  /*
   *
   */
  const handleClickPlayStop = () => {
    if (!stop()) {
      play();
    }
  };

  /*
   *
   */
  const handleClickPrevFrame = () => {
    stop();
    showFrame(animationPosition - 1);
  };

  /*
   *
   */
  const handleClickNextFrame = () => {
    stop();
    showFrame(animationPosition + 1);
  };

  return (
    <div>
      <div style={tempStylesA}>
        <button onClick={handleClickPrevFrame}>prev</button>
        <button onClick={handleClickPlayStop}>play/stop</button>
        <button onClick={handleClickNextFrame}>next</button>
      </div>
      <div style={tempStylesA}>{timeStampStr || "no timestampStr"}</div>
      <div ref={mapDivRef} style={tempStylesB}></div>
    </div>
  );
}

export default TestB;
