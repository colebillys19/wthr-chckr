import { useContext } from 'react';

import { ActiveModalContext } from "../../contexts/activeModalContext";
import { ModalContainer } from "../../SharedComponentsAux";
import SetLocationFlow from "../SetLocationFlow";

function ModalSetLocation() {
  const { setActiveModal } = useContext(ActiveModalContext);
  
  const handleClose = () => {
    setActiveModal('');
  };

  return (
    <ModalContainer>
      <button onClick={handleClose}>x</button>
      <div>
        <SetLocationFlow />
      </div>
    </ModalContainer>
  );
}

export default ModalSetLocation;
