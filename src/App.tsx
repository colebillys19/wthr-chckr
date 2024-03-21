import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import useSetContextFromLocalStorage from './utils/customHooks/useSetContextFromLocalStorage';
import { GoogleMapsContext } from './contexts/googleMapsContext';
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
    <Router>
      <div className="App text-text tracking-wide">
        <Header />
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/location/current" element={<PageLocationCurrent />} />
          <Route path="/location/hourly" element={<PageLocationHourly />} />
          <Route path="/location/daily" element={<PageLocationDaily />} />
          <Route path="/cities" element={<PageCities />} />
          <Route path="/news" element={<PageNews />} />
          <Route path="/test" element={<BaseUiTest />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Modal />
      </div>
    </Router>
  );
}

export default App;
