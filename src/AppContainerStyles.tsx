import AppContainerMaps from "./AppContainerMaps";
import Modal from "./Modal";

function AppContainerStyles() {
  //

  return (
    <div className="text-text tracking-wide bg-grey-b min-h-screen">
      <div className="relative mx-auto my-0 max-w-screen-lg min-h-screen bg-white">
        <AppContainerMaps />
      </div>
      <Modal />
    </div>
  );
}

export default AppContainerStyles;
