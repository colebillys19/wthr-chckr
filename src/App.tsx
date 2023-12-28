import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header, PageHome, PageLocation } from './Containers';
import "./App.css";

function App() {
  //

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/location" element={<PageLocation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
