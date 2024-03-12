import GlobalStateProvider from "./context";
import App from "./App";

function AppContainer() {
  //

  return (
    <GlobalStateProvider>
      <App />
    </GlobalStateProvider>
  );
}

export default AppContainer;
