import { CSSProperties } from "react";

import { useGlobalState } from "../../context";
import { ModalContainer } from "../../AuxComponents";
import SetLocationFlow from "../SetLocationFlow";

const tempStyles: CSSProperties = {
  position: 'absolute',
  right: 0,
  top: 0,
};

function ModalSetLocation() {
  const { setActiveModal } = useGlobalState();
  
  const handleClose = () => {
    setActiveModal('');
  };

  return (
    <ModalContainer>
      <button onClick={handleClose} style={tempStyles}>x</button>
      <div>
        <SetLocationFlow />
      </div>
    </ModalContainer>
  );
}

export default ModalSetLocation;
