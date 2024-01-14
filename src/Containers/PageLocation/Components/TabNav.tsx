import { CSSProperties, MouseEvent } from "react";

const tempStyles: CSSProperties = {
  columnGap: "10px",
  display: "flex",
};

type TabNavPropsType = {
  setActiveTab: (value: string) => void;
  activeTab: string;
};

function TabNav({ activeTab, setActiveTab }: TabNavPropsType) {
  const handleLinkClick = (e: MouseEvent) => {
    e.preventDefault();
    const idClicked = e.currentTarget.id;
    if (idClicked !== activeTab) {
      setActiveTab(idClicked);
    }
  };

  return (
    <ul style={tempStyles}>
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
  );
}

export default TabNav;
