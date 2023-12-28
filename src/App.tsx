import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header, PageHome, PageLocation } from "./Containers";
import AppContextProvider from "./context";
import "./App.css";

function App() {
  //

  return (
    <Router>
      <AppContextProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="/location" element={<PageLocation />} />
          </Routes>
        </div>
      </AppContextProvider>
    </Router>
  );
}

export default App;
