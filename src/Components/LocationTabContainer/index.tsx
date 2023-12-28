import { ReactNode } from "react";

const tempStyles = {
  minHeight: "200px",
  outline: "3px solid purple",
  margin: "20px",
  padding: "10px",
};

type LocationTabContainerProps = {
  children: ReactNode;
};

function LocationTabContainer({ children }: LocationTabContainerProps) {
  //

  return <div style={tempStyles}>{children}</div>;
}

export default LocationTabContainer;
