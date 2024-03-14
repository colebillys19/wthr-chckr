import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { GoogleMapsContext } from './contexts/googleMapsContext';
import {
  Header,
  PageHome,
  PageLocationCurrent,
  PageLocationHourly,
  PageLocationDaily,
  PageNotFound,
} from "./Containers";
import { Modal } from "./SharedComponents";
import "./App.css";

import BaseUiTest from "./Containers/BaseUiTest";

function App() {
  const { isGoogleMapsReady } = useContext(GoogleMapsContext);

  if (!isGoogleMapsReady) {
    return <div>loading google maps</div>;
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/location/current" element={<PageLocationCurrent />} />
          <Route path="/location/hourly" element={<PageLocationHourly />} />
          <Route path="/location/daily" element={<PageLocationDaily />} />
          <Route path="/test" element={<BaseUiTest />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Modal />
      </div>
    </Router>
  );
}

export default App;
