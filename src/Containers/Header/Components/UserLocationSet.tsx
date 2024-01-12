import { CSSProperties } from 'react';

import { useGlobalState } from '../../../context';
import { useUpdateUserLocation } from '../../../utils/customHooks';

const tempStyles: CSSProperties = { display: 'flex' };

function UserLocationEnabledSet() {
  const { setActiveModal, userLocation } = useGlobalState();

  const updateUserLocation = useUpdateUserLocation();

  const handleChangeLocation = () => {
    updateUserLocation('');
    setActiveModal('setLocation');
  };

  return (
    <div style={tempStyles}>
      <div>{userLocation}</div>
      <button onClick={handleChangeLocation}>change location</button>
    </div>
  );
}

export default UserLocationEnabledSet;
