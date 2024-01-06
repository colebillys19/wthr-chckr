import { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header, PageHome, PageLocation } from "./Containers";
import GlobalStateProvider, { useGlobalState } from "./context";
import { initializeGoogleApi } from "./utils/helpers";
import "./App.css";

function App() {
  const googleMapsRef = useRef<typeof google.maps | null>(null);

  const { setRecentLocations, setUserLocation } = useGlobalState();

  useEffect(() => {
    initializeGoogleApi(googleMapsRef);
  }, []);

  useEffect(() => {
    const storageUserLocation = localStorage.getItem("userLocation");

    if (storageUserLocation) {
      setUserLocation(storageUserLocation);
    }
  }, []);

  useEffect(() => {
    const storageRecentLocations = localStorage.getItem("recentLocations");

    if (storageRecentLocations) {
      setRecentLocations(JSON.parse(storageRecentLocations));
    }
  }, []);

  return (
    <Router>
      <GlobalStateProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route
              path="/"
              element={<PageHome googleMapsApi={googleMapsRef.current} />}
            />
            <Route path="/location" element={<PageLocation />} />
          </Routes>
        </div>
      </GlobalStateProvider>
    </Router>
  );
}

export default App;
