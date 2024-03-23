import "./App.css";
import AppContextContainer from "./AppContextContainer";

function App() {
  //

  return (
    <div className="App">
      <div className="flex justify-center h-screen text-text tracking-wide bg-grey-b">
        <div className="relative grow max-w-screen-lg bg-white">
          <AppContextContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
