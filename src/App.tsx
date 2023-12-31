import { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header, PageHome, PageLocation } from "./Containers";
import { Modal } from "./Components";
import GlobalStateProvider, { useGlobalState } from "./context";
import { initializeGoogleApi } from "./utils/helpers";
import "./App.css";

function App() {
  const googleMapsRef = useRef<typeof google.maps | null>(null);

  useEffect(() => {
    initializeGoogleApi(googleMapsRef);
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
          <Modal />
        </div>
      </GlobalStateProvider>
    </Router>
  );
}

export default App;
