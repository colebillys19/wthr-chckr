import { useContext, useEffect, useMemo } from "react";

import { ActiveModalContext } from "../../../contexts/activeModalContext";
import { UserLocationContext } from "../../../contexts/userLocationContext";
import { UserPrefersNoLocationContext } from "../../../contexts/userPrefersNoLocationContext";
import CloseIcon from "../../../svg/iconSvgs/Components/Close";
import { LinkButton } from "../../../BaseComponents";
import SelectTime from "./SelectTime";
import SelectUnits from "./SelectUnits";

type MenuDesktopPropsType = { isHomePage: boolean };

function MenuDesktop({ isHomePage }: MenuDesktopPropsType) {
  const { setActiveModal } = useContext(ActiveModalContext);
  const { userLocation } = useContext(UserLocationContext);
  const { userPrefersNoLocation } = useContext(UserPrefersNoLocationContext);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveModal("");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const showSetLocationButton = useMemo(() => {
    if (userPrefersNoLocation) {
      return true;
    } else {
      if (!isHomePage && !userLocation) {
        return true;
      }
    }
    return false;
  }, [userLocation, userPrefersNoLocation, isHomePage]);

  /*
   *
   */
  const handleCloseClick = () => {
    setActiveModal("");
  };

  /*
   *
   */
  const handleSetLocation = () => {
    setActiveModal("setLocation");
  };

  return (
    <div className="absolute top-0 right-0 w-72 pt-4 pr-6 pb-12 bg-white border-b border-l z-30">
      <div className="flex flex-col items-end gap-6">
        <div className="flex h-6 items-center">
          <button onClick={handleCloseClick}>
            <CloseIcon />
          </button>
        </div>
        <SelectTime handleCloseMenu={() => setActiveModal("")} />
        <SelectUnits handleCloseMenu={() => setActiveModal("")} />
        {showSetLocationButton && (
          <LinkButton handleClick={handleSetLocation} text="Set my location" />
        )}
      </div>
    </div>
  );
}

export default MenuDesktop;
