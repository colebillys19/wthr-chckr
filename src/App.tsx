import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  Header,
  PageHome,
  PageLocationCurrent,
  PageLocationHourly,
  PageLocationDaily,
  PageNotFound,
} from "./Containers";
import { Modal } from "./SharedComponents";
import GlobalStateProvider from "./context";
import "./App.css";

function App() {
  //

  return (
    <Router>
      <GlobalStateProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="/location/current" element={<PageLocationCurrent />} />
            <Route path="/location/hourly" element={<PageLocationHourly />} />
            <Route path="/location/daily" element={<PageLocationDaily />} />
            <Route path='*' element={<PageNotFound />}/>
          </Routes>
          <Modal />
        </div>
      </GlobalStateProvider>
    </Router>
  );
}

export default App;
