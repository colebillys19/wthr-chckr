import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import useSetContextFromLocalStorage from "./utils/customHooks/useSetContextFromLocalStorage";
import { GoogleMapsContext } from "./contexts/googleMapsContext";
import {
  Header,
  PageHome,
  PageLocationCurrent,
  PageLocationHourly,
  PageLocationDaily,
  PageCities,
  PageNews,
  PageNotFound,
} from "./Containers";
import { Modal } from "./SharedComponents";

//
import BaseUiTest from "./_baseUiTest";

function App() {
  useSetContextFromLocalStorage();

  const { isGoogleMapsReady } = useContext(GoogleMapsContext);

  if (!isGoogleMapsReady) {
    return <div>loading google maps</div>;
  }

  return (
    <div className="App">
      <div className="flex justify-center h-screen text-text tracking-wide bg-grey-b">
        <div className="relative grow max-w-screen-lg bg-white">
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<PageHome />} />
              <Route
                path="/location/current"
                element={<PageLocationCurrent />}
              />
              <Route path="/location/hourly" element={<PageLocationHourly />} />
              <Route path="/location/daily" element={<PageLocationDaily />} />
              <Route path="/cities" element={<PageCities />} />
              <Route path="/news" element={<PageNews />} />
              <Route path="/test" element={<BaseUiTest />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Modal />
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
