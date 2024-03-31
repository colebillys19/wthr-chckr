import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  Header,
  PageHome,
  PageLocationCurrent,
  PageLocationHourly,
  PageLocationDaily,
  PageCities,
  PageNews,
  PageNotFound,
} from "../Containers";
import { Footer } from '../ComponentsBase';

function AppRouter() {
  //

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/location/current" element={<PageLocationCurrent />} />
        <Route path="/location/hourly" element={<PageLocationHourly />} />
        <Route path="/location/daily" element={<PageLocationDaily />} />
        <Route path="/cities" element={<PageCities />} />
        <Route path="/news" element={<PageNews />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRouter;
