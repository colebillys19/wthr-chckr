import { useGlobalState } from "../../context";
import { ModalContainer } from "../../SharedComponentsAux";
import SetLocationFlow from "../SetLocationFlow";

function ModalSetLocation() {
  const { setActiveModal } = useGlobalState();
  
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
