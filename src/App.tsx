import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header, PageHome, PageLocation } from "./Containers";
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
            <Route path="/location" element={<PageLocation />} />
          </Routes>
          <Modal />
        </div>
      </GlobalStateProvider>
    </Router>
  );
}

export default App;
