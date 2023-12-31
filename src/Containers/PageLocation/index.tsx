import { CSSProperties, MouseEvent, useState } from "react";

import LocationCurrent from "../LocationCurrent";
import LocationDaily from "../LocationDaily";
import LocationHourly from "../LocationHourly";

const tempStylesA: CSSProperties = {
  columnGap: "10px",
  display: "flex",
};

function PageLocation() {
  const [activeTab, setActiveTab] = useState("current");

  const handleLinkClick = (e: MouseEvent) => {
    e.preventDefault();
    const idClicked = e.currentTarget.id;
    if (idClicked !== activeTab) {
      setActiveTab(idClicked);
    }
  };

  return (
    <>
      <main>
        <div>
          <ul style={tempStylesA}>
            <li>
              <a onClick={handleLinkClick} href="#" id="current">
                Current
              </a>
            </li>
            <li>
              <a onClick={handleLinkClick} href="#" id="hourly">
                Hourly
              </a>
            </li>
            <li>
              <a onClick={handleLinkClick} href="#" id="daily">
                Daily
              </a>
            </li>
          </ul>
        </div>
        {activeTab === "current" && <LocationCurrent />}
        {activeTab === "hourly" && <LocationHourly />}
        {activeTab === "daily" && <LocationDaily />}
      </main>
    </>
  );
}

export default PageLocation;
