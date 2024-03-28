import CityDisplayMobile from "./CityDisplayMobile";
import CityDisplayDesktop from "./CityDisplayDesktop";

function CityDisplayContainer() {
  //

  return (
    <>
      <div className="sm:hidden">
        <CityDisplayMobile />
      </div>
      <div className="hidden sm:block">
        <CityDisplayDesktop />
      </div>
    </>
  );
}

export default CityDisplayContainer;
