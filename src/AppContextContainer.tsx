import ActiveModalContextProvider from "./contexts/activeModalContext";
import GoogleMapsContextProvider from "./contexts/googleMapsContext";
import RecentLocationsContextProvider from "./contexts/recentLocationsContext";
import TimeTypeContextProvider from "./contexts/timeTypeContext";
import UnitTypeContextProvider from "./contexts/unitTypeContext";
import UserLocationContextProvider from "./contexts/userLocationContext";
import UserPrefersNoLocationContextProvider from "./contexts/userPrefersNoLocationContext";
import App from "./App";

function AppContextContainer() {
  //

  return (
    <ActiveModalContextProvider>
      <GoogleMapsContextProvider>
        <RecentLocationsContextProvider>
          <TimeTypeContextProvider>
            <UnitTypeContextProvider>
              <UserLocationContextProvider>
                <UserPrefersNoLocationContextProvider>
                  <App />
                </UserPrefersNoLocationContextProvider>
              </UserLocationContextProvider>
            </UnitTypeContextProvider>
          </TimeTypeContextProvider>
        </RecentLocationsContextProvider>
      </GoogleMapsContextProvider>
    </ActiveModalContextProvider>
  );
}

export default AppContextContainer;
